'use client';

import { useEffect, useRef } from 'react';

export default function BurstScribbleCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mainTrail: { x: number; y: number }[] = [];
  const bursts: {
    x: number;
    y: number;
    spikes: { x: number; y: number }[][];
    frame: number;
  }[] = [];

  const lastMouse = useRef({ x: 0, y: 0 });
  const frameCount = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const baseTrailLength = 12; // Smaller base trail
    const fastTrailLength = 3; // Even shorter when fast
    const fixedWidth = 1.0; // Thinner fixed width
    const numSpikes = 6; // Fewer spikes
    const spikeLength = 15; // Shorter spikes
    const burstLifetime = 40; // Quicker fade
    const maxBursts = 10; // Fewer active bursts
    const speedThreshold = 3; // Min speed to trigger "fast" mode

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const mouseMove = (e: MouseEvent) => {
      frameCount.current++;
      const dx = e.clientX - lastMouse.current.x;
      const dy = e.clientY - lastMouse.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const speed = dist; // Use dist as speed proxy (pixels per frame)

      // Main trail: shorten to fixed length when moving fast
      const currentTrailLength =
        speed > speedThreshold ? fastTrailLength : baseTrailLength;
      mainTrail.push({
        x: e.clientX + (Math.random() - 0.5) * 4, // Reduced wiggle
        y: e.clientY + (Math.random() - 0.5) * 4,
      });
      while (mainTrail.length > currentTrailLength) mainTrail.shift(); // Dynamic length

      // Spawn bursts periodically or on quick moves for explosive feel
      if (dist > 5 || frameCount.current % 8 === 0) {
        // Slightly more frequent for compactness
        const burst: {
          x: number;
          y: number;
          spikes: { x: number; y: number }[][];
          frame: number;
        } = {
          x: e.clientX,
          y: e.clientY,
          spikes: [],
          frame: frameCount.current,
        };

        // Generate radiating spikes with scribbly chaos
        for (let i = 0; i < numSpikes; i++) {
          const angle =
            (i / numSpikes) * Math.PI * 2 + (Math.random() - 0.5) * 0.5; // Less angle jitter
          const endX =
            burst.x + Math.cos(angle) * spikeLength + (Math.random() - 0.5) * 8; // Smaller end offset
          const endY =
            burst.y + Math.sin(angle) * spikeLength + (Math.random() - 0.5) * 8;

          // Scribbly spike: multi-point wiggly line (fewer segments)
          const spike: { x: number; y: number }[] = [];
          for (let j = 0; j < 3; j++) {
            // Reduced to 3 segments
            const t = j / 2; // 0 to 1
            const midX =
              burst.x + (endX - burst.x) * t + (Math.random() - 0.5) * 5; // Less mid wiggle
            const midY =
              burst.y + (endY - burst.y) * t + (Math.random() - 0.5) * 5;
            spike.push({ x: midX, y: midY });
          }
          burst.spikes.push(spike); // Push the full spike array
        }

        bursts.push(burst);
        if (bursts.length > maxBursts) bursts.shift();
      }

      lastMouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', mouseMove);

    const drawWigglyLine = (
      pts: { x: number; y: number }[],
      color: string,
      blur: number,
      width: number,
      alpha?: number,
      isFast?: boolean // Flag for fixed width mode
    ) => {
      if (pts.length < 2) return;
      ctx.strokeStyle = alpha ? `rgba(255, 255, 255, ${alpha})` : color;
      ctx.lineWidth = isFast ? fixedWidth : width; // Fixed width when fast
      ctx.shadowBlur = blur * 0.7; // Reduced blur overall
      ctx.shadowColor = color;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Reduce passes/jitter when fast for cleaner, shorter streaks
      const passes = isFast ? 1 : 2;
      for (let pass = 0; pass < passes; pass++) {
        ctx.beginPath();
        pts.forEach((p, i) => {
          const jitterX = isFast ? 0 : (Math.random() - 0.5) * 1.5; // Less jitter
          const jitterY = isFast ? 0 : (Math.random() - 0.5) * 1.5;
          if (i === 0) ctx.moveTo(p.x + jitterX, p.y + jitterY);
          else ctx.lineTo(p.x + jitterX, p.y + jitterY);
        });
        ctx.stroke();
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw main trail (pass speed flag for fast mode)
      const currentSpeed = Math.sqrt(
        Math.pow(
          lastMouse.current.x - (mainTrail[mainTrail.length - 2]?.x || 0),
          2
        ) +
          Math.pow(
            lastMouse.current.y - (mainTrail[mainTrail.length - 2]?.y || 0),
            2
          )
      ); // Rough speed estimate from last points
      const isFast = currentSpeed > speedThreshold;
      drawWigglyLine(mainTrail, '#ffffff', 6, 1.0, undefined, isFast); // Thinner base width, less blur

      // Draw bursts with fading alpha
      bursts.forEach((burst, burstIndex) => {
        const age = frameCount.current - burst.frame;
        const alpha = Math.max(0, 1 - age / burstLifetime);
        if (alpha <= 0) {
          bursts.splice(burstIndex, 1);
          return;
        }

        // Draw each spike in burst
        burst.spikes.forEach((spikePts) => {
          drawWigglyLine(spikePts, '#ffffff', 8, 0.4, alpha * 0.8); // Thinner spikes, less blur
        });

        // Smaller central dot for burst origin
        ctx.beginPath();
        ctx.arc(burst.x, burst.y, 1.0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.5})`;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    />
  );
}

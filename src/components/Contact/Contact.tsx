// 'use client';

// import { MadeByShapeButton } from '@/ui/Button';

// export default function ContactSection() {
//   return (
//     <section className="w-full bg-white border-t border-gray-200">
//       <div className="max-w-7xl mx-auto flex flex-row  px-6 lg:px-12 py-24 ">
//         {/* LEFT SIDE */}
//         <div className="md:col-span-4 space-y-10 w-1/2">
//           <h1 className="text-8xl font-normal leading-[1.1] font-cinzel">
//             Let’s get
//             <br />
//             in touch
//           </h1>

//           <p className="text-lg font-medium  font-cinzel max-w-xs">
//             Don’t be afraid to
//             <br />
//             say hello with us!
//           </p>

//           <div className="space-y-6 text-sm">
//             {/* Phone */}
//             <div>
//               <p className=" mb-1 text-lg font-cinzel font-medium">Phone</p>
//               <p className=" font-manrope text-base">9840802940</p>
//             </div>

//             {/* Email */}
//             <div>
//               <p className="mb-1 text-lg font-cinzel font-medium">Email</p>
//               <p className=" font-manrope text-base">iamram.tech@gmail.com</p>
//             </div>
//           </div>
//         </div>

//         <div className="md:col-span-5 w-1/2 flex flex-col gap-16 ">
//           <div className="relative md:col-span-3 flex flex-row gap-14">
//             <div className="relative hidden md:block">
//               {/* Line */}
//               <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-[2px] bg-black"></div>

//               {/* Arrow head (triangle) */}
//               <div
//                 className="absolute left-[158px] top-1/2 -translate-y-1/2
//                w-0 h-0
//                border-t-[6px] border-t-transparent
//                border-b-[6px] border-b-transparent
//                border-l-[10px] border-l-black"
//               />
//             </div>

//             <p className="text-gray-500 text-sm mt-20 md:mt-0 md:ml-32">
//               Great! We're excited to hear from you and
//               <br />
//               let’s start something special together.
//               <br />
//               call us for any inquery.
//             </p>
//           </div>
//           <div
//             className="
//             rounded-lg overflow-hidden
//             bg-gradient-to-b from-[#1a1a1a]  to-black
//             p-8 text-white
//           "
//           >
//             <h3 className="text-xl font-semibold mb-8">Contact</h3>

//             {/* FORM */}
//             <div className="grid grid-cols-2 gap-6 text-sm">
//               <div>
//                 <label className="block mb-1 text-gray-300">Name</label>
//                 <input
//                   type="text"
//                   className="w-full bg-transparent border-b border-gray-600 pb-1 focus:outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 text-gray-300">Email</label>
//                 <input
//                   type="email"
//                   className="w-full bg-transparent border-b border-gray-600 pb-1 focus:outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 text-gray-300">Phone</label>
//                 <input
//                   type="text"
//                   className="w-full bg-transparent border-b border-gray-600 pb-1 focus:outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 text-gray-300">Subject</label>
//                 <input
//                   type="text"
//                   className="w-full bg-transparent border-b border-gray-600 pb-1 focus:outline-none"
//                 />
//               </div>

//               <div className="col-span-2">
//                 <label className="block mb-1 text-gray-300">
//                   Tell us about your interested in
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full bg-transparent border-b border-gray-600 pb-1 focus:outline-none"
//                 />
//               </div>

//               <MadeByShapeButton href="/Contact" className=" cursor-pointer">
//                 Send to us
//               </MadeByShapeButton>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { MadeByShapeButton } from '@/ui/Button';

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Oops! Something went wrong.');
        }
      );
  };

  return (
    <section className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-6 lg:px-12 py-24">
        {/* LEFT SIDE */}
        <div className="md:col-span-4 space-y-6 md:space-y-10 w-full md:w-1/2">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-normal leading-[1.1] font-cinzel">
            Let’s get
            <br />
            in touch
          </h1>

          <p className="text-base sm:text-lg font-medium font-cinzel max-w-xs">
            Have a project in mind or
            <br />
            looking to collaborate?
          </p>

          <div className="space-y-4 sm:space-y-6 text-sm">
            {/* Phone */}
            <div>
              <p className="mb-1 text-lg font-cinzel font-medium">Phone</p>
              <a href="tel:9840802940" className="font-manrope text-base">
                9840802940
              </a>
            </div>

            {/* Email */}
            <div>
              <p className="mb-1 text-lg font-cinzel font-medium">Email</p>
              <a
                href="mailto:sthram132@gmail.com"
                className="font-manrope text-base"
              >
                sthram132@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-5 w-full md:w-1/2 flex flex-col gap-8 md:gap-16 mt-12 md:mt-0">
          <div className="relative md:col-span-3 flex flex-row gap-6 md:gap-14">
            <div className="relative hidden md:block">
              {/* Line */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 md:w-40 h-[2px] bg-black"></div>

              {/* Arrow head */}
              <div
                className="absolute left-[120px] md:left-[158px] top-1/2 -translate-y-1/2 
                  w-0 h-0 
                  border-t-[6px] border-t-transparent 
                  border-b-[6px] border-b-transparent 
                  border-l-[10px] border-l-black"
              />
            </div>

            <p className="text-gray-500 text-sm mt-4 md:mt-0 md:ml-0 lg:ml-32">
              I’m always open to discussing new ideas, <br /> freelance
              opportunities, or full-time roles.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-2xl p-6 sm:p-8 text-white">
            {/* <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8">
              Contact
            </h3> */}

            {/* FORM */}
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-sm">
                <div>
                  <label className="block mb-1 text-black">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="w-full bg-transparent border-b text-black border-gray-600 pb-1 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-1 text-black">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    className="w-full bg-transparent border-b border-gray-600 text-black pb-1 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-1 text-black">Phone</label>
                  <input
                    type="text"
                    name="user_phone"
                    className="w-full bg-transparent border-b text-black border-gray-600 pb-1 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-black">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full bg-transparent border-b text-black border-gray-600 pb-1 focus:outline-none"
                  />
                </div>

                <div className="col-span-1 sm:col-span-2">
                  <label className="block mb-1 text-black">
                    Tell me about your project?
                  </label>
                  <textarea
                    name="message"
                    className="w-full bg-transparent text-black border-b border-gray-600 pb-1 focus:outline-none"
                    rows={4}
                    required
                  />
                </div>

                <MadeByShapeButton
                  type="submit"
                  className="cursor-pointer col-span-1 sm:col-span-2"
                >
                  Send to us
                </MadeByShapeButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

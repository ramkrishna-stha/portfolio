// import DecryptedText from '../DecryptedText/DecryptedText';
// import {
//   SlSocialFacebook,
//   SlSocialInstagram,
//   SlSocialLinkedin,
// } from 'react-icons/sl';
// import NavbarMinimal from '../NavbarMinimal/NavbarMinimal';

// const Hero02 = () => {
//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* <NavbarMinimal /> */}
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="/hero06.png"
//           alt="Hero background"
//           className="h-full w-full object-cover"
//         />
//       </div>

//       {/* Content */}
//       <div className="absolute inset-0 z-10 flex items-center ">
//         <div className="mx-auto flex w-[90%] justify-between">
//           <div className="  md:w-[30%] flex flex-col justify-between ">
//             <h1 className=" text-xl md:text-3xl font-light text-black font-cinzel ">
//               <DecryptedText
//                 text="Software Engineer || Developer Based In Nepal"
//                 speed={50}
//                 maxIterations={15}
//                 sequential={true}
//                 animateOn="view" // Animate when in view
//                 className="font-bold text-black"
//                 encryptedClassName="text-gray-400"
//                 parentClassName="inline-block"
//                 revealDirection="center"
//               />
//             </h1>
//           </div>

//           <div className="w-full md:w-[30%] text-black pt-48 flex flex-col gap-3">
//             <p className=" font-manrope ">
//               Hi, I’m Ram — A Software Engineer Passionate About Creating
//               Seamless Digital Experiences That Connect And Convert.
//             </p>
//             <span className="hidden md:block font-cinzel text-2xl ">
//               <DecryptedText
//                 text=" Code. Debug. Dominate."
//                 speed={50}
//                 maxIterations={15}
//                 sequential={true}
//                 animateOn="view" // Animate when in view
//                 className="font-bold text-black"
//                 encryptedClassName="text-gray-400"
//                 parentClassName="inline-block"
//                 revealDirection="center"
//               />
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className=" absolute bottom-5 px-5 md:bottom-8  md:px-20">
//         <div className="flex flex-col gap-7">
//           <a
//             href="https://www.linkedin.com/in/ram004devlp/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="cursor-pointer z-20"
//           >
//             <SlSocialLinkedin size={30} />
//           </a>

//           <a
//             href="https://www.instagram.com/ram004devlp/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="cursor-pointer z-20"
//           >
//             <SlSocialInstagram size={30} />
//           </a>

//           <a
//             href="https://www.facebook.com/ramkrishna.shrestha.71697092"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="cursor-pointer z-20"
//           >
//             <SlSocialFacebook size={30} />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero02;

import DecryptedText from '../DecryptedText/DecryptedText';
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
} from 'react-icons/sl';
import NavbarMinimal from '../NavbarMinimal/NavbarMinimal';

const Hero02 = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero06.png"
          alt="Hero background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content Wrapper */}
      <div className="absolute inset-0 z-10 md:flex md:items-center">
        <div className="mx-auto w-[90%] md:flex md:justify-between">
          {/* First Content */}
          <div className="absolute top-10 left-5  md:static w-[60%] md:w-[30%] flex flex-col justify-between">
            <h1 className="text-lg md:text-3xl font-light text-black font-cinzel">
              <DecryptedText
                text="Software Engineer || Developer Based In Nepal"
                speed={50}
                maxIterations={15}
                sequential={true}
                animateOn="view"
                className="font-bold text-black"
                encryptedClassName="text-gray-400"
                parentClassName="inline-block"
                revealDirection="center"
              />
            </h1>
          </div>

          {/* Second Content */}
          <div className="absolute bottom-32 right-5 text-right md:text-left md:static w-[70%] md:w-[30%] text-black md:pt-48 flex flex-col gap-3">
            <p className="font-manrope">
              Hi, I’m Ram — A Software Engineer Passionate About Creating
              Seamless Digital Experiences That Connect And Convert.
            </p>

            <span className="hidden md:block font-cinzel text-2xl">
              <DecryptedText
                text=" Code. Debug. Dominate."
                speed={50}
                maxIterations={15}
                sequential={true}
                animateOn="view"
                className="font-bold text-black"
                encryptedClassName="text-gray-400"
                parentClassName="inline-block"
                revealDirection="center"
              />
            </span>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute bottom-5 px-5 md:bottom-8 md:px-20">
        <div className="flex flex-col gap-7">
          <a
            href="https://www.linkedin.com/in/ram004devlp/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer z-20"
          >
            <SlSocialLinkedin size={30} />
          </a>

          <a
            href="https://www.instagram.com/ram004devlp/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer z-20"
          >
            <SlSocialInstagram size={30} />
          </a>

          <a
            href="https://www.facebook.com/ramkrishna.shrestha.71697092"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer z-20"
          >
            <SlSocialFacebook size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero02;

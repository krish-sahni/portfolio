// import React from "react";
// import { motion } from "framer-motion";
// import { Tilt } from "react-tilt";
// import { styles } from "../styles";
// import { services } from '../constants';
// import { fadeIn, textVariant } from "../utils/motion";

// const ServiceCard = ({ index, title, icon }) => {
//   return (
//     <Tilt className='w-full h-full'>
//       <motion.div
//         variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//         className='w-[90%] h-[90%] mx-auto green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//       >
//         <div
//           options={{
//             max: 45,
//             scale: 1,
//             speed: 450,
//           }}
//           className='bg-tertiary rounded-[20px] py-5 px-12 h-full flex justify-evenly items-center flex-col'
//         >
//           <img
//             src={icon}
//             alt='web-development'
//             className='w-16 h-16 object-contain'
//           />
//           <h3 className='text-white text-[20px] font-bold text-center'>
//             {title}
//           </h3>
//         </div>
//       </motion.div>
//     </Tilt>
//   )
// }

// const About = () => {
//   return (
//     <div className="h-screen flex flex-col p-8">
//       <motion.div variants={textVariant()} className="mb-4">
//         <p className={`${styles.sectionSubText} mb-2`}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview.</h2>
//       </motion.div>

//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className='mt-4 text-secondary text-[19px] max-w-[70%] leading-[30px]'
//       >
//         I'm an electrical engineer with a passion for robotics, 
//         control systems, and sustainable energy solutions. Skilled 
//         in developing innovative, scalable, and user-friendly 
//         technologies, I aim to solve real-world problems and drive 
//         technological advancements. As a quick learner, I excel in 
//         collaborative environments and am dedicated to creating a 
//         smarter, more efficient future.
//       </motion.p>

//       <div className='flex-grow mt-16 grid grid-cols-2 gap-8'>
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default About


import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import {services } from '../constants';
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index,title,icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
    
  </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className={styles.sectionHeadText}
        >About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a Computer Engineering student at UIUC with a passion for embedded systems, robotics, 
        and control theory. I've worked on autonomous drones, firmware development, and FPGA design,
        bridging software and hardware to build intelligent automation solutions. Currently researching 
        bandwidth-constrained swarm control using ROS + STM32 + FreeRTOS.
      </motion.p>
    
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")
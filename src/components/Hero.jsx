import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center">
      <div
        className={`absolute inset-0 top-[170px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Krish</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop embedded systems and<br className='sm:block hidden' />
            autonomous robotics, integrating<br className='sm:block hidden' />
            hardware and software for real-world <br className='sm:block hidden' />
            automation and control.
          </p>
          {/* <div className="mt-4 flex space-x-4">
            <a href="https://www.linkedin.com/in/krishsahni" target="_blank" rel="noopener noreferrer">
              <BsLinkedin className="text-white text-4xl hover:text-[#915EFF] transition-all ease-in duration-100" />
            </a>
            <a href="https://github.com/krish-sahni" target="_blank" rel="noopener noreferrer">
              <BsGithub className="text-white text-4xl hover:text-[#915EFF] transition-all ease-in duration-100" />
            </a>
            <a href="https://www.instagram.com/krishsahni26/" target="_blank" rel="noopener noreferrer">
              <BsInstagram className="text-white text-4xl hover:text-[#915EFF] transition-all ease-in duration-100" />
            </a>
          </div> */}
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;

import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* <button
        className="bg-white text-black p-4 rounded-lg"
        onClick={() => formRef.current.scrollIntoView()}
      >
        GET IN TOUCH
      </button> */}
      <div
        className={`absolute inset-0 top-[100px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ">
              Kasra Mahsouli
            </span>
          </h1>
          <p className={`${styles.heroSubText}  text-white-100`}>
            Welcome to my portfolio showcasing my expertise as a web developer
            specializing in the MERN stack. <br className="sm:block hidden" />
          </p>
        </div>
      </div>
      <div className="h-1/2 sm:h-full  w-full  sm:static absolute sm:top-auto top-40 ">
        <ComputersCanvas />
      </div>

      <div className="absolute xs:bottom-20 bottom-32  w-1/4 flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

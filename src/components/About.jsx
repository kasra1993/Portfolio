import React from "react";
import { Tilt } from "react-tilt";
import { easeInOut, motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-20 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title.map((t, index) => (
              <p key={index}>
                {t} <br />{" "}
              </p>
            ))}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  const onCvButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("../../public/Mahsouli_Kasra_CV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Mahsouli_Kasra_CV.pdf";
        alink.click();
      });
    });
  };
  const onReferralButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("../../public/Mahsouli_Kasra_Referral.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Mahsouli_Kasra_Referral.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} font-TuskerGrotesk`}>
          Introduction
        </p>
        <div id="scroll-container">
          <h2 className={styles.sectionHeadText} id="scroll-text">
            OVERVIEW
          </h2>
        </div>
      </motion.div>
      {/* <motion.h1
        animate={{ x: [0, 1300] }}
        transition={{
          ease: easeInOut,
          repeat: Infinity,
          duration: 5,
        }}
        initial={{ x: [-100, -200, -300] }}
        // whileHover={{ transition: -200 }}
        // exit={{ x: "-100vh", opacity: 0 }}
      >
        Animation made easy with Framer Motion
      </motion.h1> */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-2-3xl leading-[30px]   "
      >
        Innovative , task-driven professional with 5+ years of experience in web
        design and development across diverse industries. Motivated to learn new
        technologies, Proficient at creating user interfaces , writing and
        testing codes, troubleshooting simple/complex issues, using CI/CD
        pipeline tools and systems along with working with major cloud based
        service providers such as AWS and Azure.
      </motion.p>
      <div className="mt-8 flex flex-wrap justify-baseline gap-4">
        <a
          href="/#"
          className="block w-full border border-white  rounded px-12 py-3 text-sm font-medium text-[#e5dada] shadow  focus:outline-none focus:ring hover:text-orange-400 active:text-orange-400 sm:w-auto"
          onClick={onCvButtonClick}
        >
          {" "}
          Download CV
        </a>
        <a
          href="/#"
          className="block w-full border border-white  rounded px-12 py-3 text-sm font-medium text-[#e5dada] shadow hover:text-orange-400 focus:outline-none focus:ring active:text-orange-400 sm:w-auto"
          onClick={onReferralButtonClick}
        >
          {" "}
          Download Referral letter
        </a>
      </div>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

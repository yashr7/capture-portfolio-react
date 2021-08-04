import React from "react";
import home1 from "../img/home1.png";
// import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";

function AboutSection() {
  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        ease: "easeOut",
        staggerChildren: 1,
        when: "afterChildren",
      },
    },
  };

  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <About>
      <Description>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professiobals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="Guy with a camera" />
      </Image>
    </About>
  );
}

export default AboutSection;

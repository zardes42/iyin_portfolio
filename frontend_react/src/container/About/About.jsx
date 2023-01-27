import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

import "./About.scss";

const abouts = [
  { title: "Fromtend", description: "I am a good web developer", imgUrl: "" },
  { title: "Backend", description: "I am a good web developer", imgUrl: "" },
  { title: "Full Stack", description: "I am a good web developer", imgUrl: "" },
];
const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Design</span>
        <br />
        means
        <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, i) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className='app__profile-item'
            key={about.title + i}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
            <p className="bold-text" style={{marginTop:20}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;

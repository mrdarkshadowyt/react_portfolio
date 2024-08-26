import React from 'react';
import { motion } from 'framer-motion';

const Education = () => (
  <section id="education">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>
      <h3>B.E. - CSE</h3>
      <p>PERI INSTITUTE OF TECHNOLOGY (2019-2023) - 7.8 CGPA</p>
      <h3>HSC</h3>
      <p>AL AMEEN SCHOOL (2017-2019) - 61%</p>
      <h3>SSLC</h3>
      <p>AL AMEEN SCHOOL (2017) - 91%</p>
    </div>
  </section>
);

export default Education;

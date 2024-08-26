import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => (
  <section id="certifications">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Certifications
      </motion.h2>
      <p>Java Full-stack Development Course - J Spiders</p>
    </div>
  </section>
);

export default Certifications;

import React from 'react';
import { motion } from 'framer-motion';

const Hobbies = () => (
  <section id="hobbies">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hobbies
      </motion.h2>
      <ul>
        <li>Cycling</li>
        <li>Cooking</li>
        <li>Volunteering</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Teaching</li>
        <li>Martial Arts (JUDO)</li>
      </ul>
    </div>
  </section>
);

export default Hobbies;

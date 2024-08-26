import React from 'react';
import { motion } from 'framer-motion';

const Profile = () => (
  <section id="profile">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Profile
      </motion.h2>
      <p>Armed with an insatiable curiosity and a passion for innovation, I am poised for the next groundbreaking journey in software development. A relentless problem-solver, I blend logic with imagination. With a solid foundation in mathematics and programming, I thrive on challenges, seeking to leverage my skills in a dynamic environment that values communication, passion, and creativity.</p>
      <p>Contact: <a href="tel:7092863772">7092863772</a> | <a href="mailto:smarthameed79@outlook.com">smarthameed79@outlook.com</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/mohamedhameed007" target="_blank" rel="noopener noreferrer">linkedin.com/in/mohamedhameed007</a></p>
    </div>
  </section>
);

export default Profile;

import React from 'react';
import { motion } from 'framer-motion';
// import './Profile.css'; // Ensure you create this CSS file

const Profile = () => (
  <section id="profile" className="profile-section">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="profile-title"
      >
        Profile
      </motion.h2>
      <p className="profile-description">
        Armed with an insatiable curiosity and a passion for innovation, I am poised for the next groundbreaking journey in software development. A relentless problem-solver, I blend logic with imagination. With a solid foundation in mathematics and programming, I thrive on challenges, seeking to leverage my skills in a dynamic environment that values communication, passion, and creativity.
      </p>
      <div className="profile-contacts">
        <p>Contact: <a href="tel:7092863772">7092863772</a> | <a href="mailto:smarthameed79@outlook.com">smarthameed79@outlook.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/mohamedhameed007" target="_blank" rel="noopener noreferrer">linkedin.com/in/mohamedhameed007</a></p>
      </div>
      <blockquote className="profile-quote">
        <p>"The best way to predict the future is to invent it." – Alan Kay</p>
        <p>"Innovation distinguishes between a leader and a follower." – Steve Jobs</p>
      </blockquote>
    </div>
  </section>
);

export default Profile;

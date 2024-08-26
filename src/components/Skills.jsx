import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => (
  <section id="skills">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Technical Skills
      </motion.h2>
      <h3>Programming Languages</h3>
      <ul>
        <li>Java</li>
      </ul>
      <h3>Database Management</h3>
      <ul>
        <li>JDBC</li>
        <li>SQL</li>
      </ul>
      <h3>Web Technologies</h3>
      <ul>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>Servlets</li>
        <li>JSP</li>
      </ul>
      <h3>Frameworks</h3>
      <ul>
        <li>Hibernate with JPA</li>
        <li>Spring Boot</li>
      </ul>
    </div>
  </section>
);

export default Skills;

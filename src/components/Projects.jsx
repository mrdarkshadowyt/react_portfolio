import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => (
  <section id="projects">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <h3>Autonomous Lawnmower</h3>
      <p>Built with Arduino Uno, ESP 8266, and a Bluetooth module. It is a prototype designed to cut grass up to a specific height.</p>
      <h3>Report Card Application</h3>
      <p>Built using Spring Boot. This application provides easy access to student marks and grades through a web application. It uses Hibernate, JPA, Spring, Servlets, JSP, HTML, CSS, and JavaScript.</p>
    </div>
  </section>
);

export default Projects;

import React from 'react';
import { motion } from 'framer-motion';

const Activities = () => (
  <section id="activities">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Extracurricular Activities
      </motion.h2>
      <h3>The Esports Club - Volunteer</h3>
      <ul>
        <li>Tournament Operations: Successfully hosted a few tournaments, managing brackets, recording scores, and ensuring smooth gameplay.</li>
        <li>Event Setup & Breakdown: Assisted in setting up equipment, stages, and logistics before events, and breaking down afterward.</li>
        <li>Technical Support: Provided basic technical support for equipment and software troubleshooting.</li>
      </ul>
      <h3>Face Prep - Volunteer Mentor [Aptitude]</h3>
      <ul>
        <li>Deliver Training: Conducted sessions at various institutions, explaining concepts and delivering training.</li>
        <li>Assess and Track Progress: Evaluated performance, provided feedback, and monitored the progress of mentees.</li>
      </ul>
      <h3>IoT Club - Coordinator</h3>
      <p>Actively coordinated activities and events.</p>
      <h3>Vizhiagam Foundation - Volunteer</h3>
      <ul>
        <li>Medical Assistant: Assisted as a medical assistant in foundation activities.</li>
      </ul>
    </div>
  </section>
);

export default Activities;

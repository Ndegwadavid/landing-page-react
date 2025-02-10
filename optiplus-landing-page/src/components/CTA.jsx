import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="cta">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Ready to Transform Your Vision?</h2>
        <button onClick={() => window.location.href = "https://appointments.optiplus.co.ke"}>
          Book an Appointment
        </button>
      </motion.div>
    </section>
  );
};

export default CTA;
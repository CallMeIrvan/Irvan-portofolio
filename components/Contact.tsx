// components/Contact.tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '80px 16px', textAlign: 'center', backgroundColor: '#112240' }}>
      <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: 'white' }}>
        Hubungi Saya
      </h2>
      <p style={{ color: 'lightgray', marginTop: '16px' }}>
        Formulir kontak sedang dalam perbaikan. Silakan hubungi saya melalui email.
      </p>
    </section>
  );
};

export default Contact;
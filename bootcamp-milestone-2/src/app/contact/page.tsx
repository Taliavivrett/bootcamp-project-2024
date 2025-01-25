'use client';

import React, { useState } from 'react';
import styles from './contact.module.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement; // Explicitly cast to form element

    emailjs
      .sendForm(
        'service_4ijklkw', // Your service ID
        'template_sedr7oq', // Your template ID
        form, // Pass the form element directly
        'RxOStavm8SHNBDuLf' // Your public key
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setStatusMessage('Email sent successfully!');
          form.reset(); // Reset the form after submission
        },
        (error) => {
          console.error('Error sending email:', error);
          setStatusMessage('Error sending email. Please try again later.');
        }
      );
  };

  return (
    <div className={styles['contact-page']}>
      <h1>Contact</h1>
      <form className={styles['form']} id="contact-form" onSubmit={handleSubmit}>
        <label className={styles['form-label']} htmlFor="name">Name:</label>
        <input
          className={styles['form-input']}
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
        />

        <label className={styles['form-label']} htmlFor="email">Email:</label>
        <input
          className={styles['form-input']}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />

        <label className={styles['form-label']} htmlFor="message">Message:</label>
        <textarea
          className={styles['form-input']}
          id="message"
          name="message"
          placeholder="Message"
          required
        />

        <input className={styles['form-submit']} type="submit" value="Submit" />
      </form>
      {statusMessage && <p>{statusMessage}</p>} {/* Display status message */}
    </div>
  );
};

export default Contact;




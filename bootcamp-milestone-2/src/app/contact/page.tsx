import React from 'react';
import styles from './contact.module.css';


const Contact = () => {
  return (
    <div className={styles['contact-page']}>
      <h1>Contact</h1>
      <form className={styles['form']} id="contact-form">
        <label className={styles['form-label']} htmlFor="name">Name:</label>
        <input className={styles['form-input']} type="text" id="name" name="name" placeholder="Name" required />

        <label className={styles['form-label']} htmlFor="email">Email:</label>
        <input className={styles['form-input']} type="email" id="email" name="email" placeholder="Email" required />

        <label className={styles['form-label']} htmlFor="message">Message:</label>
        <textarea className={styles['form-input']} id="message" name="message" placeholder="Message" required />

        <input className={styles['form-submit']} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
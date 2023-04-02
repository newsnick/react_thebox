import React from 'react'
import styles from '../../styles/Contact/Contact.module.scss'
import ContactForm from '../../components/ContactForm/ContactForm.jsx'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'

const Contact = () => {
  return (
    <div className={styles.contactcontainer} id="contact">
      <div className={styles.contactmain}>
        <div className={styles.mainbox}>
          <p className={styles.title}>What can us do for you?</p>
          <p className={styles.description}>
            We are ready to work on a project of any complexity, whether it’s
            commercial or residential.
          </p>
          <ContactForm />
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}

export default Contact

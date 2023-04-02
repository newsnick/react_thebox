import React from 'react'
import styles from '../../styles/Contact/Contact.module.scss'
import ContactForm from '../../components/ContactForm/ContactForm.jsx'

const Contact = () => {
  return (
    <div className={styles.contactcontainer}>
      <div className={styles.contactmain}>
        <div className={styles.mainbox}>
          <p>What can us do for you?</p>
          <p>
            We are ready to work on a project of any complexity, whether it’s
            commercial or residential.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact

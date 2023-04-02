import React from 'react'
import styles from '../../styles/Services/Services.module.scss'
import services1 from '../../assets/browser/icons/vectorservices1.svg'
import services2 from '../../assets/browser/icons/vectorservices2.svg'
import services3 from '../../assets/browser/icons/vectorservices3.svg'
import services4 from '../../assets/browser/icons/vectorservices4.svg'
import services5 from '../../assets/browser/icons/vectorservices5.svg'
import services6 from '../../assets/browser/icons/vectorservices6.svg'
import rectangle from '../../assets/browser/icons/rectangle.svg'

const Services = () => {
  return (
    <div className={styles.servicesmain} id="services">
      <div className={styles.servicescontainer}>
        <div className={styles.servicesinnerbox}>
          <p className={styles.header}>Services</p>
          <div className={styles.cubes}>
            <div className={styles.cube}>
              <img src={services1} alt="services1" />
              <img src={rectangle} alt="rectangle" />
              <p>Construction</p>
            </div>
            <div className={styles.cubeblue}>
              <img src={services2} alt="services2" />
              <img src={rectangle} alt="rectangle" />
              <p>Renovation</p>
            </div>
            <div className={styles.cube}>
              <img src={services3} alt="services3" />
              <img src={rectangle} alt="rectangle" />
              <p>Consultation</p>
            </div>
            <div className={styles.cubeblue}>
              <img src={services4} alt="services4" />
              <img src={rectangle} alt="rectangle" />
              <p>Repair Services</p>
            </div>
            <div className={styles.cube}>
              <img src={services5} alt="services5" />
              <img src={rectangle} alt="rectangle" />
              <p>Architecture</p>
            </div>
            <div className={styles.cubeblue}>
              <img src={services6} alt="services6" />
              <img src={rectangle} alt="rectangle" />
              <p>Services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

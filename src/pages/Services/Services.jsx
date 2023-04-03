import React from 'react'
import styles from '../../styles/Services/Services.module.scss'
import rectangle from '../../assets/browser/icons/rectangle.svg'
import { servicesData } from '../../utils'

const Services = () => {
  return (
    <div className={styles.servicesmain} id="services">
      <div className={styles.servicescontainer}> 
      <div className={styles.servicesinnerbox}>
        <p className={styles.header}>Services</p>
        <div className={styles.cubes}>
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={index % 2 === 0 ? styles.cube : styles.cubeblue}
            >
              <img src={service.imgSrc} alt={service.title} />
              <img src={rectangle} alt="rectangle" />
              <p>{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
     </div> 
  )
}

export default Services

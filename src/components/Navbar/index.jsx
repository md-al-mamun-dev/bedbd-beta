'use client'
import styles from './index.module.css'

const Navbar = () => {
  return (
    <div className={`${styles.navbar}`}>            
        <div aria-label="Primary" role="list" className={`${styles.navlist}`}>
            <div className={`fw-slightly-dark fs-regular`}><a className={`no-decoration fw-active`} href="#">Find a Property</a></div>
            <div className={`fw-slightly-dark fs-regular`}><a className={`no-decoration`} href="#">Share Stories</a></div>
            <div className={`fw-slightly-dark fs-regular`}><a className={`no-decoration`} href="#">Rental Guides</a></div>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import logo from '../../assets/LogoAir.svg'
import styles from './Navbar.module.css'

const Navbar =() =>{
    
    return (
        <nav className={styles.navbar}>
            <img src={logo} />
        </nav>
    )
    
}

export default Navbar
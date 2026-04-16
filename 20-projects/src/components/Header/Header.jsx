import React, { useState } from 'react'
import styles from './Header.module.css'
function Header() {
  const [isMenuopen, setIsMenuOpen] = useState(false)
  console.log(isMenuopen)
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="data:image/png;base64,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" alt="logo" />
        <span>AGENCY.LY</span>
      </div>

      <nev className={`${styles.nevContainer}  ${isMenuopen ? styles.open : ""} `} >
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#blog'>Blog</a></li>
        </ul>
        <button className={styles.mobilebtn}>GET STARTED</button>
      </nev>
      <button className={styles.desktopBtn}>GET STARTED</button>
      <div className={styles.menubar} onClick={() => setIsMenuOpen(!isMenuopen)}>
        {isMenuopen ? '✖' : '☰'}
      </div>
    </header>
  )
}

export default Header
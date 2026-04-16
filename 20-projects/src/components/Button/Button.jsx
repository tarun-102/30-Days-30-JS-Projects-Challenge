import React from 'react'
import styles from './Button.module.css'
function Button({
    buttontitle,
    className= ''
}) {
  return (
    <button className={`${styles.defaultBtn} ${className}`}>{buttontitle}</button>  
  )
}

export default Button
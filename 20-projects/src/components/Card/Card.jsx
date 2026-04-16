import React from 'react'
import styles from './Card.module.css'
function Card({
    cardtitle,
    paragraph,
    cardimg
}) {
  return (
    <div className={styles.card}>
        <img src={cardimg} alt="" />
        <h2>{cardtitle}</h2>
        <p>{paragraph}</p>
        <a href="#">Learn Morn.. </a>
    </div>
  )
}

export default Card
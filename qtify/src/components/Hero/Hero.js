import React from 'react'
import HeroImage from '../../assets/vibrating-headphone.png'
import styles from './Hero.module.css'
function Hero () {
  return (
    <>  
         <div className={styles.Hero}>
            <div className={styles.Herotitle}>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            
            </div>
            <div>
                <img className={styles.Hero} src={HeroImage} alt='headphone'/>
                </div>
                </div>
       
    </>
  )
}

export default Hero
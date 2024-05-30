import React from "react";
import LogoImg from "../../assets/logo.png";
import styles from './Logo.module.css'
function Logo (){
    return (
      <div className={styles.logo}>
        <img src={LogoImg} alt="Logo" />
      </div>
    );
  };
  
  export default Logo;
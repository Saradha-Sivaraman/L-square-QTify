 import React from "react";
 import styles from './CarouselRight.module.css'
 import {ReactComponent as RightArrow} from '../../../assets/RightArrow.svg'
 import { useSwiper } from "swiper/react";

 export default function CarouselRightNavigation() {
 const swiper = useSwiper();
   return (
     <div
       className={styles.rightCarousel}
       onClick={() => {
         swiper.slideNext();
       }}
     >
      <div> <RightArrow/> </div>
     </div>
   );
 }

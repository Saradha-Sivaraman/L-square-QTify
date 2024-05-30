// import React from "react";

// import { useSwiper } from "swiper/react";
// import {ReactComponent as LeftArrow} from '../../../assets/LeftArrow.svg'
// import styles from './CarouselLeft.module.css'


// export default function CarouselLeftNavigation() {
//   const swiper = useSwiper();
//   return (
//     // <div
//     //   className={styles.leftCarousel}
//     //   onClick={() => {
//     //     swiper.slidePrev();
//     //   }}
//     // >
//     //   <div>
//     //     <img
//     //       src={require(LeftArrow)}
//     //       alt="leftarrow"
//     //       width={32}
//     //     />
//     //   </div>
//     // </div>
//     <div> hello left arrow </div>
//   );
// }

import React from "react";
import {ReactComponent as LeftArrow} from '../../../assets/LeftArrow.svg'
import styles from './CarouselLeft.module.css'
import { useSwiper } from "swiper/react";

export default function CarouselLeftNavigation() {
  const swiper = useSwiper();
  return (
    <div className={styles.leftCarousel}
    onClick={() => {
      swiper.slidePrev();
         }}>
      <div> <LeftArrow/> </div>
    </div>
  );
}
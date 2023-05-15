import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
 
//  const Hero=() =>{
//   return (
//     <div className={css.container}>
//         {/* Left side */}
//         <div className={css.h_sides}>
//             <span>Skin protection creams</span>

//             <div className={css.text2}>
//                 <span>Trendy Collection</span>
//                 <span>{" "}Seedily say has suitable disposal and boy</span>
//             </div>
//         </div>
//         {/* middle side hero image */}
//         <div className={css.wrapper}>
//             <div className={css.blueCircle}></div>
//             <img src={HeroImg} alt="" width={600}/>
//             <div className={css.cart2}>
//                 <RiShoppingBagFill />
//                 <div className={css.signup}>
//                     <span>Best SignUp Offers</span>
//                     <div>
//                         <BsArrowRight/>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }
const Hero=()=>{
    const transition={duration:3, type:"spring"}
    return(
        <div className='css.container'>

            {/* left side */}
            <div className={css.h_sides}>
                <span className={css.text1}>Skin protect55tion cream</span>
                <div className={css.text2}>
                <span>Trendy Collection</span>
                <span>Seedily say has suitable disposal and boy.exercise jpy man child rejoice</span>
                </div>

            </div>
            {/* middle img sec */}
            <div className={css.wrapper}>
                {/* Blue circle */}
                <motion.div
                initial={{bottom:"2rem"}}
                whileInView={{bottom:"0rem"}}
                transition={transition}
                 className={css.blueCircle}></motion.div>



                {/* hero img */}
                <motion.img 
                transition={transition}
                initial={{bottom:"-2rem"}}
                whileInView={{bottom:"0rem"}}
                src={HeroImg} alt="" width={600}></motion.img>


                <motion.div
                transition={transition}
                initial={{right:"7%"}}
                whileInView={{right:"2%"}}
                className={css.cart2}>
                    <RiShoppingBagFill/>
                    <div className={css.signup}>
                        <span>Best Signup offer</span>
                        <div>
                            <BsArrowRight/>
                        </div>
                    </div>
                    
                </motion.div>
            </div>
            {/* Rigth side */}
            <div className={css.h_sides} >
                <div className={css.traffic}>
                <span>1.5m</span>

                    <span>Monthly traffic</span>
                </div>

                <div className={css.customers}>
                    <span>100k</span>
                    {/* <span>happy custimers</span> */}


                </div>
            </div>
        </div>
    )
}
export default Hero;

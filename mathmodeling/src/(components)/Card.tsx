"use client"
import { Variants, motion } from "framer-motion";
import Link from "next/link"
import { useState } from "react"
import { TypeAnimation } from 'react-type-animation';

interface CardProps{
    name: string,
    desc: any,
    link: string
}

const cardVariants: Variants = {
    offscreen: {
      y: 100,
      rotate: -10
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1
      }
    }
  };
export default function Card(props: CardProps){
    const [bool, setBool] = useState(false)
    return(
        <motion.div
        initial={{opacity:0, scale:.75}}
        whileInView={{opacity:1, scale:1}}
        viewport={{ once: true, amount: 1 }} 
        
        >
            <motion.a variants={cardVariants} //bg-gradient-to-b from-[#F3F7EC]/75 to-[#E88D67]/25 
            whileHover={{
              scale: 1.1
            }}
            whileTap={{ scale: 0.9 }}
            href={props.link} onMouseOver={() => setBool(true)} onMouseOut={() => setBool(false)} className="transition shadow-md duration-500 ease-in-out  flex items-center justify-center rounded-[35%] size-[15vw] bg-med-color opacity-70 hover:opacity-95 text-opacity-100 border-light-color border-[1px] hover:border-med-color hover:shadow-xl">
            {bool ? <TypeAnimation className="text-white  text-lg text-center p-5 transition-transform" speed={50} sequence={[props.desc]}/>
            :
            <span className="font-semibold text-white-color text-lg text-opacity-100 text-center p-5 transition-transform">{props.name}</span>}
        </motion.a>

        </motion.div>
            )
}
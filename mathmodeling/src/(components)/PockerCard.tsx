"use client"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { GoDotFill } from "react-icons/go";
import { TypeAnimation } from 'react-type-animation';

interface PockerProps{
    name: string, 
    img: string, 
    symbol: string, 
    desc:string,
    label: string
}

export default function PockerCard(props:PockerProps){
    const [bool, setBool] = useState(false)
    return(
        <motion.div className={["relative bg-white-color py-3 px-2 font-semibold rounded-lg my-5 rotate-6 shadow-lg hover:z-100 text-light-color", "PockerCard"].join(" ")}
            onMouseOver={() => setBool(true)} onMouseOut={() => setBool(false)}
            initial={{ opacity: 0, rotate: 0}}
            whileInView={{ opacity: 1, rotate:12}}
            transition={{ type: "spring", duration: 2 }}
            whileHover={{
                scale: 1.15, 
                rotate:0
              }}
            whileTap={{
            scale: 1.15, 
            rotate:0
            }}
        >
            <div className="absolute top-0 left-2 w-[14.8em] leading-8 my-1  font-serif">
                {bool ?  <TypeAnimation className="text-[2.2em]" speed={50} sequence={[props.name]} />: <h1 className="text-[2.2em]">{props.label} </h1>}
                <p className="text-[2.2em] py-0">{props.symbol}</p>
            </div>
            
            <div className="mx-5 w-[14.8em] relative h-[25.5em] min-h-fit text-center flex items-center" >
            {bool ? /*<div className="text-center flex flex-col items-center text-dark-color">
                <GoDotFill />
                <br />
                <p>{props.desc}</p>
                <br />
                <GoDotFill />
                </div> */ <Image src={props.img} fill={true} objectFit='contain' alt="" />: 
            
            <Image src={props.img} fill={true} objectFit='contain' alt="" />
            }
            </div>
            <div className="absolute bottom-0 right-2 text-left rotate-180 leading-8 my-1">
                <h1 className="text-[2.2em] ">{bool ? props.name :  props.label }</h1>
                <p className="text-[2.2em] py-0">{props.symbol}</p>
            </div>
             
        </motion.div>
        
    )
}
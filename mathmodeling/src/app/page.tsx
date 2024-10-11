"use client"
import Image from "next/image";
import Nav from '@/(components)/Nav'
import Hero from '@/(components)/Hero'
import Heading from "@/(components)/Heading";
import Badge from '@mui/material/Badge';
import leaders from "@/(assets)/Leadership.json"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div>
      <Nav place={-1}/>
      <Hero source="/Intro.mp4"/>
      <div className="bg-slate-100">
      <motion.div className="flex  items-center  py-[5em] mx-[10em]"
        initial={{ opacity: 0,  y:50}}
        animate={{ opacity: 1,   y: 0}}
        transition={{ duration: 0.5 }}>
          <div className="flex flex-col basis-1/3 text-[calc(50vh/25)]">
            <h2 className="font-bold text-[1.7em] text-left">Math in competitions, they're focused on <span className="decoration-light-color decoration-4 underline underline-offset-[3px]">tricks</span>.</h2>
            <motion.div className=" mt-3">
              <p className="  text-left">
                Our club is focused on a different topic: <span className="decoration-light-color decoration-4 underline underline-offset-[3px]">Math Modeling</span>. We will teach you how to apply tons of unique techniques, some of which you might not get to learn until senior year. We also compete in the annual Mathworks Math Modeling (M3) challenge, a national competition with over<span className="decoration-light-color decoration-4 underline underline-offset-[3px]">$100,000</span> in prizes.
              </p>
            </motion.div>
          </div>
          <div className="basis-2/3 object-cover flex overflow-hidden relative h-[50vh] w-[65em] mx-10 mb-5 rounded-lg shadow-xl"><Image  src={"/m3.jpg"} fill={true}  quality={100} objectFit="cover"   alt="Picture of the author" /></div>
          
          
        
      </motion.div>

      </div>
      
      <div >
      <Heading link="none" num="2" blurb="our leadership."/>     
      
      <div className="flex flex-wrap gap-[2em] mx-[5vw] mb-[10vh] justify-center">
          {
              leaders.map(({name, role, image}, index)=>(
                  
                <motion.div className={["flex flex-col content-center items-center justify-center max-w-xs m-4 ", "PockerCard"].join(" ")}
                  initial={{ opacity: 0, rotate: 12}}
                  whileInView={{ opacity: 1, rotate:0}}
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
                  <Image className="rounded-full w-full shadow-lg" src={image} width={220} height={220} alt="Picture of the author"/>
                  <p className={["w-full mt-2 break-words text-center text-dark-color", 'font-roboto'].join(' ')}>{name} / {role}</p>
                </motion.div>
                
              ))
          }
      </div>
      </div>
      
          
    </div>
  );
}

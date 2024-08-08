import Image from "next/image";
import main from '@/(assets)/1.jpg'
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});

import "./Hero.css"
interface HeroProps{
    source: string
}

export default function Hero(props: HeroProps){
    return(
        <div className={['Hero', "font-barlow"].join(' ')}>

            <video style={{objectFit:"cover"}} className="bgimg" autoPlay loop muted >
                <source src={props.source} type="video/mp4"/>
            </video>
            <div className="gradimg"></div>
            <div className="Info">
            <h1><i>Real</i> World Applications.</h1>
             </div>
        </div>
    )
}
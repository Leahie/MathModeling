"use client";
import Link from 'next/link'
import Hamburger from './Hamburger';
import './Nav.css'
import { Montserrat } from "next/font/google";
import React, {useState, useEffect, useRef} from 'react';
import { useRouter } from 'next/router';

const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});


interface BoxProps{
    place: number;
}

export default function Nav(props: BoxProps){

    const [LinksClass, setLinksClass] = useState("")
    const [ItemsClass, setItemsClass] = useState("")

    

    const toggleit = () =>{
        if (LinksClass === ""){
            setLinksClass   ("On")
            setItemsClass ("Off")
        } 
        else{
            setLinksClass("")
            setItemsClass ("")
        }
    }

    
    
    return(
        <div className={['Nav',ItemsClass, montserrat.className].join(' ')}>
            <div className={['Logo', 'font-ysabeau'].join(' ')}>
                <a href="/" id='LogoRI'>MATH modeling</a>
                <div id="LogoMID"></div>
                <span onClick={toggleit} className="navbar-toggle" id="js-navbar-toggle">
                   <Hamburger /> 
                </span>
            </div>
            <div className={['Navlinks', LinksClass, 'font-roboto'].join(' ')}>
                <Link href="/about" style={props.place===0 ? { borderBottom: "5px solid #453F78"} : {}}>CHALLENGE.</Link>
                <Link href="/blog" style={props.place===1 ? {borderBottom: "5px solid #453F78"} : {}}>LECTURES.</Link>
                <Link href="/portfolio" style={props.place===2 ? { borderBottom: "5px solid #453F78"} : {}}>RESOURCES.</Link>
            </div>
        </div>
    )
    
}
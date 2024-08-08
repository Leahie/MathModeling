
import "./Socials.css"
import { Montserrat } from "next/font/google";
import Data from "@/(data)/socials.json";
import { FaGithub,FaLinkedin,FaInstagramSquare, FaPaintBrush  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});

export default function Socials() {
    return(
        <div className='Socials'>
            <div className='SocialLinks' >
                <a href={Data[3].link}><MdEmail/></a>
                <a href={Data[0].link}><FaGithub/></a>
                <a href={Data[4].link}><FaPaintBrush/></a>  
                <a href={Data[1].link}><FaLinkedin/></a>
                <a href={Data[2].link}><FaInstagramSquare/></a>
                
                
                
            </div>
        </div>
        

    );
  }
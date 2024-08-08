import Image from "next/image";
import Nav from '@/(components)/Nav'
import Hero from '@/(components)/Hero'
import Heading from "@/(components)/Heading";
import Badge from '@mui/material/Badge';
import leaders from "@/(assets)/Leadership.json"

export default function Home() {
  return (
    <div>
      <Nav place={-1}/>
      <Hero source="/Intro.mp4"/>
      <Heading link="none" num="1" blurb="our approach."/>
      <Heading link="none" num="2" blurb="our leadership."/>     
      
        <div className="flex flex-wrap gap-[2em] mx-[5vw] justify-center">
            {
                leaders.map(({name, role, image}, index)=>(
                    
                  <div className="flex flex-col content-center items-center justify-center max-w-xs m-4 ">
                    <Image className="rounded-full w-full shadow-lg" src={image} width={220} height={220} alt="Picture of the author"/>
                    <p className="w-full mt-2 break-words text-center">{name} / {role}</p>
                  </div>
                ))
            }
        </div>
      
    </div>
  );
}

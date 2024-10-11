"use client"
import Blurb from "./Blurb"
import { IoPersonOutline } from "react-icons/io5";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";

export default function Home() {
  return (
    <div>
        <div className="flex justify-center items-center w-[100vw] gap-5">
            <div>
                <IoPersonOutline className="text-[2.5em] mb-3"/>
                <Blurb blurb="The M3 Challenge spotlights applied mathematics as a powerful problem-solving tool and as a viable and exciting profession. The specific real-world problem that is posed each year is unknown to participants until they login during Challenge weekend." num="What is the Challenge?"/>
            </div>
            <div>
                <FaAssistiveListeningSystems className="text-[2.5em] mb-3"/>
                <Blurb blurb="Teams will have 14 hours to write a solution paper addressing various facets of the problem.
                 They should create mathematical models; justifying assumptions, defining parameters, describing their process, analyzing effects of change, and describing results." num="What Do We Do?"/>
            </div>
            <div>
                <FaHandsHelping className="text-[2.5em] mb-3"/>
                <Blurb blurb="The top 6 teams receive tuition scholarships for college education. 
                They will also be invited to New York City to present their paper to professionals, answer questions about their models, and receive awards while making great connections (don’t worry, the trip is paid for)." num="Our Purpose?"/>
            </div>
        </div>
    
    </div>
  );
}

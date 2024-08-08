
import FooterInfo from "@/(assets)/Footer.json"
export default function Footer(){
    return(
        <div className="flex">
            <div className=" bg-black-color flex  flex-wrap justify-start pt-[2.5em] pb-[1.3em] px-[2em] text-[#B7B597]/50 gap-[2em] w-[50%]">
                {/* <div><FaSpotify />
                    <div>
                        <h1>On Repeat</h1>
                        <p></p>
                    </div>
                
                </div> */}
                <p >&copy; 2024 Leah Zhang</p>
            </div>
            <div className="w-[50%] bg-black-color flex  flex-wrap justify-end pt-[2.5em] pb-[1.3em] px-[2em] text-[#B7B597] gap-[2em]">
            {
               FooterInfo.map(({name, link}, index)=>(
                    <a className="text-[#B7B597]/50 font-normal" href={link} key={index}>{name} </a>
                )) 
            }
        </div>
        </div>
        
    )
}
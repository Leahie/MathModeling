interface HeadingProps{
    num: string, 
    blurb: string,
    link: string, 
}
export default function Heading(props: HeadingProps){
    return(
        <div>
           
            <h2 className=" text-[2em] mx-[1em] my-[1em] text-dark-color font-barlow">
                <span className="font-medium">{props.blurb}</span>
            </h2> 
        </div>
        
    )
}
"use client";
import Box from "./Box"
import "./Books.css"
import { useEffect, useState } from "react";
import Books from "@/(assets)/Lectures.json"

export default async function lectures(){
    return(
        <div className={["Books"].join(" ")}>
            {
            Books.map(({name, link, image}, index)=>(
                <Box key={index} name={name} link = {link} image = {image}/>
            ))
        }
        </div>
    )
}
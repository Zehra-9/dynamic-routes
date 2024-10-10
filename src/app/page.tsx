import React from "react"
import Link from "next/link"
export default function HomePage(){
    return(
        <div>
            <h1>Country List</h1>
            
            <Link href="/country/pakistan">Pakistan</Link><br>
            </br>
            <Link href="/country/india">India</Link>
        </div>
    )
}



  

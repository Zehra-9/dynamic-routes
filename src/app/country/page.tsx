import Link from "next/link"

function Country(){
    return(
        <div>
        <h1>This is country Page</h1>
        <ul>
            <li>
                <Link href={"country/pakistan"}>Pakistan</Link>
                </li>
            <li>
            <Link href={"country/china"}>China</Link>
               </li>

            <li>
            <Link href={"country/japan"}>Japan</Link>   
            </li>

            <li>
            <Link href={"country/bangladash"}>Bagladash</Link> 
            </li>
            <Link href={"country/india"}>India</Link> 

                <li>    
            </li>
        </ul>
        </div>
    )
}
export default Country
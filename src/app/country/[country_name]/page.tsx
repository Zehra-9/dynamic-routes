export default function CountrName({ params }: any) {


    const countries: {
        name: string,
        population: number,
        capital: string
    }[] = [

            {
                name: "Pakistan",
                population: 21675000000,
                capital: "Islamabad"
            },
            {
                name: "India",
                population: 2866430000,
                capital: "Dehli"
            }, {
                name: "Japan",
                population: 73418600000,
                capital: "Tokyo"
            }, {
                name: "China",
                population: 32470000000,
                capital: "Beijing"
            }, {
                name: "Bangladash",
                population: 2045000000,
                capital: "Dahka"

            }

        ];

        function findCountry(country_url:string){
           return  countries.find(country=> country.name.toLowerCase() == country_url.toLowerCase());
        }


       let result =  findCountry(params.country_name)

        
    return (
        <div>
           {
            result ? (
                <>
                 <h1>Country Name:{result.name} </h1>
            <h1>Country Population: {result.population} </h1>
            <h1>Country Capital: {result.capital}:</h1>
                </>
            ):

               (
                <h1>Country Not Found</h1>
               )
           }
            
           
           



        </div>
    )
}











    









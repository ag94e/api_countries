import React, {useState, useEffect} from 'react'

const url = 'https://restcountries.com/v3.1/all';

const ApiCountries = () => {
    const [countries, setCountries] = useState([])
    const fetchData = async() => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
        
        const script = document.createElement("script")
        script.src = "./paginate.js"
        script.async = true
        document.body.appendChild(script)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='container-fluid'>
            <div className='row'>
                    {countries.map((country) => {
                        const { name, capital, region, /* languages,*/ population, flags } = country
                        return (
                            <div className='col-3 border border-secondary p-2'>
                                <article key={name.official}>
                                    <div>
                                        <img src={flags.png} alt={name.official}/>
                                        <h4>Official name: {name.official}</h4>
                                        <h6>Capital: {capital} </h6>
                                        <h6>Region: {region} </h6>
                                        {/* <h4>Languages: {languages}</h4> */}
                                        <h6>Population: {population} </h6>
                                    </div>
                                </article>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default ApiCountries


// import React, { Component } from "react";

// export default class ApiCountries extends Component{
//     constructor(props){
//         super(props);
//             this.state = {
//                 countries: {}
//             }
//        }
//     componentDidMount (){
//         const url = 'https://restcountries.com/v3.1/all'
//         fetch(url)
//             .then(response => response.json())
//             .then(responseJson => this.setState({countries: responseJson[0].name.common}))
//         let names = this.state.countries
//         return names
//     }
//     render(){
//         return(
//             <div>
//                 <p>
//                     {console.log(this.state.countries)}
                    
//                 </p>
//             </div>
//         );
//     }

// }
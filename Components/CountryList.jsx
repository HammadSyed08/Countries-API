import { useState, useEffect } from 'react'
import CountryCard from "./CountryCard";
import CountriesListShimmer from './CountriesListShimmer';
// import CountryData from "../CountryData";

export default function CountryList({ search }) {
  const [CountryData, setCountryData] = useState([])
  // const [count, setCount] = useState(0)

  //---------> Method No 1 --------> ----> in this problem is when we remove this content with help of button the content is not removed and post when it === 0

  // if (CountryData.length === 0) {
  //   fetch('https://restcountries.com/v3.1/all')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCountryData(data)
  //     })
  // }

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data)
      })

      // const intervalId =setInterval(() => {
      //   console.log('Countires Component is Running');        
      // },[1000])

      // return (() => {
      //   clearInterval(intervalId)
      
  }, [])

  // useEffect(() => {
  //   console.log('This is 2nd useEffect');
    
  // }, [count, CountryData])

  if (CountryData.length === 0){
   return <CountriesListShimmer/>
  }
  return (
    <div className="countries_container">{
      CountryData.filter((country) => country.name.common.toLowerCase().includes(search) || country.region.toLowerCase().includes(search))
        .map((country) => {

          return <CountryCard
            key={country.name.common}
            name={country.name.common}
            flags={country.flags.svg}
            population={country.population.toLocaleString('en-IN')}
            region={country.region}
            capital={country.capital?.[0]}
            data={country}
          />
        })}
    </div>
  )
}

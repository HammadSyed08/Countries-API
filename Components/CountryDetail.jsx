import { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router'
import CountryDetailShimmer from './CountryDetailShimmer'
import { useTheme } from '../Hooks/useTheme'


export default function CountryDetail() {
  // const countryName = new URLSearchParams(window.location.search).get('name')
  const prams = useParams()
  // console.log(prams);
  const countryName = prams.countryDetail
  // console.log(countryName);
  const [countryData, setCountryData] = useState(null)
  const [found, setFound] = useState(false)
  const {state} = useLocation()
  // console.log(state);
  const [dark] = useTheme()

  function updateCountryData(data){
    setCountryData({
      flag: data.flags.svg,
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      region: data.region,
      population: data.population.toLocaleString('en-IN'),
      topDomain: data.tld.join(', '),
      subRegion: data.subregion,
      capital: data.capital?.[0],
      // currencies: Object.values(data.currencies).map((currency) => currency.name).join(', '),
      currencies: Object.values(data.currencies || {}),
      // languages: Object.values(data.languages).join(', '),
      languages: Object.values(data.languages || {}).join(', '),
      borders:[]
    })
    
    if (!data.borders){
      data.borders = []
    }

    Promise.all(data.borders.map((border) => {
      return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
      .then((res) => res.json())
      .then(([countryBorders]) => countryBorders.name.common)
    })).then((borders) => {
      setCountryData((prevState) => ({...prevState, borders}))
    })
  }

  useEffect(() => {

    if (state) {
      updateCountryData(state)
      return
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        // console.log(data);
        updateCountryData(data)
        // setCountryData({
        //   flag: data.flags.svg,
        //   name: data.name.common,
        //   nativeName: Object.values(data.name.nativeName)[0].common,
        //   region: data.region,
        //   population: data.population.toLocaleString('en-IN'),
        //   topDomain: data.tld.join(', '),
        //   subRegion: data.subregion,
        //   capital: data.capital?.[0],
        //   currencies: Object.values(data.currencies).map((currency) => currency.name).join(', '),
        //   languages: Object.values(data.languages).join(', '),
        //   borders:[]
        // })
        
        // if (!data.borders){
        //   data.borders = []
        // }

        // Promise.all(data.borders.map((border) => {
        //   return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        //   .then((res) => res.json())
        //   .then(([countryBorders]) => countryBorders.name.common)
        // })).then((borders) => {
        //   setCountryData((prevState) => ({...prevState, borders}))
        // })
      })
      .catch((err) => {
        setFound(true)
      })

  }, [countryName])

  if (found){
    return <h1 style={{textAlign: "center",
      paddingTop: '50px',
      fontSize: "50px", 
      color: 'Red',
     fontWeight: '700'
     }}>Country is not found</h1>
  }

  return countryData === null ? <CountryDetailShimmer/> : (
    <>
      <main className={`country_data ${dark? 'dark' : ''}`} >
        <div className="country_data_container">
        <button className="back_btn" onClick={() => history.back()}><i className="fa-solid fa-arrow-left"></i> Back</button>
        <div className="country_detail_container">
          <div className="flag_img">
            <img src={countryData.flag} alt={countryData.name} />
          </div>
          <div className="data-Detail">
            <h1 className="country_title">{countryData.name}</h1>
            <div className="Country_info">
              <div className="info_left">
                <p><b>Native Name: </b><span className="native_name">{countryData.nativeName}</span></p>
                <p><b>Population: </b><span className="population">{countryData.population}</span></p>
                <p><b>Region: </b><span className="region">{countryData.region}</span></p>
                <p><b>Sub region: </b><span className="sub_region">{countryData.subRegion}</span></p>
                <p><b>Capital: </b><span className="capital">{countryData.capital}</span></p>
              </div>
              <div className="info_right">
                <p><b>Top level Domain: </b><span className="top_domain">{countryData.topDomain}</span></p>
                <p><b>Currencies: </b><span className="Currencies">{countryData.currencies}</span></p>
                <p><b>Languages: </b><span className="lang">{countryData.languages}</span></p>
              </div>
            </div>
           { countryData.borders.length !== 0 && <div className="Country_border">
              <b>Border Countries: </b> &nbsp;
                {countryData.borders.map((border) => <Link key={border} to={`/${border}`}>{border}</Link>
                 )}
            </div>}
          </div>
        </div>
      </div>
      </main>
    </>
  )
}

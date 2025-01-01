import { NavLink, Link } from "react-router";



export default function CountryCard({name, flags, population, region, capital, data}) {

  return (
    <>
    <NavLink to={`/${name}`} className="country" state={data}>
      <div className="country_flag">
        <img src={flags} alt={name}/>
      </div>
      <h3>{name}</h3>
      <p><b>Population:</b> {population}</p>
      <p><b>Region:</b> {region}</p>
      <p><b>Capital:</b> {capital}</p>
    </NavLink>
    </>
  )
}

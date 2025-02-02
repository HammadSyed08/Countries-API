export default function Selector({setSelector}) {
  return (
    <div className="dropdown">
      <select className="filter_by_region" onChange={(e) => setSelector(e.target.value.toLowerCase())}>
        <option hidden>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}

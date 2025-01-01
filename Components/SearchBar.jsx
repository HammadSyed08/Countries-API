import React from 'react'

export default function SearchBar({setSearch}) {
  return (
    <div className="search_bar">
      <i className="fa-solid fa-magnifying-glass" />
      <input 
      onChange={(e) => setSearch(e.target.value.toLowerCase())} 
      type="text" 
       placeholder="Search For a Country..." />
    </div>

  )
}

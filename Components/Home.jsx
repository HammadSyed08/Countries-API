import { useState, useEffect  } from 'react'
import SearchBar from './SearchBar.jsx'
import Selector from './Selector.jsx'
import CountryList from './CountryList.jsx'
import CountriesListShimmer from './CountriesListShimmer.jsx'
import { useTheme } from '../Hooks/useTheme.jsx'

export default function Home() {
  const [search, setSearch] = useState('')
  const [dark] = useTheme()
  const [WindowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight})

 
  useEffect(() => {
    window.addEventListener('resize' , () => {
      setWindowSize({width: window.innerWidth, height: window.innerHeight})
      // setWinHeight(window.innerHeight)
      
    })
  }, [])

  return (
    <main className={`${dark? 'dark' : ''}`}>
      <div className="Search_dropdown">
        <SearchBar setSearch={setSearch} />
        <Selector setSelector={setSearch} />
      </div>
      <h1 style={{textAlign: 'center'}}>{WindowSize.width} X {WindowSize.height}</h1>
      <CountryList search={search} />
    </main>
  )
}

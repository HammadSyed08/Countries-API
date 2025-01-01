import { useTheme } from '../Hooks/useTheme'

const Header = () => {
  const [dark, setDark] = useTheme()
  

  // if (dark){
  //   document.body.classList.add('dark')
  // }else {
  //   document.body.classList.remove('dark')
  // }

  
  return (
    <>
    <header className={`${dark ? 'dark' : ''}`}>
    <div className="container" onClick={() => {
       setDark(!dark)
       localStorage.setItem('darkMode', !dark)
    }}>
      <h1><a href="/">Where in the World?</a></h1>
      <div className="Dark_light_mode">
        <i className={`fa-solid fa-${dark ? 'sun' : 'moon'}`}/>&nbsp;&nbsp;{dark ? 'Light' : 'Dark'} Mode
      </div>
    </div>
  </header>
  </>
  )
}

export default Header

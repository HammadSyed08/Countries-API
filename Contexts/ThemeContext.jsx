import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({children}) {

  const [dark, setDark] = useState(JSON.parse(localStorage.getItem('darkMode')))

  return (
  <ThemeContext.Provider value={[dark, setDark]}>
    {children}
  </ThemeContext.Provider>
  )
}
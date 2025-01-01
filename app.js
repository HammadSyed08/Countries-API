import Header from './Components/Header.jsx'
import './App.css'
import { Outlet } from "react-router";
import { useState } from 'react';
import { ThemeContext, ThemeProvider } from './Contexts/ThemeContext.jsx';

const App = () => {
  return (
      <ThemeProvider>
      <Header/>
      <Outlet/>
      </ThemeProvider>
  )
}

export default App
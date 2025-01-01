import { createRoot } from 'react-dom/client'
import App from './app.js'
import { BrowserRouter, Routes, Route} from "react-router";
import Home from './Components/Home.jsx'
import Error from './Components/Error.jsx';
import CountryDetail from './Components/CountryDetail.jsx';


const root = createRoot(document.querySelector('#root'))

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route path="/" element={<Home/>}/>
      <Route path="/:countryDetail" element={<CountryDetail/>}/>
      <Route path="/*" element={<Error/>} />
      </Route>
    </Routes>
  </BrowserRouter>)


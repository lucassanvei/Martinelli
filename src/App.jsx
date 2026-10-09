import {Routes, Route, BrowserRouter} from 'react-router-dom'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import Home from './pages/Home'
import Sobre from './pages/Sobre'

import './styles/global.css'

export default function App(){
  return (
    <BrowserRouter>
    <div className='App-container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Sobre' element={<Sobre />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}
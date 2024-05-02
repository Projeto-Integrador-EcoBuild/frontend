import React from 'react'
import Menu from './components/Menu/Menu'
import Rodape from './components/Rodape/Rodape'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './paginas/home/Home'
import Sobre from './paginas/sobre/Sobre'
import Login from './paginas/login/Login'

export const App = () => {
  return (
  <>
    <BrowserRouter>
      <Menu />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      <Rodape />
    </BrowserRouter>
  </>
  )
}

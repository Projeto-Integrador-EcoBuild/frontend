import React from 'react'
import Menu from './components/Menu/Menu'
import Rodape from './components/Rodape/Rodape'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './paginas/home/Home'
import Sobre from './paginas/sobre/Sobre'
import Login from './paginas/login/Login'
import Cadastro from './paginas/cadastro/Cadastro'
import { AuthProvider } from './contexts/AuthContext';
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Menu />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path='/sobre' element={<Sobre />} />
              <Route path='/login' element={<Login />} />
              <Route path='/cadastro' element={<Cadastro />} />
            </Routes>
          </div>
          <Rodape />
        </BrowserRouter>
      </AuthProvider>

    </>
  )
}

export default App;

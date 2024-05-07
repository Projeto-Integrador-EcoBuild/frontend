import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
import homeLogo from '../../assets/img/logo-nome-naturalar.webp'

function Menu(){
  return (
    <>
    <div className='w-full navbar text-white flex justify-center py-4 bg-green-dark'>
        <div className="container flex justify-between text-lg">
          <div className='text-2xl font-bold uppercase'>
              <img src={homeLogo} alt="Logo da Naturalar" className='w-2/3 imagem' />
          </div>

          <div className='flex gap-4'>
            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/sobre' className='hover:underline'>Sobre</Link>
            <Link to='/produtos' className='hover:underline'>Produtos</Link>
            <Link to='/login' className='hover:underline'>Login</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
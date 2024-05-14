import React, { useContext } from 'react'
import { Link, useInRouterContext } from 'react-router-dom'
import './Menu.css'
import homeLogo from '../../assets/img/logo-nome-naturalar.webp'
import { AuthContext } from '../../contexts/AuthContext'

function Menu() {
  let navbarComponent
  const { usuario } = useContext(AuthContext)
  let tipo: string = usuario.tipo
  const { quantidadeItems } = useContext(AuthContext)

  if (tipo === "cliente") {
    navbarComponent = (
      <div className='w-full navbar text-white flex justify-center py-4 bg-green-dark'>
        <div className="container flex justify-between text-lg">
          <div className='text-2xl font-bold uppercase'>
            <img src={homeLogo} alt="Logo da Naturalar" className='w-2/3 imagem' />
          </div>

          <div className='flex gap-4'>
            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/sobre' className='hover:underline'>Sobre</Link>
            <Link to='/produtos' className='hover:underline'>Produtos</Link>
            <Link to='/carrinho' className='hover:underline'>Carrinho[{quantidadeItems}]</Link>
            <Link to='/' className='hover:underline'>Logout</Link>
          </div>
        </div>
      </div>
    )
  } 
  
  if (tipo === "funcionario") {
    navbarComponent = (
      <div className='w-full navbar text-white flex justify-center py-4 bg-green-dark'>
        <div className="container flex justify-between text-lg">
          <div className='text-2xl font-bold uppercase'>
            <img src={homeLogo} alt="Logo da Naturalar" className='w-2/3 imagem' />
          </div>

          <div className='flex gap-4'>
            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/sobre' className='hover:underline'>Sobre</Link>
            <Link to='/produtos' className='hover:underline'>Produtos</Link>
            <Link to='/categoria' className='hover:underline'>Categoria</Link>
            <Link to='/' className='hover:underline'>Logout</Link>
          </div>
        </div>
      </div>
    )

  } 
  
  if (tipo=== "") {
    navbarComponent = (
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
    )
  }

  console.log(tipo)
  console.log(usuario)

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Menu
import { useContext, } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Menu.css'
import homeLogo from '../../assets/img/Captura de tela 2024-05-15 090137.png'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../util/toastAlerta'
import { ShoppingCart, SignOut } from '@phosphor-icons/react'

function Menu() {
  let navbarComponent

  const { usuario, handleLogout } = useContext(AuthContext)
  let tipo: string = usuario.tipo
  const { quantidadeItems } = useContext(AuthContext)

  let navigate = useNavigate();

  function logout() {
    handleLogout()
    toastAlerta('Usuário deslogado com sucesso', 'info')
    navigate('/login')
  }

  if (tipo === "cliente") {
    navbarComponent = (
      <div className=' w-full ' >
        <div className='w-full navbar text-white flex justify-center py-4 px-4 bg-green-dark'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>
              <img src={homeLogo} alt="Logo da Naturalar" className='w-2/3 imagem' />
            </div>


          </div>
          <div className=' text-lg font-bold flex space-x-6 mt-2'>
            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/sobre' className='hover:underline'>Sobre</Link>
            <Link to='/produtos' className='hover:underline'>Produtos</Link>
            <Link to='/carrinho'>

              <div className='flex items-end'>
                <ShoppingCart size={32} />
                <span>{quantidadeItems}</span>
              </div>

            </Link>
            <Link to='/login' className='hover:underline' onClick={logout}>
              <SignOut size={32} />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (tipo === "funcionario") {
    navbarComponent = (
      <div className='w-full navbar text-white flex justify-center py-4 px-4 bg-green-dark'>
        <div className="container flex justify-between text-lg">
          <div className='text-2xl font-bold uppercase'>
            <img src={homeLogo} alt="Logo da Naturalar" className='w-2/3 imagem' />
          </div>

          <div className='flex gap-4 mt-2 font-bold '>
            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/sobre' className='hover:underline'>Sobre</Link>
            <Link to='/produtos' className='hover:underline'>Produtos</Link>
            <Link to='/categoria' className='hover:underline'>Categoria</Link>
            <Link to='/login' className='hover:underline' onClick={logout}>
              <SignOut size={32} />
            </Link>
          </div>
        </div>
      </div>
    )

  }

  if (tipo === "") {
    navbarComponent = (
      <div className='  w-full navbar text-white flex justify-center py-4 px-4 bg-green-dark'>
        <div className="container flex justify-between text-lg">
          <div className='text-2xl font-bold uppercase'>
            <img src={homeLogo} alt="Logo da Naturalar" className='w-2/3 imagem' />
          </div>

          <div className='flex gap-4 mt-2 font-bold '>
            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/sobre' className='hover:underline'>Sobre</Link>
            <Link to='/produtos' className='hover:underline'>Produtos</Link>
            <Link to='/login' className='hover:underline'>Login</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Menu
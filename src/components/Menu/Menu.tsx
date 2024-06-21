import { useContext, } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import homeLogo from '../../assets/img/Captura de tela 2024-05-15 090137.png'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../util/toastAlerta'
import { ShoppingCart, SignOut, UserCircle } from '@phosphor-icons/react'
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
      <div className='w-full' >
        <div className='w-full navbar text-white flex justify-center py-4 px-4 bg-green-dark'>
          <div className="container flex justify-between text-lg">
            <div className=''>
              <Link to='/home'>
                <img src={homeLogo} alt="Logo da Naturalar" className='w-2/3 imagem cursor-pointer' />
              </Link>

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
          <div className=''>
            <Link to='/home'>
              <img src={homeLogo} alt="Logo da Naturalar" className='w-2/3 imagem cursor-pointer' />
            </Link>
          </div>

          <div className='text-lg font-bold flex space-x-6 mt-2'>
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
      <div className="flex justify-center gap-12
       w-full  px-12 items-center bg-green-dark h-32 ">
        <div className='cp:hidden '>
          <Link to='/home'>
            <img src={homeLogo} alt="Logo da Naturalar" className='w-32  cursor-pointer' />
          </Link>
        </div>
        <form className=" relative bg-red-300 ">
          <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
            <svg
              width="17"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="search"
              className="w-5 h-5 text-gray-700"
            >
              <path
                d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                stroke="currentColor"
                stroke-width="1.333"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <input
            className="input rounded-full w-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
            placeholder="Search..."

            type="text"
          />
          <button type="reset" className="absolute right-3 -translate-y-1/2 top-1/2 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </form>

        <ul className='text-lg  flex gap-4 items-center text-white' >
          <li>Produtos</li>
          <li>Sobre nós</li>
          <div className=' flex items-center gap-1 '>
            <UserCircle size={56}><Link to='/login' className='hover:underline cursor-pointer'> </Link> </UserCircle>
            <div className=' w-18'>
              <p>  <Link to='/login' className='hover:underline'> Entre ou </Link></p>
              <strong> <Link to='/login' className='hover:underline'>Cadastre-se</Link></strong>
            </div>

          </div>

        </ul>




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
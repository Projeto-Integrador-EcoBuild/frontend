import { useContext, } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import homeLogo from '../../assets/img/Captura de tela 2024-06-21 221639.png'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../util/toastAlerta'
import { SignOut, User, ShoppingBag, List } from '@phosphor-icons/react'
import './Menu.css'
import 'flowbite';
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
      <div className=" justify-evenly  font-medium gap-12 bg-green-light text-green-dark 
      w-full  items-center  pb-8 pt-4 px-4 lg:flex xl:flex 2xl:flex">
        <div className=' flex w-full items-center justify-around cp:visible sm:visible mb-4 lg:hidden
        xl:hidden 2xl:hidden'>

          <div className='flex items-end '>
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <List size={32} />
            </button>

            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
              <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                  <Link to='/home' >
                    <div>
                      <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">Home</li>
                    </div>
                  </Link>
                  <Link to='/sobre' >
                    <div>
                      <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">Sobre nós</li>
                    </div>
                  </Link>
                  <Link to='/produtos' >
                    <div>
                      <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">Produtos</li>
                    </div>
                  </Link>

                  <Link to='/login' onClick={logout}>
                    <div>
                      <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">Sair</li>
                    </div>

                  </Link>

                </ul>
              </div>
            </aside>

          </div>

          <Link to='/home'>
            <img src={homeLogo} alt="Logo da Naturalar" className='w-36 2xl:w-48 cursor-pointer' />
          </Link>
          <Link to='/carrinho'>

            <div className='flex items-end '>
              <ShoppingBag size={32} />
              <span>{quantidadeItems}</span>
            </div>

          </Link>
        </div>

        <div className='cp:hidden sm:hidden md:hidden '>
          <Link to='/home'>
            <img src={homeLogo} alt="Logo da Naturalar" className='w-36 2xl:w-48 cursor-pointer' />
          </Link>
        </div>
        <form className=" relative  w-[45%] cp:w-full sm:w-full md:w-full">
          <input
            className=" rounded-xl w-full font-light px-8 py-3 border-2 border-transparent  placeholder-gray-400 transition-all duration-300 "
            placeholder="O que você está procurando?"
            type="text"
          />
          <button className="absolute right-4 -translate-y-1/2 top-1/2 p-1 sm:right-2">
            <svg
              width="17"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="search"
              className="w-5 h-5 text-green-dark"
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
        </form>

        <ul className=' flex gap-12 items-center text-lg cp:hidden sm:hidden
         sm:text-sm sm:gap-10 md:text-base lg:gap-6 2xl:text-xl md:hidden ' >
          <li><Link to='/sobre' >Sobre nós</Link></li>
          <li><Link to='/produtos' >Produtos</Link></li>
          <Link to='/carrinho'>

            <div className='flex items-end '>
              <ShoppingBag size={32} />
              <span>{quantidadeItems}</span>
            </div>

          </Link>
          <Link to='/login' className=' cp:hidden' onClick={logout}>
            <SignOut size={32} />
          </Link>


        </ul>




      </div>



    )
  }

  if (tipo === "funcionario") {
    navbarComponent = (
      <div className="flex justify-evenly text-lg font-medium gap-12 bg-green-light text-green-dark 
      w-full  items-center  pb-8 pt-4 
      sm:gap-4 sm:px-4 md:px-4 md:gap-4
        ">
        <div className='cp:hidden '>
          <Link to='/home'>
            <img src={homeLogo} alt="Logo da Naturalar" className='w-36 sm:w-28 lg:w-48 xl:w-52 2xl:w-56 cursor-pointer' />
          </Link>
        </div>


        <ul className=' flex gap-12 items-center text-lg cp:gap-9 sm:text-lg sm:gap-10 md:text-xl lg:gap-16 lg:text-xl xl:text-2xl 2xl:text-3xl' >
          <li className='cp:visible sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'><Link to='/home' className='  '>Home</Link></li>
          <li><Link to='/sobre' >Sobre</Link></li>
          <li><Link to='/categoria' >Categorias</Link></li>
          <li><Link to='/produtos' >Produtos</Link></li>
          <li><Link to='/login' onClick={logout}>
            <SignOut size={32} />
          </Link></li>

        </ul>




      </div>
    )

  }

  if (tipo === "") {
    navbarComponent = (
      <div className=" justify-evenly  font-medium gap-12 bg-green-light text-green-dark 
      w-full  items-center  pb-8 pt-4 px-4 lg:flex xl:flex 2xl:flex">
        <div className=' flex w-full items-center justify-around cp:visible sm:visible mb-4 lg:hidden
        xl:hidden 2xl:hidden'>

          <div className='flex items-end '>

            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
            </button>

            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
              <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                  <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                    <Link to='/home' >Home</Link></li>
                  <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"><Link to='/sobre' >Sobre nós</Link></li>
                  <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"><Link to='/produtos' >Produtos</Link></li>
                </ul>
              </div>
            </aside>


          </div>

          <Link to='/home'>
            <img src={homeLogo} alt="Logo da Naturalar" className='w-36 2xl:w-48 cursor-pointer' />
          </Link>
          <Link to='/login'>

            <div className='flex items-end '>
              <User size={32} />
            </div>

          </Link>
        </div>

        <div className='cp:hidden sm:hidden md:hidden '>
          <Link to='/home'>
            <img src={homeLogo} alt="Logo da Naturalar" className='w-36 2xl:w-48 cursor-pointer' />
          </Link>
        </div>
        <form className=" relative  w-[45%] cp:w-full sm:w-full md:w-full lg:w-[40%]">
          <input
            className=" rounded-xl w-full font-light px-8 py-3 border-2 border-transparent  placeholder-gray-400 transition-all duration-300 "
            placeholder="O que você está procurando?"
            type="text"
          />
          <button className="absolute right-4 -translate-y-1/2 top-1/2 p-1 sm:right-2">
            <svg
              width="17"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="search"
              className="w-5 h-5 text-green-dark"
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
        </form>

        <ul className=' flex gap-12 items-center text-lg cp:hidden md:hidden sm:hidden sm:text-sm sm:gap-10 md:text-base lg:text-base lg:gap-6 2xl:text-xl ' >
          <li><Link to='/sobre' >Sobre nós</Link></li>
          <li><Link to='/produtos' >Produtos</Link></li>
          <Link to='/login'><div className=' flex items-center gap-2'>
            <User size={40}></User>
            <div className=' w-18 '>
              <p>   Entre ou </p>
              <strong> Cadastre-se</strong>
            </div>  </div>
          </Link>




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
import { useContext, useState, ChangeEvent, useEffect } from 'react'
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
  const [abrirMenu, setAbrirMenu] = useState(false);
  const [nome, setNome] = useState("");
  let navigate = useNavigate();

  function clicarEmBotao() {
    setAbrirMenu(true);
  }

  function fechar() {
    setAbrirMenu(false);
  }


  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setNome(e.target.value);
  }


  async function buscarProdutos(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    let nomeBusca = nome.toLowerCase();

    navigate(`/busca/${nomeBusca}`)

  }

  function logout() {
    handleLogout()
    setNome("")
    toastAlerta('Usuário deslogado com sucesso', 'info')
    navigate('/login')
  }

  if (tipo === "cliente") {

    navbarComponent = (


      <div className=" justify-evenly  font-medium gap-12 bg-green-light text-green-dark 
      w-full  items-center  pb-3 pt-4 px-4 lg:flex xl:flex 2xl:flex">

        <div className=' flex w-full items-center justify-around cp:visible sm:visible mb-4 lg:hidden
        xl:hidden 2xl:hidden'>
          {abrirMenu && (
            <div className='flex flex-row '>
              <div className='fixed top-0 left-0 z-40 h-screen overflow-y-auto flex flex-row  w-[100%] bg-opacity-75 bg-black opacity-100 ' onClick={fechar}>

              </div>
              <div className='fixed top-0 left-0 z-40 h-screen overflow-y-auto  bg-white w-48  '>


                <button type="button" onClick={fechar} data-drawer-hide="drawer-example" aria-controls="drawer-example" className="text-green-hover bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center" >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close menu</span>
                </button>

                <ul className="space-y-2 font-medium mt-12">
                  <Link to='/home' onClick={fechar}>
                    <div>
                      <li className="flex items-center p-2  rounded-lg dark:text-white text-green-hover hover:bg-gray-100 dark:hover:bg-gray-700 group">Home</li>
                    </div>
                  </Link>
                  <Link to='/sobre' onClick={fechar} >
                    <div>
                      <li className="flex items-center p-2 text-green-hover rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">Sobre nós</li>
                    </div>
                  </Link>
                  <Link to='/produtos' onClick={fechar} >
                    <div>
                      <li className="flex items-center p-2 text-green-hover rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">Produtos</li>
                    </div>
                  </Link>

                  <Link to='/'  >
                    <div>
                      <li className="flex items-center p-2 text-green-hover rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"> Editar conta</li>
                    </div>
                  </Link>

                  <Link to='/' >
                    <div>
                      <li className="flex items-center p-2 text-green-hover rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"> Modo noturno</li>
                    </div>
                  </Link>

                  <Link to='/' >
                    <div>
                      <li className="flex items-center p-2 text-red-600 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">Sair</li>
                    </div>
                  </Link>


                </ul>
              </div>
            </div>

          )}


          <div className='flex items-end '>
            <button className='cursor-pointer' onClick={clicarEmBotao}>
              <List size={32} />
            </button>
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
        <form className=" relative  w-[45%] cp:w-full sm:w-full md:w-full" onSubmit={buscarProdutos}>
          <input
            className=" rounded-xl w-full font-light px-8 py-3 border-2 border-transparent  placeholder-gray-400 transition-all duration-300 "
            placeholder="O que você está procurando?"
            type="text"
            value={nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <button className="absolute right-4 -translate-y-1/2 top-1/2 p-1 sm:right-2 hover:cursor-pointer" >
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


      <div className=" justify-evenly  font-medium gap-12 bg-green-light text-green-dark 
      w-full  items-center  pb-3 pt-4 px-4 lg:flex xl:flex 2xl:flex">

        <div className=' flex w-full items-center justify-around cp:visible sm:visible mb-4 lg:hidden
        xl:hidden 2xl:hidden'>
          {abrirMenu && (
            <div className='flex flex-row '>
              <div className='fixed top-0 left-0 z-40 h-screen overflow-y-auto flex flex-row  w-[100%] bg-opacity-75 bg-black opacity-100 ' onClick={fechar}>

              </div>
              <div className='fixed top-0 left-0 z-40 h-screen overflow-y-auto  bg-white w-48  '>


                <button type="button" onClick={fechar} data-drawer-hide="drawer-example" aria-controls="drawer-example" className="text-green-hover bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center" >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close menu</span>
                </button>

                <ul className="space-y-2 font-medium mt-12">
                  <Link to='/home' onClick={fechar}>
                    <div>
                      <li className="flex items-center p-2  rounded-lg dark:text-white text-green-hover hover:bg-gray-100 dark:hover:bg-gray-700 group">Home</li>
                    </div>
                  </Link>
                  <Link to='/sobre' onClick={fechar} >
                    <div>
                      <li className="flex items-center p-2 text-green-hover rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">Sobre nós</li>
                    </div>
                  </Link>

                  <Link to='/categoria' onClick={fechar} >
                    <div>
                      <li className="flex items-center p-2 text-green-hover rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">Categoria</li>
                    </div>
                  </Link>

                  <Link to='/produtos' onClick={fechar} >
                    <div>
                      <li className="flex items-center p-2 text-green-hover rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">Produtos</li>
                    </div>
                  </Link>

                  <Link to='/'  >
                    <div>
                      <li className="flex items-center p-2 text-green-hover rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"> Editar conta</li>
                    </div>
                  </Link>

                  <Link to='/' >
                    <div>
                      <li className="flex items-center p-2 text-green-hover rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"> Modo noturno</li>
                    </div>
                  </Link>




                </ul>
              </div>
            </div>

          )}


          <div className='flex items-end '>
            <button className='cursor-pointer' onClick={clicarEmBotao}>
              <List size={32} />
            </button>
          </div>

          <Link to='/home'>
            <img src={homeLogo} alt="Logo da Naturalar" className='w-36 2xl:w-48 cursor-pointer' />
          </Link>
          <Link to='/login' onClick={logout}>
            <SignOut size={32} />
          </Link>
        </div>

        <div className='cp:hidden sm:hidden md:hidden '>
          <Link to='/home'>
            <img src={homeLogo} alt="Logo da Naturalar" className='w-36 2xl:w-48 cursor-pointer' />
          </Link>
        </div>
        <form className=" relative  w-[45%] cp:w-full sm:w-full md:w-full" onSubmit={buscarProdutos}>
          <input
            className=" rounded-xl w-full font-light px-8 py-3 border-2 border-transparent  placeholder-gray-400 transition-all duration-300 "
            placeholder="Qual o nome do produto ? "
            type="text"
            value={nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <button className="absolute right-4 -translate-y-1/2 top-1/2 p-1 sm:right-2 hover:cursor-pointer" >
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
          <li><Link to='/categoria' >Categorias</Link></li>
          <li><Link to='/produtos' >Produtos</Link></li>
          <Link to='/login' className=' cp:hidden' onClick={logout} >
       
            <SignOut size={32} />
          </Link>
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

          {abrirMenu && (
            <div className='flex flex-row '>
              <div className='fixed top-0 left-0 z-40 h-screen overflow-y-auto flex flex-row  w-[100%] bg-opacity-75 bg-black opacity-100 ' onClick={fechar}>

              </div>
              <div className='fixed top-0 left-0 z-40 h-screen overflow-y-auto  bg-white w-48  '>


                <button type="button" onClick={fechar} data-drawer-hide="drawer-example" aria-controls="drawer-example" className="text-green-hover bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center" >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close menu</span>
                </button>

                <ul className="space-y-2 font-medium mt-12">
                  <Link to='/home' onClick={fechar}>
                    <div>
                      <li className="flex items-center p-2  rounded-lg dark:text-white text-green-hover hover:bg-gray-100 dark:hover:bg-gray-700 group">Home</li>
                    </div>
                  </Link>
                  <Link to='/sobre' onClick={fechar} >
                    <div>
                      <li className="flex items-center p-2 text-green-hover rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">Sobre nós</li>
                    </div>
                  </Link>
                  <Link to='/produtos' onClick={fechar} >
                    <div>
                      <li className="flex items-center p-2 text-green-hover rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">Produtos</li>
                    </div>
                  </Link>

                  <Link to='/' >
                    <div>
                      <li className="flex items-center p-2 text-green-hover rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"> Modo noturno</li>
                    </div>
                  </Link>

                </ul>
              </div>
            </div>

          )}


          <div className='flex items-end '>
            <button className='cursor-pointer' onClick={clicarEmBotao}>
              <List size={32} />
            </button>
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
        <form className=" relative  w-[45%] cp:w-full sm:w-full md:w-full lg:w-[40%]" onSubmit={buscarProdutos}>
          <input
            className=" rounded-xl w-full font-light px-8 py-3 border-2 border-transparent  placeholder-gray-400 transition-all duration-300 "
            placeholder="O que você está procurando?"
            type="text"
            value={nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
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
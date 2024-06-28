import React, { useContext, useEffect, useState, ChangeEvent } from 'react';
import { Oval } from 'react-loader-spinner';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';
import CardCategoria from '../cardCategoria/cardCategoria';
import { toastAlerta } from '../../../util/toastAlerta';

function ListaCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoriasPesquisa, setCategoriasPesquisa] = useState<Categoria[]>([]);
  let navigate = useNavigate();
  const [nomePesquisa, setNomePesquisa] = useState("");
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategorias() {
    try {
      await buscar('/categoria', setCategorias, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'error')
        handleLogout()
      }
    }
  }


  function buscarNomeCategoria() {
    const resultado = categorias.filter(element => element.nome.toLowerCase().includes(nomePesquisa.toLowerCase()));
    setCategoriasPesquisa(resultado);
  }


  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info')
      navigate('/login');
    }
  }, [token]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setNomePesquisa(e.target.value);
  }
  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);


  useEffect(() => {
    buscarNomeCategoria();
  }, [nomePesquisa]);

  function handleSearchClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    buscarNomeCategoria();
  }
  return (
    <>

      <div className="flex justify-center w-full pt-4 h-full pb-4 px-5">
        <div className="container flex flex-col">

          <div className="container flex flex-row py-2 justify-between cp:flex-col cp:gap-6 " >

            <Link to={`/cadastrarCategoria`} className=' bg-green-claro py-4 px-4 rounded-lg  text-center text-3xl uppercase  text-green-hover hover:bg-green-hover hover:text-white '>
              <button>Cadastrar categoria</button>
            </Link>



            <form className=" relative  w-[45%] cp:w-full sm:w-1/2 md:w-1/2 cp:mb-6" onChange={buscarCategorias}  >
              <input
                className=" rounded-xl w-full font-light px-8 py-3 border-2 border-green-botao  placeholder-gray-400 transition-all duration-300 "
                placeholder="O que você está procurando?"
                type="text"
                value={nomePesquisa}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
              <button className="absolute right-4 -translate-y-1/2 top-1/2 p-2 pb-5 cp:pb-1  hover:cursor-pointer" onClick={handleSearchClick}>
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



          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 cp:grid-cols-1 sm:gap-3 gap-6">

            {nomePesquisa === "" ?

              categorias.map((categoria) => (
                <>
                  <CardCategoria key={categoria.id} categoria={categoria} />
                </>
              )) :

              categoriasPesquisa.map((categoria) => (
                <>
                  <CardCategoria key={categoria.id} categoria={categoria} />
                </>
              ))

            }




          </div>
          {categoriasPesquisa.length === 0 && nomePesquisa !== "" && (

            <p className='text-center text-2xl bg-green-light text-green-dark w-[100%] flex items-center border border-green-light justify-center h-20'>Nenhuma categoria encontrada no momento!</p>

          )}
        </div>
      </div>

      {categorias.length === 0 && (

        <div className=' flex justify-center items-center h-screen '>
          <Oval
            visible={true}
            height="300"
            width="200"
            color="#16a34a"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass="oval-wrapper mx-auto"
          />
        </div>

      )}

    </>
  );
}

export default ListaCategoria;
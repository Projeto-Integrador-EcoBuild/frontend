import React, { useContext, useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';
import CardCategoria from '../cardCategoria/cardCategoria';
import { toastAlerta } from '../../../util/toastAlerta';

function ListaCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  let navigate = useNavigate();

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

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info')
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);
  return (
    <>

      <div className="flex justify-center w-full pt-4 h-full pb-4 px-5">
        <div className="container flex flex-col">

          <div className="container flex flex-row py-2 justify-between " >

            <Link to={`/cadastrarCategoria`} className='w-1/5 sm:w-2/5 cp:w-4/5 text-white bg-green-600 hover:bg-green-700 text-center py-4 text-2xl'>
              <button>Cadastrar categoria</button>
            </Link>



            <form className="form relative w-1/4 cp:hidden sm:hidden">
              <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                <svg
                  width="20"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-labelledby="search"
                  className="w-20 h-8 text-black"
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
                className="input rounded-full px-8 py-3 border w-full border-black  "
                placeholder="Search..."
                type="text"
              />

            </form>



          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 cp:grid-cols-1 sm:gap-3 gap-6">
            {categorias.map((categoria) => (
              <>
                <CardCategoria key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
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
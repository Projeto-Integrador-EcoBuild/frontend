import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Categoria from '../../../models/Categoria';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta';
import { RotatingLines } from 'react-loader-spinner';
function FormCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const inputs = "border-green-dark  px-[10px] py-[11px]  border-2 rounded-[5px] w-full focus:ring-0 focus:border-2 focus:border-green-hover dark:bg-gray-inputs dark:focus:border-white dark:border-white dark:text-white "
  const label = "text-green-dark  font-semibold relative top-3  bg-white  dark:bg-gray-fundo dark:top-0 dark:text-white"
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    await buscar(`/categoria/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>,) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })

  }

  function atualizarEstadoTextArea(e: ChangeEvent<HTMLTextAreaElement>,) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })

  }
  async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categoria`, categoria, setCategoria, {
          headers: {
            'Authorization': token
          }
        })

        toastAlerta('Categoria atualizada com sucesso', 'info')
        retornar()

      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao atualizar a Categoria', 'error')
        }

      }

    } else {
      try {
        await cadastrar(`/categoria`, categoria, setCategoria, {
          headers: {
            'Authorization': token
          }
        })
        toastAlerta('Categoria cadastrada com sucesso', 'info')

      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao cadastrado a Categoria', 'error')
        }
      }
      setIsLoading(false);
    }

    retornar()
  }

  function retornar() {
    navigate("/categoria")
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'error')
      navigate('/login');
    }
  }, [token]);

  return (
    <div className="container flex flex-col mx-auto items-center py-20">
      <h1 className="text-4xl text-center pb-4  cp:text-3xl dark:text-white">{id === undefined ? 'Cadastre uma nova Categoria' : 'Editar Categoria'}</h1>
        
      
      <form onSubmit={gerarNovoCategoria} className="flex flex-col w-1/2 gap-4 cp:w-full">
        <div className="flex flex-col ">
          <label htmlFor="nome" className={label}>Nome : </label>
          <input
            type="text"
            required
            name="nome"
            minLength={5}
            maxLength={50}
            className={inputs}
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />

        </div>


        <div className="flex flex-col ">
        <label htmlFor="descricao" className={label}>Descrição : </label>
          <textarea
            required
            rows={4}
            name="descricao"
            className={inputs}
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstadoTextArea(e)} />
        </div>



        <div className='flex cp:justify-between justify-around  flex-row '>
          <button
            className="rounded text-white bg-red-400 hover:bg-red-700 px-8  py-4  text-xl"
            type="submit" onClick={retornar}
          >
            Cancelar
          </button><button
            className={`rounded text-white ${!categoria.nome ? 'disabled:bg-slate-200 ' : 'bg-green-600 hover:bg-green-700'} 
               py-4 px-8  text-xl `}
            type="submit"
            disabled={!categoria.nome}
          >
            {isLoading && (
              <div className="">
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              </div>
            )}
            {!isLoading && (id === undefined ? (categoria.nome ? 'Cadastrar' : 'Carregando') : (categoria.nome ? 'Editar' : 'Carregando'))}
          </button>

        </div>


      </form>
    </div>
  );
}

export default FormCategoria;
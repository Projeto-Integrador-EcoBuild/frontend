import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Categoria from '../../../models/Categoria';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta';
function FormCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

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
  async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>,) {
    e.preventDefault()

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
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-5xl text-center my-8 ">
        {id === undefined ? 'Cadastre uma nova Categoria' : 'Editar Categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-10" onSubmit={gerarNovoCategoria}>
        <div className=" flex flex-col static">
          <label htmlFor="nome" className="text-green-dark text-s font-semibold relative top-3 ml-[7px] px-[3px] bg-white w-fit">Nome</label>
          <input
            type="text"
            required
            name="nome"
            className="border-green-dark  px-[10px] py-[11px] text-s  border-2 rounded-[5px] w-full focus:ring-0 focus:border-2 focus:border-green-hover "
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />

        </div>


        <div className="input flex flex-col static">
          <label htmlFor="nome" className='text-green-dark text-s font-semibold relative top-3 ml-[7px] px-[3px] bg-white w-fit '>Descrição</label>
          <textarea
            required
            rows={4}
            name="descricao"
            className="border-green-dark  px-[10px] py-[11px] text-s  border-2 rounded-[5px] w-full focus:ring-0 focus:border-2 focus:border-green-hover "
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstadoTextArea(e)} />
        </div>



        <div className='flex '>
          <button
            className="rounded text-white bg-red-400 hover:bg-red-700 w-1/3 py-4 mx-auto block text-xl"
            type="submit" onClick={retornar}
          >
            Cancelar
          </button><button
            className="rounded text-white bg-green-600 hover:bg-green-700 w-1/3 py-4 mx-auto block text-xl"
            type="submit"
          >
            {id === undefined ? 'Cadastrar' : 'Editar'}
          </button>
        </div>


      </form>
    </div>
  );
}

export default FormCategoria;
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

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })

  }

  async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>) {
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
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastre uma nova Categoria' : 'Editar Categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">nome da Categoria</label>
          <input
            type="text"
            placeholder="nome"
            name='nome'
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
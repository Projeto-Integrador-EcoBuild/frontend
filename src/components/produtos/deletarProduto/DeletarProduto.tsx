import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import Produto from '../../../models/Produto'
import { buscar, deletar } from '../../../services/Service'
import { toastAlerta } from '../../../util/toastAlerta'

function DeletarProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info')
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function retornar() {
    navigate("/produtos")
  }

  async function deletarProduto() {
    try {
      await deletar(`/produtos/${id}`, {
        headers: {
          'Authorization': token
        }
      })

      toastAlerta('Produto apagado com sucesso', 'sucesso')

    } catch (error) {
      toastAlerta('Erro ao apagar o Produto', 'erro')
    }

    retornar()
  }
  return (
    <div className='w-[60%] cp:w-[90%] mx-auto  justify-center items-center dark:text-white py-8 '>
      <h1 className='text-4xl text-center  '>Deletar produto</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o produto a seguir?</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-slate-700'>
        <header className='py-2 px-6 bg-green-light text-2xl capitalize dark:bg-green-hover'>{produto.nome}</header>
        <div className="grid justify-center">
        <p className='text-xl h-full my-2 text-justify  p-2'><strong>Cód: </strong>  {produto.id}</p>
          <p className='text-xl h-full my-2 text-justify  p-2'><strong>Valor unitário: R$</strong>  {produto.preco}</p>
          <p className='text-xl h-full my-2 text-justify  p-2'><strong>Produtos em estoque: </strong>  {produto.quantidade}</p>
          <p className='text-xl h-full my-2 text-justify  p-2'><strong>Descrição: </strong>  {produto.descricao}</p>
          <img className='w-1/5 h-auto mx-auto max-w-xs' src={produto.foto} alt="Imagem ilustrativa" />
        </div>
        <div className="flex mt-4 ">
          <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2 text-lg' onClick={retornar}>Não</button>
          <button className='w-full text-slate-100 bg-green-400 hover:bg-green-600 flex items-center justify-center text-lg' onClick={deletarProduto}>
            Sim
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletarProduto
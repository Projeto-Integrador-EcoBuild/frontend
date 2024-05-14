import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'
import { AuthContext } from '../../../contexts/AuthContext'

interface CardProdutoProps {
    product : Produto
}

function CardProduto({ product }: CardProdutoProps) {

  let altEstado
  const { usuario } = useContext(AuthContext)
  let tipo: string = usuario.tipo

  if(tipo === "funcionario"){
    altEstado=(
        <div className="flex">
                <Link to={`/editarProduto/${product.id}`} className='w-full text-white bg-green-600 hover:bg-green-700 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarProduto/${product.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
    )
  } else if(tipo === "cliente"){
    altEstado=(
        <div className="flex">
            
                <Link to={`/editarProduto/${product.id}`} className='w-full text-white bg-green-600 hover:bg-green-700 flex items-center justify-center py-2'>
                    <button>Adicionar ao carrinho</button>
                </Link>
                <Link to={`/deletarProduto/${product.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Remover do carrinho</button>
                </Link>
            </div>
    )
  }

    return (
        <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
            <div>
                <div className="flex w-full bg-green-600 py-2 px-4 items-center gap-4">
                    <img src={product.foto} className='h-12 rounded-full' alt="" />
                    <h3 className='text-lg font-bold text-center uppercase '>{product.nome}</h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{product.descricao}</h4>
                    <p>{product.preco}</p>
                    <p>{product.quantidade}</p>
                    <p>Categoria: {product.categoria?.nome}</p>
                </div>
            </div>
            {altEstado}
        </div>
    )
}

export default CardProduto
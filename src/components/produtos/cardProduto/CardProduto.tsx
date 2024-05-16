import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'
import { AuthContext } from '../../../contexts/AuthContext'
import DeletarProduto from '../deletarProduto/DeletarProduto'

interface CardProdutoProps {
    product: Produto
}

function CardProduto({ product }: CardProdutoProps) {

  let altEstado
  const { usuario } = useContext(AuthContext)
  let tipo: string = usuario.tipo
  if(tipo === "funcionario"){
    altEstado = (
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                    <div className='flex justify-center items-center'>
                        <img className='w-32 h-32' src={product.foto}  alt="Imagem ilustrativa"/>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold mb-2 truncate" style={{fontSize: '1.4rem'}}>{product.nome}</div>
                            <p className="text-gray-700 text-xl truncate">{product.descricao}</p>
                            <p className="text-gray-700 text-xl"><strong>Unidades:</strong> { product.quantidade }</p>
                            <p className='text-gray-700 text-xl'><strong>R${ product.preco }</strong></p>
                            <span className='text-gray-700 text-base'><strong>Categoria</strong> {product.categoria?.nome}</span>
                    </div>
                    <div className="flex justify-center gap-1 px-6 pt-4 pb-2">
                        <Link to={`/editarProduto/${product.id}`} className='w-full text-slate-100 bg-green-600 hover:bg-green-700 flex items-center justify-center py-2'>
                            <button>Editar</button>
                        </Link>
                        <Link to={`/deletarProduto/${product.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                            <button>Deletar</button>
                        </Link >
                    </div>
                </div>

    )
  }
  
  else if (tipo === "cliente" || tipo === "") {
        altEstado = (
            <Link to={`/item/${product.id}`} >
                <div className='border flex flex-col rounded-3xl border-transparent justify-between hover:opacity-75 cursor-pointer h-1/2 mb-5 '>

                    <img src={product.foto} alt="Foto do produto" className='min-h-[400px]  object-cover w-full' />

                    <h3 className="ml-3 text-lg text-gray-700">{product.nome}</h3>
                    <p className="ml-3 mb-4 text-lg font-medium text-gray-900">R${product.preco}</p>
                </div>
            </Link>

        )
    }
	
	return (
        <>
        {altEstado}
        </>
        
    )
  
  
  
  
  
  
  
  
  
  
  
  
  }
  
  export default CardProduto
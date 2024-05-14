import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'

interface CardProdutoProps {
    product : Produto
}

function CardProduto({ product }: CardProdutoProps) {
    return (
        <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
            <div>
                <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
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
            <div className="flex">
                <Link to={`/editarProduto/${product.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarProduto/${product.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardProduto
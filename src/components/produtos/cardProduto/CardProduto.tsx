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
    const { adicionarProduto, removerProduto } = useContext(AuthContext)

    if (tipo === "funcionario") {
        altEstado = (
            <div className="flex justify-center gap-1 px-6 pt-4 pb-2">
                <Link to={`/editarProduto/${product.id}`} className='w-full text-slate-100 bg-green-600 hover:bg-green-700 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarProduto/${product.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link >
            </div>
        )
    } else if (tipo === "cliente") {
        altEstado = (
            <div className="flex">

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => adicionarProduto(product)}>Adicionar</button>

                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => removerProduto(product.id)}>Remover</button>
            </div>
        )
    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
            <div className='flex justify-center items-center'>
                <img className='' src={product.foto}  alt="Imagem ilustrativa" width='150' height='150'/>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold mb-2 text-2xl">{product.nome}</div>
                    <p className="text-gray-700 text-xl">{product.descricao}</p>
                    <p className="text-gray-700 text-xl"><strong>Unidades:</strong> { product.quantidade }</p>
                    <p className='text-gray-700 text-xl'><strong>R${ product.preco }</strong></p>
                    <span className='text-gray-700 text-base'><strong>Categoria</strong> {product.categoria?.nome}</span>
            </div>
            {altEstado}
        </div>
    )
}

export default CardProduto



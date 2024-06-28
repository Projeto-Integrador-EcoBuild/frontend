import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'
import { AuthContext } from '../../../contexts/AuthContext'

interface CardProdutoProps {
    product: Produto
}

function CardProduto({ product }: CardProdutoProps) {

    const { usuario } = useContext(AuthContext)
    let tipo: string = usuario.tipo

    let altEstado

    if (tipo === "funcionario") {
        altEstado = (
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className='flex justify-center items-center'>
                    <img className='w-32 h-32' src={product.foto} alt="Imagem ilustrativa" />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold mb-2 truncate text-2xl cp:text-base capitalize">{product.nome}</div>
                    <p className="text-gray-700 text-xl cp:text-base truncate">{product.descricao}</p>
                    <p className="text-gray-700 text-xl cp:text-base"><strong>Unidades:</strong> {product.quantidade}</p>
                    <p className='text-gray-700 text-xl cp:text-base'><strong>R${product.preco}</strong></p>
                    <span className='text-gray-700 text-sm'><strong>Categoria:</strong> {product.categoria?.nome}</span>
                </div>
                <div className="flex justify-center gap-1 px-6 pt-4 pb-2">
                    <Link to={`/editarProduto/${product.id}`} className='w-full text-slate-100 bg-green-600 hover:bg-green-700 flex items-center justify-center py-2'>
                        <button>Editar</button>
                    </Link>
                    <Link to={`/deletarProduto/${product.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                        <button>Deletar</button>
                    </Link>
                </div>
            </div>
        )
    } else if (tipo === "cliente" || tipo === "") {
        altEstado = (
            <Link to={`/item/${product.id}`}>
                <div className='flex flex-col border-transparent hover:opacity-75 cursor-pointer w-full text-center gap-2'>
                    <img src={product.foto} alt="Foto do produto" className='h-[250px] object-cover w-full' />
                    <h3 className="line-clamp-2 text-xl h-14 capitalize">{product.nome}</h3>
                    <p className="text-lg"><strong>R${(product.preco - (product.preco * 0.10)).toFixed(2).replace(".", ",")}</strong> no PIX</p>
                    {product.preco < 10 ? (
                        <p className="text-lg"><strong>1X</strong> de <strong>R${product.preco.toFixed(2).replace(".", ",")}</strong></p>
                    ) : (
                        <p className="text-lg"><strong>2X</strong> de <strong>R${(product.preco / 2).toFixed(2).replace(".", ",")}</strong></p>
                    )}
                    <button className='rounded-lg bg-green-botao text-white text-lg py-3 uppercase text-center'>Comprar</button>
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

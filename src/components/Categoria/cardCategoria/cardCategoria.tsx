import React from 'react'
import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategoria({categoria}: CardCategoriaProps) {
  return (
    <div className='border flex flex-col rounded-1xl  justify-between border-gray-400 dark:text-white dark:border-green-dark'>
      <header className="py-2 px-6 bg-green-claro dark:bg-green-dark h-36 flex justify-center items-center text-3xl text-center capitalize ">{categoria.nome}</header>
      <p className='p-6 text-justify text-2xl '>{categoria.descricao}</p>
      <div className="flex">
        <Link to={`/editarCategoria/${categoria.id}`} className=' bg-green-claro text-center p-3 w-full text-2xl uppercase 
         dark:text-white dark:bg-green-botao dark:hover:bg-green-hover
         text-green-hover hover:bg-green-hover hover:text-white '>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='text-slate-100 text-2xl p-3 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria
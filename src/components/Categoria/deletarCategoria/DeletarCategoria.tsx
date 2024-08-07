import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../../../contexts/AuthContext'
import Categoria from '../../../models/Categoria'
import { buscar, deletar } from '../../../services/Service'
import { toastAlerta } from '../../../util/toastAlerta'

function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categoria/${id}`, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'error')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'error')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categoria")
    }

    async function deletarCategoria() {
        try {
            await deletar(`/categoria/${id}`, {
                headers: {
                    'Authorization': token
                }
            })
            toastAlerta('Categoria apagada com sucesso', 'info')

        } catch (error) {
            toastAlerta('Erro ao apagar a Categoria', 'error')
        }

        retornar()
    }
    return (
        <div className=' w-[50%] mx-auto py-20 cp:w-[70%] sm:w-[70%]  dark:text-white h-screen'>
            <h1 className='text-4xl text-center py-4'>Deletar Categoria</h1>

            <p className='text-center font-semibold '>Você tem certeza de que deseja apagar a categoria a seguir?</p>

            <div className='border flex flex-col  overflow-hidden justify-between  border-gray-400 mt-6'>
                <header className="py-2 px-6  bg-green-light dark:bg-green-dark text-black dark:text-white text-4xl text-center capitalize cp:text-2xl ">{categoria.nome}</header>
                <p className='p-8 text-3xl cp:text-xl h-full'>{categoria.descricao}</p>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-green-botao hover:bg-green-700 flex items-center justify-center' onClick={deletarCategoria}>
                        Sim
                    </button>
                </div>
            </div>

            
        </div>

        
    )
}

export default DeletarCategoria
import React, { useContext, useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto'
import { buscar } from '../../../services/Service';
import CardProduto from '../cardProduto/CardProduto';
import { toastAlerta } from '../../../util/toastAlerta'
import BotaoOrdernar from './botaoOrdenar';



export default function ListaProdutosCategoria() {
    const { id } = useParams<{ id: string }>();
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [categoria, setCategoria] = useState<{ nome?: string }>({});
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
    const [zerou, setZerou] = useState(false);
    async function buscarProdutos() {
        try {
            await buscar(`/produtos/categoria/${id}`, setProdutos,
                {
                    headers: {
                        Authorization: token,
                    }
                }
            )
            setZerou(true);
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }

    async function buscarCategoria() {
        try {
            await buscar(`/categoria/${id}`, setCategoria,
                {
                    headers: {
                        Authorization: token,
                    }
                }
            )
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        buscarProdutos();
    }, [id]);

    useEffect(() => {
        buscarCategoria();
    }, [id]);



    return (
        <div className=' py-12 px-10 2xl:px-40 '>



            <div className='flex flex-col  gap-2 justify-around w-full  dark:text-white '>
                <div className='flex flex-row justify-between items-center  mb-12 cp:flex-col cp:gap-4 md:flex-col md:gap-4'>
                    {categoria.nome == undefined ? <p>Procurando por ...</p> : <span className='capitalize font-medium text-3xl dark:text-white text-green-hover'>{categoria.nome}</span>
                    }
                    <BotaoOrdernar listaProduto={produtos} setListaProduto={setProdutos} />


                </div>

                {produtos.length === 0 && !zerou && (
                    <div className=' flex justify-center items-center  '>
                        <Oval
                            visible={true}
                            height="300"
                            width="200"
                            color="#16a34a"
                            ariaLabel="oval-loading"
                            wrapperStyle={{}}
                            wrapperClass="oval-wrapper mx-auto"
                        />

                    </div>
                )}
                {zerou && produtos.length === 0 && (
                    <p className='text-center text-2xl bg-green-light text-green-dark flex items-center border border-green-light justify-center h-20 rounded-2xl'>Nenhum produto encontrado no momento!</p>
                )}
                <div className=' mx-auto grid grid-cols-4 gap-20 cp:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:gap-12'>


                    {produtos.map((produto) => (
                        <CardProduto key={produto.id} product={produto} />
                    ))}
                </div>
            </div>
        </div>
    )
}
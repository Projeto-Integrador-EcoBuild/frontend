import { useParams } from 'react-router-dom';
import { useContext, useState, ChangeEvent, useEffect } from 'react'
import Produto from '../../../models/Produto';
import { buscar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContext';
import { toastAlerta } from '../../../util/toastAlerta';
import CardProduto from '../cardProduto/CardProduto';
import { Oval } from 'react-loader-spinner';
import BotaoOrdernar from './botaoOrdenar';

export default function ListaProdutosBusca() {
    const { nome } = useParams();
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [zerou, setZerou] = useState(false); 
    useEffect(() => {
        buscarProdutos();
    }, [nome]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarProdutos() {
        try {
            await buscar(`/produtos/nome/${nome}`, setProdutos, {
                headers: {
                    Authorization: token,
                },
            });
            console.log("entrou aqui")
            setZerou(true);
          
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }


    return (
        <div className=' my-12 mx-10 2xl:mx-40 '>
            {produtos.length === 0 && !zerou  && (
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
           

            <div className='flex flex-col  gap-2 justify-around w-full   '>
                <div className='flex flex-row justify-between items-center  mb-12 cp:flex-col cp:gap-4 md:flex-col md:gap-4'>
                    <p className='text-3xl  cp:text-lg '>Procurando por : <span className='capitalize font-medium'>{nome}</span></p>
                    <BotaoOrdernar listaProduto={produtos} setListaProduto={setProdutos} />


                </div>
                {zerou  && produtos.length === 0 && (
                <p className='text-center text-2xl bg-green-light text-green-dark flex items-center border border-green-light justify-center h-20'>Nenhum produto encontrado no momento!</p>
                     )}
                <div className=' mx-auto grid grid-cols-4 gap-20 cp:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:gap-12'>

                    
                    {produtos.map((produto) => (
                        <CardProduto key={produto.id} product={produto} />
                    ))}
                </div>
            </div>
        </div>
    );
}

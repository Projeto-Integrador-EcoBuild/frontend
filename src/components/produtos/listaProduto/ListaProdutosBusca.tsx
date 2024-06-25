import { useParams } from 'react-router-dom';
import { useContext, useState, ChangeEvent, useEffect } from 'react'
import Produto from '../../../models/Produto';
import { buscar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContext';
import { toastAlerta } from '../../../util/toastAlerta';
import CardProduto from '../cardProduto/CardProduto';

export default function ListaProdutosBusca() {
    const { nome } = useParams();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
    const [produtos, setProdutos] = useState<Produto[]>([]);
    async function buscarProdutos() {
        try {
            await buscar(`/produtos/nome/${nome}`, setProdutos, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    } useEffect(() => {
        buscarProdutos();
    }, [produtos.length]);
    return (
        <div className='container mx-auto grid grid-cols-4 gap-20 cp:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:gap-12'>
            {produtos.map((produto) => (
              <CardProduto key={produto.id} product={produto} />
            ))}
        </div>
    );
}

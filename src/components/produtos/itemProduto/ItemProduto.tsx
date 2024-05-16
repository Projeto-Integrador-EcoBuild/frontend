import React from 'react';
import Produto from '../../../models/Produto';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta'

interface CardProdutoProps {
  product: Produto
}

function ItemProduto() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);
  const token = usuario.token;
  const { adicionarProduto } = useContext(AuthContext)
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: '',
    descricao: '',
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    descricao: '',
    foto: '',
    preco: 0,
    quantidade: 0,
    categoria: null,
  });

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categoria/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategorias() {
    try {
      await buscar('/categoria', setCategorias, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      console.log(error)
    }
  }

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
      buscarCategoriaPorId(id);
    }
  }, [id]);

  function verificarUsuario(product: Produto) {
    if (token === "") {
      toastAlerta('Você deve realizar o login! ', 'erro')
      navigate('/login')
    }
    else {
      adicionarProduto(product)
      toastAlerta('Produto adicionado ao carrinho', 'info')
    }
  }
  return (
    <>
      <div className='flex items-center justify-center h-screen '>

        <div className='flex justify-center items-center w-1/2 h-4/5 '>
          <img src={produto.foto} alt="imagem do produto" className='object-cover h-4/5 w-3/5' />
        </div>
        <div className="w-1/2 ">
          <div className="mr-12 space-y-4 ">
            <h1 className='font-bold text-4xl capitalize'>{produto.nome}</h1>
            <h2 className='underline'>Categoria:{produto.categoria?.nome}</h2>
            <p className='text-justify'>
              {produto.descricao}       </p>
            <p className='font-bold'>R$ {produto.preco}</p>
            <div className='flex items-center justify-center w-full'>
              <button className="bg-green-dark border border-green-dark text-white px-4 py-2 rounded-lg hover:bg-green-hover " onClick={() => verificarUsuario(produto)}>Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
      </div>




    </>

  );
}

export default ItemProduto;

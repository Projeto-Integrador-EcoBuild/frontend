import React from 'react';
import Produto from '../../../models/Produto';
import { useContext, useEffect, useState, ChangeEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta'
import './itemProduto.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import ModalDetalhesParcelamento from '../modalProduto/modalDetalhesParcelamento';
import CardProduto from '../cardProduto/CardProduto';

function ItemProduto() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);
  const token = usuario.token;
  const { adicionarProduto } = useContext(AuthContext);

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
    quantidadeComprada: 0
  });

  const [nomeCategoria, setNomeCategoria] = useState('');

  const [listaOpcoes, setlistaOpcoes] = useState<Produto[]>([]);

  async function buscarProdutoPorCategoria(id: string) {
    await buscar(`/produtos/categoria/${id}`, setlistaOpcoes, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    buscarProdutoPorId(id);
  }, [id]);

  useEffect(() => {
    if (produto.categoria?.id) {
      const idCategoriaBusca = produto.categoria.id.toString();
      buscarProdutoPorCategoria(idCategoriaBusca);
      setNomeCategoria(produto.categoria.nome || '');
    }
  }, [produto.categoria?.id, produto.categoria?.nome]);

  function verificarUsuario(product: Produto) {
    if (token === "") {
      toastAlerta('Você deve realizar o login! ', 'erro');
      navigate('/login');
    } else {
      if (verificarProdutosEmEstoque(produto.quantidadeComprada, produto.quantidade)) {
        alertaQuantidadeSemEstoque();
        return;
      }
      verificarSeQtdCompradaEstaIndefinido();
      adicionarProduto(product);
      toastAlerta('Produto adicionado ao carrinho', 'info');
    }
  }

  function continuarCompra() {
    navigate('/produtos');
  }

  function verificarSeQtdCompradaEstaIndefinido() {
    if (produto.quantidadeComprada === undefined) {
      produto.quantidadeComprada = 1;
    }
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setProduto({
      ...produto,
      [name]: parseInt(value),
      categoria: categoria,
    });
  }

  function verificarProdutosEmEstoque(quantidadeComprada: number, quantidadeEmEstoque: number) {
    return quantidadeComprada > quantidadeEmEstoque;
  }

  function alertaQuantidadeSemEstoque() {
    alert("não possuimos essa quantidade de itens para venda");
  }
  function visitarProdutosCategoria() {
    navigate(`/produtos/categoria/${produto.categoria?.id}`)
  }

  return (
    <div className='dark:text-white'>
      <p className=' text-center py-10 font-medium cp:text-xs '>
      <p className=' text-center py-10 font-medium cp:text-xs '> <a ><button onClick={continuarCompra} > Página inicial </button></a> <button onClick={visitarProdutosCategoria}> &gt; {nomeCategoria}</button> &gt; <span className='underline capitalize'> {produto.nome}</span></p>      </p>
      <div className='flex items-center gap-8 justify-center cp:flex-col sm:flex-col 2xl:gap-6 2xl:mx-20'>
        <div className=' w-[28rem] h-80 cp:w-[80%] sm:w-[90%] 2xl:w-[35%] -mt-11 cp:mt-0 sm:mt-0 md:w-[40%]'>
          <Swiper
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={produto.foto} className='object-cover' alt="imagem do produto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={produto.foto} className='object-cover' alt="imagem do produto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={produto.foto} className='object-cover' alt="imagem do produto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={produto.foto} className='object-cover' alt="imagem do produto" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className=" space-y-4 w-1/2 cp:w-[80%] sm:w-[80%]">
          <h1 className='text-4xl capitalize font-semibold cp:text-3xl cp:text-center md:text-3xl text-amber-950 dark:text-white'>{produto.nome}</h1>
          <p className='text-gray-400'>Cód: {produto.id}</p>
          <p className='text-justify text-xl'>
            {produto.descricao}
          </p>
          <p>Por R${produto.preco.toFixed(2).replace(".", ",")} ou <span className='font-bold text-green-hover text-2xl'>R${(produto.preco - (produto.preco * 0.10)).toFixed(2).replace(".", ",")}</span> no PIX</p>
          {produto.preco < 10 ? <></> : <p>
            <span className='font-bold'>2X </span>de <span className='font-bold'>R${(produto.preco / 2).toFixed(2).replace(".", ",")} </span>sem juros
          </p>}
          <ModalDetalhesParcelamento preco={produto.preco} />
          <div className='flex items-center w-full justify-around'>
            <label htmlFor="quantidadeComprada"></label>
            <input type="number"
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              value={produto.quantidadeComprada}
              className='border-green-light px-5 text-xl uppercase py-3 rounded-lg cp:text-base cp:px-2 md:text-base dark:text-black'
              max={produto.quantidade}
              name="quantidadeComprada"
              min={1} />
            <button className="bg-green-light font-bold text-black px-5 text-xl uppercase py-3 rounded-lg
             hover:bg-green-hover hover:text-white dark:bg-green-hover dark:text-white dark:hover:text-black dark:hover:bg-green-light cp:px-2 cp:text-base md:text-base" onClick={() => verificarUsuario(produto)}>Adicionar ao Carrinho</button>
          </div>
        </div>
      </div>
      <div className='mt-16 pb-16 px-12 w-full'>
        <p className='font-normal text-3xl text-amber-950 dark:text-white'>Produtos relacionados</p>
        {listaOpcoes.length !== 1 ? (
          <div className='grid grid-cols-4 cp:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 dark:border-t-white border-t-gray-400 border-t pt-12 mt-2'>
            {listaOpcoes
              .filter(produtoRelacionado => produtoRelacionado.id.toString() !== id)
              .slice(0, 5)
              .map(produtoRelacionado => (
                <CardProduto key={produtoRelacionado.id} product={produtoRelacionado} />
              ))}
          </div>
        ) : (
          <p className='w-full text-center text-2xl bg-green-light text-green-dark flex items-center border border-green-light justify-center h-20 rounded-2xl'>
            Nenhum produto encontrado no momento!
          </p>
        )}
      </div>
    </div>
  );
}

export default ItemProduto;

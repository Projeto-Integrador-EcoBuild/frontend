import React from 'react';
import Produto from '../../../models/Produto';
import { useContext, useEffect, useState, ChangeEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta'
import './itemProduto.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import ModalDetalhesParcelamento from '../modalProduto/modalDetalhesParcelamento';

interface CardProdutoProps {
  product: Produto
}

function ItemProduto() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
    quantidadeComprada: 0
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
      if (verificarProdutosEmEstoque(produto.quantidadeComprada, produto.quantidade)) {
        alertaQuantidadeSemEstoque();
        return; 
      }
      verificarSeQtdCompradaEstaIndefinido();
      adicionarProduto(product)
      toastAlerta('Produto adicionado ao carrinho', 'info')
    }
  }

  function continuarCompra() {
    navigate('/produtos')
  }

  function verificarSeQtdCompradaEstaIndefinido (){
    if(produto.quantidadeComprada === undefined){
      produto.quantidadeComprada = 1
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
    alert("não possuimos essa quantidade de itens para venda")
  }

  return (
    <>
      <p className=' text-center py-10 '> <a href='/produtos'><button onClick={continuarCompra} > Página inicial </button></a> <span> &gt; {produto.categoria?.nome}</span> &gt; <span className='underline'> {produto.nome}</span></p>
      <div className='flex items-center gap-8 justify-center cp:flex-col  sm:flex-col 2xl:gap-6 2xl:mx-20 '>
        <div className=' w-[28rem] h-96 cp:w-[80%] sm:w-[90%] 2xl:w-[35%] -mt-11 cp:mt-0 sm:mt-0 md:w-[40%] '>

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
            <SwiperSlide>          <img src={produto.foto} alt="imagem do produto" />
            </SwiperSlide>
            <SwiperSlide>          <img src={produto.foto} alt="imagem do produto" />
            </SwiperSlide>
            <SwiperSlide>          <img src={produto.foto} alt="imagem do produto" />
            </SwiperSlide>
            <SwiperSlide>          <img src={produto.foto} alt="imagem do produto" />
            </SwiperSlide>

          </Swiper>
        </div>
        <div className=" space-y-4 w-1/2 cp:w-[80%] sm:w-[80%] ">
          <h1 className='text-4xl capitalize font-semibold cp:text-3xl cp:text-center md:text-3xl text-amber-950'>{produto.nome}</h1>
          <p className='text-gray-400'>Cód: {produto.id}</p>
          <p className='text-justify text-xl '>
            {produto.descricao}       </p>
          {produto.preco < 10 ? <p></p> : <p className=''>Por R${produto.preco.toFixed(2).replace(".", ",")} ou <span className='font-bold text-green-dark text-2xl'>R${(produto.preco - (produto.preco * 0.10)).toFixed(2).replace(".", ",")}</span> no PIX </p>
          }
          <p><span className='font-bold'>2X </span>de <span className='font-bold'>R${(produto.preco / 2).toFixed(2).replace(".", ",")} </span>sem juros</p>

          <ModalDetalhesParcelamento preco={produto.preco} />
          <div className='flex items-center  w-full justify-around   '>
            <label htmlFor="quantidadeComprada" ></label>
            <input type="number"
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              value={produto.quantidadeComprada}
              className=' border-green-light px-5 text-xl uppercase py-3 rounded-lg cp:text-base cp:px-2 md:text-base'
              max={produto.quantidade}
              name="quantidadeComprada"
              min={1} />
            <button className="bg-green-light border border-green-light font-bold text-black px-5 text-xl uppercase py-3 rounded-lg
             hover:bg-green-hover hover:text-white  cp:px-2 cp:text-base  md:text-base" onClick={() => verificarUsuario(produto)}>Adicionar ao Carrinho</button>
          </div>
          <hr className='border-gray-400'></hr>
          <p>Aqui calcular</p>

        </div>

      </div>




    </>

  );
}

export default ItemProduto;

/*Na hora que eu clicar em adicionar o carrinho , ver se o campo do number tem um valor dentro do range da quantidade de itens que possui em estoque , senao mandar um alerta*/

import React from 'react';
import Produto from '../../../models/Produto';
import { useContext, useEffect, useState } from 'react';
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
    < >
      <p className=' text-center pt-10 '> <a href='/produtos'><span> Página inicial </span></a> <span> &gt; {produto.categoria?.nome}</span> &gt; <span className='underline'> {produto.nome}</span></p>
      <div className='flex items-center justify-center cp:flex-col '>
        <div className=' w-[40%] '>
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
        <div className=" space-y-4 w-1/2 ">
          <h1 className='text-4xl capitalize font-semibold'>{produto.nome}</h1>
          <p className='text-gray-400'>Cód: {produto.id}</p>
          <p className='text-justify text-xl '>
            {produto.descricao}       </p>
          <p className=''>Por {produto.preco.toFixed(2).replace(".", ",")} ou <span className='font-bold text-green-dark text-lg'>R${(produto.preco - (produto.preco * 0.10)).toFixed(2).replace(".", ",")}</span> no PIX </p>
          <p><span className='font-bold'>2X </span>de <span className='font-bold'>{(produto.preco / 2).toFixed(2).replace(".", ",")} </span>sem juros</p>
          <p className='underline'>Detalhes de parcelamento</p>
          <div className='flex items-center  w-full justify-around   '>
            <input type="number" className=' border-green-light px-5 text-xl uppercase py-3 rounded-lg' max={produto.quantidade} min={1} />
            <button className="bg-green-light border border-green-light font-bold text-black px-5 text-xl uppercase py-3 rounded-lg hover:bg-green-hover hover:text-white " onClick={() => verificarUsuario(produto)}>Adicionar ao Carrinho</button>
          </div>
          <hr className='border-gray-400'></hr>

        </div>

      </div>




    </>

  );
}

export default ItemProduto;

/*Na hora que eu clicar em adicionar o carrinho , ver se o campo do number tem um valor dentro do range da quantidade de itens que possui em estoque , senao mandar um alerta*/ 

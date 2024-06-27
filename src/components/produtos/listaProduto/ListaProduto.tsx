import React, { useContext, useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto'
import { buscar } from '../../../services/Service';
import CardProduto from '../cardProduto/CardProduto';
import { toastAlerta } from '../../../util/toastAlerta'
import Categoria from '../../../models/Categoria';
import CardCategoria from '../../Categoria/cardCategoria/cardCategoria';
import { CaretDown } from '@phosphor-icons/react';
import BotaoOrdernar from './botaoOrdenar';


function ListaProdutos() {

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;
  let navigate = useNavigate();

  async function buscarProdutos() {
    try {
      await buscar('/produtos', setProdutos, {
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
  }
  async function buscarCategorias() {
    try {
      await buscar('/categoria', setCategorias, {
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
  }


  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const idConvertido = Number(value);
    buscarProdutosdeCategoria(idConvertido);

  };

  function buscarProdutosdeCategoria(categoria: number) {
    navigate(`/produtos/categoria/${categoria}`);
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);


  let tipo: string = usuario.tipo

  let ProdComponent

  if (tipo === "cliente" || tipo === "") {
    ProdComponent = (
      <div className='flex flex-row my-12 mx-10 lg:mx-16 2xl:mx-40  '>
        <div className=' w-1/4 mr-8 cp:hidden sm:hidden md:w-2/4 lg:w-[40%] h-screen bg-green-claro rounded-md px-4  pt-8 flex flex-col '>
          <p className='text-xl text-green-dark uppercase'>todas as categorias</p>
          <div className='border border-green-dark w-[90%] '></div>
          {categorias.map((categoria) => (
            <>
              <button className='text-start mt-8 text-lg font-light uppercase hover:text-green-hover' onClick={() => buscarProdutosdeCategoria(categoria.id)}>{categoria.nome}</button>
            </>
          ))}
        </div>
        <div className='flex flex-col gap-2 justify-around w-full  '>
          <div className='flex flex-row justify-between items-center  mb-12 cp:flex-col sm:flex-col sm:gap-4 cp:gap-4 md:flex-col md:gap-4'>
            <p className='text-3xl uppercase  text-green-hover '>Todos os produtos</p>
            <BotaoOrdernar listaProduto={produtos} setListaProduto={setProdutos} />


            <div className='md:hidden lg:hidden xl:hidden 2xl:hidden   flex flex-row items-center border border-green-dark rounded-lg'>
              <select
                name="select"
                className='rounded-xl uppercase appearance-none border-0 border-transparent focus:ring-0 focus:border-transparent text-green-dark'
                onChange={handleSelectChange}
              >
                <option value="" className='pointer-events-none ' >Todas as categorias</option>
                {categorias.map((categoria) => (
                  <>

                    <option value={categoria.id}>{categoria.nome}</option>
                  </>
                ))}

              </select>
            </div>




          </div>

          <div className=' mx-auto grid grid-cols-4 gap-20 cp:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:gap-12'>

            {produtos.map((produto) => (
              <CardProduto key={produto.id} product={produto} />
            ))}
          </div>
        </div>

      </div>
    )
  }

  if (tipo === "funcionario") {
    ProdComponent = (
      <>
        <div className="flex justify-center w-full pt-4 h-full pb-4 cp:ml-5 ">
          <div className="container flex flex-col">

            <div className="container flex flex-row py-2 justify-between px-2" >
              <Link to={`/cadastrarProduto`} className='w-1/3 cp:w-3/5 cp:text-lg text-white bg-green-600 hover:bg-green-700 text-center py-4 text-2xl'>
                <button>Cadastrar produto</button>
              </Link>

            </div>
          </div>
        </div>

        <div className='container mx-auto my-4 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3 gap-4 cp:w-4/5 cp:mt-3 cp:px-1 sm:px-12'>
          {produtos.map((produto) => (
            <CardProduto key={produto.id} product={produto} />
          ))}
        </div>
      </>
    )
  }

  return (
    <>
      {produtos.length === 0 ?(
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
      )  : { ProdComponent }}
    </>
  );
}

export default ListaProdutos;
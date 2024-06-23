import React, { useContext, useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto'
import { buscar } from '../../../services/Service';
import CardProduto from '../cardProduto/CardProduto';
import { toastAlerta } from '../../../util/toastAlerta'
import Categoria from '../../../models/Categoria';
import CardCategoria from '../../Categoria/cardCategoria/cardCategoria';


function ListaProdutos() {

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

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
      <>
        <h2 className="">Produtos</h2>

        <div className='flex flex-row gap-2 justify-around'>
          <div className='container mx-auto grid grid-cols-4 gap-4 '>
          <p>Categorias:</p>
          {categorias.map((categoria) => (
              <>
                <p>{categoria.nome}</p>
              </>
            ))}
          </div>
          <div className='container mx-auto grid grid-cols-4 gap-4 '>

            {produtos.map((produto) => (
              <CardProduto key={produto.id} product={produto} />
            ))}
          </div>
        </div>

      </>
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


      {produtos.length === 0 && (
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
      {ProdComponent}
    </>
  );
}

export default ListaProdutos;
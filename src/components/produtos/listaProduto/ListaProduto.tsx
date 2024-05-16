import React, { useContext, useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto'
import { buscar } from '../../../services/Service';
import CardProduto from '../cardProduto/CardProduto';
import { toastAlerta } from '../../../util/toastAlerta'
import './listaProduto.css'


function ListaProdutos() {

  const [produtos, setProdutos] = useState<Produto[]>([]);
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

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);


  let tipo: string = usuario.tipo

  let ProdComponent

  if (tipo === "cliente" || tipo==="") {
    ProdComponent = (
      <>
        <div className="titulo-produtos">
          <h2 className="titulo">Produtos</h2>
          <hr></hr>
        </div>
        <div className='container mx-auto grid grid-cols-4 gap-4 '>

          {produtos.map((produto) => (
            <CardProduto key={produto.id} product={produto} />
          ))}
        </div>
      </>
    )
  }

  if (tipo === "funcionario") {
    ProdComponent = (
      <>
        <div className="flex justify-center w-full pt-4 h-full pb-4">
          <div className="container flex flex-col">

            <div className="container flex flex-row py-2 justify-between" >
              <Link to={`/cadastrarProduto`} className='w-1/3 text-white bg-green-600 hover:bg-green-700 text-center py-4 text-2xl'>
                <button>Cadastrar produto</button>
              </Link>

            </div>
          </div>
        </div>
        
        <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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
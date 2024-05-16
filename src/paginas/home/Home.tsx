import React from 'react';
import './Home.css';
import fundo from '../../assets/img/logo-green.png'
import { useNavigate } from 'react-router-dom';


function Home() {

  const navigate = useNavigate();
  function produtos(){
    navigate('/produtos')
  }



  return (
    <>
      <div id="primeiraParte">
        <img src={fundo} width={110} className='mb-4' ></img>
        <h1 id="titulo">Construa o futuro, preserve o presente: </h1>
        <h1 id="titulo">Naturalar, sustentabilidade em cada projeto.</h1>
        <br></br>
        <p>Somos uma empresa nova no mercado, mas que sempre pensou em mudar o mundo a começar por nossas próprias casas. Por conta disso, desenvolvemos um local onde outras pessoas que querem fazer a sua parte para salvar o mundo possam dar o seu primeiro passo.</p>
       <button onClick={produtos}>Nossos produtos</button>
      </div>
    </>
  );
}
export default Home
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
      <div id="primeiraParte" className='2xl:h-[80vh] ' >
        <img src={fundo} className=' w-[22%] xl:w-[14%] lg:w-[14%] 2xl:w-[12%] 2xl:mt-14'/>
        <h1  className="text-green-dark font-semibold text-4xl  cp:text-2xl sm:text-3xl ">Construa o futuro, preserve o presente:</h1>
        <h1  className="text-green-dark  font-semibold text-4xl  cp:text-2xl sm:text-3xl">Naturalar, sustentabilidade em cada projeto.</h1>
        <p className="text-2xl mt-8 cp:text-lg 2xl:w-[90%]">Somos uma empresa nova no mercado, mas que sempre pensou em mudar o mundo a começar por nossas próprias casas. Por conta disso, desenvolvemos um local onde outras pessoas que querem fazer a sua parte para salvar o mundo possam dar o seu primeiro passo.</p>
        <button className=" bg-green-dark rounded-md text-white px-16 py-3 mt-12 uppercase font-bold ">Nossos produtos</button>
    </div>
    </>
  );
}
export default Home
import React from 'react';
import './Home.css';
import homeBanner from '../../assets/img/banner-naturalar.png'

function Home() {
    return (
      <>
        <div className="bg-indigo-900 flex justify-center teste">
        <img src={homeBanner} alt="Logo da Naturalar" className='w-3/3 imagem' />
        </div>
      </>
    );
}
export default Home
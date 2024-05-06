import React from 'react';
import './Home.css';
import homeBanner from '../../assets/img/banner-naturalar.png'

function Home() {
    return (
      <>
        <div className="flex justify-center">
        <img src={homeBanner} alt="Logo da Naturalar" className=' imagem' />
        </div>
      </>
    );
}
export default Home
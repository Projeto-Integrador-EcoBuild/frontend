import React from 'react'
import logoGreen from '../../assets/img/logo-green.png';
import "./Sobre.css"

function Sobre() {
  return (
    <>
      <div className="grid  lg:grid-cols-2 h-screen place-items-center bg-green-light">
        <div className="flex items-left flex-col w-9/12 gap-4 -mt-3">
          <h1 className="text-5xl font-bold mb-4">Sobre Nós</h1>
          <p>Somos uma empresa com anos de mercado, que sempre pensou em mudar o mundo a começar por nossas próprias casas. Por conta disso, desenvolvemos um local onde outras pessoas que querem fazer a sua parte para salvar o mundo possam dar o seu primeiro passo.</p>
          <p>Com o apoio de diversos profissionais da engenharia ambiental e da engenharia civil, desenvolvemos a melhor seleção de produtos para ter uma casa mais sustentável e uma grande amiga do ambiente.</p>
          <div>
            <p className="mt-4">Alan</p>
            <p>Pequeno resumo</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/seu_perfil" target="_blank">seu_perfil</a></p>
            <p>GitHub: <a href="https://github.com/seu_usuario" target="_blank">seu_usuario</a></p>
          </div>
        </div>
        <div className="w-1/2 p-4">
          {/*imagens  */}
          <img src={logoGreen} alt="logo da naturalar" />
          <div className='icones'>
            <div className='info'>
              <i className="fa fa-building" aria-hidden="true"></i>
              <p>Materiais Locais</p>
            </div>
            <div className='info'>
              <i className="fa fa-tint" aria-hidden="true"></i>
              <p>Eficiência de Água</p>
            </div>
            <div className='info'>
              <i className="fa fa-recycle" aria-hidden="true"></i>
              <p>Materiais Biodegradáveis</p>
            </div>
            <div className='info'>
              <i className="fa fa-globe" aria-hidden="true"></i>
              <p>Menos Poluição Ambiental</p>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}




export default Sobre
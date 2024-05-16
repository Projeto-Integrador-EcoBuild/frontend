import logoGreen from '../../assets/img/logo-green.png';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import "./Sobre.css"

function Sobre() {
  return (
    <>
      <div className="text-justify grid  lg:grid-cols-2 h-screen place-items-center bg-green-light">
        <div className="flex items-left flex-col w-9/12 gap-4 -mt-3  ">
          <h1 className="text-5xl font-bold mb-4">Sobre Nós</h1>
          <div className='text-lg'>
            <p>Somos uma empresa nova no mercado, mas que sempre pensou em mudar o mundo a começar por nossas próprias casas. Por conta disso, desenvolvemos um local onde outras pessoas que querem fazer a sua parte para salvar o mundo possam dar o seu primeiro passo.</p>
            <p>Com o apoio de diversos profissionais da engenharia ambiental e da engenharia civil, desenvolvemos a melhor seleção de produtos para ter uma casa mais sustentável e uma grande amiga do ambiente.</p>
            <p>Somos um time destemido e inovador formado por alunos da Generation Brasil, dedicado a enfrentar os desafios apresentados pelos Objetivos de Desenvolvimento Sustentável da ONU, que são objetivos para deixar o mundo mais sustentável até 2030, e a nossa missão é contribuir para a concretização do Objetivo 11 - Cidades e Comunidades Sustentáveis, que visa tornar os assentamentos humanos mais inclusivos, seguros, resilientes e sustentáveis.</p>
          </div>
        </div>
        <div className="w-1/2 p-4 ">
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
      <div className='  flex flex-row  justify-around w-full  bg-green-light pb-6'>
        <div className='  pr-20 border-r border-black ml-12  '>
          <p className="">Alan Eduardo</p>
          <div className='flex flex-row  justify-around text-2xl'>
            <a href="https://www.linkedin.com/in/aeduardocruz/" target="_blank">
              <LinkedinLogo />
            </a>
            <a href="https://github.com/AlanEduardoCruz" target="_blank">
              <GithubLogo />
            </a>
          </div>
        </div>


        <div className='  pr-20 border-r border-black  '>
          <p className="">Gabriel Tomarchio</p>
          <div className='flex flex-row  justify-around text-2xl'>
          <a href="https://www.linkedin.com/in/bieltomarchio/" target="_blank">
              <LinkedinLogo />
            </a>
            <a href="https://github.com/biel678" target="_blank">
              <GithubLogo />
            </a>
          </div>
        </div>




        <div className='  pr-20 border-r border-black'>
          <p className="">Kamilla Rodrigues</p>
          <div className='flex flex-row  justify-around text-2xl'>
          <a href="https://www.linkedin.com/in/kamillarodrigues/" target="_blank">
              <LinkedinLogo />
            </a>
            <a href="https://github.com/KamillaLima" target="_blank">
              <GithubLogo />
            </a>
          </div>
        </div>






        <div className='  pr-20 border-r border-black'>
          <p className="">Maria Xavier</p>
          <div className='flex flex-row  justify-around text-2xl'>
          <a href="https://www.linkedin.com/in/maria-xavier-tech/" target="_blank">
              <LinkedinLogo />
            </a>
            <a href="https://github.com/marii182" target="_blank">
              <GithubLogo />
            </a>
          </div>
        </div>





        <div className='  pr-20 '>
          <p className="">Raul Oliveira</p>
          <div className='flex flex-row  justify-around text-2xl'>
          <a href="https://www.linkedin.com/in/raul-oliveira-prado/" target="_blank">
              <LinkedinLogo />
            </a>
            <a href="https://github.com/Raul-Prado" target="_blank">
              <GithubLogo />
            </a>
          </div>
        </div>








      </div>
    </>
  );
}




export default Sobre
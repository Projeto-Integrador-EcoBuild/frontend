import logoGreen from '../../assets/img/logo-green.png';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import fotoGabriel from '../../assets/img/image.png'
import userFoto from '../../assets/img/user.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Sobre() {
  return (
    <div className=''>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#bbecab" fill-opacity="1" d="M0,96L30,122.7C60,149,120,203,180,192C240,181,300,107,360,64C420,21,480,11,540,32C600,53,660,107,720,117.3C780,128,840,96,900,101.3C960,107,1020,149,1080,144C1140,139,1200,85,1260,74.7C1320,64,1380,96,1410,112L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>


      <div className=' m-auto text-2xl mb-12 flex flex-col gap-6 w-[70%] text-justify'>
        <h1 className='text-6xl font-light '>Sobre nós</h1>
        <p className=''>
          Somos a Naturalar, uma equipe destemida e inovadora formada por alunos da Generation Brasil. Estamos dedicados a enfrentar os desafios dos Objetivos de Desenvolvimento Sustentável da ONU, que visam tornar o mundo mais sustentável até 2030. Nossa missão é contribuir para a concretização do Objetivo 11 - Cidades e Comunidades Sustentáveis, que busca tornar os assentamentos humanos mais inclusivos, seguros, resilientes e sustentáveis.</p>

        <p className=''>

          A construção civil é uma atividade que gera grandes impactos no meio ambiente. Desde a produção inicial até o descarte dos resíduos, muitos processos podem prejudicar o ecossistema. Por isso, a tendência no mercado é revisar técnicas e impulsionar o uso de materiais de construção ecológicos.
        </p>
        <p className=''>


          A utilização de materiais ecológicos oferece diversas vantagens, incluindo:

          Certificações ambientais: Elas aumentam o valor e a reputação dos edifícios. No Brasil, por exemplo, existem certificações como LEED e AQUA. Em 2014, uma pesquisa do Green Business Certification Inc (GBCI) posicionou o Brasil em terceiro lugar globalmente em número de edifícios em processo de certificação.

          Políticas públicas: Promovidas pelo Conselho Brasileiro de Construção Sustentável, essas políticas visam contribuir para o desenvolvimento sustentável através da disseminação de conhecimento e outras práticas.
        </p>

        <p className=''>

          Desse modo, a Naturalar surge como uma solução para este problema. Nosso e-commerce é dedicado à divulgação e venda de materiais de construção sustentáveis, evitando o desperdício de recursos naturais e promovendo práticas de construção mais amigáveis ao meio ambiente. Queremos transformar o setor da construção civil, tornando-o mais responsável e consciente em relação ao meio ambiente.</p>


      </div>


      
<ol className="relative border-s border-gray-200 dark:border-gray-700">                  
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></a>
    </li>
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </li>
    <li className="ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </li>
</ol>





      <div className=''>
        <Swiper
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >

          <SwiperSlide>
            <div className=' flex h-64  flex-row w-[100%] px-36 justify-center mb-12 items-center '>
              <div className='w-[130%] h-full'>
                <img className='object-cover' src={userFoto} />

              </div>

              <div className='flex flex-col gap-5 text-justify'>

                <h1 className='text-5xl font-light'>Alan Eduardo</h1>

                <p className='text-2xl font-extralight'>Técnico de Manutenção no setor ferroviário, com expertise em sonorização, escada rolante, elevador, cabine primária, manutenção de computadores, instalação de softwares, ar-condicionado, atendimento ao cliente e reparos em equipamentos nas estações.
                </p>
                <div className='flex flex-row w-full justify-around '>
                  <GithubLogo size={58} color='#316906' />
                  <LinkedinLogo size={58} color='#316906' />
                </div>

              </div>

            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=' flex h-64  flex-row w-[100%] px-36 justify-center mb-12 items-center '>
              <div className='w-[130%] h-full'>
                <img className='object-cover' src={fotoGabriel} />

              </div>

              <div className='flex flex-col gap-5 text-justify'>

                <h1 className='text-5xl font-light'>Gabriel Tomarchio</h1>

                <p className='text-2xl font-extralight'>Sou Gabriel Tomarchio e sou programador com foco em desenvolvimento Full-Stack e desenvolvimento de Software.Sou muito focado e dedicado, tenho rápido aprendizado e sempre estou em busca de novos conhecimentos.
                </p>
                <div className='flex flex-row w-full justify-around '>
                  <GithubLogo size={58} color='#316906' />
                  <LinkedinLogo size={58} color='#316906' />
                </div>

              </div>

            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=' flex h-64 bg-blue flex-row w-[100%] px-36 justify-center mb-12 items-center '>
              <div className='w-[130%] h-full'>
                <img className='object-cover' src='https://pps.whatsapp.net/v/t61.24694-24/324675687_7768910809869698_6914235350372379592_n.jpg?ccb=11-4&oh=01_Q5AaIFqYXq0AMi8fjyW-VsAXscoskXtbw2qzGTcg1nyumlUD&oe=6685E9E4&_nc_sid=e6ed6c&_nc_cat=101' />

              </div>

              <div className='flex flex-col gap-5 text-justify'>

                <h1 className='text-5xl font-light'>Kamilla Lima</h1>

                <p className='text-2xl font-extralight'>Olá! Eu sou a Kamilla, uma entusiasta apaixonada por tecnologia e formada em Análise e
                  Desenvolvimento de Sistemas pela FIAP. Desde a infância, meu fascínio por jogos e vontade em explorar a
                  internet despertou meu interesse pelo vasto mundo da programação. </p>
                <div className='flex flex-row w-full justify-around '>
                  <GithubLogo size={58} color='#316906' />
                  <LinkedinLogo size={58} color='#316906' />
                </div>

              </div>

            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=' flex h-64  flex-row w-[100%] px-36 justify-center mb-12 items-center '>
              <div className='w-[130%] h-full'>
                <img className='object-cover' src="https://media.licdn.com/dms/image/D4E03AQFZaj4x_FhPOQ/profile-displayphoto-shrink_800_800/0/1718240351276?e=1724889600&v=beta&t=2uxxtZfkJqKO8Ixp6UC_H-Riskla97ZvAcBKZ585VBk" />

              </div>

              <div className='flex flex-col gap-5 text-justify'>

                <h1 className='text-5xl font-light'>Maria Xavier</h1>

                <p className='text-2xl font-extralight'>Estudante dedicada de Análise e Desenvolvimento de Sistemas em busca de oportunidades na área de TI. Com experiência como Auxiliar Administrativo, destaco minha habilidade em lidar com demandas operacionais.
                </p>
                <div className='flex flex-row w-full justify-around '>
                  <GithubLogo size={58} color='#316906' />
                  <LinkedinLogo size={58} color='#316906' />
                </div>

              </div>

            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=' flex h-64  flex-row w-[100%] px-36 justify-center mb-12 items-center '>
              <div className='w-[130%] h-full'>
                <img className='object-cover' src={userFoto} />

              </div>

              <div className='flex flex-col gap-5 text-justify'>

                <h1 className='text-5xl font-light'>Raul Oliveira</h1>

                <p className='text-2xl font-extralight'>Formado em Informática pela ETEC e graduado em Gestão da Tecnologia da Informação pela FATEC Itaquaquecetuba. Experiência como Desenvolvedor Web na Prefeitura Municipal de Guarulhos, utilizando Python, Django e JavaScript para Back-End.
                </p>
                <div className='flex flex-row w-full justify-around '>
                  <GithubLogo size={58} color='#316906' />
                  <LinkedinLogo size={58} color='#316906' />
                </div>

              </div>

            </div>
          </SwiperSlide>
        </Swiper>
      </div>


      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 10 1200 200"><path fill="#bbecab" fill-opacity="1" d="M0,96L30,122.7C60,149,120,203,180,192C240,181,300,107,360,64C420,21,480,11,540,32C600,53,660,107,720,117.3C780,128,840,96,900,101.3C960,107,1020,149,1080,144C1140,139,1200,85,1260,74.7C1320,64,1380,96,1410,112L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
    </div>
  );
}




export default Sobre
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 20 1440 200"><path fill="#bbecab" fill-opacity="1" d="M0,96L30,122.7C60,149,120,203,180,192C240,181,300,107,360,64C420,21,480,11,540,32C600,53,660,107,720,117.3C780,128,840,96,900,101.3C960,107,1020,149,1080,144C1140,139,1200,85,1260,74.7C1320,64,1380,96,1410,112L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>


      <div className=' m-auto text-2xl mb-12  flex flex-col  gap-6 w-[80%] text-justify'>
        <h1 className='text-6xl font-light  text-green-hover '>Sobre nós</h1>
        <p className=' text-2xl font-light'>
          O projeto Naturalar é uma iniciativa inovadora desenvolvida por alunos da Generation Brasil, com o objetivo de promover a sustentabilidade na construção civil. Nosso foco é contribuir para o <strong>Objetivo de Desenvolvimento Sustentável 11 da ONU</strong>, que visa tornar as cidades e comunidades mais inclusivas, seguras, resilientes e sustentáveis.
          Nosso compromisso é com a inovação, a sustentabilidade e a criação de um futuro mais verde e consciente para todos.
        </p>




      </div>


      <h1 className='text-center text-green-hover text-6xl font-light mb-10'>Nossas missões</h1>
      <div className='flex flex-row  w-[100%] px-20 cp:flex-col'>

        <div className=' w-1/3 cp:mb-6 cp:w-full cp:border-b-black cp:border-l-transparent cp:border-r-transparent cp:border-t-transparent border-r-black border-l-transparent border-t-transparent border-b-transparent  border px-4 text-center  items-center justify-center flex flex-col'>
          <h2 className='mb-2 text-2xl font-light text-green-hover'>Promover a Sustentabilidade</h2>
          <p className='mb-12 text-xl  text-balance'> Incentivar a utilização de materiais ecológicos na construção civil, reduzindo os impactos ambientais.</p>
          <img className='w-16 h-16 cp:mb-6 ' src="data:image/png;base64,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"></img>
        </div>
        <div className='  w-1/3  cp:w-full cp:border-b-black cp:border-l-transparent cp:border-r-transparent cp:border-t-transparent border-r-black border-l-transparent border-t-transparent border-b-transparent border px-4 text-center  items-center justify-center flex flex-col'>
          <h2 className='mb-2 text-2xl font-light  text-green-hover'>Educar e Conscientizar</h2>
          <p className='mb-12 text-xl text-balance  '>Divulgar práticas sustentáveis, contribuindo para a formação de uma sociedade mais consciente.</p>
          <img className='w-16 h-16 cp:mb-6' src="data:image/png;base64,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"></img>
        </div>
        <div className=' cp:w-full cp:border-b-transparent cp:border-l-transparent cp:border-r-transparent cp:border-t-transparent w-1/3 px-4 text-center  items-center justify-center flex flex-col'>
          <h2 className='cp:mt-6 mb-2 text-2xl font-light text-green-hover' >Inovação e Tecnologia</h2>
          <p className='mb-12 text-xl text-balance '>Utilizar as melhores tecnologias disponíveis para oferecer uma plataforma eficiente e acessível.</p>
          <img className='w-16 h-16 ' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEwUlEQVR4nO1ZW4gcRRQt8a34gKi7M1W9S+KCEPMjAZMo+VEQRdAorAR8rHNvOwTjio8/EebHuDN9q1dXv/wICBLxBYpEBUVUxCQ+EvyQJJIEQ6LxSdQ8PtQ85HZX9/bMdM9sz053emAvFHRXV92uU/fUvbeqhFiQBZmTlHT1CqnhK6XxdLRIjZ+JQZHys/cvUoTftoIIihgEGX1u4nJJ+LU3+wQ7R52JYUmVFYrwxMAAWVKvXiYJvoyCGJuZPF8SfDcwFhmbufdSpXFbOGCCp7leEjTM+67CA1nUgEuUxi3+QOGkbxF8IaQU4Qnp2isLDaRUq16kNHxiBrlfanjK907wTkAptgq3LSyQIbrvYkn4qbHAvlK9OmI5cEvUMkyp0drEBYUFYizxsQHxwzDBKNeXHVg1u058SgV9CgdEueMXKo0fRTzRH4rwN0nwb1PwM5QqJJCltfHzlMbNScFOzXqtkFKFA8IxQRG81zzreHe5AdcMz1SuLOuHblAa/vMoRZUVrf0LAcS3BLxr8qWfJcEefubB83eefUmwM45SxQHyxvjZkuA1441+tabta4N36eI4N5EanSRK9QyEZ49nRRIc6srlhCIJ/+Sg5utCioLwBk7oeu2cymNNgY/aKdUzEKWx3iuAmEX7iuVUr1YE3yuCZeE/CJ80ge/FSPpR7zKudECkxp88/jqwqmtbwo3c1tLwRLS+rOE6qeEvEw8eWf5S9dymQRGsNevlnzBJrMVTqmcgaTqEAyL4oPWbpeEORXiK44PVsFc3fWvYq6OBT7l4fT/HlboD7+T8dAKOs3tt/R5kr5Lwx8XP41D4DxfHIhTsSKlcgJj22/3B2jcleKwPzXr5IqCYJHimm5fKHwjBlBnUVNz3IVp3FVvEWIb8tB2Oz5VSuQFhSxgP9E1iG9de6S1swlNlqtzDDiAJ+BkD4qUePMMaTvKaSdYLk0b3EXbJolY7p1BAWJTG9w291ooOIgleNdbbJFKKygOIJHzcrIGNHdvVbWXc9S9p9OdnEYJlaaN+IYGI0+IspeFgVkDKGm4O+vFzdkBSSI/U3RcmpBr2ZvajQgKRQdJoNj39lJKDNwYpS/bUIhOpsyyEGzK35FLelhJMBZbpZ/FSFcIN/I+0QGSQ5mjYNDJdWSJ6ldzcZoLwtlhpPGbi0KERsheLQQQSXgARvu3rhJdFl7xp0pyMe+gzKscUwVZOHjvRTBJ+ziVap9wHZMfswGvQ4aYow4W/w2pAOQHI376netBqBcKnk/GWCEAQ7LIc+07eN4iMxOxJ1iiNuw2g7XGWUYRvme+b+XyYAUUO+V5vUywJHw1A8PWXyEn4X7Ng7PVtQHhLTPB7m/fTcDjWcwVXXmwJ83677+7goKTKbZF2sfUx+ubcn49NzSRujdPlHSdpeNM7K9NwmC2R6H4VwVFWFtCpKQEkPBC2S6hv05eiv7l247ojYr7CSs4UEL4E7SeQbcY3r+F3Nrv3U8IDysVbg3ZJ9a2Spn9ILY1b5g+EDwN8ZbtzX+x8nOqvkYfnrdDPr3BHAEY5lbuYuyIjYd2eJQwIPoFZ3nKs2rNwUIqAya0wiJHpakn0/0LGXu/dextPlk00h6N88sh06pslFkQUR/4HYCCB8Kxt9M4AAAAASUVORK5CYII=" />
        </div>

      </div>


      <h1 className='text-center text-green-hover text-6xl font-light mt-28 cp:mx-10 sm:mx-14 '>Conheça nossa equipe ! </h1>
      <div className='mt-20 xl:mx-10 2xl:mx-20 2xl:pt-10 cp:mx-4 '>
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
            <div className=' flex  xl:h-80  2xl:h-96   lg:flex-col md:flex-col cp:flex-col sm:flex-col  flex-row w-[100%] px-36 cp:px-12 justify-center mb-12 items-center '>
              <div className=' md:w-[60%] cp:w-[120%] sm:w-[100%] lg:w-[60%] xl:w-[180%] 2xl:w-[60%] h-full'>
                <img className=' object-cover' src={userFoto} />

              </div>

              <div className='flex flex-col gap-5 text-justify'>

                <h1 className='text-5xl font-light'>Alan Eduardo</h1>

                <p className='text-2xl font-extralight'>Técnico de Manutenção no setor ferroviário, com expertise em sonorização, escada rolante, elevador, cabine primária, manutenção de computadores, instalação de softwares, ar-condicionado, atendimento ao cliente e reparos em equipamentos nas estações.
                </p>
                <div className='flex flex-row w-full justify-around '>
                  <a href="https://www.linkedin.com/in/aeduardocruz/" target="_blank"><LinkedinLogo size={58} color='#1C8C63' /></a>
                  <a href="https://github.com/AlanEduardoCruz" target="_blank">
                    <GithubLogo size={58} color='#1C8C63' />
                  </a>


                </div>

              </div>

            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=' flex  xl:h-80  2xl:h-96  lg:flex-col md:flex-col cp:flex-col sm:flex-col  flex-row w-[100%] px-36 cp:px-12  justify-center mb-12 items-center '>
              <div className=' md:w-[60%] cp:w-[120%] sm:w-[100%] lg:w-[60%] xl:w-[180%] 2xl:w-[60%] h-full'>
                <img className='object-cover' src={fotoGabriel} />

              </div>

              <div className='flex flex-col gap-5 text-justify'>

                <h1 className='text-5xl font-light'>Gabriel Tomarchio</h1>

                <p className='text-2xl font-extralight'>Sou Gabriel Tomarchio e sou programador com foco em desenvolvimento Full-Stack e desenvolvimento de Software.Sou muito focado e dedicado, tenho rápido aprendizado e sempre estou em busca de novos conhecimentos.
                </p>
                <div className='flex flex-row w-full justify-around '>
                  <a href="https://www.linkedin.com/in/bieltomarchio/" target="_blank">
                    <LinkedinLogo size={58} color='#1C8C63' />
                  </a>
                  <a href="https://github.com/biel678" target="_blank">
                    <GithubLogo size={58} color='#1C8C63' />
                  </a>

                </div>

              </div>

            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=' flex  xl:h-80  2xl:h-96  lg:flex-col md:flex-col cp:flex-col sm:flex-col  flex-row w-[100%] px-36 cp:px-12  justify-center mb-12 items-center '>
              <div className=' md:w-[60%] cp:w-[120%]  sm:w-[100%] lg:w-[60%] xl:w-[180%] 2xl:w-[60%] h-full'>
                <img className='object-cover ' src='https://pps.whatsapp.net/v/t61.24694-24/324675687_7768910809869698_6914235350372379592_n.jpg?ccb=11-4&oh=01_Q5AaIFqYXq0AMi8fjyW-VsAXscoskXtbw2qzGTcg1nyumlUD&oe=6685E9E4&_nc_sid=e6ed6c&_nc_cat=101' />

              </div>

              <div className='flex flex-col gap-5 text-justify'>

                <h1 className='text-5xl font-light'>Kamilla Lima</h1>

                <p className='text-2xl font-extralight'>Olá! Eu sou a Kamilla, uma entusiasta apaixonada por tecnologia e formada em Análise e
                  Desenvolvimento de Sistemas pela FIAP. Desde a infância, meu fascínio por jogos e vontade em explorar a
                  internet despertou meu interesse pelo vasto mundo da programação. </p>
                <div className='flex flex-row w-full justify-around '>
                  <a href="https://www.linkedin.com/in/kamillarodrigues/" target="_blank">
                    <LinkedinLogo size={58} color='#1C8C63' />
                  </a>
                  <a href="https://github.com/KamillaLima" target="_blank">
                    <GithubLogo size={58} color='#1C8C63' />
                  </a>
                </div>

              </div>

            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=' flex  xl:h-80  2xl:h-96  lg:flex-col md:flex-col cp:flex-col sm:flex-col  flex-row w-[100%] px-36 cp:px-12  justify-center mb-12 items-center '>
              <div className=' md:w-[60%] cp:w-[120%] sm:w-[100%] lg:w-[60%] xl:w-[180%] 2xl:w-[60%] h-full'>
                <img className=' object-cover' src="https://media.licdn.com/dms/image/D4E03AQFZaj4x_FhPOQ/profile-displayphoto-shrink_800_800/0/1718240351276?e=1724889600&v=beta&t=2uxxtZfkJqKO8Ixp6UC_H-Riskla97ZvAcBKZ585VBk" />

              </div>

              <div className='flex flex-col gap-5 text-justify'>

                <h1 className='text-5xl font-light'>Maria Xavier</h1>

                <p className='text-2xl font-extralight'>Estudante dedicada de Análise e Desenvolvimento de Sistemas em busca de oportunidades na área de TI. Com experiência como Auxiliar Administrativo, destaco minha habilidade em lidar com demandas operacionais.
                </p>
                <div className='flex flex-row w-full justify-around '>

                  <a href="https://www.linkedin.com/in/maria-xavier-tech/" target="_blank">
                    <LinkedinLogo size={58} color='#1C8C63' />
                  </a>
                  <a href="https://github.com/marii182" target="_blank">
                    <GithubLogo size={58} color='#1C8C63' />
                  </a>
                </div>

              </div>

            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=' flex  xl:h-80  2xl:h-96  lg:flex-col md:flex-col cp:flex-col sm:flex-col  flex-row w-[100%] px-36 cp:px-12  justify-center mb-12 items-center '>
              <div className=' md:w-[60%] cp:w-[120%]  sm:w-[100%] lg:w-[60%] xl:w-[180%] 2xl:w-[60%] h-full'>
                <img className='object-cover' src={userFoto} />

              </div>

              <div className='flex flex-col gap-5 text-justify'>

                <h1 className='text-5xl font-light'>Raul Oliveira</h1>

                <p className='text-2xl font-extralight'>Formado em Informática pela ETEC e graduado em Gestão da Tecnologia da Informação pela FATEC Itaquaquecetuba. Experiência como Desenvolvedor Web na Prefeitura Municipal de Guarulhos, utilizando Python, Django e JavaScript para Back-End.
                </p>
                <div className='flex flex-row w-full justify-around '>

                  <a href="https://www.linkedin.com/in/raul-oliveira-prado/" target="_blank">
                    <LinkedinLogo size={58} color='#1C8C63' />
                  </a>
                  <a href="https://github.com/Raul-Prado" target="_blank">
                    <GithubLogo size={58} color='#1C8C63' />
                  </a>
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
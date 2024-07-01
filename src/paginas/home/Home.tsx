import { useContext, useState, ChangeEvent, useEffect } from 'react'
import homeClara from '../../assets/img/homeClara.png';
import homeDark from '../../assets/img/homeDark.png';
import { useNavigate } from 'react-router-dom';
import imagemUm from '../../assets/img/Bricks Wall.gif';
import imagemDois from '../../assets/img/Paint Bucket.gif';
import imagemTres from '../../assets/img/Construction Truck.gif';
import { useInView } from 'react-intersection-observer';

function Home() {
  const navigate = useNavigate();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const handleProdutosClick = () => {
    navigate('/produtos');
  };

  const [animate, setAnimate] = useState(false);

  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        setAnimate(true);
      }
    }
  });

  useEffect(() => {
    const themeChangeHandler = () => {
      const currentTheme = document.documentElement.classList.contains('dark');
      setIsDarkTheme(currentTheme);
    };

    themeChangeHandler();

    const observer = new MutationObserver(themeChangeHandler);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <>
      <div className='w-full bg-green-light dark:bg-green-dark  '>
        <div className='flex flex-row px-12 lg:px-8  '>
          <div className='w-[60%] mt-20 md:w-full sm:w-full cp:w-full cp:mt-6'>
            <div className='flex flex-col 2xl:ml-12'>
              <h1 className='text-9xl mb-5 text-green-hover font-mono animate-fade-right dark:text-green-light cp:w-full  cp:text-5xl sm:text-8xl'>
                Naturalar
              </h1>
              <p className='tracking-wide text-justify text-green-dark leading-loose text-2xl font-normal font-sans mb-8 dark:text-white cp:text-xl'>
                Comprometida com a sustentabilidade, oferecendo materiais e soluções de construção que respeitam o meio ambiente e promovem um estilo de vida consciente.
              </p>
              <button
                onClick={handleProdutosClick}
                className="bg-green-hover text-white mr-96 font-bold px-5 text-xl uppercase py-3 rounded-lg
                 hover:bg-green-dark dark:bg-green-hover dark:text-white
                  dark:hover:text-black dark:hover:bg-green-light 
                   md:mr-0 sm:mr-0 cp:mr-0"
              >
                Explore nossos produtos
              </button>
            </div>
          </div>
          <div style={{ display: isDarkTheme ? 'none' : 'block' }} >
            <img src={homeClara} alt="Fundo" className='md:hidden sm:hidden cp:hidden' />
          </div>
          <div style={{ display: isDarkTheme ? 'block' : 'none' }} >
            <img src={homeDark} alt="Fundo" className='md:hidden sm:hidden cp:hidden' />
          </div>
        </div>

        <div className='bg-green-light pb-10 dark:bg-green-dark mt-16 cp:pb-2'>
          <p className='text-4xl text-center mb-20 text-green-hover dark:text-white  '>
            Por que Somos Únicos?
          </p>
          <div
            ref={sectionRef}
            className={`flex flex-row gap-10 mx-10 justify-around cp:flex-col sm:flex-col md:flex-col ${animate ? 'animate-fade-right' : ''}`}
          >
            <div className='border-2 border-green-hover rounded-lg p-4 dark:border-white'>
              <div className='rounded-full w-full flex justify-center mb-4 relative'>
                <img className='bg-green-botao h-16 w-16 rounded-full' src={imagemUm} alt="Certificações Ambientais" />
              </div>
              <h1 className='uppercase text-green-hover text-center mb-4 text-xl dark:text-green-light'>
                Certificações Ambientais
              </h1>
              <hr className='border-green-hover dark:border-white' />
              <p className=' mt-4 text-green-dark px-8 dark:text-white text-xl font-normal font-sans tracking-wide leading-loose cp:px-0 '>
                O uso de materiais ecológicos pode levar à obtenção de certificações como LEED e AQUA, aumentando o valor e a reputação dos edifícios. No Brasil, o número de construções certificadas tem crescido, destacando a importância das práticas sustentáveis.
              </p>
            </div>

            <div className='border-2 border-green-hover rounded-lg p-4 dark:border-white'>
              <div className='rounded-full w-full flex justify-center mb-4 relative'>
                <img className='bg-green-botao h-16 w-16 rounded-full' src={imagemDois} alt="Políticas Públicas de Apoio" />
              </div>
              <h1 className='uppercase text-green-hover text-center mb-4 text-xl dark:text-green-light'>
                Políticas Públicas de Apoio
              </h1>
              <hr className='border-green-hover dark:border-white' />
              <p className=' mt-4 text-green-dark px-8 dark:text-white text-xl font-normal font-sans tracking-wide leading-loose cp:px-0  '>
                Políticas públicas, como as do Conselho Brasileiro de Construção Sustentável, incentivam práticas ecológicas, disseminando conhecimento e promovendo técnicas sustentáveis. Esse apoio facilita a adoção de práticas verdes na construção civil.
              </p>
            </div>

            <div className='border-2 border-green-hover rounded-lg p-4 dark:border-white'>
              <div className='rounded-full w-full flex justify-center mb-4 relative'>
                <img className='bg-green-botao h-16 w-16 rounded-full' src={imagemTres} alt="Impacto Ambiental Reduzido" />
              </div>
              <h1 className='uppercase text-green-hover text-center mb-4 text-xl dark:text-green-light'>
                Impacto Ambiental Reduzido
              </h1>
              <hr className='border-green-hover dark:border-white' />
              <p className=' mt-4 text-green-dark px-8 dark:text-white text-xl font-normal font-sans tracking-wide leading-loose cp:px-0  '>
                Materiais sustentáveis reduzem o impacto ambiental da construção civil, diminuindo o desperdício de recursos naturais, a emissão de poluentes e os resíduos. Isso ajuda a preservar ecossistemas e a construir comunidades mais saudáveis e resilientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

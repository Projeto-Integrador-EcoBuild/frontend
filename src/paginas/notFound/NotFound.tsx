import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import paginaNaoEncontradaClaro from '../../../src/assets/img/pagina_nao_encontrada.png'
import paginaNaoEncontradaEscuro from '../../../src/assets/img/pagina_nao_encontrada_dark.png'
function NotFound() {
    const navigate = useNavigate();
    function retornar() {
        navigate("/home")
    }
    const [isDarkTheme, setIsDarkTheme] = useState(false);
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
        <div className='h-screen w-full justify-center items-center flex flex-col '>
            <h1 className='text-5xl font-light mb-10 lg:text-4xl md:text-2xl sm:text-2xl cp:text-lg dark:text-white'>Ops! Rota em construção!</h1>
            {isDarkTheme ? (<img src={paginaNaoEncontradaEscuro} />) : (<img src={paginaNaoEncontradaClaro} />)}

            <button onClick={retornar} className='mt-10 bg-green-light  font-bold text-black px-5 text-xl uppercase py-3 rounded-lg
             hover:bg-green-hover hover:text-white  dark:bg-green-hover dark:text-white dark:hover:text-black dark:hover:bg-green-light cp:px-2 cp:text-base  md:text-base'>
                Volta para a página inicial
            </button>
        </div>
    )
}


export default NotFound;
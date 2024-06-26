import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import Foto from '../../assets/img/sammy-building-construction.png';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';
import FundoClaro from '../../assets/img/blob-scene-haikei.png';
import FundoEscuro from '../../assets/img/fundoDark.png';

function Login() {
  const navigate = useNavigate();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [outraLogo, setOutraLogo] = useState(false);
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);
  const backgroundImage = isDarkTheme ? FundoEscuro : FundoClaro;
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
  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home')
    }
  }, [usuario])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  function mostrarSenha() {
    setOutraLogo((prevState) => !prevState);
  }

  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '90vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <form className="flex flex-col items-center gap-5 w-1/2 p-6 rounded-lg bg-white shadow-2xl shadow-slate-700 md:px-0 md:w-[80%] sm:px-0 sm:w-[80%] cp:px-2
      cp:w-[80%] dark:bg-gray-inputs dark:shadow-slate-900 dark:text-white" onSubmit={login} >
        <h2 className="text-7xl font-light dark:text-white">Login</h2>

        <div className="flex flex-col w-[80%] sm:w-[85%] cp:w-[95%]">
          <label
            className="text-green-botao text-base font-semibold  ml-1 dark:text-white "
            htmlFor="email"          >Email </label>
          <input
            required
            className="border-green-botao input px-[10px] py-[11px] text-base
             bg-slate-100 border-2 rounded-[5px] focus:outline-none focus:border-green-botao  focus:ring-0 dark:border-transparent dark:bg-gray-fundo"
            id="email"
            name="email"
            type="email"
            value={usuarioLogin.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />

        </div>


        <div className="flex flex-col-reverse w-[80%] sm:w-[85%] cp:w-[95%] ">
          {outraLogo ? (
            <div className='w-full flex flex-row justify-between border-green-botao input px-[2px] py-[4px] text-base
              bg-slate-100 border-2 rounded-[5px]  dark:border-transparent dark:bg-gray-fundo
               focus:outline-none  '>
              <input
                placeholder=''
                className="
              bg-slate-100 border-0 w-[90%] focus:ring-0 dark:border-transparent dark:bg-gray-fundo"
                type="text"
                minLength={8}
                required
                id="senha"
                name="senha"
                value={usuarioLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
              <button onClick={mostrarSenha} type='button' className='w-8 bg-slate-100 dark:bg-gray-fundo'>
                {outraLogo ? (<Eye size={24} className='dark:text-white text-green-botao' />) : (<EyeSlash size={24} className='dark:text-white text-green-botao' />)}
              </button>
            </div>
          ) : (
            <div className='w-full flex flex-row justify-between border-green-botao input px-[2px] py-[4px] text-base
            bg-slate-100 border-2 rounded-[5px] dark:border-transparent dark:bg-gray-fundo'>
              <input
                placeholder=''
                className="
              bg-slate-100 border-0 w-[90%]  focus:ring-0 dark:border-transparent dark:bg-gray-fundo"
                type="password"
                minLength={8}
                required
                id="senha"
                name="senha"
                value={usuarioLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
              <button onClick={mostrarSenha} type='button' className='w-8 '>
              {outraLogo ? (<Eye size={24} className='dark:text-white text-green-botao' />) : (<EyeSlash size={24} className='dark:text-white text-green-botao' />)}
              </button>
            </div>
          )}


          <label
            className="text-green-botao text-base font-semibold  ml-1   dark:text-white"
            htmlFor="senha"
          >Senha </label>
        </div>


        <p className=' text-right cursor-pointer  w-[80%] sm:w-[85%] cp:w-[95%]'>Esqueceu a senha?</p>





        <button type='submit' className="rounded-lg bg-green-botao hover:bg-green-hover text-white p-16 py-3 uppercase">
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>Entrar</span>
          )}
        </button>

        <p className='w-full text-center cp:grid'>
          Ainda não tem uma conta? <Link to="/cadastro"><span className='font-bold cursor-pointer pl-1.5 cp:w-full'>Cadastre-se!</span></Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import Foto from '../../assets/img/sammy-building-construction.png';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

// Importe a imagem de fundo aqui
import backgroundImage from '../../assets/img/blob-scene-haikei.png';

function Login() {
  const navigate = useNavigate();
  const [outraLogo, setOutraLogo] = useState(false);
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

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
      minHeight: '100vh', // Defina uma altura mínima para cobrir a tela inteira
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <form className="flex flex-col items-center gap-6 w-1/2 p-10 rounded-lg bg-white shadow-2xl shadow-slate-700" onSubmit={login}>
        <h2 className="text-6xl">Login</h2>

        <div className="relative w-1/2">
          <input
            placeholder=''
            className="peer h-10 w-full border-b  border-white text-black bg-transparent placeholder-transparent focus:outline-none focus:border-b-green-dark focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent focus:ring-0"
            required
            id="email"
            name="email"
            type="email"
            value={usuarioLogin.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <label htmlFor="email" className="absolute left-0 -top-3.5 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-green-dark peer-focus:text-lg">E-mail</label>
        </div>

        <div className="relative w-1/2">
          {outraLogo ? (
            <input
              placeholder=''
              className="peer h-10 w-full border-b border-black border-white text-black bg-transparent placeholder-transparent focus:outline-none focus:border-b-green-dark focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent focus:ring-0"
              type="text"
              minLength={8}
              required
              id="senha"
              name="senha"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          ) : (
            <input
              placeholder=''
              className="peer h-10 w-full border-b border-black border-white text-black bg-transparent placeholder-transparent focus:outline-none focus:border-b-green-dark focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent focus:ring-0"
              type="password"
              minLength={8}
              required
              id="senha"
              name="senha"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          )}
          <label htmlFor="senha" className="absolute left-0 -top-3.5 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-green-dark peer-focus:text-lg">Senha</label>
          <div className='-mt-8 mr-2 text-end'>
            <button onClick={mostrarSenha} type='button'>
              {outraLogo ? (<Eye size={24} />) : (<EyeSlash size={24} />)}
            </button>
          </div>
        </div>

        <p className='w-1/2 text-right underline cursor-pointer'>Esqueceu a senha?</p>

        <button type='submit' className="rounded-lg bg-green-dark hover:bg-green-hover text-white p-16 py-3 m-4 uppercase">
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
          Ainda não tem uma conta? <Link to="/cadastro"><span className='font-black underline cursor-pointer pl-1.5 cp:w-full'>Cadastre-se!</span></Link>
        </p>
      </form>
    </div>
  );
}

export default Login;

import React, { ChangeEvent, useContext, useEffect, useState } from 'react';

import Foto from '../../assets/img/img.png'
import { Eye, EyeSlash } from '@phosphor-icons/react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {
  const navigate = useNavigate();
  let [outraLogo, setOutraLogo] = useState(false);
  const inputs = "peer h-10 w-full border-b border-b-black border-white  text-black bg-transparent placeholder-transparent focus:outline-none focus:border-b-green-dark focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent focus:ring-0"
  const labels = "absolute left-0 -top-3.5  transition-all    peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-green-dark peer-focus:text-lg"
  
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

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
    })
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(usuarioLogin)
  }


  function mostrarSenha() {
    setOutraLogo((prevState) => !prevState);
  }
  return (
    <>
      <div className="grid  grid-cols-2 h-screen place-items-center cp:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 ">
        <div className="h-full items-center flex bg-green-light  cp:hidden sm:hidden md:hidden ">
          <img src={Foto} className='bg-no-repeat object-contain ' alt="Logo da naturalar"></img>
        </div>
        <form className="flex items-center flex-col w-9/12 gap-6  " onSubmit={login} >
          <h2 className="text-6xl mb-5 ">Login</h2>

          <div className="relative w-full">
            <input
              placeholder=''
              className= {inputs}
              required
              id="email"
              name="email"
              type="email"
              value={usuarioLogin.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
            <label htmlFor="email"
              className={labels}>E-mail </label>


          </div>


          <div className="relative w-full  ">
            {outraLogo ? (<input
              placeholder=''
              className={inputs}
              type="text"
              minLength={8}
              required
              id="senha"
              name="senha"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />) : (
              <input
                placeholder=''
                className={inputs}
                type="password"
                minLength={8}
                required
                id="senha"
                name="senha"
                value={usuarioLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            )
            }
            <label htmlFor="senha"
              className={labels}>Senha </label>
            <div className='-mt-8  mr-2 text-end'>
              <button onClick={mostrarSenha} type='button'>

                {outraLogo ? (<Eye size={24} />)
                  :
                  (<EyeSlash size={24}/>)
                }
              </button>

            </div>
          </div>








          <p className='w-full text-right underline cursor-pointer'>Esqueceu a senha?</p>
          <button type='submit' className="rounded-lg bg-green-dark hover:bg-green-hover text-white  p-16 py-3 m-4 uppercase">
            {isLoading ? <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            /> :
              <span>Entrar</span>}
          </button>

          <p className='w-full text-center cp:grid'>

            Ainda não tem uma conta?  <Link to="/cadastro"> <span className='font-black underline cursor-pointer pl-1.5  cp:w-full'> Cadastre-se!</span>
            </Link>
          </p>

        </form>
      </div>
    </>
  )
}

export default Login;

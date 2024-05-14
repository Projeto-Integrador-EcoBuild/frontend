import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import "./Login.css"
import Foto from '../../assets/img/img.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {
  const navigate = useNavigate();

  // o useState<UsuarioLogin> não é obrigatorio,posso passar só useState
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home')
    }
  }, [usuario])
  // to falando pro meu useEffect para ele ficar de olho no meu usuario

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
                //tudoooooo isso só pra impedir que a nossa pagina recarregue 
    e.preventDefault() //Impedir que o form recarregue a pagina toda,senão a gente perde a infor e fica travado
    handleLogin(usuarioLogin)
    //invogando a função handle login
  }
  return (
    <>
      <div className="grid  lg:grid-cols-2 h-screen place-items-center  ">
        <div className=" w-full h-full pt-20  bg-green-light ">
          <img src={Foto} className='bg-no-repeat object-contain ' alt="Logo da naturalar"></img>
        </div>
        <form className="flex items-center flex-col w-9/12 gap-6  " onSubmit={login} >
          <h2 className="text-6xl mb-5 ">Login</h2>

          <div className="flex flex-col w-full">
            <label htmlFor="email" >E-mail</label>
            <input
              type="email"
              required
              id="email"
              name="email"
              className=" border border-x-0 border-t-0 focus:ring-0  focus:border-black"
              value={usuarioLogin.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="senha" >Senha</label>
            <input
              type="password"
              minLength={8}
              required
              id="senha"
              name="senha"
              className=" border border-x-0 border-t-0 focus:ring-0  focus:border-black"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
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

          <p className='w-full text-center'>
           
              Ainda não tem uma conta?  <Link to="/cadastro"> <span className='font-black underline cursor-pointer pl-1.5'> Cadastre-se!</span>
            </Link>
          </p>

        </form>
      </div>
    </>
  )
}

export default Login;
// border-b-2 : borderBottom-width : 2px
//outline-none : quando eu clicar no meu input ele não vai ficar com aquela borda escura
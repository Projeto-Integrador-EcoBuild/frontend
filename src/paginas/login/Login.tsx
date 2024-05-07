import React from 'react'
import "./Login.css"
import Foto from '../../assets/img/img.png'
function Login(){
  return (
    <>
      <div className="grid  lg:grid-cols-2 h-screen place-items-center  ">
        <div className=" w-full h-full pt-20  bg-green-light ">
          <img src={Foto} className='bg-no-repeat object-contain '  alt="Logo da naturalar"></img>
        </div>
        <form className="flex items-center flex-col w-9/12 gap-8  ">
          <h2 className="text-6xl mb-5 ">Login</h2>

          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className='mb-2'>E-mail</label>
            <input

              type="email"
             
              required
              id="usuario"
              name="usuario"
              className="border-b  border-black outline-none  "/>
          </div>
          
          <div className="flex flex-col w-full">
            <label htmlFor="senha" className='mb-2' >Senha</label>
            <input
              type="password"
              minLength={8}
              required
              id="senha"
              name="senha"
              className="border-b  border-black mb-12x1 outline-none "
            />
          </div>
          <button type='submit' className="rounded-lg bg-green-dark hover:bg-green-hover text-white  p-16 py-3 m-4 uppercase">
            
          <span >Entrar</span>
          </button>
          <p className='w-full text-center'>
            Ainda não tem uma conta?  <span className='font-black underline cursor-pointer pl-1.5'> Cadastre-se!</span> 
             
          </p>
        </form>
      </div>
    </>
  )
}

export default Login;
// border-b-2 : borderBottom-width : 2px
//outline-none : quando eu clicar no meu input ele não vai ficar com aquela borda escura
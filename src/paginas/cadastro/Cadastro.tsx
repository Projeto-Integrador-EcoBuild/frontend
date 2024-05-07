import React from 'react'
import "./Cadastro.css"
import Foto from '../../assets/img/img.png'
function Cadastro() {
    return (
        <>
            <div className="grid  lg:grid-cols-2 h-screen place-items-center ">
                <form className="flex items-center flex-col w-9/12 gap-4 -mt-3  ">
                    <h2 className="text-6xl mb-5 mt-12 ">Cadastro</h2>

                    <div className="flex flex-col w-full">
                        <label htmlFor="nome" className='mb-2'>Nome completo </label>
                        <input
                            type="text"
                            required
                            id="nome"
                            name="nome"
                            className="border-b  border-black outline-none  " />
                    </div>


                    <div className="flex flex-col w-full">
                        <label htmlFor="email" className='mb-2 '>E-mail</label>
                        <input
                            type="email"
                            required
                            id="email"
                            name="email"
                            className="border-b  border-black outline-none  " />
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

                    <div className="flex flex-col w-full">
                        <label htmlFor="foto" className='mb-2' >Foto</label>
                        <input
                            type="password"
                            id="foto"
                            name="foto"
                            className="border-b border-black mb-12x1 outline-none "
                        />
                    </div>

                    <label htmlFor="tipo" className='w-full m-2'  >Tipo do usuário :  </label>
                    <div className="flex w-full -m-5">
                        <nav className="flex  flex-row justify-around w-full">
                            <div role="button"
                                className="flex items-center  ">
                                <label htmlFor="tipo" className="flex items-center w-full px-3 py-2 cursor-pointer">
                                    <div className="grid mr-3 place-items-center">
                                        <div className="inline-flex items-center">
                                            <label className="relative flex items-center p-1  cursor-pointer"
                                                htmlFor="tipo">
                                                <input name="camposRadio" id="cliente" type="radio"
                                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border  checked:border-green-dark checked:before:bg-green-dark" />
                                                <span
                                                    className="absolute text-green-dark opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <p>
                                        Cliente
                                    </p>
                                </label>
                            </div>
                            <div role="button"
                                className="flex items-center  ">
                                <label htmlFor="tipo" className="flex items-center w-full px-3 py-2 cursor-pointer">
                                    <div className="grid mr-3 place-items-center">
                                        <div className="inline-flex items-center">
                                            <label className="relative flex items-center p-1  cursor-pointer"
                                                htmlFor="tipo">
                                                <input type="radio"
                                                    id="funcionario"
                                                    name="camposRadio"
                                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border  checked:border-green-dark checked:before:bg-green-dark" />
                                                <span
                                                    className="absolute text-green-dark opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <p>
                                        Funcionário
                                    </p>
                                </label>
                            </div>
                        </nav>
                    </div>

                    <button type='submit' className="rounded-lg bg-green-dark hover:bg-green-hover text-white  p-16 py-3 mt-4 uppercase">
                        <span >Cadastrar</span>
                    </button>
                    <p className='w-full text-center'>
                        Já possui uma conta?  <span className='font-black underline cursor-pointer pl-1.5'> Login</span>

                    </p>
                </form>
                <div className=" w-full h-full pt-20  bg-green-light ">
                    <img src={Foto} className='bg-no-repeat object-contain ' alt="Logo da naturalar"></img>
                </div>
            </div>

        </>
    )
}

export default Cadastro;
// border-b-2 : borderBottom-width : 2px
//outline-none : quando eu clicar no meu input ele não vai ficar com aquela borda escura
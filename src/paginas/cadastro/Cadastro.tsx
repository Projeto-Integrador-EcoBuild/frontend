
import { ChangeEvent, useEffect, useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Foto from '../../assets/img/img.png'
import { cadastrarUsuario } from '../../services/Service'
import Usuario from '../../models/Usuario'
import { AuthContext } from '../../contexts/AuthContext';
import { RotatingLines } from 'react-loader-spinner';
import { toastAlerta } from '../../util/toastAlerta'

function Cadastro() {


    let navigate = useNavigate()

    const [confirmaSenha, setConfirmaSenha] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        email: '',
        senha: '',
        foto: '',
        tipo: 'cliente'
    })

    const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
        id: 0,
        nome: '',
        email: '',
        senha: '',
        foto: '',
        tipo: ''
    })

    useEffect(() => {
        if (usuarioResposta.id !== 0) {
            back()
        }
    }, [usuarioResposta])

    function back() {
        navigate('/home')
    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value)
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
        console.log(usuario)
    }

    async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

            try {
                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
                toastAlerta('Usuário cadastrado com sucesso', 'info')

            } catch (error) {
                toastAlerta('Erro ao cadastrar o Usuário', 'error')
            }

        } else {
            toastAlerta('Senhas inconsistentes!', 'error')
            setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
            setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
        }

        setIsLoading(false)
    }


    return (
        <>
            <div className="grid xl:grid-cols-2 h-full place-items-center  lg:grid-cols-2 2xl:grid-cols-2">
                <form className="flex items-center flex-col w-full gap-9 px-16 mb-8" onSubmit={cadastrarNovoUsuario}>
                    <h2 className="text-6xl mt-6 cp:text-4xl lg:text-5xl">Criação de Conta</h2>

                    <div className="relative w-full ">
                        <input
                            placeholder=''
                            className="peer h-10 w-full border-b border-b-black border-white  text-black bg-transparent placeholder-transparent focus:outline-none focus:border-b-green-dark focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent focus:ring-0"
                            type="text"
                            required
                            id="nome"
                            name="nome"
                            value={usuario.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                        <label htmlFor="nome"
                            className="absolute left-0 -top-3.5  transition-all    peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-green-dark peer-focus:text-lg">Nome completo </label>


                    </div>


                    <div className="relative w-full">
                        <input
                            placeholder=''
                            className="peer h-10 w-full border-b border-b-black border-white  text-black bg-transparent placeholder-transparent focus:outline-none focus:border-b-green-dark focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent focus:ring-0"
                            required
                            id="email"
                            name="email"
                            type="email"
                            value={usuario.email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                        <label htmlFor="email"
                            className="absolute left-0 -top-3.5  transition-all    peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-green-dark peer-focus:text-lg">E-mail </label>


                    </div>



                    <div className="relative w-full  ">
                        <input
                            placeholder=''
                            className="peer h-10 w-full border-b border-b-black border-white  text-black bg-transparent placeholder-transparent focus:outline-none focus:border-b-green-dark focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent focus:ring-0"
                            type="password"
                            minLength={8}
                            required
                            id="senha"
                            name="senha"
                            value={usuario.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                        <label htmlFor="senha"
                            className="absolute left-0 -top-3.5  transition-all    peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-green-dark peer-focus:text-lg">Senha</label>


                    </div>




                    <div className="relative w-full ">
                        <input
                            placeholder=''
                            className="peer h-10 w-full border-b border-b-black border-white  text-black bg-transparent placeholder-transparent focus:outline-none focus:border-b-green-dark focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent focus:ring-0"
                            type="password"
                            minLength={8}
                            required
                            id="confirmarSenha"
                            name="confirmarSenha"
                            value={confirmaSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                        />
                        <label htmlFor="confirmarSenha"
                            className="absolute left-0 -top-3.5  transition-all    peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-green-dark peer-focus:text-lg">Confirmar senha</label>


                    </div>


                    <div className="relative w-full  ">
                        <input
                            placeholder=''
                            className="peer h-10 w-full border-b border-b-black border-white  text-black bg-transparent placeholder-transparent focus:outline-none focus:border-b-green-dark focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent focus:ring-0"
                            type="text"
                            id="foto"
                            name="foto"
                            value={usuario.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                        <label htmlFor="foto"
                            className="absolute left-0 -top-3.5  transition-all    peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-green-dark peer-focus:text-lg">Foto</label>


                    </div>

                    <div className='flex items-center justify-around w-full cp:flex-col lg:flex-col  '>



                        <h3 className='text-lg cp:mb-2 cp:mt-2 lg:mb-4 lg:-mt-2'>Informe o tipo do usuário :</h3>
                        <div
                            className="flex space-x-2 border-[3px] border-green-dark rounded-xl select-none "
                        >

                            <label htmlFor="cliente"
                                className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
                            >
                                <input id='cliente'
                                    type="radio"
                                    name="tipo"
                                    value="cliente"
                                    checked={usuario.tipo === "cliente"}

                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} className="peer hidden" />
                                <span
                                    className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:bg-green-dark peer-checked:text-white text-black p-2 rounded-lg transition duration-150 ease-in-out">Consumidor</span>
                            </label>



                            <label
                                className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer" htmlFor="funcionario"
                            >
                                <input
                                    id='funcionario'
                                    type="radio"
                                    name="tipo"
                                    value="funcionario"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                    className="peer hidden"
                                />
                                <span
                                    className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:bg-green-dark peer-checked:text-white text-black p-2 rounded-lg transition duration-150 ease-in-out">Funcionário</span>
                            </label>



                        </div>







                    </div>





                    <button type='submit' className="rounded-lg bg-green-dark hover:bg-green-hover text-white  p-16 py-3  uppercase" >
                        {isLoading ? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                            <span >Cadastrar</span>}
                    </button>

                    <p className='w-full text-center'>
                        Já possui uma conta? <Link to="/login">
                            <span className='font-black underline cursor-pointer pl-1.5'> Login</span>
                        </Link>

                    </p>
                </form>
                <div className=" w-full h-full pt-20  bg-green-light cp:hidden sm:hidden md:hidden  xl:bg-red-300 xl:h-[102%] 2xl:h-[103.6%] 2xl:mt-[2.7%]">
                    <img src={Foto} className='bg-no-repeat object-contain ' alt="Logo da naturalar"></img>
                </div>
            </div>

        </>
    )
}

export default Cadastro;
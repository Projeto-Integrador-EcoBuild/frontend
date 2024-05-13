import './Cadastro.css'
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
        tipo: ''
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
            <div className="grid  lg:grid-cols-2 h-full mb-8 place-items-center ">
                <form className="flex items-center flex-col w-9/12 gap-4 mt-3  h-full" onSubmit={cadastrarNovoUsuario}>
                    <h2 className="text-6xl  mt-0 ">Cadastro</h2>

                    <div className="flex flex-col w-full">
                        <label htmlFor="nome" className='mb-2'>Nome completo </label>
                        <input
                            type="text"
                            required
                            id="nome"
                            name="nome"
                            value={usuario.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            className="border-b  border-black outline-none  " />
                    </div>


                    <div className="flex flex-col w-full">
                        <label htmlFor="email" className='mb-2 '>E-mail</label>
                        <input
                            type="email"
                            required
                            id="email"
                            name="email"
                            value={usuario.email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
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
                            value={usuario.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            className="border-b  border-black mb-12x1 outline-none "
                        />
                    </div>



                    <div className="flex flex-col w-full">
                        <label htmlFor="confirmarSenha" className='mb-2' >Confirmar senha </label>
                        <input
                            type="password"
                            minLength={8}
                            required
                            id="confirmarSenha"
                            name="confirmarSenha"
                            value={confirmaSenha}
                            className="border-b  border-black mb-12x1 outline-none "
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                        />
                    </div>


                    <div className="flex flex-col w-full">
                        <label htmlFor="foto" className='mb-2'>Foto</label>
                        <input
                            type="text"
                            id="foto"
                            name="foto"
                            value={usuario.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            className="border-b  border-black outline-none  " />
                    </div>




                    <label className='w-full '>Tipo do usuário :  </label>

                    <div className="w-full flex justify-evenly text-2xl">

                        <label htmlFor="funcionario">
                            <input
                                id='funcionario'
                                type="radio"
                                name="tipo"
                                value="funcionario"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                className=" mr-1 mb-1 cursor-pointer checked:bg-green-dark checked:hover:bg-green-dark checked:active:bg-green-dark checked:focus:bg-green-dark focus:bg-green-dark focus:outline-none focus:ring-0 focus:ring-white"
                            />
                            Funcionário

                        </label>


                        <label htmlFor="cliente">
                            <input
                                id='cliente'
                                type="radio"
                                name="tipo"
                                value="cliente"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                className=" tex mr-1 mb-1 cursor-pointer checked:bg-green-dark checked:hover:bg-green-dark checked:active:bg-green-dark checked:focus:bg-green-dark focus:bg-green-dark focus:outline-none focus:ring-0 focus:ring-white"
                            />
                            Cliente
                        </label>

                    </div>


                    <button type='submit' className="rounded-lg bg-green-dark hover:bg-green-hover text-white  p-16 py-3 mt-4 uppercase" >
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
                <div className=" w-full h-full pt-20  bg-green-light ">
                    <img src={Foto} className='bg-no-repeat object-contain ' alt="Logo da naturalar"></img>
                </div>
            </div>

        </>
    )
}

export default Cadastro;
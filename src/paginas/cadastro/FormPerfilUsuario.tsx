
import { ChangeEvent, useEffect, useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import UsuarioFotoVazio from '../../assets/img/user.png'
import { cadastrarUsuario } from '../../services/Service'
import Usuario from '../../models/Usuario'
import { RotatingLines } from 'react-loader-spinner';
import { toastAlerta } from '../../util/toastAlerta'
import { Eye, EyeSlash } from '@phosphor-icons/react'
import backgroundImage from '../../assets/img/blob-scene-haikei.png';
function Cadastro() {
    let navigate = useNavigate();
    let [outraLogo, setOutraLogo] = useState(false);
    const inputs = "border-green-botao input px-[10px] py-[11px] text-base bg-slate-100 border-2 rounded-[5px] focus:outline-none focus:border-green-botao  focus:ring-0 mb-4"
    const labels = "text-green-botao text-base font-semibold  ml-1"
    const [confirmaSenha, setConfirmaSenha] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
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
            setUsuario({ ...usuario, senha: "" })
            setConfirmaSenha("")
        }

        setIsLoading(false)
    }


    function mostrarSenha() {
        setOutraLogo((prevState) => !prevState);
    }

    function verificarSenhas(senha: string, confirmaSenha: string) {
        return senha === confirmaSenha;
    }

    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }} >


            <form className=" flex my-12 flex-col items-center gap-5 w-1/2 p-6 rounded-lg bg-white shadow-2xl shadow-slate-700 md:px-6 md:w-[80%] sm:px-4 sm:w-[80%] cp:px-2
      cp:w-[80%] lg:w-[70%] xl:w-[60%]" onSubmit={cadastrarNovoUsuario}>
                <div className='flex flex-row justify-around  w-[80%] items-center cp:w-full sm:w-full md:w-full lg:w-full' >
                    <h2 className="text-8xl font-light cp:text-5xl sm:text-7xl ">Cadastro</h2>
                    {usuario.foto === '' ? (<img className=' w-32 h-32 rounded-full' src={UsuarioFotoVazio}></img>) : (<img className=' w-32 h-32 rounded-full object-cover' src={usuario.foto}></img>)}

                </div>

                <div className="relative w-full flex flex-col">
                    <label htmlFor="nome"
                        className={labels}
                    >Nome completo * </label>
                    <input
                        placeholder=''
                        className={inputs}
                        type="text"
                        required
                        id="nome"
                        name="nome"
                        value={usuario.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />

                    <label htmlFor="email"
                        className={labels}>E-mail *</label>
                    <input
                        placeholder=''
                        className={inputs}
                        required
                        id="email"
                        name="email"
                        type="email"
                        value={usuario.email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="foto"
                        className={labels}>Foto</label>
                    <input
                        placeholder=''
                        className={inputs}
                        type="text"
                        id="foto"
                        name="foto"
                        value={usuario.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />




                    <div className="flex flex-col-reverse mb-4 ">
                        {outraLogo ? (
                            <div className='w-full flex flex-row justify-between border-green-botao input px-[2px] py-[4px] text-base
                             bg-slate-100 border-2 rounded-[5px] focus:outline-none '>
                                <input
                                    placeholder=''
                                    className="bg-slate-100 border-0 w-[90%] focus:ring-0 "
                                    type="text"
                                    minLength={8}
                                    required
                                    id="senha"
                                    name="senha"
                                    value={usuario.senha}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                />
                                <button onClick={mostrarSenha} type='button' className='w-8 bg-slate-100'>
                                    {outraLogo ? (<Eye size={24} color='#38A673' />) : (<EyeSlash size={24} color='#38A673' />)}
                                </button>
                            </div>
                        ) : (
                            <div className='w-full flex flex-row justify-between border-green-botao input px-[2px] py-[4px] text-base
                             bg-slate-100 border-2 rounded-[5px] '>
                                <input
                                    placeholder=''
                                    className=" bg-slate-100 border-0 w-[90%]  focus:ring-0 "
                                    type="password"
                                    minLength={8}
                                    required
                                    id="senha"
                                    name="senha"
                                    value={usuario.senha}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                />
                                <button onClick={mostrarSenha} type='button' className='w-8 '>
                                    {outraLogo ? (<Eye size={24} color='#38A673' />) : (<EyeSlash size={24} color='#38A673' />)}
                                </button>
                            </div>
                        )}


                        <label
                            className={labels}
                            htmlFor="senha"
                        >Senha* </label>
                    </div>

                    <label htmlFor="confirmarSenha"
                        className={labels} >Confirmar senha *</label>
                    <input
                        placeholder=''
                        className={inputs}
                        type="password"
                        minLength={8}
                        required
                        id="confirmarSenha"
                        name="confirmarSenha"
                        value={confirmaSenha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                    />

                    {verificarSenhas(usuario.senha, confirmaSenha) ? (<p className='hidden'></p>) : (<p className='text-red-500 text-sm'>As senhas não coincidem</p>)}





                </div>


                <div className=' flex items-center justify-around w-full cp:flex-col xl:text-2xl lg:text-2xl 2xl:text-2xl -mt-4'>

                    <h3 className='cp:mb-2  md:text-lg '>Informe o tipo do usuário :</h3>
                    <div
                        className="flex space-x-2 border-[3px] border-green-botao rounded-xl select-none "
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
                                className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:bg-green-botao peer-checked:text-white text-black p-2 rounded-lg transition duration-150 ease-in-out">Consumidor</span>
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
                                className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:bg-green-botao peer-checked:text-white text-black p-2 rounded-lg transition duration-150 ease-in-out">Funcionário</span>
                        </label>



                    </div>







                </div>
                <button type='submit' className="rounded-lg bg-green-botao hover:bg-green-hover text-white  p-16 py-3  uppercase" >
                    {isLoading ? <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                    /> :
                        <span className='lg:text-lg xl:text-lg 2xl:text-lg'>Cadastrar</span>}
                </button>

                <p className='w-full text-center xl:text-xl lg:text-xl 2xl:text-xl'>
                    Já possui uma conta? <Link to="/login">
                        <span className='font-bold cursor-pointer pl-1.5'> Login</span>
                    </Link>

                </p>
            </form>

        </div>


    )
}

export default Cadastro;
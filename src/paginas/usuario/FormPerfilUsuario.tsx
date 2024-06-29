
import { ChangeEvent, useEffect, useState, useContext } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import UsuarioFotoVazio from '../../assets/img/user.png'
import { atualizarUsuario, buscar, cadastrarUsuario } from '../../services/Service'
import Usuario from '../../models/Usuario'
import { RotatingLines } from 'react-loader-spinner';
import { toastAlerta } from '../../util/toastAlerta'
import { Eye, EyeSlash } from '@phosphor-icons/react'
import { AuthContext } from '../../contexts/AuthContext'
import FundoClaro from '../../assets/img/blob-scene-haikei.png';
import FundoEscuro from '../../assets/img/fundoDark.png';
function Cadastro() {
    let navigate = useNavigate();
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    let [outraLogo, setOutraLogo] = useState(false);
    const inputs = "border-green-botao input px-[10px] py-[11px] text-base bg-slate-100 border-2 rounded-[5px] focus:outline-none focus:border-green-botao  focus:ring-0 mb-4 dark:border-transparent dark:bg-gray-fundo"
    const labels = "text-green-botao text-base font-semibold  ml-1  dark:text-white "
    const [confirmaSenha, setConfirmaSenha] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();
    //Usuario pra pegar apenas o token 
    const { usuario } = useContext(AuthContext);
    const token = usuario.token;
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

    const [usuarioT, setUsuario] = useState<Usuario>({
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


    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value)
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuarioT,
            [e.target.name]: e.target.value
        })
    }


    async function buscarPorId(id: string) {
       
         await buscar(`/usuarios/${id}`, setUsuario, {
            headers: {
                Authorization: token,
            },
        });
        setUsuario(prevState => {
            return { ...prevState, senha: "" }
        });
        
    }


    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])


    async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)
        if (verificarSenhas(usuarioT.senha, confirmaSenha)) {
            if (id !== undefined) {
                try {
                    await atualizarUsuario(`/usuarios/atualizar`, usuarioT, setUsuarioResposta,
                        {
                            headers: {
                                'Authorization': token
                            }
                        }
                    )
                    toastAlerta('Usuário atualizado com sucesso', 'info')
                    navigate('/home')
                } catch (error) {
                    toastAlerta('Erro ao cadastrar o Usuário', 'error')
                }
            }
            else {
                try {
                    await cadastrarUsuario(`/usuarios/cadastrar`, usuarioT, setUsuarioResposta)
                    toastAlerta('Usuário cadastrado com sucesso', 'info')
                    navigate('/home')
                } catch (error) {
                    toastAlerta('Erro ao cadastrar o Usuário', 'error')
                }
            }


        } else {
            toastAlerta('Senhas inconsistentes!', 'error')
            setUsuario({ ...usuarioT, senha: "" })
            setConfirmaSenha("")
        }

        setIsLoading(false)
    }


    function mostrarSenha() {
        setOutraLogo((prevState) => !prevState);
    }

    function verificarSenhas(senha: string, confirmaSenha: string) {
        return senha === confirmaSenha && senha.length >= 8;
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
        }} className='bg-hero'>


            <form className=" flex my-12 flex-col items-center gap-5 w-1/2 p-6 rounded-lg bg-white shadow-2xl shadow-slate-700 md:px-6 md:w-[80%] sm:px-4 sm:w-[80%] cp:px-2
      cp:w-[80%] lg:w-[70%] xl:w-[60%] dark:bg-gray-inputs dark:shadow-slate-900 dark:text-white" onSubmit={cadastrarNovoUsuario}>
                <div className='flex flex-row justify-around  w-[80%] items-center cp:w-full sm:w-full md:w-full lg:w-full' >
                    <h2 className="text-8xl font-light cp:text-5xl sm:text-7xl ">Cadastro</h2>
                    {usuarioT.foto === '' ? (<img className=' w-32 h-32 rounded-full' src={UsuarioFotoVazio}></img>) : (<img className=' w-32 h-32 rounded-full object-cover' src={usuarioT.foto}></img>)}

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
                        value={usuarioT.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />


                    {id != undefined ? (<></>) : (<> <label htmlFor="email"
                        className={labels}>E-mail *</label>
                        <input

                            placeholder=''
                            className={inputs}
                            required
                            id="email"
                            name="email"
                            type="email"
                            value={usuarioT.email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </>)}





                    <label htmlFor="foto"
                        className={labels}>Foto</label>
                    <input
                        placeholder=''
                        className={inputs}
                        type="text"
                        id="foto"
                        name="foto"
                        value={usuarioT.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />




                    <div className="flex flex-col-reverse mb-4 ">
                        {outraLogo ? (
                            <div className='w-full flex flex-row justify-between border-green-botao input px-[2px] py-[4px] text-base
                             bg-slate-100 border-2 rounded-[5px] focus:outline-none  dark:border-transparent dark:bg-gray-fundo'>
                                <input
                                    placeholder=''
                                    className="bg-slate-100 border-0 w-[90%] focus:ring-0  dark:bg-gray-fundo "
                                    type="text"
                                    minLength={8}
                                    required
                                    id="senha"
                                    name="senha"
                                    value={usuarioT.senha}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                />
                                <button onClick={mostrarSenha} type='button' className='w-8 bg-slate-100  dark:bg-gray-fundo'>
                                {outraLogo ? (<Eye size={24} className='dark:text-white text-green-botao' />) : (<EyeSlash size={24} className='dark:text-white text-green-botao' />)}
                                </button>
                            </div>
                        ) : (
                            <div className='w-full flex flex-row justify-between border-green-botao input px-[2px] py-[4px] text-base
                             bg-slate-100 border-2 rounded-[5px] dark:border-transparent dark:bg-gray-fundo '>
                                <input
                                    placeholder=''
                                    className=" bg-slate-100 border-0 w-[90%]  focus:ring-0  dark:bg-gray-fundo "
                                    type="password"
                                    minLength={8}
                                    required
                                    id="senha"
                                    name="senha"
                                    value={usuarioT.senha}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                />
                                <button onClick={mostrarSenha} type='button' className='w-8 bg-slate-100 dark:bg-gray-fundo'>
                                {outraLogo ? (<Eye size={24} className='dark:text-white text-green-botao' />) : (<EyeSlash size={24} className='dark:text-white text-green-botao' />)}
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

                    {verificarSenhas(usuarioT.senha, confirmaSenha) ? (<p className='hidden'></p>) : (<p className='text-red-500 text-sm dark:text-red-300'>As senhas não coincidem</p>)}





                </div>


                {id != undefined ? (<div></div>) : (
                    <div className='  flex items-center justify-around w-full cp:flex-col xl:text-2xl lg:text-2xl 2xl:text-2xl -mt-4'>

                        <h3 className='cp:mb-2  md:text-lg '>Informe o tipo do usuário :</h3>
                        <div className="flex space-x-2 border-[3px] border-green-botao rounded-xl select-none ">

                            <label htmlFor="cliente" className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
                                <input id='cliente'
                                    type="radio"
                                    name="tipo"
                                    value="cliente"
                                    checked={usuarioT.tipo === "cliente"}

                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} className="peer hidden" />
                                <span
                                    className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:bg-green-botao peer-checked:text-white text-black p-2 rounded-lg transition duration-150 ease-in-out dark:text-white">Consumidor</span>
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
                                    className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:bg-green-botao peer-checked:text-white text-black p-2 rounded-lg transition duration-150 ease-in-out dark:text-white">Funcionário</span>
                            </label>
                        </div>
                    </div>
                )}




                <button type='submit' className="rounded-lg bg-green-botao hover:bg-green-hover text-white  p-16 py-3  uppercase" >
                    {isLoading ? <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                    /> :
                        <span className='lg:text-lg xl:text-lg 2xl:text-lg'>{id!=undefined ? ('Editar') : ('Cadastrar') } </span>}
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
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import Categoria from '../../../models/Categoria';
import { buscar, atualizar, cadastrar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta'
import { RotatingLines } from 'react-loader-spinner';
import produtoSemFotoClaro from '../../../assets/img/produto_sem_foto.jpg'
import produtoSemFotoEscuro from '../../../assets/img/produto_sem_foto_dark.png'
function FormularioProduto() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const inputs = "border-green-dark cp:w-60 cp:-ml-10 px-[10px] py-[11px] text-s  border-2 rounded-[5px] w-full focus:ring-0 focus:border-2 focus:border-green-hover dark:bg-gray-inputs dark:focus:border-white dark:border-white dark:text-white "
  const label = "text-green-dark text-s cp:-ml-8 font-semibold relative top-3 ml-[7px] px-[3px] bg-white w-fit dark:bg-gray-fundo dark:top-0 dark:text-white"
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: '',
    descricao: '',
  });
  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    descricao: '',
    foto: '',
    preco: 0,
    quantidade: 0,
    categoria: null,
    quantidadeComprada: 0
  });
  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }
  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categoria/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }
  async function buscarCategorias() {
    try {
      await buscar('/categoria', setCategorias, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'error')
        handleLogout()
      }
    }
  }
  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/');
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

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

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
    });
  }

  function retornar() {
    navigate('/produtos');
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    const produtoParaEnviar = {
      ...produto,
      nome: produto.nome.toLowerCase()
    };
    if (id != undefined) {
      try {
        await atualizar(`/produtos`, produtoParaEnviar, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta('Produto atualizado com sucesso', 'sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao atualizar o Produto', 'erro');
        }
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta('Produto cadastrado com sucesso', 'sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao cadastrar o Produto', 'erro');
        }
      }
      setIsLoading(false);
    }
  }

  const carregandoCategoria = categoria.nome === '';

  const backgroundImage = isDarkTheme ? produtoSemFotoEscuro : produtoSemFotoClaro;

  function atualizarTextArea(e: ChangeEvent<HTMLTextAreaElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
    });
  }


  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8 cp:text-3xl dark:text-white">{id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}</h1>

      <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">
        <div className="input flex flex-col static">
          <label htmlFor="nome" className={label}>Nome do produto</label>
          <input
            value={produto.nome}
            maxLength={100}
            minLength={3}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            name="nome"
            required
            className={inputs} />
        </div>

        <div className="input flex flex-col static">
          <label htmlFor="descricao" className={label}>Descrição</label>
          <textarea
            required={true}
            rows={4}
            maxLength={200}
            name="descricao"
            className={inputs}
            value={produto.descricao}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarTextArea(e)} />

        </div>

        <div className="input flex flex-col static">
          <label htmlFor="foto" className={label}>Foto do produto</label>
          <input
            value={produto.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            name="foto"
            required
            className={inputs}
          />
        </div>
        <div className=' flex flex-row items-center justify-center'>
          {produto.foto === '' ? (<img className='  w-56 h-56 object-cover' src={backgroundImage}></img>) : (<img className=' w-56 h-56  object-cover ' src={produto.foto}></img>)}
        </div>
        <div className="input flex flex-col static">
          <label htmlFor="preco" className={label}>Preço do produto</label>
          <input
            value={produto.preco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="number"
            name="preco"
            required
            className={inputs}
          />
        </div>
        <div className="input flex flex-col static">
          <label htmlFor="quantidade" className={label}>Quantidade de produtos</label>
          <input
            value={produto.quantidade}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="number"
            name="quantidade"
            required
            className={inputs}
          />
        </div>
        <div className="input flex flex-col static mt-5 cp:w-60 cp:-ml-10">
          <select name="categoria" id="categoria" className="border-green-dark dark:border-white dark:bg-gray-inputs dark:text-white px-[10px] py-[11px] text-s  border-2 rounded-[5px] w-full focus:ring-0 focus:border-2 focus:border-green-hover " onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
            <option value="" selected disabled>Selecione uma Categoria</option>
            {categorias.map((categoria) => (
              <>
                <option value={categoria.id} >{categoria.nome}</option>
              </>
            ))}
          </select>
        </div>
        <button
          className={`rounded text-white ${!categoria.nome ? 'disabled:bg-slate-200 ' : 'bg-green-600 hover:bg-green-700'} 
              w-1/3 cp:w-full py-4 mx-auto block text-xl relative cp:text-sm`}
          type="submit"
          disabled={!categoria.nome}
        >
          {isLoading && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            </div>
          )}
          {!isLoading && (id === undefined ? (categoria.nome ? 'Cadastrar' : 'Carregando') : (categoria.nome ? 'Editar' : 'Carregando'))}
        </button>
      </form><br /><br />
    </div>
  );
}

export default FormularioProduto;
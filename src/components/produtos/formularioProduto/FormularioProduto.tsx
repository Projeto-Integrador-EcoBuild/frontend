import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import Categoria from '../../../models/Categoria';
import { buscar, atualizar, cadastrar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta'

function FormularioProduto() {
  let navigate = useNavigate();

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

    console.log({ produto });

    if (id != undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto, {
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
    }
  }

  const carregandoCategoria = categoria.nome === '';

  console.log(categorias);


  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}</h1>

      <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">
        <div className="input flex flex-col static">
          <label htmlFor="nome" className='text-green-dark text-s font-semibold relative top-3 ml-[7px] px-[3px] bg-white w-fit '>Nome do produto</label>
          <input
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            name="nome"
            required
            className="border-green-dark  px-[10px] py-[11px] text-s  border-2 rounded-[5px] w-full focus:ring-0 focus:border-2 focus:border-green-hover "
          />
        </div>

        <div className="input flex flex-col static">
          <label htmlFor="nome" className='text-green-dark text-s font-semibold relative top-3 ml-[7px] px-[3px] bg-white w-fit '>Descrição</label>
          <textarea
            required
            rows={4}
            name="descricao"
            className="border-green-dark  px-[10px] py-[11px] text-s  border-2 rounded-[5px] w-full focus:ring-0 focus:border-2 focus:border-green-hover "
            value={produto.descricao}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstado(e)} />
        </div>
        
        <div className="input flex flex-col static">
          <label htmlFor="foto" className='text-green-dark text-s font-semibold relative top-3 ml-[7px] px-[3px] bg-white w-fit '>Foto do produto</label>
          <input
            value={produto.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            name="foto"
            required
            className="border-green-dark  px-[10px] py-[11px] text-s  border-2 rounded-[5px] w-full focus:ring-0 focus:border-2 focus:border-green-hover "
          />
        </div>
        <div className="input flex flex-col static">
          <label htmlFor="preco" className='text-green-dark text-s font-semibold relative top-3 ml-[7px] px-[3px] bg-white w-fit '>Preço do produto</label>
          <input
            value={produto.preco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="number"
            name="preco"
            required
            className="border-green-dark  px-[10px] py-[11px] text-s  border-2 rounded-[5px] w-full focus:ring-0 focus:border-2 focus:border-green-hover "
          />
        </div>
        <div className="input flex flex-col static">
          <label htmlFor="quantidade" className='text-green-dark text-s font-semibold relative top-3 ml-[7px] px-[3px] bg-white w-fit '>Quantidade de produtos</label>
          <input
            value={produto.quantidade}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="number"
            name="quantidade"
            required
            className="border-green-dark  px-[10px] py-[11px] text-s  border-2 rounded-[5px] w-full focus:ring-0 focus:border-2 focus:border-green-hover "
          />
        </div>
        <div className="input flex flex-col static mt-5">
          <select name="categoria" id="categoria"  className="border-green-dark  px-[10px] py-[11px] text-s  border-2 rounded-[5px] w-full focus:ring-0 focus:border-2 focus:border-green-hover " onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
            <option value="" selected disabled>Selecione uma Categoria</option>
            {categorias.map((categoria) => (
              <>
                <option value={categoria.id} >{categoria.nome}</option>
              </>
            ))}
          </select>
        </div>
        <button disabled={carregandoCategoria} type='submit' className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'>
          {carregandoCategoria ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
        </button>
      </form><br/><br/>
    </div>
  );
}

export default FormularioProduto;

import Menu from './components/Menu/Menu'
import Rodape from './components/Rodape/Rodape'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './paginas/home/Home'
import Sobre from './paginas/sobre/Sobre'
import Login from './paginas/login/Login'
import { AuthProvider } from './contexts/AuthContext'
import ListaCategoria from './components/Categoria/listaCategoria/ListaCategoria'
import DeletarCategoria from './components/Categoria/deletarCategoria/DeletarCategoria'
import FormCategoria from './components/Categoria/FormCategoria/FormCategoria'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListaProdutos from './components/produtos/listaProduto/ListaProduto'
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto'
import FormularioProduto from './components/produtos/formularioProduto/FormularioProduto'
import Carrinho from './paginas/Cart/Carrinho'
import ItemProduto from './components/produtos/itemProduto/ItemProduto'
import ListaProdutosBusca from './components/produtos/listaProduto/ListaProdutosBusca'
import FormPerfilUsuario from './paginas/cadastro/FormPerfilUsuario'
import ListaProdutosCategoria from './components/produtos/listaProduto/ListaProdutosCategoria'

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
        <Menu />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<FormPerfilUsuario />} />
            <Route path='/editarPerfil/:id' element={<FormPerfilUsuario />} />
            <Route path='/item/:id' element={<ItemProduto />} />
            <Route path='/categoria' element={<ListaCategoria />} />
            <Route path='/deletarCategoria/:id' element={<DeletarCategoria />} />
            <Route path='/cadastrarCategoria' element={<FormCategoria />} />
            <Route path='/editarCategoria/:id' element={<FormCategoria />} />
            <Route path='/produtos' element={<ListaProdutos />} />
            <Route path='/deletarProduto/:id' element={<DeletarProduto />} />
            <Route path='/cadastrarProduto' element={<FormularioProduto />} />
            <Route path='/editarProduto/:id' element={<FormularioProduto />} />
            <Route path='/busca/:nome' element={<ListaProdutosBusca />} />
            <Route path='/produtos/categoria/:id' element={<ListaProdutosCategoria/>}/>
            <Route path='/carrinho' element={<Carrinho />} />

          </Routes>
        </div>
        <Rodape />
      </BrowserRouter>
    </AuthProvider>
  )
}
export default App



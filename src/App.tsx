
import Menu from './components/Menu/Menu'
import Rodape from './components/Rodape/Rodape'
import { BrowserRouter, Route, Routes , Navigate } from 'react-router-dom'
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
import Carrinho from './paginas/cart/Carrinho'
import ItemProduto from './components/produtos/itemProduto/ItemProduto'
import ListaProdutosBusca from './components/produtos/listaProduto/ListaProdutosBusca'
import FormPerfilUsuario from './paginas/usuario/FormPerfilUsuario'
import ListaProdutosCategoria from './components/produtos/listaProduto/ListaProdutosCategoria'
import { DarkThemeToggle } from 'flowbite-react'
import NotFound from './paginas/notFound/NotFound'
function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
        <Menu />
        <div className='min-h-[80vh] dark:bg-gray-fundo'>
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
            <Route path='/404' element={<NotFound/>}/>
            <Route path="*" element={<Navigate to="/404"/>} />
          </Routes>
          <DarkThemeToggle  className=" bg-slate-100 dark:bg-gray-700  h-20 w-20 rounded-full cp:hidden sm:hidden md:hidden dark:border-white border-black  items-center flex text-center justify-center fixed  bottom-3 right-6"/>
          
          
        </div>
        <Rodape />
      </BrowserRouter>
    </AuthProvider>
  )
}
export default App



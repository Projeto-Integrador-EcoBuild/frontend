import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import ModalProduto from '../../components/produtos/modalProduto/ModalProduto'

export default  function Carrinho() {
    const { items } = useContext(AuthContext)
    let { limparCart, removerProduto } = useContext(AuthContext)
    const navigate = useNavigate();
    let soma: number = 0;
    let totalItens: number = 0;
    items.forEach(element => {
        soma += element.preco * element.quantidadeComprada
        totalItens += element.quantidadeComprada
    });
    function continuarCompra() {
        navigate('/produtos')
    }
  

    return (
        <div className='dark:bg-gray-fundo dark:text-white '>
            <div className='flex ml-32 cp:ml-1 sm:ml-1 md:ml-20 pt-10 w-1/2 cp:w-full items-center'>
                <span className="material-symbols-rounded mr-6 cursor-pointer" onClick={continuarCompra}>arrow_back </span> <h1 className=' justify-center  text-3xl cp:text-2xl ' >Carrinho de compras</h1>
            </div>

            <div className=' flex flex-row justify-center cp:ml-1 sm:ml-1 md:ml-20 mt-5 border cp:w-full cp:grid cp:grid-cols-1 mx-44  '>

                <div className='w-2/3 md:-ml-32 cp: cp:w-full '>
                    <ol className='flex justify-between border-b uppercase px-6 py-2 cp:hidden sm:hidden md:hidden '>
                        <li >item</li>
                        <li>Nome</li>
                        <li>Quantidade</li>
                        <li>Preço unitário</li>
                        <li >Preço</li>
                    </ol>
                    {
                        items.map(produto => (

                            <div className='border-b flex flex-col mt-4 md:grid md:grid-cols-1 md:-ml-2 '>
                                <ol className=' flex  mx-6'>
                                    <li><img src={produto.foto} className='w-24  flex items-center justify-center' /></li>
                                    <li className=' ml-12 w-2/3 text-bold md:ml-4 cp:ml-4' >{produto.nome}</li>
                                    <li className=' ml-12 w-2/3 text-bold md:ml-4 md:-mr-8 cp:hidden' >{produto.quantidadeComprada}</li>
                                    <li className=' ml-12 w-2/3 text-bold md:hidden lg:hidden xl:hidden 2xl:hidden cp:-ml-1' ><strong>Qtd:{produto.quantidadeComprada}</strong></li>
                                    <li className=' ml-12 w-2/3 text-bold md:ml-4 cp:ml-4 cp:hidden' >{produto.preco.toFixed(2).replace(".", ",")}</li>
                                    <li className='text-end w-1/3  mr-2 md:ml-4 cp:-ml-2 '><strong>R${(produto.preco * produto.quantidadeComprada).toFixed(2).replace(".", ",")}</strong></li>

                                </ol>
                                <button className=' ml-auto -mt-1 mb-5 mr-6 cp:' onClick={() => removerProduto(produto.id)}>
                                    <div className="w-5 h-5 bg-green-light rounded-full flex items-center justify-center hover:bg-red-500">
                                        <svg className="w-6 h-6 text-green-dark hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.707 10l4.147-4.146a.5.5 0 1 0-.708-.708L10 9.293 5.854 5.146a.5.5 0 1 0-.708.708L9.293 10l-4.147 4.146a.5.5 0 1 0 .708.708L10 10.707l4.146 4.147a.5.5 0 0 0 .708-.708L10.707 10z" clipRule="evenodd" />
                                        </svg>
                                    </div>

                                </button>

                            </div>

                        ))
                    }
                    <div className='flex flex-row justify-between mx-2 my-2 cp:mx-0 cp:my-0'>

                        <button className='p-4 border cp:p-2 cp:ml-4 cp:text-sm cp: cp:w-40  border-green-dark text-green-dark hover:bg-green-hover hover:text-white  dark:bg-green-hover dark:text-white dark:hover:text-black dark:hover:bg-green-light ' onClick={continuarCompra} > Continue Comprando</button>
                        <button className=' p-4 border cp:p-2 cp:mr-5 cp:text-sm cp:w-40 border-green-dark text-green-dark hover:bg-green-hover hover:text-white  dark:bg-green-hover dark:text-white dark:hover:text-black dark:hover:bg-green-light' onClick={limparCart}>Limpar o carrinho</button>

                    </div>

                </div>
                <div className=' ml-2 bg-gray-100 w-1/3 h-screen p-5 text-center p-auto md:w-2/5 md:-mr-48 cp:w-full cp:-ml-3 dark:bg-gray-inputs'>
                    <div className="  top-5 ml-3 md:ml-0 ">
                        <h1 className={"border-b text-2xl uppercase  "}>Resumo da compra</h1>
                        <h2 className='my-3 '>Quantidade de itens : {totalItens}</h2>
                        <h3 className={"border-b"}>Total do pedido : <strong>R${soma.toFixed(2).replace(".", ",")}  </strong></h3>
                        <ModalProduto />

                    </div>

                </div>

            </div >
        </div>
    )
}


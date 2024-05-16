import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import ModalProduto from '../../components/produtos/modalProduto/ModalProduto'

function Carrinho() {
    const { items } = useContext(AuthContext)
    let { quantidadeItems, limparCart, finalizarCompra, removerProduto } = useContext(AuthContext)
    const navigate = useNavigate();
    let soma: number = 0;
    items.forEach(element => {
        soma += element.preco
    });
    let valor = 0;
    function continuarCompra() {
        navigate('/produtos')
        console.log(valor)
    }
   
    return (
        <>
            <div className='flex ml-32 mt-10 w-1/2  items-center'>
                <span className="material-symbols-rounded mr-6 cursor-pointer" onClick={continuarCompra}>arrow_back </span> <h1 className=' justify-center   text-3xl ' >Carrinho de compras</h1>
            </div>

            <div className=' flex flex-row justify-center  mt-5 border mx-44 mb-10 '>

                <div className='w-2/3   '>
                    <ol className='flex justify-between border-b uppercase px-6 py-2 '>
                        <li >item</li>
                        <li >Preço</li>
                    </ol>
                    {
                        items.map(produto => (

                            <div className='border-b flex flex-col mt-4'>
                                <ol className=' flex  mx-6'>
                                    <li><img src={produto.foto} className='w-24 flex items-center justify-center' /></li>
                                    <li className=' ml-12 w-2/3 text-bold ' >{produto.nome}</li>
                                    <li className='text-end w-1/3  mr-2  '><strong>R${valor = produto.preco}</strong></li>

                                </ol>
                                <button className=' ml-auto -mt-6 mb-5 mr-6 b' onClick={() => removerProduto(produto.id)}>
                                    <div className="w-5 h-5 bg-green-light rounded-full flex items-center justify-center hover:bg-red-500">
                                        <svg className="w-6 h-6 text-green-dark hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.707 10l4.147-4.146a.5.5 0 1 0-.708-.708L10 9.293 5.854 5.146a.5.5 0 1 0-.708.708L9.293 10l-4.147 4.146a.5.5 0 1 0 .708.708L10 10.707l4.146 4.147a.5.5 0 0 0 .708-.708L10.707 10z" clipRule="evenodd" />
                                        </svg>
                                    </div>

                                </button>


                            </div>

))
                    }
                    <div className='flex flex-row justify-between mx-2 my-2'>

                        <button className='p-4 border border-green-dark text-green-dark hover:bg-green-hover hover:text-white ' onClick={continuarCompra} > Continue Comprando</button>
                        <button className=' p-4 border border-green-dark text-green-dark hover:bg-green-hover hover:text-white ' onClick={limparCart}>Limpar o carrinho</button>

                    </div>



                </div>
                <div className=' ml-2 bg-gray-100 w-1/3 h-screen p-5 text-center p-auto   '>
                    <div className=" fixed ml-3 ">
                        <h1 className={"border-b text-2xl uppercase "}>Resumo da compra</h1>
                        <h2 className='my-3 '>Quantidade de itens : {quantidadeItems}</h2>
                        <h3 className={"border-b"}>Total do pedido : <strong>R${soma}  </strong></h3>
                        <ModalProduto />

                    </div>


                </div>




            </div >
        </>
    )
}

export default Carrinho
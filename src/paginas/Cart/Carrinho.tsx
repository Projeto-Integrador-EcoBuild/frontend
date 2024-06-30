import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import ModalProduto from '../../components/produtos/modalProduto/ModalProduto'
import { Link } from 'react-router-dom'
export default function Carrinho() {
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
    function paginaDoProduto(id: number) {
        navigate(`/item/${id}`)
    }


    return (
        <div className='dark:text-white  h-full p-12 cp:p-8 '>
            <div className='flex   w-full  items-center'>
                <span className="material-symbols-rounded mr-6 cursor-pointer" onClick={continuarCompra}>arrow_back </span> <h1 className=' justify-center  text-3xl cp:text-2xl ' >Carrinho de compras</h1>
            </div>


            <div className='flex flex-row border h-full mt-4 sm:flex-col  cp:flex-col'>
                <div className="relative overflow-x-auto w-[70%] sm:w-full cp:w-full">
                    <table className="w-full text-sm text-left rtl:text-right   ">
                        <thead className="text-sm   uppercase border-b ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Item
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nome
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Qtd
                                </th>
                                <th scope="col" className="px-6 py-3 cp:hidden sm:hidden md:hidden">
                                    Preço unitário
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Preço total
                                </th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                                items.map(produto => (

                                    < >
                                        <tr className="border-b">
                                            <td className="px-6 py-4 cp:py-2 cp:px-2 ">
                                                <img src={produto.foto} className='w-28 h-28 object-cover cp:w-[80%] cp:h-[80%] cursor-pointer' onClick={() => { paginaDoProduto(produto.id) }} /></td>
                                            <td scope="row" className="px-6 py-4 capitalize" >{produto.nome}</td>

                                            <td className="px-6 py-4 " >{produto.quantidadeComprada}</td>
                                            <td className="px-6 py-4 cp:hidden sm:hidden md:hidden" > R${produto.preco.toFixed(2).replace(".", ",")}</td>
                                            <td className="px-6 py-4"><strong>R${(produto.preco * produto.quantidadeComprada).toFixed(2).replace(".", ",")}</strong></td>

                                            <button className='h-12 flex mt-16 mb-4 w-12 items-end ' onClick={() => removerProduto(produto.id)}>
                                                <div className="w-5 h-5 bg-green-light rounded-full flex items-center justify-center hover:bg-red-500">
                                                    <svg className="w-6 h-6 text-green-dark hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10.707 10l4.147-4.146a.5.5 0 1 0-.708-.708L10 9.293 5.854 5.146a.5.5 0 1 0-.708.708L9.293 10l-4.147 4.146a.5.5 0 1 0 .708.708L10 10.707l4.146 4.147a.5.5 0 0 0 .708-.708L10.707 10z" clipRule="evenodd" />
                                                    </svg>
                                                </div>

                                            </button>

                                        </tr>


                                    </>

                                ))
                            }
                        </tbody>
                    </table>
                    <div className='w-full flex flex-row justify-between mt-5 px-10 cp:px-2'>
                        <button className='p-4 border  border-green-dark text-green-dark hover:bg-green-hover hover:text-white  dark:bg-green-hover dark:text-white dark:hover:text-black dark:hover:bg-green-light ' onClick={continuarCompra} > Continue Comprando</button>
                        <button className=' p-4 border  border-green-dark text-green-dark hover:bg-green-hover hover:text-white  dark:bg-green-hover dark:text-white dark:hover:text-black dark:hover:bg-green-light' onClick={limparCart}>Limpar o carrinho</button>
                    </div>

                </div>




                <div className="= w-[30%] px-8 py-8 dark:bg-gray-inputs text-center bg-gray-100 sm:w-full sm:mt-5 cp:w-full cp:mt-5">
                    <h1 className={"border-b text-2xl uppercase   "}>Resumo da compra</h1>
                    <h2 className='my-3 '>Quantidade de itens : {totalItens}</h2>
                    <h3 className={"border-b"}>Total do pedido : <strong>R${soma.toFixed(2).replace(".", ",")}  </strong></h3>
                    <ModalProduto />



                </div>

            </div>





        </div>
    )
}


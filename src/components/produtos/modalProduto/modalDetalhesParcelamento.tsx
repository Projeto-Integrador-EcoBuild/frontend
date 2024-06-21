import React from 'react';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'


function ModalDetalhesParcelamento({ preco }) {

    const bordas = "border border-black font-medium"
    const bordasPar = "border border-black bg-gray-200 font-medium"
    const navigate = useNavigate();
    function voltarHome() {
        navigate(-1)
    }

    let componenteParaRangeDeValor

    if (preco < 10) {
        componenteParaRangeDeValor = (
            <>
                <Popup
                    trigger={<p className='underline cursor-pointer'>Detalhes de parcelamento</p>} modal  >
                    <button className=' relative -right-[640px]   -top-6' onClick={voltarHome} >
                        <div className="w-9 h-9 bg-green-light rounded-full flex items-center justify-center hover:bg-red-500">
                            <svg className="w-6 h-6 text-green-dark hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.707 10l4.147-4.146a.5.5 0 1 0-.708-.708L10 9.293 5.854 5.146a.5.5 0 1 0-.708.708L9.293 10l-4.147 4.146a.5.5 0 1 0 .708.708L10 10.707l4.146 4.147a.5.5 0 0 0 .708-.708L10.707 10z" clipRule="evenodd" />
                            </svg>
                        </div>

                    </button><div className='text-center py-2 -mt-10'>

                        <h1 className='font-semibold text-xl '>Opções de parcelamento</h1>
                        <hr className='mb-4'></hr>

                        <h1 className='text-2xl text-red-600'>Indisponíveis para esse valor </h1>

                    </div>

                </Popup>
            </>
        )
    }

    else if (preco > 10 && preco < 50) {
        componenteParaRangeDeValor = (
            <>
                <Popup
                    trigger={<p className='underline cursor-pointer'>Detalhes de parcelamento</p>} modal  >
                    <button className=' relative -right-[640px]   -top-6' onClick={voltarHome} >
                        <div className="w-9 h-9 bg-green-light rounded-full flex items-center justify-center hover:bg-red-500">
                            <svg className="w-6 h-6 text-green-dark hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.707 10l4.147-4.146a.5.5 0 1 0-.708-.708L10 9.293 5.854 5.146a.5.5 0 1 0-.708.708L9.293 10l-4.147 4.146a.5.5 0 1 0 .708.708L10 10.707l4.146 4.147a.5.5 0 0 0 .708-.708L10.707 10z" clipRule="evenodd" />
                            </svg>
                        </div>

                    </button><div className='text-center py-2 -mt-10'>

                        <h1 className='font-semibold text-xl '>Opções de parcelamento</h1>
                        <hr className='mb-4'></hr>
                        <table className='border-2 border-black w-[80%] m-auto '>
                            <tr className={bordasPar}>
                                <th className={bordas}> Quantidade de parcelas </th>
                                <th className={bordas}>Valor por parcela</th>

                            </tr>
                            <tr>
                                <th className={bordas}>2X</th>
                                <th className={bordas}>R${(preco / 2).toFixed(2).replace(".", ",")}</th>
                            </tr>

                            <tr>
                                <th className={bordasPar}>3X</th>
                                <th className={bordasPar}>R${(preco / 3).toFixed(2).replace(".", ",")}</th>
                            </tr>
                        </table>
                    </div>

                </Popup>
            </>
        )

    }


    else {

        componenteParaRangeDeValor = (

            <>
                <Popup
                    trigger={<p className='underline cursor-pointer'>Detalhes de parcelamento</p>} modal  >
                    <button className=' relative -right-[640px] -top-6 ' onClick={voltarHome} >
                        <div className="w-9 h-9 bg-green-light rounded-full flex items-center justify-center hover:bg-red-500">
                            <svg className="w-6 h-6 text-green-dark hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.707 10l4.147-4.146a.5.5 0 1 0-.708-.708L10 9.293 5.854 5.146a.5.5 0 1 0-.708.708L9.293 10l-4.147 4.146a.5.5 0 1 0 .708.708L10 10.707l4.146 4.147a.5.5 0 0 0 .708-.708L10.707 10z" clipRule="evenodd" />
                            </svg>
                        </div>

                    </button><div className='text-center py-2 -mt-10'>

                        <h1 className='font-semibold text-xl '>Opções de parcelamento</h1>
                        <hr className='mb-4'></hr>
                        <table className='border-2 border-black w-[80%] m-auto '>
                            <tr className={bordasPar}>
                                <th className={bordas}> Quantidade de parcelas </th>
                                <th className={bordas}>Valor por parcela</th>

                            </tr>
                            <tr>
                                <th className={bordas}>2X</th>
                                <th className={bordas}>R${(preco / 2).toFixed(2).replace(".", ",")}</th>
                            </tr>

                            <tr>
                                <th className={bordasPar}>3X</th>
                                <th className={bordasPar}>R${(preco / 3).toFixed(2).replace(".", ",")}</th>
                            </tr>

                            <tr>
                                <th className={bordas}>4X</th>
                                <th className={bordas}>R${(preco / 4).toFixed(2).replace(",", ".")}</th>
                            </tr>

                            <tr>
                                <th className={bordasPar}>5X</th>
                                <th className={bordasPar} >R${(preco / 5).toFixed(2).replace(",", ".")}</th>
                            </tr>


                            <tr>
                                <th className={bordas}>6X</th>
                                <th className={bordas}>R${(preco / 6).toFixed(2).replace(",", ".")}</th>
                            </tr>

                        </table>
                    </div>

                </Popup>
            </>
        )
    }
    return (
        <>
            {componenteParaRangeDeValor}
        </>
    );
}

export default ModalDetalhesParcelamento;
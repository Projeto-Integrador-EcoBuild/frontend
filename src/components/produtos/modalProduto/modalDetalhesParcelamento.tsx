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
                    <div className='w-full pb-4 text-center '>
                        <div className='w-full flex justify-end pr-3'>
                            <button className=' text-green-dark 
                              text-center text-2xl
                             font-bold    '>X</button>

                        </div>
                       
                        <span className='font-semibold  w-full text-xl text-center'>Opções de parcelamento</span>

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
                    <div className='w-full pb-4 text-center '>
                        <div className='w-full flex justify-end pr-3'>
                            <button className=' text-green-dark 
                              text-center text-2xl
                             font-bold    '>X</button>

                        </div>
                       
                        <span className='font-semibold w-full text-xl text-center'>Opções de parcelamento</span>
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
                    <div className='w-full pb-4 text-center '>
                        <div className='w-full flex justify-end pr-3'>
                            <button className=' text-green-dark 
                              text-center text-2xl
                             font-bold    '>X</button>

                        </div>
                       
                        <span className='font-semibold  w-full text-xl text-center'>Opções de parcelamento</span>

                        <hr className='mb-4'></hr>
                        <table className='border-2 border-black w-[80%] m-auto  '>
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
import React from 'react';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'


function ModalDetalhesParcelamento({ preco }) {
    const [isOpen, setIsOpen] = useState(false);
    const bordas = "border border-black font-medium"
    const bordasPar = "border border-black bg-gray-200 font-medium"
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    let componenteParaRangeDeValor

    if (preco < 10) {
        componenteParaRangeDeValor = (
            <>
                <p className='text-green-hover underline cursor-pointer' onClick={openModal}>Detalhes de parcelamento</p>
                <Popup open={isOpen} closeOnDocumentClick onClose={closeModal}>
                    <div className='w-full pb-4 text-center'>
                        <div className='w-full flex justify-end pr-3'>
                            <button className='text-green-dark text-center text-2xl font-bold' onClick={closeModal}>X</button>
                        </div>
                        <span className='font-semibold w-full text-xl text-center text-green-hover'>Opções de parcelamento</span>
                        <hr className='mb-4' />
                        <h1 className='text-2xl text-red-600'>Indisponíveis para esse valor</h1>
                    </div>
                </Popup>
            </>
        )
    }

    else if (preco > 10 && preco < 50) {
        componenteParaRangeDeValor = (
            <>
                <p className='underline cursor-pointer  text-green-hover' onClick={openModal}>Detalhes de parcelamento</p>
                <Popup open={isOpen} closeOnDocumentClick onClose={closeModal}>

                    <div className='w-full pb-4 text-center '>
                        <div className='w-full flex justify-end pr-3'>
                            <button className=' text-green-dark 
                              text-center text-2xl
                             font-bold    ' onClick={closeModal}>X</button>

                        </div>

                        <span className='font-semibold w-full text-xl text-center  text-green-hover'>Opções de parcelamento</span>
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

                </Popup >
            </>
        )

    }


    else {

        componenteParaRangeDeValor = (

            <>
                <p className='underline cursor-pointer  text-green-hover' onClick={openModal}>Detalhes de parcelamento</p>
                <Popup open={isOpen} closeOnDocumentClick onClose={closeModal}>
                    <div className='w-full pb-4 text-center '>
                        <div className='w-full flex justify-end pr-3'>
                            <button className=' text-green-dark 
                              text-center text-2xl
                             font-bold ' onClick={closeModal}>X</button>

                        </div>

                        <span className='font-semibold  w-full text-xl text-center  text-green-hover'>Opções de parcelamento</span>

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
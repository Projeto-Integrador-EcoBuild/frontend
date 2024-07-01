import React from 'react';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'


function ModalProduto() {
    const { finalizarCompra } = useContext(AuthContext)
    const navigate = useNavigate();
    function voltarHome() {
        navigate('/home')
        finalizarCompra();
    }
    return (
        <>
            <Popup
                trigger={<button className='rounded-lg bg-green-dark hover:bg-green-hover text-white md:p-8 md:py-1 p-16 py-3 uppercase mt-4
                 dark:bg-green-hover dark:text-white dark:hover:text-black dark:hover:bg-green-light'>Finalizar pedido</button>} modal  >
                <div className='w-full pb-4 text-center dark:bg-gray-500  '>
                    <div className='w-full flex justify-end pr-3'>
                        <button className=' text-green-dark 
                              text-center text-2xl
                             font-bold    ' onClick={voltarHome}>X</button>

                    </div>
                    <p className='font-semibold w-full text-2xl text-center text-green-hover mb-6 dark:text-green-dark'>Compra finalizada</p>
                    <span className='font-semibold w-full text-xl text-center  text-green-hover dark:text-green-dark'>Obrigado por escolher a Naturalar !</span>

                </div>
            </Popup>
        </>
    );
}

export default ModalProduto;
import React from 'react';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'


function ModalProduto() {
    const {  finalizarCompra } = useContext(AuthContext)
    const navigate  = useNavigate();
    function voltarHome() {
        navigate('/home')
        finalizarCompra();
    }
    return (
        <>
            <Popup
                trigger={<button className='rounded-lg bg-green-dark hover:bg-green-hover text-white  p-16 py-3 uppercase mt-4'>Finalizar pedido</button>} modal  >
                <button className=' relative -right-[640px] -top-6' onClick={voltarHome} >
                    <div className="w-9 h-9 bg-green-light rounded-full flex items-center justify-center hover:bg-red-500">
                        <svg className="w-6 h-6 text-green-dark hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.707 10l4.147-4.146a.5.5 0 1 0-.708-.708L10 9.293 5.854 5.146a.5.5 0 1 0-.708.708L9.293 10l-4.147 4.146a.5.5 0 1 0 .708.708L10 10.707l4.146 4.147a.5.5 0 0 0 .708-.708L10.707 10z" clipRule="evenodd" />
                        </svg>
                    </div>

                </button><div className='text-center py-2 -mt-10'>

                    <h1 className='font-bold text-2xl'>Compra finalizada!</h1>
                    <h1 >Obrigado por escolher a Naturalar!</h1>

                </div>

            </Popup>
        </>
    );
}

export default ModalProduto;
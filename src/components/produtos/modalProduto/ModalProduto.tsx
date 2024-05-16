import React from 'react';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';


 function ModalProduto(){
    return (
        <>
          <Popup 
          trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Ok</button>} modal>
            <div>
                <h1>Compra finalizada com sucesso! qqqqqqqqqqqqqqqqqqqqqqqqqqq</h1>
            </div>
          </Popup>
        </>
      );
}

export default ModalProduto;
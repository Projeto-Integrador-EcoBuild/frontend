import React, { useState } from 'react';
import Produto from '../../../models/Produto';

interface ProdutosProps {
    listaProduto: Produto[];
    setListaProduto: React.Dispatch<React.SetStateAction<Produto[]>>;
}

const BotaoOrdernar: React.FC<ProdutosProps> = ({ listaProduto, setListaProduto }) => {
    const maiorPreco = () => {
        const sortedProdutos = [...listaProduto].sort((x, y) => y.preco - x.preco);
        setListaProduto(sortedProdutos);
    };

    const ordemPadrao = () => {
        const sortedProdutos = [...listaProduto].sort((x, y) => x.id - y.id);
        setListaProduto(sortedProdutos);
    };

    const menorPreco = () => {
        const sortedProdutos = [...listaProduto].sort((x, y) => x.preco - y.preco);
        setListaProduto(sortedProdutos);
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        if (value === 'menorPreco') {
            menorPreco();
        } else if (value === 'maiorPreco') {
            maiorPreco();
        } else if (value === 'ordemPadrao') {
            ordemPadrao();
        }
    };

    return (
        <div className=' lg:w-[50%]  cp:truncate lg:truncate sm:truncate px-12 flex flex-row cp:px-2 cp:text-sm cp:w-full items-center border  border-green-dark rounded-lg'>
            <p className='text-green-dark'>Ordenar por: </p>
     
            <select
                name="select"
                className='rounded-xl uppercase appearance-none cp:text-sm border-0 border-transparent focus:ring-0 focus:border-transparent   text-green-dark'
                onChange={handleSelectChange}
            >
            
                <option value="ordemPadrao" selected>Ordem padrão</option>
                <option value="menorPreco" >Menor preço</option>
                <option value="maiorPreco">Maior preço</option>
            </select>
        </div>
    );
};

export default BotaoOrdernar;

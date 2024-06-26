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
        <div className='sm:px-4 lg:w-[50%] cp:truncate lg:truncate sm:truncate px-8 flex flex-row items-center border border-black rounded-lg'>
            <p>Ordenar por: </p>
            <select
                name="select"
                className='rounded-xl uppercase appearance-none border-0 border-transparent focus:ring-0 focus:border-transparent'
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

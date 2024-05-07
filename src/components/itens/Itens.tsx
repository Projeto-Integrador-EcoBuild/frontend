import React from 'react';

function Itens() {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='flex justify-center items-center w-1/2'>
                <img src="/src/assets/img/item.png" alt="imagem do produto" className='max-w-full h-auto' />
            </div>
            <div className="w-1/2">
                <div className="mb-3 space-y-4">
                    <h1>TINTA MINERAL VERMELHA</h1>
                    <h2>Categoria: Pintura</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempore
                        cupiditate non! Iste natus illo maxime vitae tempora perspiciatis ex,
                        nobis sequi asperiores. Impedit sapiente repudiandae quo vitae quas
                        nulla officiis tempore maxime aperiam, tempora fugit, facere
                        aspernatur pariatur, ad totam. Nulla consequatur ut culpa exercitationem
                        beatae repellat provident deleniti dicta, cupiditate labore. Velit odit
                        quos, debitis amet optio adipisci nobis. Molestias placeat facere
                        explicabo atque quas excepturi eligendi mollitia enim incidunt nesciunt,
                        saepe, perferendis error. Neque maiores ratione error.
                    </p>
                    <p className='font-bold'>R$ 89,90</p>
                    <div className='ml-16'>
                        <button className="bg-green-dark border border-green-dark text-white px-4 py-2 rounded-lg">Adicionar ao Carrinho</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Itens;

import React from 'react'

function Rodape() {
  return (
    <div className="w-full text-green-dark bg-green-light pt-10  cp:flex cp:flex-col ">
      <div className=" flex justify-around mb-3 cp:flex-col cp:text-center 2xl:text-2xl ">
     
        <ul className=''>
        <li className="mb-3 ">02830-960</li>
          <li className="mb-3 ">Rua marte , 123</li>
          <li className="mb-3 ">São Paulo,Brasil</li>
          
        </ul>
        <ul className='cp:mt-5 ' >
          <li className="mb-3 items-center flex cp:justify-center ">
            <span className="material-symbols-rounded  mr-2">
              call
            </span>
            +11 4043-4534</li>
          <li className="mb-3 items-center flex cp:justify-center   ">
            <span className="material-symbols-rounded  mr-2">
              call
            </span>
            +11 99238-0239</li>

          <li className="mb-3 items-center flex  cursor-pointer cp:justify-center ">
            <span className="material-symbols-rounded mr-2 w-full cp:w-6  ">
              mail
            </span>
            <span className="underline">
              naturalar@gmail.com
            </span>
          </li>

        </ul >
        <ul className="flex flex-row justify-between  w-3/12 h-10 pt-6 cp:text-2xl cp:w-[75%] cp:pt-0 cp:ml-16 cp:mt-5 sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
          <li><a href="https://github.com/Projeto-Integrador-EcoBuild" target='_blank' className="fa fa-github "></a></li>
          <li><a href="#" className="fa fa-facebook  "></a></li>
          <li><a href="#" className="fa fa-instagram "></a></li>
          <li><a href="#" className="fa fa-twitter "></a></li>
        </ul>
      </div>



      <div className=" mx-12  h-10 border-t  border-green-dark "> </div>

      <div className="w-full pb-8 flex justify-around cp:flex-col cp:w-[90%] cp:ml-4 2xl:text-2xl">
        <p>©️ 2024</p>
        <p>Terms of Service  |  Privacy Policy |  Refund Policy |  Accessibility Policy</p>
      </div>

    </div>
  )
}

export default Rodape
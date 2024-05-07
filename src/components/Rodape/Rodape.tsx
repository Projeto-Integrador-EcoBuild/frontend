import React from 'react'

function Rodape() {
  return (
    <div className="w-full  text-white bg-green-dark pt-10 ">
       <h1 className="mb-3 font-['mplus'] font-bold text-5xl pl-28">Naturalar</h1>
      <div className=" flex justify-around mb-3 ">
     
        <ul >
        <li className="mb-3 ">02830-960</li>
          <li className="mb-3 ">Rua marte , 123</li>
          <li className="mb-3 ">São Paulo,Brasil</li>
          
        </ul>
        <ul >
          <li className="mb-3 flex">
            <span className="material-symbols-rounded  mr-2">
              call
            </span>
            +11 4043-4534</li>
          <li className="mb-3 flex">
            <span className="material-symbols-rounded  mr-2">
              call
            </span>
            +11 99238-0239</li>

          <li className="mb-3 flex cursor-pointer ">
            <span className="material-symbols-rounded mr-2 w-full">
              mail
            </span>
            <span className="underline">
              naturalarr@gmail.com
            </span>
          </li>

        </ul>
        <ul className="flex flex-row justify-between  w-3/12 h-10 pt-6 ">
          <li><a href="#" className="fa fa-github text-4xl"></a></li>
          <li><a href="#" className="fa fa-facebook text-4xl "></a></li>
          <li><a href="#" className="fa fa-instagram text-4xl"></a></li>
          <li><a href="#" className="fa fa-twitter text-4xl"></a></li>
          <li><a href="#" className="fa fa-pinterest text-4xl"></a></li>
          <li><a href="#" className="fa fa-youtube text-4xl"></a></li>
        </ul>
      </div>



      <div className=" mx-12  h-10 border-t  border-white "> </div>

      <div className="w-full pb-8 flex justify-around">
        <p>©️ 2024</p>
        <p>Terms of Service  |  Privacy Policy |  Refund Policy |  Accessibility Policy</p>
      </div>

    </div>
  )
}

export default Rodape
import React from 'react'
import { Link } from 'react-router-dom';


const ForgetPassword = () => {
  return (
    <div className="h-[550px] md:h-[530px] lg:h-[800px] 3xl:h-screen lg:bg-gray-200 lg:px-10 lg:pt-25 2xl:px-20">
      <div className='border-2 m-3 rounded border-gray-400 px-5 py-10 lg:flex lg:flex-col lg:mt-20'>
        <div className='border-b-2 border-gray-300'>
          <h1 className='text-center pb-5 text-2xl font-semibold'>Recuperar conta</h1>
        </div>
        <div className='border-b-2 border-gray-300 p-6'>
          <p className='mb-5 font-semibold'>Insere o seu e-mail ou CPF</p>
          <input type="text" className='shadow-[0px_2px_8px_rgba(0,0,0,0.15)] font-semibold w-full p-2' placeholder="E-mail ou CPF" />
        </div>
        <div>
          <form>
            <div className='flex justify-around mt-6 gap-2'>
              <Link to='/' className='bg-[#2B2F3B] md:w-40 text-white text-center py-3 px-5 rounded font-semibold lg:opacity-90 lg:duration-300 lg:hover:opacity-100'>Cancelar</Link>
              <button className='bg-[#47C541] md:w-40 text-white py-3 px-5 rounded font-semibold'>Continuar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword
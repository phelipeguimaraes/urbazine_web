import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Eye, EyeOff } from 'lucide-react';

import logoRegister from '../img/logoLogin5.png'

const Register = () => {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordsMatch, setPasswordsMatch] = useState(true)

  const navigate = useNavigate()

  const [isShow, setIsShow] = useState(false)
  const [isShowConfirm, setIsShowConfirm] = useState(false)
  

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!name || !email || !cpf || !password || !confirmPassword){
      toast.error('Preencha todos os campos!', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
            return
    } 

    if(password !== confirmPassword){
      setPasswordsMatch(false)
      toast.error('As senhas não coincidem!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return
    } else {
      setPasswordsMatch(true)
    }

    let users = JSON.parse(localStorage.getItem("users")) || []
    const newUser = {name, email, cpf, password}
    users.push(newUser)

    localStorage.setItem("users", JSON.stringify(users))
    
    navigate("/")
    
  }

  const handlePassword = () => {
    setIsShow(!isShow)
  }

  const handlePasswordConfirm = () => {
    setIsShowConfirm(!isShowConfirm)
  }

  return (
    <div className="h-[600px] md:h-[550px] lg:h-[800px] 3xl:h-screen lg:bg-gray-200 lg:px-10 lg:pt-25 2xl:px-20">
              <div className='flex justify-center'>
                <img src={logoRegister} className='w-20 lg:w-35 mb-5' alt="logo login" />
              </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mx-3 gap-3 border-b  border-gray-300 pb-5 lg:gap-y-5"
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="
            p-2
            px-4
            max-[620px]:mx-5
            md:mx-10
            rounded
            font-medium
            border-gray-400
            text-gray-500
            lg:w-64
            lg:border-none
            shadow-[0px_2px_8px_rgba(0,0,0,0.15)]
            lg: bg-[#F2F4F7]
            2xl:w-80
            focus:outline-none"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
           p-2
           px-4
            max-[620px]:mx-5
            md:mx-10
            rounded
            font-medium
            border-gray-400
            text-gray-500
            lg:w-64
            lg:border-none
            shadow-[0px_2px_8px_rgba(0,0,0,0.15)]
            lg: bg-[#F2F4F7]
            2xl:w-80
            focus:outline-none"
        />
        <input
          type="number"
          name="cpf"
          id="cpf"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          className="
            p-2
            px-4
            max-[620px]:mx-5
            md:mx-10
            rounded
            font-medium
            border-gray-400
            text-gray-500
            lg:w-64
            lg:border-none
            shadow-[0px_2px_8px_rgba(0,0,0,0.15)]
            lg: bg-[#F2F4F7]
            2xl:w-80
            focus:outline-none"
        />
        <label
          className={`
            flex
            justify-between
            p-2
            px-4
            max-[620px]:mx-5
            md:mx-10
            rounded
            font-medium
            border-gray-400
            text-gray-500
            lg:w-64
            lg:border-none
            shadow-[0px_2px_8px_rgba(0,0,0,0.15)]
            lg: bg-[#F2F4F7]
            2xl:w-80
            
            ${
              !passwordsMatch ? 'shadow-[4px_4px_10px_rgba(255,0,0,0.6)]' : ''
            }`}
        >
          <input
            type={isShowConfirm ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="focus:outline-none"
          />
          <button
            onClick={handlePasswordConfirm}
            type="button"
            className="cursor-pointer"
          >
            {isShowConfirm && <EyeOff />}
            {!isShowConfirm && <Eye />}
          </button>
        </label>
        <label
          className={`
              flex
              justify-between           
              py-2
              px-4
              max-[620px]:mx-5
              md:mx-10
              rounded
              font-medium
              border-gray-400
              text-gray-500
              lg:w-64
              border-none
              shadow-[0px_2px_8px_rgba(0,0,0,0.15)]
              lg: bg-[#F2F4F7]
              2xl:w-80
              
              ${
                !passwordsMatch ? 'shadow-[4px_4px_10px_rgba(255,0,0,0.6)]' : ''
              }
              ${!passwordsMatch ? 'duration-900' : ''}`}
        >
          <input
            type={isShow ? 'text' : 'password'}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className=" focus:outline-none"
          />
          <button
            className="cursor-pointer"
            onClick={handlePassword}
            type="button"
          >
            {isShow && <EyeOff />}
            {!isShow && <Eye />}
          </button>
        </label>
        <button
          type="submit"
          className="mt-3 py-2 px-2 md:mt-10
          max-[620px]:mx-5 md:mx-10 rounded font-medium bg-linear-to-r/decreasing from-[#00b09b] to-[#96c93d] text-white cursor-pointer text-lg lg:opacity-80 lg:duration-700 lg:hover:opacity-100"
        >
          Cadastrar
        </button>
      </form>
      <div className="flex justify-center p-2 gap-x-1 my-2 text-lx font-semibold text-[#4B5563] lg:text-lg">
        <Link
          to="/"
          className="border-b border-b-[#4B5563] lg:opacity-80 lg:hover:opacity-100 lg:duration-200"
        >
          Já possuo cadastro
        </Link>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Register
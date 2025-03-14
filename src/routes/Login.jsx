import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import {useNavigate} from 'react-router-dom'

import logoLogin from '../img/logoLogin.png'

// imgs
import imgGoogle from '../img/google.png'
import imgGov from '../img/gov.br.svg'

import { Link } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isShowPassword, setIsShowPassword] = useState(true)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(email == "" || password == "") {
      toast.error('Preencha todos os campos!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }

    let users = JSON.parse(localStorage.getItem("users"))
    let validUser = users.find(user => user.email === email && user.password === password )

    if(validUser) {
      navigate('/home')
    } else {
      toast.error('Senha incorreta ou usuário não encontrado!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }
  }

  const notify = () =>
    toast.warn('Sistema em construção!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      
    });

    const handlePassword = () => {
      setIsShowPassword(!isShowPassword)
    }
  return (
    <>
      <div className="h-[550px] md:h-[530px] lg:h-[800px] 3xl:h-screen lg:bg-gray-200 lg:px-10 lg:pt-25 2xl:px-20">
        <div className='flex justify-center'>
          <img src={logoLogin} className='w-20 lg:w-35 mb-5' alt="logo login" />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col mx-3 gap-3">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
            px-4
            py-2
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
            focus:outline-none
            "
          />

          <label
            className="
            flex
            justify-between
            px-4
            py-2
            max-[620px]:mx-5 
            md:mx-10 
            rounded 
            font-medium 
            border-gray-400 
            text-gray-500
            lg:border-none
            shadow-[0px_2px_8px_rgba(0,0,0,0.15)]
            lg: bg-[#F2F4F7]
"
          >
            <input
              type={isShowPassword ? 'password' : 'text'}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" focus:outline-none"
            />
            <button
              type="button"
              onClick={handlePassword}
              className="cursor-pointer"
            >
              {isShowPassword && <Eye />}
              {!isShowPassword && <EyeOff />}
            </button>
          </label>

          <button
            type="submit"
            className="mt-3 py-2 px-2
          max-[620px]:mx-5 md:mx-10 lg:mt-10 rounded font-medium bg-linear-to-r/decreasing from-[#00b09b] to-[#96c93d] text-white cursor-pointer text-lg lg:opacity-80 lg:duration-700 lg:hover:opacity-100"
          >
            Entrar
          </button>
        </form>
        <span className="flex justify-center p-2 gap-x-1 my-2 text-sm">
          Esqueceu a senha?{' '}
          <Link
            to="/forget-password"
            className="text-blue-600 underline font-semibold"
          >
            {' '}
            Clique aqui.
          </Link>
        </span>
        <div className="shadow-[0px_2px_8px_rgba(0,0,0,0.15)] lg: bg-[#F2F4F7] w-64 lg:w-72 p-3 lg:px-5 m-auto rounded">
          <span className="flex align-center justify-around gap-x-3 text-lg font-semibold">
            Entrar com:{' '}
            <img
              src={imgGoogle}
              alt="Logo Google"
              onClick={notify}
              className="w-7 cursor-pointer duration-200 hover:-translate-y-1.5"
            />
            <img
              src={imgGov}
              alt="Logo GOV"
              onClick={notify}
              className="w-12 cursor-pointer duration-200 hover:-translate-y-1.5"
            />
          </span>
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
        <div className="mx-3 mt-5 lg:mt-10 2xl:pt-10 border-t-1 border-gray-400">
          <Link
            to="/register"
            className="p-2 mt-10
          max-[620px]:mx-5 md:mx-10 rounded font-medium flex bg-[#0866FF] text-white text-lg justify-center lg:opacity-80 lg:hover:opacity-100 lg:duration-700"
          >
            Cadastrar
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login
import logo from '../img/LogoUrbanize.png'
import { Outlet } from 'react-router-dom'

const Logo = () => {
  return (
    <div className="lg:flex lg:justify-around">
    <img
      src={logo}
      alt="Logo Urbanize"
      className="w-70 md:w-88 m-auto lg:w-96"
    />
    <Outlet />
  </div>
  )
}

export default Logo
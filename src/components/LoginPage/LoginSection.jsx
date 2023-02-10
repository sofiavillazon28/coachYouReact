import logo from "../../assets/images/logo/logo.svg"
import userIcon from "../../assets/images/icons/user.svg"
import lockedIcon from "../../assets/images/icons/locked.svg"
import { Link } from "react-router-dom"

const LoginSection = () => {
  return (
    <div className="login-section flex flex-column space-between">
      <div>
        <img src={logo} alt="Logo CoachYou" width="114" height="40" />
        <h1 className="h1">Login</h1>
        <p className="p1 text-grey">Your next chapter, made possible by mentoring</p>
      </div>

      <form className="login-form flex flex-column gap-md  mb-18">
        <div className="login-field flex items-center gap-sm w-full">
          <img src={userIcon} alt="Username Icon" width="20" height="20" />
          <input className="login-input p2 appearance-none" type="text" required placeholder="Username" />
        </div>
        <div className="login-field flex items-center gap-sm w-full">
          <img src={lockedIcon} alt="Locked Icon" width="20" height="20" />
          <input className="login-input p2 appearance-none" type="password" required placeholder="Password" />
        </div>

        <button className="button text-white w-full md:w-auto mt-24">
          Login
        </button>
        
        <p className="p3 text-center">
          ¿No tienes cuenta?... <Link className='text-alternate decoration-none' to='/register'>¡Regístrate aquí!</Link>
        </p>
      </form>
    </div>
  )
}

export default LoginSection
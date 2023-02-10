import logo from "../../assets/images/logo/logo.svg"

import messageIcon from "../../assets/images/icons/Message.svg"
import userIcon from "../../assets/images/icons/user.svg"
import lockedIcon from "../../assets/images/icons/locked.svg"

import { Link } from "react-router-dom"

const RegisterSection = () => {
  return (
    <div className="register-section flex flex-column space-between w-full">
      <div>
        <img src={logo} alt="Logo CoachYou" width="114" height="40" />
        <h1 className="h1">Register</h1>
        <p className="p1 text-grey">Your next chapter, made possible by mentoring</p>
      </div>

      <form className="register-form flex flex-column gap-md mb-18">
        <div className="register-field flex items-center gap-sm w-full">
          <img src={messageIcon} alt="Email Icon" width="20" height="20" />
          <input className="register-input p2 appearance-none" type="email" required placeholder="Email" />
        </div>
        <div className="register-field flex items-center gap-sm w-full">
          <img src={userIcon} alt="Username Icon" width="20" height="20" />
          <input className="register-input p2 appearance-none" type="text" required placeholder="Username" />
        </div>
        <div className="register-field flex items-center gap-sm w-full">
          <img src={lockedIcon} alt="Locked Icon" width="20" height="20" />
          <input className="register-input p2 appearance-none" type="password" required placeholder="Password" />
        </div>
        <div className="register-field flex items-center gap-sm w-full">
          <img src={lockedIcon} alt="Locked Icon" width="20" height="20" />
          <input className="register-input p2 appearance-none" type="password" required placeholder="Confirm Password" />
        </div>

        <button className="button button-regiter text-white w-full md:w-auto mt-24">
          Continue
        </button>
        
        <p className="p3 text-center">
          ¿Ya tienes cuenta?... <Link className='text-alternate decoration-none' to='/login'>¡Ingresa aquí!</Link>
        </p>
      </form>
    </div>
  )
}

export default RegisterSection
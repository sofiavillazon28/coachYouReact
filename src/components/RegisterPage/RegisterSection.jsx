import { useContext, useState } from "react"
import { UserContext } from "../../context/userContext.jsx"

import { Link, useNavigate } from "react-router-dom"

import logo from "../../assets/images/logo/logo.svg"
import arrowLeftIcon from "../../assets/images/icons/arrow-left.svg"
import messageIcon from "../../assets/images/icons/Message.svg"
import userIcon from "../../assets/images/icons/user.svg"
import lockedIcon from "../../assets/images/icons/locked.svg"
import loaderSmIcon from "../../assets/images/icons/loader-sm.svg"
import Alert from "../Molecules/Alert.jsx"

const RegisterSection = () => {
  const { register, loading } = useContext(UserContext)
  const navigate = useNavigate()

  const DEFAULT_FORM = { email: '', password: '', username: '', passwordConfirmation: '', message: '' }

  const [form, setForm] = useState(DEFAULT_FORM)
  const [error, setError] = useState(DEFAULT_FORM)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleCloseAlert = () => setError(DEFAULT_FORM)

  const handleRegister = async (e) => {
    e.preventDefault();

    setError(DEFAULT_FORM)

    if (form.password !== form.passwordConfirmation) {
      setError({ password: 'Las contraseñas no coinciden. Vuela a intentarlo por favor.' })
      return
    }

    register(form)
      .then(response => {
        if (response?.error) {
          setError({ message: response.error.message })
          return
        }
        navigate('/')
      })
  }

  return (
    <div className="register-section flex flex-column space-between w-full">
      <div>
        <Link className="flex text-alternate decoration-none mb-5" to='/'>
          <img className="text-alternate" src={arrowLeftIcon} alt="Go back" />
          Home
        </Link>
        <img src={logo} alt="Logo CoachYou" width="114" height="40" />
        <h1 className="h1">Register</h1>
        <p className="p1 text-grey">Your next chapter, made possible by mentoring</p>
      </div>

      <form className="register-form flex flex-column gap-md mb-18" onSubmit={handleRegister}>

        {error?.password && <Alert onClose={handleCloseAlert}>{error?.password}</Alert>}

        {error?.message && <Alert onClose={handleCloseAlert}>{error?.message}</Alert>}

        <div className={`register-field flex items-center gap-sm w-full ${loading ? 'is-disabled' : ''}`}>
          <img src={messageIcon} alt="Email Icon" width="20" height="20" />
          <input
            name="email"
            className="register-input p2 appearance-none"
            type="email"
            required
            disabled={loading}
            placeholder="Email"
            onChange={handleChange}
            value={form.email}
          />
        </div>
        <div className={`register-field flex items-center gap-sm w-full ${loading ? 'is-disabled' : ''}`}>
          <img src={userIcon} alt="Username Icon" width="20" height="20" />
          <input
            name="username"
            className="register-input p2 appearance-none"
            type="text"
            required
            disabled={loading}
            placeholder="Username"
            onChange={handleChange}
            value={form.username}
          />
        </div>
        <div className={`register-field flex items-center gap-sm w-full ${loading ? 'is-disabled' : ''}`}>
          <img src={lockedIcon} alt="Locked Icon" width="20" height="20" />
          <input
            name="password"
            className="register-input p2 appearance-none"
            type="password"
            required
            disabled={loading}
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
          />
        </div>
        <div className={`register-field flex items-center gap-sm w-full ${loading ? 'is-disabled' : ''}`}>
          <img src={lockedIcon} alt="Locked Icon" width="20" height="20" />
          <input
            name="passwordConfirmation"
            className="register-input p2 appearance-none"
            type="password"
            required
            disabled={loading}
            placeholder="Confirm Password"
            onChange={handleChange}
            value={form.passwordConfirmation}
          />
        </div>

        <button className="button button-regiter text-white w-full md:w-auto mt-24" disabled={loading}>
          {!loading ? 'Continue' : <img src={loaderSmIcon} alt="Loading..." className='loader' />}
        </button>
        
        <p className="p3 text-center">
          ¿Ya tienes cuenta?... <Link className='text-alternate decoration-none' to='/login'>¡Ingresa aquí!</Link>
        </p>
      </form>
    </div>
  )
}

export default RegisterSection
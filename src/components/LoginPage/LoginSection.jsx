import logo from "../../assets/images/logo/logo.svg"
import userIcon from "../../assets/images/icons/user.svg"
import lockedIcon from "../../assets/images/icons/locked.svg"
import loaderSmIcon from "../../assets/images/icons/loader-sm.svg"
import arrowLeftIcon from "../../assets/images/icons/arrow-left.svg"
import { Link, useNavigate } from "react-router-dom"

import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/userContext"
import { supabase } from "../../utils/supabase"
import Alert from "../Molecules/Alert"

const LoginSection = () => {
  const navigate = useNavigate()
  const { user, login, loading } = useContext(UserContext)

  // const [data, setData] = useState([])
  const DEFAULT_FORM = { email: '', password: '' }
  const DEFAULT_ERRORS = { message: '' }
  const [form, setForm] = useState(DEFAULT_FORM)
  const [error, setError] = useState(DEFAULT_ERRORS)

  // const fetchTasks = async() => {
  //   const { data, error } = await supabase.from('tasks').select()
  //   console.log(data)
  // }

  const handleCloseAlert = () => setError(DEFAULT_ERRORS)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    setError(DEFAULT_ERRORS)

    login(form)
      .then((response) => {
        if (response?.error) {
          setError({ message: response.error.message })
          return
        }
        setForm(DEFAULT_FORM)
        navigate('/')
      })
      .catch(error => {
        console.log(error)
      })
  }

  // useEffect(() => {
  //   fetchTasks()
  // }, [])

  return (
    <div className="login-section flex flex-column space-between">
      <div>
        <Link className="flex text-alternate decoration-none mb-5" to='/'>
          <img className="text-alternate" src={arrowLeftIcon} alt="Go back" />
          Home
        </Link>
        <img src={logo} alt="Logo CoachYou" width="114" height="40" />
        <h1 className="h1">Login</h1>
        <p className="p1 text-grey">Your next chapter, made possible by mentoring</p>
      </div>

      <form className="login-form flex flex-column gap-md  mb-18" onSubmit={handleLogin}>
        {error?.message && <Alert onClose={handleCloseAlert}>{error?.message}</Alert>}

        <div className={`login-field flex items-center gap-sm w-full ${loading ? 'is-disabled' : ''}`}>
          <img src={userIcon} alt="Email Icon" width="20" height="20" />
          <input
            name="email"
            className="login-input p2 appearance-none"
            type="text"
            required
            placeholder="Email"
            disabled={loading}
            onChange={handleChange}
            value={form.email}
          />
        </div>
        <div className={`login-field flex items-center gap-sm w-full ${loading ? 'is-disabled' : ''}`}>
          <img src={lockedIcon} alt="Locked Icon" width="20" height="20" />
          <input
            name="password"
            className="login-input p2 appearance-none"
            type="password"
            required
            placeholder="Password"
            disabled={loading}
            onChange={handleChange}
            value={form.password}
          />
        </div>

        <button className="button text-white w-full md:w-auto mt-24" disabled={loading}>
          {!loading ? 'Login' : <img src={loaderSmIcon} alt="Loading..." className='loader' />}
        </button>
        
        <p className="p3 text-center">
          ¿No tienes cuenta?... <Link className='text-alternate decoration-none' to='/register'>¡Regístrate aquí!</Link>
        </p>
      </form>
    </div>
  )
}

export default LoginSection
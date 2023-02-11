import { useContext, useState } from "react"

import trianguleIcon from "../../assets/images/icons/triangule.svg"
import { UserContext } from "../../context/userContext"

const AvatarDropDown = ({ user }) => {
  const [open, setOpen] = useState(false)

  const { logout } = useContext(UserContext)

  const handleOpen = () => setOpen(!open)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="avatar">
      <div className='flex align-center text-white' onClick={handleOpen}>
        <img className='avatar__image' src={`https://i.pravatar.cc/42?u=${user.user_metadata.username}`}/>
        <span className='avatar__text h5'>{user?.user_metadata?.username}</span>
        <img className='avatar__triangule' src={trianguleIcon} />
      </div>
      <div className={`dropdown-menu ${open ? 'dropdown-menu--active' : '' }`}>
        <ul>
          <li>Perfil</li>
          <li className="dropdown-menu__line"></li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>
    </div>
  )
}

export default AvatarDropDown
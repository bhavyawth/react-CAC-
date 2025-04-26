import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom';


function Logout() {
  const status = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {

    authService.logout().then(() => {
      dispatch(logout())
      navigate('/login')
    })
  }

  return (
    <button
      className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out"
      onClick={logoutHandler}
    >
      Logout
    </button>
  
  )
}

export default Logout
import React from 'react'
import {Container, Logout, Logo} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
    },
    {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
    },
  ]



  return (
    <header className="py-4 shadow-md bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white">
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Logo width="80px" />
            {/* Optional title if needed */}
            {/* <span className="text-xl font-semibold">Sahayak</span> */}
          </Link>

          {/* Navigation */}
          <ul className="flex items-center space-x-4">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-sm transition duration-300"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <Logout />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>

  )
}

export default Header 
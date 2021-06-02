import React, { useContext } from "react"
import { UserContext } from "../App"
import { Link, useHistory } from "react-router-dom"
const Navbar = () => {
  const history = useHistory()
  const { state, dispatch } = useContext(UserContext)
  const renderList = () => {
    if (state) {
      return [
        <li key={1}>
          <Link className='navlink' to='/profile'>
            Profile
          </Link>
        </li>,
        <li key={2}>
          <Link className='navlink' to='/myfollowingposts'>
            Following
          </Link>
        </li>,
        <li key={3}>
          <button
            className='btn waves-effect waves-light #b71c1c red darken-3'
            onClick={() => {
              localStorage.clear()
              dispatch({ type: "CLEAR" })
              history.push("/signin")
            }}
          >
            Logout
          </button>
        </li>,
      ]
    } else {
      return [
        <li key={4}>
          <Link className='navlink' to='/signin'>
            Signin
          </Link>
        </li>,
        <li key={5}>
          <Link className='navlink' to='/signup'>
            Signup
          </Link>
        </li>,
      ]
    }
  }
  return (
    <nav className='blue'>
      <div className=' nav-wrapper container'>
        <Link to={state ? "/" : "signin"} className='navlink brand-logo left'>
          MyBlog
        </Link>
        <ul id='nav-mobile' className='right'>
          {renderList()}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import image from '../../styles/images/image-logo.png'
import { Link } from 'react-router-dom'
function Nav() {


  return (
    <>
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item"><img src={image} alt="website-logo"/></Link>
            <Link to="/meals?search=" className="navbar-item">Meals</Link>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Nav
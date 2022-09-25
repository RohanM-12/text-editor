import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar( props ) {
  return (
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/about">About <span className="sr-only"></span></Link>
      </li>

     


    </ul>
  
        <form className="form-inline my-2 my-lg-0">
          <div className="form-check form-switch  mx-4 ">
            <input className="form-check-input    " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className={`  form-check-label text-${props.mode === 'light' ? 'dark' : 'light'} mx-3  user-select-none`} htmlFor="flexSwitchCheckDefault">  Enable Dark Mode</label>
           
          </div>
         </form>

        

         
       


  </div>
        
        

</nav>
 
  )
}

// specifying the type of prperty we are passing 
Navbar.propTypes={title: PropTypes.string.isRequired};


Navbar.defaultProps =
{
    title: "title here"
}
import React from 'react'
import Logo from '../images/logo.svg'
import { Link } from "react-router-dom";










function navbar() {





  let user, register;
  if (sessionStorage.getItem('usernameId')) {
    user = sessionStorage.getItem('usernameId');
    register = ""


  } else {
    user = "Register"
  }


  return (<>
    <div className='header'>

      <img src={Logo} id='logo' alt="" />
      <span className='buttons-nav'>

        <Link to="/" >
          <button id='register' >Home </button >
          


        </Link>





        <Link to="about" >

          <button id='register'>About </button>

        </Link>


        <Link to="form" >

          <button id='register'>{user} </button>

        </Link>







      </span>



    </div>



  </>
  )
}

export default navbar

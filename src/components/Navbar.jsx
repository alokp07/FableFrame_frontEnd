import React from 'react'

const Navbar = () => {
    
  return (
    <div className='navbarContainer'>
        <h1>FableFrame</h1>
        <div className='navbarBtn'>
            <button id='loginBtn'>Login</button>
            <button id='regBtn'>Register</button>
        </div>
    </div>
  )
}

export default Navbar
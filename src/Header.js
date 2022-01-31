import React from 'react'
import Login from './Login'
import SignUp from './SignUp'

const Header = (props) => {
  return (
    <header className='header'>
      <div>
        {/* <Link className='links' to='/'>
          Home
        </Link> */}
      </div>

      <nav className='navbar'>
        <ul>
            <Login loginUser={props.loginUser}/>
            <SignUp register={props.register}/> 
        </ul>
      </nav>
    </header>
  )
}

export default Header
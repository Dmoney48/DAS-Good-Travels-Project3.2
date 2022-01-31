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

      <nav>
         <table>
          <tbody>
              <tr>
            <td><Login loginUser={props.loginUser}/></td>
            <td><SignUp register={props.register}/> </td>
              </tr>
          </tbody>
        </table>  
      </nav>
    </header>
  )
}

export default Header
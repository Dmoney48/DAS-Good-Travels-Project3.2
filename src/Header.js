import React, {Component} from 'react'
import Login from './Login'
import SignUp from './SignUp'

let baseUrl = 'http://localhost:3003'

export default class Header extends Component {
  constructor(props){
    super(props)
  }

  loginUser = (e) => {
    e.preventDefault()
    console.log(e.target.username.value)
    console.log(e.target.password.value)
    console.log("hello")
    fetch(baseUrl + '/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include"
    }).then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      // this.getTravel()
    })
  }


  register = (e) => {
    e.preventDefault()
    fetch(baseUrl + '/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      // call getTravel to get all of the travels and refresh the page
    })
  }


  render(){
    return(
      <header className='header'>
            <div>
              {/* <Link className='links' to='/'>
                Home
              </Link> */}
            </div>

            <nav className='navbar'>
              <ul>
                  <Login loginUser={this.loginUser}
                    logoutUser={this.logoutUser}/>
                  <SignUp register={this.register}/> 
              </ul>
            </nav>
          </header>
        )
  }
}

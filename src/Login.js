import React from 'react'

function Login(props) {
    
  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form onSubmit={props.loginUser} className='form-control'>
            <input
              type='text'
              name='username'
              id='name'
              placeholder='Username'
              required
            />
            <input type='password' name='password' id='password' placeholder='Password' />
            <button type='submit'>Log In</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login
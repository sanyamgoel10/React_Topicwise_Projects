import React from 'react'

const LoginBtn = (props) => {
  return (
    <button onClick={() => props.setUserLoginState(true)}>
        Login
    </button>
  )
}

export default LoginBtn

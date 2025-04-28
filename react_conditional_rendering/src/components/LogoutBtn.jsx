import React from 'react'

const LogoutBtn = (props) => {
  return (
    <button onClick={() => props.setUserLoginState(false)}>
        Logout
    </button>
  )
}

export default LogoutBtn

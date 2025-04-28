import React, { useContext } from 'react'
import { ThemeContext, UserContext } from '../App'

function ChildC() {
  const {theme, setTheme} = useContext(ThemeContext)
  const user = useContext(UserContext);
  function toggleTheme(){
    if(theme == 'light'){
        setTheme('dark');
    }else{
        setTheme('light');
    }
  }
  return (
    <div>
      Hi {user.name}
      <br />
      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  )
}

export default ChildC

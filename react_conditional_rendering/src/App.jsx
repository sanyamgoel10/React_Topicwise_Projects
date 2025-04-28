import { useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn';
import LogoutBtn from './components/LogoutBtn';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  //// If/Else:-
  // if(isLoggedIn){
  //   return (
  //     <LogoutBtn />
  //   )
  // }else{
  //   return (
  //     <LoginBtn />
  //   )
  // }

  //// Terniary Operator:-
  return (
    <div>
      {isLoggedIn ? <LogoutBtn setUserLoginState={setLoggedIn} /> : <LoginBtn setUserLoginState={setLoggedIn} />}
    </div>
  )

  //// Logical Operator:-
  // return (
  //   <div>
  //     <h1>Hello World</h1>
  //     <div>
  //       {isLoggedIn && <LogoutBtn />}
  //     </div>
  //   </div>
  // )

  //// Early Return:-
  // if(!isLoggedIn){
  //   return (
  //     <LoginBtn />
  //   )
  // }
  // return (
  //   <div>
  //     <h1>Hello World</h1>
  //     <div>
  //       {isLoggedIn && <LogoutBtn />}
  //     </div>
  //   </div>
  // )
}

export default App

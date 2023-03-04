import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext);
  const { displayName, photoURL } = currentUser;
  const username = displayName?.charAt(0)?.toUpperCase() + displayName?.slice(1)

  return (
    <div className='navbar'>
      <span className="logo">Chat man</span>
      <div className="user">
        <img src={photoURL} alt="" />
        <span>{username}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar
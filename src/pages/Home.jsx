import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import Animations from '../components/Animations'

const Home = () => {
  return (
    <div className='home'>
      <Animations />
      <div className='container'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default Home
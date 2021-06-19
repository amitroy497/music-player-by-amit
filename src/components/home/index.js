import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const Home = () => {
  return (
    <div className='welcomeWrapper'>
      <h1 className='welcome-title'>Welcome</h1>
      <h1 className='to-title'>To</h1>
      <h1 className='music-title'>Music</h1>
      <h1 className='app-title'>App</h1>
      <h1 className='by-title'>By</h1>
      <h1 className='amit-title'>Amit</h1>
      <div className='goToNextPage'>
        Click on next to continue{' '}
        <Link to='/upload-song' className='next' title='Next'>
          <NavigateNextIcon className='welcomeNextIcon' />
        </Link>
      </div>
    </div>
  )
}

export default Home

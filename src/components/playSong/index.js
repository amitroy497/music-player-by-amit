import React, { useState, useEffect } from 'react'
import './index.css'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import { Link } from 'react-router-dom'
import waveform from './../../assets/images/waveform.gif'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

const PlaySong = () => {
  const [song, setSong] = useState([])
  const [flag, setFlag] = useState(false)

  const getSong = () => {
    let songData = JSON.parse(localStorage.getItem('song'))
    console.log(songData)
    setSong(songData)
    setFlag(true)
  }

  useEffect(() => {
    getSong()
  }, [])

  return (
    <div className='playSongWrapper'>
      <Link to='/' className='homeLink'>
        <HomeOutlinedIcon /> Home
      </Link>
      <Link to='/upload-song' className='uploadSongLink' title='Upload Song'>
        <CloudUploadIcon />
      </Link>
      <img src={waveform} alt='waveform' />
      {flag ? (
        <div className='playSongSection'>
          <div className='playSongTitle'>Name: {song.name}</div>
          <audio id='audio' controls>
            <source src={song.songPath} />
          </audio>
        </div>
      ) : null}
    </div>
  )
}

export default PlaySong

import React, { useState } from 'react'
import './index.css'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import { Redirect, Link } from 'react-router-dom'

const UploadSong = () => {
  const [songPath, setSongPath] = useState()
  const [name, setName] = useState('')
  const [format, setFormat] = useState('')
  const [msg, setMsg] = useState(false)
  const [uploadMsg, setUploadMsg] = useState(false)

  const selectSong = (e) => {
    setMsg(false)
    setUploadMsg(false)
    const files = e.target.files
    const songUrl = URL.createObjectURL(files[0])
    setSongPath(songUrl)
    const sName = files[0].name
    const lastDot = sName.lastIndexOf('.')

    const title = sName.substring(0, lastDot)
    const ext = sName.substring(lastDot + 1)
    setName(title)
    setFormat(ext)
  }

  const pushSong = (songData) => {
    localStorage.setItem('song', JSON.stringify(songData))
  }

  const uploadSong = () => {
    if (songPath) {
      setUploadMsg(false)
      const songData = { name, format, songPath }
      pushSong(songData)
      setMsg(true)
    } else {
      setUploadMsg(true)
    }
  }

  return (
    <div className='uploadWrapper'>
      <Link to='/' className='homeLink'>
        <HomeOutlinedIcon /> Home
      </Link>
      <div className='uploadSection'>
        <input type='file' name='uploadFile' onChange={selectSong} />
        <button onClick={uploadSong}>Upload</button>
        {msg ? (
          <Redirect to='play-song' />
        ) : (
          <>
            {uploadMsg ? (
              <div className='uploadFirst'>* Please upload a song ...</div>
            ) : null}
          </>
        )}
      </div>
    </div>
  )
}

export default UploadSong

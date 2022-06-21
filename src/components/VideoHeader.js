import React from 'react'
import '../styles/VideoHeader.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CameraAltIcon from '@mui/icons-material/CameraAlt';


function VideoHeader() {
  return (
    <div className='videoHeader'>
      <ArrowBackIosIcon fontSize='medium' />
      <></>
      <CameraAltIcon fontSize='medium' />
    </div>
  )
}

export default VideoHeader
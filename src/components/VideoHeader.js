import React from 'react'
import '../styles/VideoHeader.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CameraAltIcon from '@mui/icons-material/CameraAlt';


function VideoHeader() {
  const onBackClicked = () => {
    window.location.href = 'https://github.com/deri-kurniawan/dikdok'
  }

  const onCameraClicked = () => {
    console.log('camera clicked')
  }

  return (
    <div className='videoHeader'>
      <ArrowBackIosIcon
        onClick={onBackClicked}
        className='videoHeader__icon'
        fontSize='medium'
        />
      <></>
      <CameraAltIcon
        onClick={onCameraClicked}
        className='videoHeader__icon'
        fontSize='medium'
        />
    </div>
  )
}

export default VideoHeader
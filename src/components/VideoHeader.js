import React from 'react'
import '../styles/VideoHeader.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CameraAltIcon from '@mui/icons-material/CameraAlt';


function VideoHeader() {
  const onBackClicked = () => {
    console.log('back clicked')
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
import React from 'react'
import '../styles/VideoHeader.css'
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import GitHubIcon from '@mui/icons-material/GitHub';

function VideoHeader() {
  const onBackClicked = () => {
    window.location.href = 'https://github.com/deri-kurniawan/dikdok'
  }

  const onCameraClicked = () => {
    alert('Camera feature is coming soon!')
  }

  return (
    <div className='videoHeader'>
      <GitHubIcon
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
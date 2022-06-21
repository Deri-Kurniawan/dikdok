import React, { useRef, useState } from 'react'
import '../styles/VideoCard.css'
import VideoHeader from './VideoHeader'

function VideoCard({ src }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const onVideoClick = () => {
    if(isPlaying) {
      // stop video
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      // play video
      videoRef.current.play()
      setIsPlaying(true)
    }
  }
  
  const onVideoChange = () => {
    videoRef.current.pause()
    setIsPlaying(false)
  }

  return (
    <div className="videoCard">
      {/* Video Container for snap scrolling */}
      <VideoHeader />
      <video
        onTouchMove={onVideoChange}
        onWheel={onVideoChange}
        ref={videoRef}
        onClick={onVideoClick}
        className="videoCard__player"
        src={src}
        loop
      >
      </video>
    </div>
  )
}

export default VideoCard
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import '../styles/VideoCard.css'
import VideoHeader from './VideoHeader'

function VideoCard({ src }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if(inView) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }, [inView])

  const onVideoClick = () => {
    if(isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }
  
  const onVideoChange = () => {
    videoRef.current.pause()
    setIsPlaying(false)
  }

  return (
    <div className="videoCard" ref={ref}>
      <VideoHeader />
      <video
        autoPlay={inView}
        playsInline
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
import React, { useEffect, useRef, useState } from 'react'
import '../styles/VideoCard.css'
import { useInView } from 'react-intersection-observer'
import VideoHeader from './VideoHeader'
import VideoAside from './VideoAside'
import VideoFooter from './VideoFooter'

function VideoCard({
  avatarSrc,
  channel,
  videoSrc,
  song,
  likes,
  comments,
  shares
  }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if(inView) {
      videoRef.current.currentTime = 0
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
    <div className='videoCard' ref={ref}>
      <VideoHeader />
      <video
        autoPlay={inView}
        playsInline
        onTouchMove={onVideoChange}
        onWheel={onVideoChange}
        ref={videoRef}
        onClick={onVideoClick}
        className='videoCard__player'
        src={videoSrc}
        loop
      >
      </video>
      <VideoAside likes={likes} comments={comments} shares={shares} />
      <VideoFooter avatarSrc={avatarSrc} song={song} channel={channel} />
    </div>
  )
}

export default VideoCard
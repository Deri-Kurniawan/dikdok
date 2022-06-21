import React from 'react'
import '../styles/App.css' 
import VideoCard from './VideoCard'
import getVideos from '../videos'

function App() {
  const videos = getVideos()
  return (
    <div className='app'>
      <div className='app__videos'>
        {
          videos.map((video) => (
            <VideoCard
              key={video.id}
              {...video}
            />
            )
        )}
      </div>
    </div>
  )
}

export default App

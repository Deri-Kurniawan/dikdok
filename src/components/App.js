import React, { useEffect } from 'react'
import { mockAPIPrefix } from '../lib/mockAPIPrefix'
import '../styles/App.css' 
import VideoCard from './VideoCard'
import useAxios from "axios-hooks";
import { songFormater } from '../utils';

function App() {
  const [{data, loading, error}, refetch] = useAxios(mockAPIPrefix('videos'))

  if(error) console.log(error)

  useEffect(() => {
    refetch(mockAPIPrefix('videos'))
  }, [refetch])

  return (
    <div className='app'>
      {(loading) ? <div className='app__loader'>LOADING</div> : ''}
      <div className='app__videos'>
        {
          (data && data.length) > 0 ?
          data.map(({
            avatarSrc,
            channel,
            videoSrc,
            song,
            likes,
            comments,
            shares
          }, i) => (
            <VideoCard
              key={i}
              avatarSrc={avatarSrc}
              channel={channel}
              videoSrc={videoSrc}
              song={songFormater(channel, song)}
              likes={likes}
              comments={comments}
              shares={shares}
            />
          )) : ''
        }
      </div>
    </div>
  )
}

export default App

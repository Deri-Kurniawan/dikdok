import { Avatar } from '@mui/material'
import React from 'react'
import '../styles/VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({ avatarSrc, channel, song }) {
  return (
    <div className='videoFooter'>
      <div className='videoFooter__channel'>
        {/* avatar */}
        <Avatar className='videoFooter__channel-avatar' alt={avatarSrc} src={avatarSrc}/>
        {/* channel name */}
        <h3 className='videoFooter__channel-name'>@{channel}</h3>
      </div>
      <div className="videoFooter__song">
        <MusicNoteIcon/>
        <span>{song}</span>
      </div>
    </div>
  )
}

export default VideoFooter
import React, { useState } from 'react'
import '../styles/VideoAside.css'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import abbreviateNumber from '../utils/abbreviateNumber';
import { INDONESIAN_SYMBOL } from '../utils/abbreviateNumberSymbol';

function VideoAside({ likes = 0, comments = 0, shares = 0 }) {
  const [isLiked, setIsLiked] = useState(false)

  const onLikeClicked = () => {
    setIsLiked(!isLiked)
  }
  
  const onCommentClicked = () => {
    alert('Comment feature is coming soon!')
  }
  
  const onShareClicked = () => {
    navigator.share({
      url: 'https://dikdok.vercel.app',
      text: 'Dik Dok Video Reels App Created By Deri Kurniawan',
      title: 'Dik Dok',
    })
  }

  return (
    <div className='videoAside'>
        <div className='videoAside__action'>
          <FavoriteIcon
            style={{ color: isLiked ? 'red' : 'white' }}
            className='videoAside__action__icon'
            onClick={onLikeClicked}
            />
          <span className='videoAside__action__stat'>{abbreviateNumber(likes, INDONESIAN_SYMBOL)}</span>
        </div>
        <div className='videoAside__action'>
          <CommentIcon
            className='videoAside__action__icon'
            onClick={onCommentClicked}
            />
          <span className='videoAside__action__stat'>{abbreviateNumber(comments, INDONESIAN_SYMBOL)}</span>
        </div>
        <div className='videoAside__action'>
          <ShareIcon
            className='videoAside__action__icon'
            onClick={onShareClicked}
            />
          <span className='videoAside__action__stat'>{abbreviateNumber(shares, INDONESIAN_SYMBOL)}</span>
        </div>
    </div>
  )
}

export default VideoAside
import videoSample1 from './v1.mp4'
import videoSample2 from './v2.mp4'
import videoSample3 from './v3.mp4'

const getVideos = () => [
  {
    id: 1,
    src: videoSample1,
    likes: 123000,
    comments: 41245,
    shares: 1231,
  },
  {
    id: 2,
    src: videoSample2,
    likes: 12412412,
    comments: 321224,
    shares: 123112,
  },
  {
    id: 3,
    src: videoSample3,
    likes: 1000,
    comments: 1000,
    shares: 1000,
  },
]

export default getVideos;
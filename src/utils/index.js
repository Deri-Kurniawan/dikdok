import videoSample1 from '../videos/v1.mp4'
import videoSample2 from '../videos/v2.mp4'
import videoSample3 from '../videos/v3.mp4'
import avatar from '../images/default-avatar.jpeg'

const getVideos = () => [
  {
    id: 1,
    avatarSrc: avatar,
    channel: 'tarankaaa',
    videoSrc: videoSample1,
    song: 'son original - 🎶💓',
    likes: 123000,
    comments: 41245,
    shares: 1231,
  },
  {
    id: 2,
    avatarSrc: avatar,
    channel: 'tarankaaa',
    videoSrc: videoSample2,
    song: "I Love You by Young Slo Be - ʚ❤︎ɞNanami's Wifeʚ❤︎ɞ",
    likes: 12412412,
    comments: 321224,
    shares: 123112,
  },
  {
    id: 3,
    avatarSrc: avatar,
    channel: 'tarankaaa',
    videoSrc: videoSample3,
    song: 'catchy song i know - bonnie<3',
    likes: 1000,
    comments: 1000,
    shares: 1000,
  },
]

export default getVideos;
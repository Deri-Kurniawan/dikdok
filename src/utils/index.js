import {
  v4 as uuidv4
} from 'uuid'
import videoSample1 from '../videos/v1.mp4'
import videoSample2 from '../videos/v2.mp4'
import videoSample3 from '../videos/v3.mp4'
import videoSample4 from '../videos/v4.mp4'
import taranAvatar from '../images/taran-avatar.jpeg'
import deddyAvatar from '../images/deddy-avatar.jpeg'

const getVideos = () => {
  const songFormater = (channel, song) => (
      song === '' ||
      song === null ||
      song === undefined
    ) ? `suara asli - ${channel}` :
    song

  /**
   * Number Randomizer
   * @param {number} multiple number base
   * @param {number} rank rank of base
   * @returns {number} number
   */
  const randomizeNumber = (multiple = 0, rank = 0) => ((Math.random() * (multiple ** rank)).toFixed(0))

  let data = [{
      avatarSrc: deddyAvatar,
      channel: 'mastercorbuzier',
      videoSrc: videoSample4,
      song: '',
    },
    {
      avatarSrc: taranAvatar,
      channel: 'tarankaaa',
      videoSrc: videoSample1,
      song: 'son original - 🎶💓',
    },
    {
      avatarSrc: taranAvatar,
      channel: 'tarankaaa',
      videoSrc: videoSample2,
      song: "I Love You by Young Slo Be - ʚ❤︎ɞNanami's Wifeʚ❤︎ɞ",
    },
    {
      avatarSrc: taranAvatar,
      channel: 'tarankaaa',
      videoSrc: videoSample3,
      song: 'catchy song i know - bonnie<3',
    },
  ]

  data = data.map(
    ({
      avatarSrc,
      channel,
      videoSrc,
      song,
    }) => ({
      id: uuidv4(), // add id each data
      avatarSrc,
      channel,
      videoSrc,
      song: songFormater(channel, song),
      likes: randomizeNumber(10, 6), // add likes each data
      comments: randomizeNumber(10, 4), // add comments each data
      shares: randomizeNumber(10, 3.5), // add shares each data
    })
  )

  return data
}

export default getVideos
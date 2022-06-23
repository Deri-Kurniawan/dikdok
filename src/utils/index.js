import {
  v4 as uuidv4
} from 'uuid'

const cloudinarySrcPrefix = (fileName, option) => {
  if(option === 'avatars') {
    return `https://res.cloudinary.com/deri-kurniawan/image/upload/v1655967722/avatars/${fileName}`
  }

  if (option === 'videos') {
    return `https://res.cloudinary.com/deri-kurniawan/video/upload/v1655967006/videos/${fileName}`
  }
}

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
      avatarSrc: 'deddy-avatar_mdalyg.jpg',
      channel: 'mastercorbuzier',
      videoSrc: 'v4_ohtupd.mp4',
      song: '',
    },
    {
      avatarSrc: 'taran-avatar_gihc4i',
      channel: 'tarankaaa',
      videoSrc: 'v1_crwtxg.mp4',
      song: 'son original - 🎶💓',
    },
    {
      avatarSrc: 'taran-avatar_gihc4i',
      channel: 'tarankaaa',
      videoSrc: 'v2_zvzyti.mp4',
      song: "I Love You by Young Slo Be - ʚ❤︎ɞNanami's Wifeʚ❤︎ɞ",
    },
    {
      avatarSrc: 'taran-avatar_gihc4i',
      channel: 'tarankaaa',
      videoSrc: 'v3_oak7if.mp4',
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
      avatarSrc: cloudinarySrcPrefix(avatarSrc, 'avatars'),
      channel,
      videoSrc: cloudinarySrcPrefix(videoSrc, 'videos'),
      song: songFormater(channel, song),
      likes: randomizeNumber(10, 6), // add likes each data
      comments: randomizeNumber(10, 4), // add comments each data
      shares: randomizeNumber(10, 3.5), // add shares each data
    })
  )

  return data
}

export default getVideos
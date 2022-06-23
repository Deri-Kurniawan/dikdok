export const cloudinarySrcPrefix = (fileName, option) => {
  if(option === 'avatars') {
    return `https://res.cloudinary.com/deri-kurniawan/image/upload/v1655967722/avatars/${fileName}`
  }

  if (option === 'videos') {
    return `https://res.cloudinary.com/deri-kurniawan/video/upload/v1655967006/videos/${fileName}`
  }
}

export const songFormater = (channel, song) => (
    song === '' ||
    song === null ||
    song === undefined
  ) ? `suara asli - ${channel}` :
  song
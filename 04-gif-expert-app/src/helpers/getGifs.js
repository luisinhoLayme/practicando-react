
export const getGifs = async (category) => {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=UtANIVkF176DbxySp7nm0fZydrRg6ob1&q=${category}&limit=3`

    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
    // console.log(gifs)

    return gifs
  } catch (err) {
    console.log(err)
  }
}

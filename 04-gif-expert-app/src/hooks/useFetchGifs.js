import { useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { useEffect } from 'react'

export const useFetchGifs = (category) => {

  const [ images, setImages ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)

  // obtenemos las imagenes
  const getImage = async() => {
    const newImages = await getGifs( category )
    setImages(newImages)
    setIsLoading(false)
  }

  useEffect(() => {
    getImage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    images,
    isLoading
  }
}

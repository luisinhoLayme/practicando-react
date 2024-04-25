import PropTypes from 'prop-types'
import { GifItem } from './Items'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { Loading } from './Loading'

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category )

  return (
    <div>
      <h3>{category}</h3>
      { isLoading && <Loading />}
      {/* {isLoading && <div>Loading...</div>} */}

      <div>
        {images.map(({id, ...rest}) => (
          <GifItem
            key={ id }
            {...rest}
          />
        ))}
      </div>
    </div>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

import PropTypes from 'prop-types'

export const GifItem = ({ title, url }) => {
  // console.log(title, url)
  return (
    <div>
      <strong>{title}</strong>
      <img src={url} alt={title} />
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
}

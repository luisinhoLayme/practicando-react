import PropTypes from 'prop-types'

export const ImageGalery = ({ images }) => {
  return (
    <section className="h-[400px] overflow-y-auto gallery">
      <ul className="grid grid-cols-3 gap-1" >
        {images?.map(image => (
          <li
            key={image}
            className="h-40 bg-purple-300 rounded-md"
          >
            <img
              className="object-cover w-full h-full"
              src={image}
              alt="Images de la nota"
              loading="lazy" />
          </li>
        ))}
      </ul>
    </section>
  )
}

ImageGalery.propsTypes = {
  images: PropTypes.array.isRequired
}

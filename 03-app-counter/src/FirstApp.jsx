import PropTypes from 'prop-types'

export const AppCounter = ({ title, def }) => {

  const handleSaludo = () => {
    return 'hola como estas lol ☺️:) '
  }


  return (
    <>
      <h1 style={{color: '#f90',}}>
        Luisinho <span style={{color: 'plum'}}>{title}</span>
      </h1>

      <div style={{color: 'limegreen'}}>
        AppCounter <code style={{color: 'powderblue'}}>{ def }</code>
      </div>
    </>
  )
}

AppCounter.propTypes = {
  title: PropTypes.string.isRequired,
  def: PropTypes.number
}

AppCounter.defaultProps = {
  title: 'el dios ...!',
  def: 444
}

import PropTypes from 'prop-types'

export const FirstApp = ({ title, def }) => {

  const handleSaludo = () => {
    return 'hola como estas lol ☺️:) '
  }


  return (
    <>
      <h1 style={{color: '#f90',}} data-testid="test-title">{ title }</h1>

      <div style={{color: 'limegreen'}}>{ def }</div>
      <div style={{color: 'limegreen'}}>{ def }</div>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  def: PropTypes.number
}

FirstApp.defaultProps = {
  // title: 'el dios ...!',
  def: 444
}

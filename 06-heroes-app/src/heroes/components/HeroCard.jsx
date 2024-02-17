import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../styles/hero-card.css'

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters
}) => {

  const path = `/heroes/${ id }.jpg`

  return (
    <article
      key={id}
      className="card animate__animated animate__fadeIn"
    >
      <img src={path} alt={superhero} className="card__img" />
      <aside className="card__info">
        <header><h3>{ superhero }</h3></header>
        <p className="card__paragraph">{ alter_ego }</p>

        {characters !== alter_ego && <p className="card__paragraph">{ characters }</p>}

        <footer className="card__footer">{ first_appearance }</footer>
        <Link className="card__link" to={`/hero/${ id }`}>Mas...</Link>
      </aside>

    </article>
  )
}

HeroCard.propTypes = {
  id: PropTypes.string,
  superhero: PropTypes.string,
  publisher: PropTypes.string,
  alter_ego: PropTypes.string,
  first_appearance: PropTypes.string,
  characters: PropTypes.string,
}

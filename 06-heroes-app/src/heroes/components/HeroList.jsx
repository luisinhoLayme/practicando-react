import { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import PropTypes from 'prop-types'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroesByPublisher( publisher ), [publisher])

  return (
    <section className="container">
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          {...hero}
        />
      ))}
    </section>
  )
}

HeroList.propTypes = {
  publisher: PropTypes.string
}



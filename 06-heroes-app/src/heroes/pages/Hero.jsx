import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { getHeroById } from '../helpers'
import '../styles/hero.css'
import { useMemo } from 'react'

export const Hero = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const hero = useMemo(() => getHeroById(id), [id])

  const onNavigateBack = () => {
    navigate(-1, { replace: true })
  }

  if ( !hero ) {
    return <Navigate to="/marvel" />
  }

  return (

    <article className="hero animate__animated animate__jackInTheBox ">
      <section className="hero__img">
        <img src={ `/heroes/${ hero.id }.jpg` } alt={ hero.superhero } />
      </section>
      <aside className="hero__info">
        <h3>{hero.superhero}</h3>
        <ul>
          <li><strong>Alter ego:</strong> { hero.alter_ego }</li>
          <li><strong>Publisher:</strong> { hero.publisher }</li>
          <li><strong>First Appearence:</strong> { hero.first_appearance }</li>
        </ul>
        <h5>Characters</h5>
        <p>{ hero.characters }</p>

        <button onClick={ onNavigateBack }>Back</button>
      </aside>
    </article>
  )
}

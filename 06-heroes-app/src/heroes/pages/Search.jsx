import { useNavigate, useLocation } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import queryString from 'query-string'
import { HeroCard } from '../components'
import '../styles/search.css'
import { getHeroesByName } from '../helpers/getHeroesByName'

export const Search = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)
  const heroes = getHeroesByName(q)

  // mostrar search or error
  const showSearch = q.length === 0
  const showError = q.length > 0 && heroes.length === 0

  const { searchText, onIputChange } = useForm({
    searchText: q,
  })

  const onSearchSubmit = (e) => {
    e.preventDefault()
    // if (searchText.trim().length <= 1) return

    navigate(`?q=${searchText.toLowerCase().trim()}`)
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={onSearchSubmit}>
        <div className="search__form-field">
          <input
            type="text"
            placeholder="Batman..."
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={onIputChange}
          />
        </div>
        <button className="search__form-button">Search</button>
      </form>
      <aside className="search__result">
        <h4 className="search__title">Results</h4>

        {/* {q === '' ? <p className="search__hero">Search a hero</p> */}
        {/*   : (heroes.length === 0) && */}
        {/*   <p className="search__error"> */}
        {/*     No hero with <strong>{q}</strong> */}
        {/*   </p> */}
        {/**/}
        {/* } */}

        <p
          className={`search__hero animate__animated animate__rubberBand ${showSearch ? 'search__hero--active' : ''}`}
        >
          Search a hero
        </p>
        <p
          className={`search__error animate__animated animate__rubberBand ${showError ? 'search__error--active' : ''}`}
        >
          No hero with <strong>{q}</strong>
        </p>
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </aside>
    </section>
  )
}

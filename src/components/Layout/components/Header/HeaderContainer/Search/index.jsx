import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Search.scss'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
  return (
    <div className='search-wrapper'>
      <div className='search-container'>
        <input
          placeholder='What are you looking for'
          className='search-input'
        ></input>
        <button className='search-btn'>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className='search-btn--icon'
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  )
}

export default Search
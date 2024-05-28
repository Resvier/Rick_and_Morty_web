import searchIcon from '../assets/search-icon.svg'

export function SearchBar () {
  return (
    <div className='search-container'>
      <textarea
        className='search-input'
        placeholder='Search'
        rows='1'
        maxLength='20'
      />
      <img
        className='search-icon'
        src={searchIcon}
        alt='search logo'
      />
    </div>
  )
}

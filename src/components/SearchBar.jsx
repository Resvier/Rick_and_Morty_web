import searchIcon from '../assets/search-icon.svg'

export function SearchBar ({ handleChange, handleKeyDown }) {
  return (
    <div className='search-container'>
      <textarea
        className='search-input'
        placeholder='Search'
        rows='1'
        maxLength='20'
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <img
        className='search-icon'
        src={searchIcon}
        alt='search logo'
      />
    </div>
  )
}

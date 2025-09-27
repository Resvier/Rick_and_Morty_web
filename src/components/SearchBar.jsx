export default function SearchBar (props) {
  return (
    <div className='search-section'>
      <h2>Character searcher</h2>
      <form onSubmit={props.handleSubmit} className='search-bar'>
        <input
          type='text'
          placeholder=' e.g. Rick Sanchez'
          aria-label='search character'
          name='character'
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

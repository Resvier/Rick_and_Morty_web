import { Navbar } from './components/Navbar.jsx'
import { SearchBar } from './components/SearchBar.jsx'

const URL_CHARACTERS = 'https://rickandmortyapi.com/api/character/'
/* const URL_LOCATIONS = 'https://rickandmortyapi.com/api/location'
const URL_EPISODES = 'https://rickandmortyapi.com/api/episode' */

function App () {
  return (
    <>
      <Navbar />
      <h1>Character searcher</h1>
      <SearchBar />
      <h3>Character</h3>
    </>
  )
}

export default App

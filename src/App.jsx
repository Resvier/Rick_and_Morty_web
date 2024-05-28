import { useState } from 'react'
import { Navbar } from './components/Navbar.jsx'
import { SearchBar } from './components/SearchBar.jsx'

const URL_CHARACTERS = 'https://rickandmortyapi.com/api/character/'
/* const URL_LOCATIONS = 'https://rickandmortyapi.com/api/location'
const URL_EPISODES = 'https://rickandmortyapi.com/api/episode' */

function App () {
  const [code, setCode] = useState(1)
  const [search, setSearch] = useState(false)

  const handleChange = (event) => {
    setCode(event.target.value)
  }
  const handleKeyPres = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      setSearch(!search)
    }
  }

  return (
    <>
      <Navbar />
      <h1>Character searcher</h1>
      <SearchBar handleChange={handleChange} handleKeyPres={handleKeyPres} />
      <h3>Character</h3>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar.jsx'
import { SearchBar } from './components/SearchBar.jsx'
import { CharacterCard } from './components/CharacterCard.jsx'

const URL_CHARACTERS = 'https://rickandmortyapi.com/api/character/'
/* const URL_LOCATIONS = 'https://rickandmortyapi.com/api/location'
const URL_EPISODES = 'https://rickandmortyapi.com/api/episode' */

function App () {
  const [code, setCode] = useState(1)
  const [search, setSearch] = useState(false)
  const [character, setCharacter] = useState(null)

  useEffect(() => {
    if (!code) return

    const ENDPOINT_URL = URL_CHARACTERS + code
    fetch(ENDPOINT_URL)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data) {
          setCharacter(data)
        }
      }

      )
  }, [code])

  const handleChange = (event) => {
    setCode(event.target.value)
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      setSearch(!search)
    }
  }

  return (
    <>
      <Navbar />
      <h1>Character searcher</h1>
      <SearchBar handleChange={handleChange} handleKeyDown={handleKeyDown} />
      <h3>Character</h3>
      {search && <CharacterCard character={character} />}
    </>
  )
}

export default App

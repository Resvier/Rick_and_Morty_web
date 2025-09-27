import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import Footer from './components/Footer.jsx'
import CharactersList from './components/CharactersList.jsx'
import { useEffect, useState } from 'react'
import { rick } from './rick.js'

/*

const URL_LOCATIONS = 'https://rickandmortyapi.com/api/location'
const URL_EPISODES = 'https://rickandmortyapi.com/api/episode' */

const URL_CHARACTERS = 'https://rickandmortyapi.com/api/character/?name='

export default function App () {
  const [name, setName] = useState('')
  const [characters, setCharacters] = useState([])

  function handleSubmit (event) {
    event.preventDefault() // Previene la recarga de la página
    const formData = new FormData(event.target)
    const newCharacter = formData.get('character')
    setName(newCharacter)
    console.log(newCharacter)
  }
  useEffect(() => {
    fetch(URL_CHARACTERS + name)
      .then(res => res.json())
      .then(data => setCharacters(data.results))
    console.log(characters)
  }
  , [name])
  return (
    <>
      <Header />
      <main>
        <SearchBar
          handleSubmit={handleSubmit}
        />
        <CharactersList
          characters={characters}
        />
      </main>
      <Footer />
    </>
  )
}

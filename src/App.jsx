import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import Footer from './components/Footer.jsx'
import CharactersList from './components/CharactersList.jsx'
import { useState } from 'react'
import { rick } from './rick.js'
/*
const URL_CHARACTERS = 'https://rickandmortyapi.com/api/character/1'
const URL_LOCATIONS = 'https://rickandmortyapi.com/api/location'
const URL_EPISODES = 'https://rickandmortyapi.com/api/episode' */

export default function App () {
  const [name, setName] = useState('')

  function handleSubmit (event) {
    event.preventDefault() // Previene la recarga de la página
    const formData = new FormData(event.target)
    const newCharacter = formData.get('character')
    setName(newCharacter)
    console.log(newCharacter)
  }
  return (
    <>
      <Header />
      <main>
        <SearchBar
          handleSubmit={handleSubmit}
        />
        <CharactersList
          name={rick}
        />
      </main>
      <Footer />
    </>
  )
}

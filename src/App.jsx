import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import Footer from './components/Footer.jsx'
import CharactersList from './components/CharactersList.jsx'
import { useEffect, useState, useRef } from 'react'

/*

const URL_LOCATIONS = 'https://rickandmortyapi.com/api/location'
const URL_EPISODES = 'https://rickandmortyapi.com/api/episode' */

const URL_CHARACTERS = 'https://rickandmortyapi.com/api/character/?name='

export default function App () {
  const [name, setName] = useState('')
  const [characters, setCharacters] = useState([])
  const [prev, setPrev] = useState(null)
  const [next, setNext] = useState(null)
  const [page, setPage] = useState(0)
  const [url, setUrl] = useState(URL_CHARACTERS)
  const charactersList = useRef(null)

  function handleSubmit (event) {
    event.preventDefault() // Previene la recarga de la página
    const formData = new FormData(event.target)
    const newCharacter = formData.get('character')
    setName(newCharacter)
  }
  function handlePrev (event) {
    setPage(prevPage => prevPage !== 1 ? prevPage - 1 : prevPage)
    setUrl(prevUrl => prev !== null ? prev : prevUrl)
  }
  function handleNext (event) {
    setPage(prevPage => next === null ? prevPage : prevPage + 1)
    setUrl(prevUrl => next === null ? prevUrl : next)
  }
  useEffect(() => {
    if (charactersList.current) {
      charactersList.current.scrollIntoView()
    }
  }, [page])
  useEffect(() => {
    if (name !== '') {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setCharacters(data.results)
          setNext(data.info.next)
          setPrev(data.info.prev)
        })
    } else {
      setCharacters([])
      setPage(0)
    }
  }, [url])
  useEffect(() => {
    if (name !== '') {
      fetch(URL_CHARACTERS + name)
        .then(res => res.json())
        .then(data => {
          setCharacters(data.results)
          setNext(data.info.next)
          setPrev(data.info.prev)
        })
      setPage(1)
    } else {
      setCharacters([])
      setPage(0)
    }
  }
  , [name])
  return (
    <>
      <Header />
      <main ref={charactersList}>
        <SearchBar
          handleSubmit={handleSubmit}
        />
        <CharactersList
          characters={characters}
          page={page}
          handleNext={handleNext}
          handlePrev={handlePrev}
          next={next}
        />
      </main>
      <Footer />
    </>
  )
}

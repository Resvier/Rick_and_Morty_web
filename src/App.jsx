import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import Footer from './components/Footer.jsx'
import CharactersList from './components/CharactersList.jsx'
/*
const URL_CHARACTERS = 'https://rickandmortyapi.com/api/character/'
const URL_LOCATIONS = 'https://rickandmortyapi.com/api/location'
const URL_EPISODES = 'https://rickandmortyapi.com/api/episode' */

function App () {
  return (
    <>
      <Header />
      <main>
        <h1>Character searcher</h1>
        <SearchBar />
        <h3>Character</h3>
        <CharactersList />
      </main>
      <Footer />
    </>
  )
}

export default App

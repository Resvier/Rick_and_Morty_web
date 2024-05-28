import { Navbar } from "./components/Navbar.jsx"
import { SearchBar } from "./components/SearchBar.jsx"

function App() {
  

  return (
    <>
      <Navbar/>
      <h1>Character searcher</h1>
        <SearchBar />
        <h3>Character</h3>
    </>
  )
}

export default App

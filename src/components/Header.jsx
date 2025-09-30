import RickAndMortyLogo from '../assets/Rick_and_Morty.svg'

export default function Header () {
  return (
    <header>
      <nav className='navbar'>
        <h1 className='title'>
          <img src={RickAndMortyLogo} alt='Rick and Morty' className='logo' />
          <span className='page-section'>
            Characters
          </span>
        </h1>
        <ul className='navbar-list'>
          <li>Name</li>
          <li>Locations</li>
          <li>Episode</li>
        </ul>
      </nav>
    </header>
  )
}

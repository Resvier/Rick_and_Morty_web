import CharacterCard from './CharacterCard'
export default function CharactersList (props) {
  const number = 1
  const characters = props.characters
  const charactersList = characters.map(character =>
    <CharacterCard
      key={character.id}
      image={character.image}
      status={character.status}
      name={character.name}
      species={character.species}
      gender={character.gender}
      origin={character.origin}
      type={character.type}
    />
  )
  return (
    <section className='characters-section'>
      <div className='characters-list'>
        {charactersList}
      </div>
      <div>
        <button>Prev</button>
        <span>{number}</span>
        <button>Next</button>
      </div>
    </section>
  )
}

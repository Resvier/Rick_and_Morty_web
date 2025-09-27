import CharacterCard from './CharacterCard'
export default function CharactersList (props) {
  const characters = props.name
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
    <div className='characters-list'>
      {charactersList}
    </div>
  )
}

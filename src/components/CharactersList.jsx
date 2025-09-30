import CharacterCard from './CharacterCard'
export default function CharactersList (props) {
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
      <div className='page-buttons'>
        {props.page !== 1 &&
          <button
            onClick={props.handlePrev}
          >Prev
          </button>}
        <span>{props.page}</span>
        {props.next !== null &&
          <button
            onClick={props.handleNext}
          >Next
          </button>}
      </div>
    </section>
  )
}

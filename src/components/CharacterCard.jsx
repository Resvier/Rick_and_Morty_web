export default function CharacterCard (character) {
  return (
    <div className='character-container'>
      <div className='character-image-container'>
        <img
          className='character-image'
          src={character.image}
          alt='searched character image'
        />
      </div>
      <div className='character-info-container'>
        <h3 className='character-info-name'>{character.name}</h3>
        <div className='character-info-list'>
          <div className='basic-info'>
            <span className='status-specie'>
              {character.status === 'Alive' ? '🟢' : '🔴'}
              {character.status}
            </span>
            <span> - {character.species}</span>
          </div>
          {character.type !== '' &&
            <>
              <h4>Type</h4>
              <span>{character.type}</span>
            </>}
          <h4>Gender  </h4>
          <span className='gender'>
            {character.gender}
          </span>

          <h4>Origin </h4>
          <span>{character.origin.name}</span>

        </div>

      </div>
    </div>
  )
}

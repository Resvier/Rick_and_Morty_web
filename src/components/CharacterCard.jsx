export function CharacterCard (character) {
  return (
    <section className='character-container'>

      {character.image &&
        <div className='character-image-container'>
          <img
            className='character-image'
            src={character.image}
            alt='searched character image'
          />
        </div>}
      {character &&
        <div className='character-info-container'>
          <span className='character-info-name'>{character.name}</span>
          <ul className='character-info-list'>
            <li>
              <span>Status : </span>
              <span className={
                  character.status === 'Alive'
                    ? 'alive-status'
                    : character.status === 'Dead'
                      ? 'dead-status'
                      : 'other-info'
                  }
              >{character.status}
              </span>
            </li>
            <li>
              <span>Species : </span>
              <span>{character.species}</span>
            </li>
            <li>
              <span>Gender : </span>
              <span className={
                    character.gender === 'Male'
                      ? 'male-gender'
                      : character.gender === 'Female'
                        ? 'female-gender'
                        : 'other-info'
                  }
              > {character.gender}
              </span>
            </li>
            <li>
              <span>Origin : </span>
              <span>{character.origin.name}</span>
            </li>
          </ul>

        </div>}
    </section>
  )
}

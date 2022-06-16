import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../context/DataContext'

const Details = () => {
  const [dataPokemon, setDataPokemon] = useState({})
  const {dataContext} = useContext(DataContext)

  let {name} = useParams()

  const pokemonFound =  dataContext.filter( pokemon => (pokemon.name) === name)
  // console.log(pokemonFound[0])
  
  const getDataPokemon = async () => {
    // console.log(pokemonFound[0].url)
    return await axios.get(pokemonFound[0].url)
  }

  useEffect(() => {
    const setData = async () => {
      try {
      await getDataPokemon()
      .then(({data}) => setDataPokemon(data))
      .catch(({error}) => console.log(error))
    } catch ({error}) {
      console.log(error)
    }
  }

  setData()

  }, [])

  if(Object.keys(dataPokemon).length !== 0){
    return(
      <div className='card-detail'>
        <h2 className='row-one'>{`Name: ${dataPokemon.name.toUpperCase()}`}</h2>
        {/* <hr /> */}
        {/* moves(array), sprintes-fon */}
        <section className='row-two'>
          <div className='images'>
            <img src={`${(dataPokemon.sprites["front_default"])}` } alt="pokeball" />
            <img src={`${(dataPokemon.sprites["back_default"])}` } alt="pokeball" />
            <img src={`${(dataPokemon.sprites.versions["generation-v"]["black-white"].animated["front_default"])}` } alt="pokeball" />
            <img src={`${(dataPokemon.sprites.versions["generation-v"]["black-white"].animated["back_default"])}` } alt="pokeball" />
          </div>
          <div className='main-info'>
            <p>{`Height: ${dataPokemon.height} dm.`}</p>
            <p>{`Weight: ${dataPokemon.weight} hg.`}</p>
            <p>{`Base Experience: ${dataPokemon["base_experience"]}`}</p>
            <p>{`Species: ${dataPokemon.species.name}`}</p>
          </div>
          <div className='stats'>
            <p>Stats(Base):</p>
            <ul>
              {(dataPokemon.stats).map((stat, index) => (<li key={index}>{stat.stat.name} : {stat["base_stat"]}</li>))}
            </ul>
          </div>
          <div className='types'>
            <p>Types:</p>
            <ul>
              {(dataPokemon.types).map((type, index) => (<li key={index}>{type.type.name}</li>))}
            </ul>
          </div>
          <div className='forms'>
            <p>Forms:</p>
            <ul>
              {(dataPokemon.forms).map((form, index) => (<li key={index}>{form.name}</li>))}
            </ul>
          </div>
        </section>
        {/* <hr /> */}
        <section className='row-three'>
          <h3>Abilities:</h3>
          <ul>
            {(dataPokemon.abilities).map((ability, index) => (<li key={index}>{ability.ability.name}</li>))}
          </ul>
        </section>
        {/* <hr /> */}
        <section className='row-four'>
          <h3>Moves:</h3>
          <ul>
            {(dataPokemon.moves).map((move, index) => (<li key={index}>{move.move.name}</li>))}
          </ul>
        </section>
      </div>
    )
  } else {
    console.log('aqui no hay datos en el objeto2')
  }
}

export default Details
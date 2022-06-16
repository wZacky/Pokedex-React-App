import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Card = ({pokemon}) => {
  const [dataPokemon, setDataPokemon] = useState({})
  const getDataPokemon = async () => {
    return await axios.get(pokemon.url)
  }

  useEffect(() => {
    const setData = async () => {
      try {
        await getDataPokemon()
          .then(({data}) => setDataPokemon(data))
      } catch ({error}) {
        console.log(error)
      }
    }
    setData()
  }, [])

  if(Object.keys(dataPokemon).length !== 0){
    return (
      <div className='card'>
        <Link to={`pokemon/${dataPokemon.name}`}>
          <img src={`${(dataPokemon.sprites["front_default"])}` } alt="pokeball" />
        </Link>
        <h3>{`Name: ${dataPokemon.name}`}</h3>
        <p>{`Type: ${dataPokemon.types[0].type.name}`}</p>
      </div>
    )
  }else{
    console.log('aqui no hay datos en el objeto')
  }

}

export default Card
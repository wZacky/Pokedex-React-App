import axios from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

const getData = async () => {
  return await axios.get(BASE_URL + '?limit=150')


  //return data
}

const getPersonalData = async () => {
  try {
    const { data } = await getData()
    console.log(data)
  } catch ({ message }) {
    console.log(message)
  }
  //
  /* getData()
  .then(
    async ({data}) => {
      data.results.map(pokemon => {
        axios.get(`${pokemon.url}`)
      })
    }
  )
  .catch(({error}) => console.log(error)) */
}

//getPersonalData()

export default getData
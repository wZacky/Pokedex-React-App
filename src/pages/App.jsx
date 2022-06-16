import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import { DataContext } from '../context/DataContext'
// import getPersonalData from '../services'
import getData from '../services'
// import logo from './logo.svg'

function App() {
  const [list, setList] = useState([])
  const { dataContext, setDataContext } = useContext(DataContext)

  useEffect(() => {
    const setData = async () => {
      try {
        await getData()
          .then(({data}) => {
            console.log(data.results)
            setList(data.results)
            setDataContext(data.results)
          })
      } catch({error}) {
        console.log(error)
      }
    }
    setData()
  }, [])

  // console.log(dataContext)

  return (
    <div>
      <SearchBar />
      <div className='container'>
        {dataContext.map((pokemon) => {
          return <Card key={pokemon.name} pokemon = {pokemon}/>
        }
        )}
      </div>
    </div>
  )
}

export default App

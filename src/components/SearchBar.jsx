import { useContext, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { DataContext } from "../context/DataContext"
import getData from "../services"


const SearchBar = () => {
  const { dataContext, setDataContext } = useContext(DataContext)
  const inputRef = useRef('')

  const handleInput = () => {
    if (inputRef.current.value.length !== 0 && inputRef.current.value !== ' ') {
      const pokemonFound =  dataContext.filter( pokemon => (pokemon.name).includes(inputRef.current.value))
      //console.log(inputRef.current.value)
      setDataContext(pokemonFound)
    } else {
      const setData = async () => {
        try {
          await getData()
            .then(({data}) => {
              console.log(data.results)
              setDataContext(data.results)
            })
        } catch({error}) {
          console.log(error)
        }
      }
      setData()
    }
  }

  return (
    <div className="search-box">
      <label htmlFor="search">Search for a Pokemon:</label>
      <input ref={inputRef} type="search" id="search" onChange={handleInput}/>
    </div>
  )
}

export default SearchBar
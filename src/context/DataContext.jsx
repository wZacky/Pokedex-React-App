import { createContext, useState } from "react";

export const DataContext = createContext()

export const DataProvider = ({children}) => {
  const [dataContext, setDataContext] = useState([])
  return (
    <DataContext.Provider value={{
      dataContext,
      setDataContext
    }}>
      { children }
    </DataContext.Provider>
  )
}
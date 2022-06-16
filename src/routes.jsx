import { useRoutes } from 'react-router-dom'
import App from "./pages/App"
import Details from './pages/Details'

const Paths = () => {
  const element = useRoutes(
    [
      {
        path: '/',
        element: <App />
      },
      {
        path: 'pokemon/:name',
        element: <Details />
      }
    ]
  )

  return element
}

export default Paths
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import StandardLayout from './layouts/StandardLayout'
import Home from './pages/Home'
import Citites from './pages/Cities'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <StandardLayout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "home",
          element: <Home />
        },
        {
          path: "cities",
          element: <Citites />
        }
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

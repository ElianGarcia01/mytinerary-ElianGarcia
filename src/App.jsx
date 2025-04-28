import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomeLayout from './layouts/HomeLayout'
import Home from './pages/Home'
import Cities from './pages/Cities'
import NotFound from './pages/NotFound'
import CityDetails from './pages/CityDetails/CityDetails'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
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
          element: <Cities />
        },
        {
          path: "cities/details",
          element: <CityDetails />
        }
      ]
    },
    {
      path: "*",
      element: <NotFound />
    },
  ])


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomeLayout from './layouts/HomeLayout'
import CitiesLayout from "./layouts/CitiesLayout";
import Home from './pages/Home'
import Cities from './pages/Cities'

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
          element: <CitiesLayout />,
          children: [
            {
              path: "",
              element: <Cities />
            }
          ]
        }
      ]
    },
  ])


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

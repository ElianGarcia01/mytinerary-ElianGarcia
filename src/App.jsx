import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomeLayout from './layouts/HomeLayout'
import Home from './pages/Home'
import Cities from './pages/Cities'
import NotFound from './pages/NotFound'
import CityDetails from './pages/CityDetails/CityDetails'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setUser } from './redux/actions/authAction'
import axios from 'axios'
import LoginForm from './pages/Login'

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
      },
    ]
  },
  {
    path: "login",
    element: <LoginForm />
  },
  {
    path: "*",
    element: <NotFound />
  },
])

function App() {
  const loginWithToken = async (token) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/users/validateToken",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      loginWithToken(token).then((user) => {
        const authTemp = { user, token };
        dispatch(setUser(authTemp));
      });
    }
  }, [dispatch]);


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { Provider } from "react-redux"
import store from "./redux/store.js"
import { GoogleOAuthProvider } from "@react-oauth/google"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="681251474449-rk5h0h35phbq82l9ffekf6sbthmq33uk.apps.googleusercontent.com">
      <Provider store={store}>
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>
)

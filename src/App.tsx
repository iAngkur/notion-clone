import { Route, Routes } from "react-router-dom"
import RootLayout from "./layouts/rootlayout/RootLayout"
import MarketingPage from "./pages/marketing/MarketingPage"
import About from "./pages/About"
import Login from "./pages/auth/login/Login"
import Register from "./pages/auth/register/Register"
import MarketingLayout from "./layouts/marketingLayout/MarketingLayout"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MarketingLayout />}>
          <Route index element={<MarketingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/dashboard" element={<RootLayout />}>
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

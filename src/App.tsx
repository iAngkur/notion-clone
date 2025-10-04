import React from "react"
import { Route, Routes } from "react-router-dom"

const MarketingLayout = React.lazy(() => import("./layouts/marketingLayout/MarketingLayout"));
const MarketingPage = React.lazy(() => import("./pages/marketing/MarketingPage"));
const Login = React.lazy(() => import("./pages/auth/login/Login"));
const Register = React.lazy(() => import("./pages/auth/register/Register"));

const DashboardLayout = React.lazy(() => import("./layouts/dashboardLayout/DashboardLayout"));
const About = React.lazy(() => import("./pages/About"));


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MarketingLayout />}>
          <Route index element={<MarketingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

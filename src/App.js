import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Main from "./components/Main"
import { HomePage } from "./routes/HomePage"
import Details from "./routes/Details"
import PageNotFound from "./routes/PageNotFound"
import { useState } from "react"

function App() {
  const [countries, setCountries] = useState([])

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            index
            element={
              <HomePage countries={countries} setCountries={setCountries} />
            }
          />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/country/:name" element={<Details />} />
        </Routes>
      </Main>
    </>
  )
}

export default App

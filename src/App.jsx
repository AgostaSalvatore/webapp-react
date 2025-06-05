import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import FilmPage from "./pages/FilmPage"
import NotFoundPage from "./pages/NotFoundPage"
import CreateMovie from "./pages/CreateMovie"
import GlobalContext from "./context/globalContext"
import { useState } from "react"

function App() {

  const [isLoading, setIsLoading] = useState(false)


  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path="movie/:id" element={<FilmPage />} />
            <Route path='movie/create' element={<CreateMovie />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App

import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import FilmPage from "./pages/FilmPage"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route path="movie/:id" element={<FilmPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

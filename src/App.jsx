import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Movie from "./page/Movie."

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route index element={<Home />}/>
      <Route path="movie" element={<Movie />}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App

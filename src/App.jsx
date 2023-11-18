import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Movie from "./page/Movie";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Header from "./components/Header";
import MovieList from "./page/MovieList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movies/:type" element={<MovieList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

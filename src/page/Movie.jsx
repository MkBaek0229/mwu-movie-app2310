import Header from "../components/Header";
import { data } from "../data/test";

export default function Movie() {
  return (
    <>
      <Header />
      {data.results.map((movie) => (
        <ul key={movie.id}>
          <li>{movie.title}</li>
        </ul>
      ))}
    </>
  );
}

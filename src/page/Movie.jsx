import { data } from "../data/test";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Movie() {
  return (
    <>
      {data.results.map((movie) => (
        <ul key={movie.id}>
          <li>{movie.title}</li>
        </ul>
      ))}
    </>
  );
}

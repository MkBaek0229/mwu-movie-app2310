import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import { config } from "../data/constant";
import MovieItem from "../components/Movieitem";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?language=ko-KR&api_key=${config.API_KEY}`,
    )
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results)
    })
  }, []);

  return (
    <Container>
      <MoviePoster>
        <Carousel
          showThumbs
          autoPlay
          infiniteLoop
          showStatus={false}
          transitionTime={3}
        >
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </Carousel>
      </MoviePoster>
    </Container>
  );
}
const Container = styled.div``;
const MoviePoster = styled.div`
  display: flex;
  align-items: center;
`;
export default Home;

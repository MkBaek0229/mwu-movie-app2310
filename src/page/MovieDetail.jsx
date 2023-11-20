import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { config } from "../data/constant";

function MovieDetail() {
  const [movie, setMovie] = useState();

  const param = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${param.id}?language=ko-KR&api_key=${config.API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);

  if (!movie) {
    return <></>;
  }

  return (
    <Container>
      <Intro>{movie.title}</Intro>
      <Content>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="영화 포스트 사진"
        />
        {movie.overview}
      </Content>
    </Container>
  );
}

export default MovieDetail;

const Container = styled.div``;

const Intro = styled.div``;

const Content = styled.div``;

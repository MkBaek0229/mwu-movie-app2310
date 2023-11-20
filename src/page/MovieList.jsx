import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { config } from "../data/constant";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  // useParams react라우터에서제공 호출 후 변수에담아두면 현재 주소값 타입 출력?
  const params = useParams();
  console.log(params);

  useEffect(() => {
    //`https://api.themoviedb.org/3/movie/원하는 데이터입력에 따라 다른 데이터 호출 ex) upcoming , top_rated
    fetch(
      `https://api.themoviedb.org/3/movie/${
        params.type ? params.type : "popular"
      }?language=ko-KR&api_key=${config.API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [params.type]); // params 값이 변할때마다 리렌더링한다.

  return (
    <Container>
      <Title></Title>
      <Group>
        {movies.map((movie) => <div key={movie.id}>{movie.title}</div>)}
      </Group>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 3rem 3rem;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  margin: 2.5rem;
`;

const Group = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: center;
`;

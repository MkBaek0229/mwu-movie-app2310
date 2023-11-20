import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";
import SearchBox from "../components/SearchBox";
import { config } from "../data/constant";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  // 검색기능
    const [keyword, setKeyword] = useState("")
    const onChangeKeyword = (e) => {
        setKeyword(e.target.value)
    }

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
        setKeyword("")
      });
  }, [params.type]); // params 값이 변할때마다 리렌더링한다.

  return (
    <Container>
      <SearchBox keyword={keyword} onChangeKeyword={onChangeKeyword}></SearchBox>
      <Title></Title>
      <Group>
        {movies.filter((movie) => movie.original_title.toLowerCase().includes(keyword.toLowerCase()) || movie.title.toLowerCase().includes(keyword.toLowerCase()))
        .map((movie) => <Card key={movie.id} movie={movie}></Card>)}
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

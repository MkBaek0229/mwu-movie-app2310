import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import { config } from "../data/constant";
import MovieItem from "../components/Movieitem";

function Home() {
  /* 

  Hooks API 지식 가장많이쓰이는 두개
  1. useState
  과거에는 class 문법기반 컴포넌트를 사용했으나 이는 복잡성을가짐 어려운 코딩. -> 쉬운 프레임워크(뷰)등장으로 React도 함수형컴포넌트를 사용하기시작
  함수형 컴포넌트는 state가없었는데. 그러한 state을 사용할수있게 하기 위해 바로 Hooks api 가만들어짐
  const [movies, setMovies] = useState([]); == useState = 빈 배열 형태의 state 생성 최초의 빈배열은 movies에 들어감 setMovies로 movies를 갱신함.
  변수명은 복수로 지어준다
  2. useEffect -> life cycle(생명주기)에관련됨
  useEffect(() => {
    로직 작성 변화가일어나면 항상 이안에 로직이실행됨
  }, deps); deps에 빈배열을 넣으면 최초시작시에만 렌더링 없으면 계속 리렌더링함. 변수값이들어가면 EX [movies] 변수 갱신시 감지하여 리렌더링
  */

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?language=ko-KR&api_key=${config.API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
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

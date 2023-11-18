import { data } from "../data/test";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

function Home() {
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
          {data.results.map((movie) => (
            // 고유한값 key값을 줘야함
            <div key={movie.id}>
              {/* 문자열 + 데이터 조합은 ``을써라 */}
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt=""
              />
            </div>
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

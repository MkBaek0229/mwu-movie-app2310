import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function MovieItem({ movie }) {
  const navigate = useNavigate();

  const onClickPoster = () => {
    navigate("/movie/" + movie.id);
  };

  return (
    <Container onClick={onClickPoster}>
      {/* 영화 사진 */}
      <ImgBox>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="영화 포스트 사진"
        />
      </ImgBox>
      {/* 영화 소개글 */}
      <Overlay>
        <Title>{movie.title}</Title>
        <SubTitle>
          출시일 : {movie.release_date} /⭐ {movie.vote_average}
        </SubTitle>
        <Desc>{movie.overview} </Desc>
      </Overlay>
    </Container>
  );
}

// 부모요소를 position : relative로두면 그 자식요소중 position : absolute를 가진 요소는 부모영역안에서만 놀수있다.
const Container = styled.div`
  position: relative;
  cursor: pointer;
`;

const ImgBox = styled.div`
  img {
    display: block;
  }
  height: calc(100vh - 80px);
`;

// 글씨를 사진위에 띄우기위해서 position : absolute
const Overlay = styled.div`
  width: 100%;
  position : absolute;
  bottom: 0px;
  text-aligin: left;
  padding: 80px; 40px;
  background-image: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 1))
`;

const Title = styled.h5`
  font-size: 3.7rem;
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0;
`;

const Desc = styled.p`
  font-style: italic;
  width: 70%;
`;

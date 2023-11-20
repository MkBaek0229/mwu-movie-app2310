import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      {/*react에서 class이름줄때는 class= "" X classname="" */}
      <Cell className="left">
        <Link to="/">
          <Img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
            alt="로고"
          />
        </Link>
        <Link to="/movies/popular">인기순</Link>
        <Link to="/movies/top_rated">별점순</Link>
        <Link to="/movies/upcoming">개봉예정순</Link>
      </Cell>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2.5rem;
  padding: 0.5rem 0;
`;
// $.left는 Cell 스타일 컴포넌트 안에속한 컴포넌트중 클래스이름이 left라면 적용할거라는뜻
// rem은 반응형 모바일웹을 대처하기위해 쓰는 크기표현단위법? 크기 조절시 비율에맞춰 변하는 크기
const Cell = styled.div`
  display: flex;
  align-items: center;
  &.left {
    gap: 3rem;
    font-size: 1.3rem;
    cursor: pointer;
  }
`;

// 이미지의 크기를 조절해주기위해서 img태그에 styled을 먹인 Img 스타일컴포넌트생성
const Img = styled.img`
  width: 80px;
  cursor: pointer;
  display: block;
`;

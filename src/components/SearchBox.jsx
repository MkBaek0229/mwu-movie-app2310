import styled from "styled-components";

function SearchBox({ keyword, onChangeKeyword }) {
  return (
    <Container>
      <Wrapper>
        <ImgBox>🔍</ImgBox>
        <Input
          placeholder="영화 제목을 입력하세요"
          value={keyword}
          onChange={onChangeKeyword}
        ></Input>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 0;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  max-width: 60%;
  margin: 0 auto;
  box-shashow: 0 2px 4px rgba(250, 250, 250, 0.24);
`;

const Input = styled.input`
  width: 100%;
  display: block;
  padding: 8px 20px;
  padding-left: 38px;
  border: 0;
  outline: 0;
`;

const ImgBox = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;

export default SearchBox;

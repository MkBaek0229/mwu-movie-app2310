import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
    return ( 
    <ul>
        <Link to="/">홈</Link>
        <Link to="/movie">서브</Link>
    </ul>);
}

export default Header;

const Container = styled.h1`
    display: flex;
    align-items: center;
    
`
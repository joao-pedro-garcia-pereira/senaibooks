import IconesHeader from '../IconesHeader/index.js';
import Logo from '../logo/index.js';
import OpcoesHeader from '../OpcoesHeader/index.js';
import styled from 'styled-components';

const HeaderContainer = styled.div`
background-color: #fff;
display: flex;
justify-content: center;
`;

function Header() {
    return (
        <HeaderContainer>
            <Logo></Logo>
            <OpcoesHeader></OpcoesHeader>
            <IconesHeader></IconesHeader>
        </HeaderContainer>
    )
}

export default Header;
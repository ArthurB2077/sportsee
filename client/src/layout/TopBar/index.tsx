import styled from 'styled-components';
import LogoPNG from './../../assets/images/logo.png';

const TopBar = (): JSX.Element => {

    const Nav = styled.nav `
        background-color: black;
        display: flex;
        justify-content: space-between;
        padding: 1em 6em 1em 2em;
        position: fixed;
        top:0;
        left: 0;
        right: 0;
        z-index: 2;
    `;

    const Logo = styled.img `
        width: 180px;
        height: 60px;
    `;

    const Link = styled.a `
        color: #FFFFFF;
        text-decoration: none;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        display: flex;
        align-items:center;
        justify-content:center;
    `;

    return(
        <Nav>
            <Logo src={LogoPNG} alt='Logo'></Logo>
            <Link href="." >Accueil</Link>
            <Link href="." >Profil</Link>
            <Link href="." >Réglages</Link>
            <Link href="." >Communauté</Link>
        </Nav>
    );
};

export default TopBar;
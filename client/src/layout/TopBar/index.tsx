import styled from 'styled-components';

const TopBar = (): JSX.Element => {
    const Nav = styled.nav `
        background-color: black;
        display: flex;
        justify-content: space-between;
        padding: 2em;
        position: fixed;
        top:0;
        left: 0;
        right: 0;
    `;

    const Link = styled.a `
        color: white;
        text-decoration: none;
    `;

    return(
        <Nav>
            <Link href="." >Accueil</Link>
            <Link href="." >Profil</Link>
            <Link href="." >Réglages</Link>
            <Link href="." >Communauté</Link>
        </Nav>
    );
};

export default TopBar;
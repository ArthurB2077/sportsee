import styled from 'styled-components';
import SportseeLogo from './../../assets/icons/logo.png';


/**
 * @description Top bar of the interface displaying the logo and main navigation menu
 */

const TopBar: React.FC = (): JSX.Element => {


    /**
     * @description Style section for the top bar
     */

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

    const NavLogo = styled.img `
        width: 180px;
        height: 60px;
    `;

    const NavLink = styled.a `
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
            <NavLogo src={SportseeLogo} alt='Logo de Sportsee'/>
            <NavLink href="." >Accueil</NavLink>
            <NavLink href="." >Profil</NavLink>
            <NavLink href="." >Réglages</NavLink>
            <NavLink href="." >Communauté</NavLink>
        </Nav>
    );
};


export default TopBar;
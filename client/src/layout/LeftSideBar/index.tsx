import styled from 'styled-components';
import NavItem1 from '../../assets/images/icon-nav-1.png'
import NavItem2 from '../../assets/images/icon-nav-2.png'
import NavItem3 from '../../assets/images/icon-nav-3.png'
import NavItem4 from '../../assets/images/icon-nav-4.png'

const LeftSideBar = () => {

    const NavBar = styled.nav `
        background-color: #000000;
        height: 100vh;
        width: 5.5vw;
        position: fixed;
        left: 0;
        z-index: -1;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: space-evenly;
    `;

    const NavContainer = styled.div `
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        padding-top: 10vh;
    `;

    const NavItem = styled.img `
        margin-top: 2.5vh;
    `;

    const Copyright = styled.p `
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        color: #FFFFFF;
        transform: rotate(-90deg);
        overflow: hidden;
        white-space: nowrap;
    `;

    return(
        <NavBar>
            <NavContainer>
                <NavItem src={NavItem1} alt='Méditation'/>
                <NavItem src={NavItem2} alt='Nage'/>
                <NavItem src={NavItem3} alt='Vélo'/>
                <NavItem src={NavItem4} alt='Musculation'/>
            </NavContainer>
            <Copyright>Copiryght, SportSee 2020</Copyright>
        </NavBar>
    );
};

export default LeftSideBar;
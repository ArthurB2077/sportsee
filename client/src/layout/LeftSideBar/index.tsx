import styled from 'styled-components';
import MeditationIcon from '../../assets/icons/icon-meditation.png';
import SwimmingIcon from '../../assets/icons/icon-swimming.png';
import CyclingIcon from '../../assets/icons/icon-cycling.png';
import BodybuildingIcon from '../../assets/icons/icon-bodybuilding.png';

const LeftSideBar: React.FC = (): JSX.Element => {

    const LeftBar = styled.nav `
        background-color: #000000;
        height: 100vh;
        width: 100px;
        position: fixed;
        left: 0;
        top: 0;
        z-index: -1;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: space-evenly;
    `;

    const LeftBarContainer = styled.div `
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        padding-top: 10vh;
    `;

    const LeftBarItem = styled.img `
        margin-top: 2.5vh;
    `;

    const LeftBarCopyright = styled.p `
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
        <LeftBar>
            <LeftBarContainer>
                <LeftBarItem src={MeditationIcon} alt='Méditation'/>
                <LeftBarItem src={SwimmingIcon} alt='Nage'/>
                <LeftBarItem src={CyclingIcon} alt='Vélo'/>
                <LeftBarItem src={BodybuildingIcon} alt='Musculation'/>
            </LeftBarContainer>
            <LeftBarCopyright>Copiryght, SportSee 2020</LeftBarCopyright>
        </LeftBar>
    );
};

export default LeftSideBar;
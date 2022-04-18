import styled from "styled-components";

interface Props {
    userName: string
};


/**
 * @description Info component displaying the user name and a gretings message
 */

const Info = (props: Props): JSX.Element => {

    /**
     * @description Style section for the info component
     */

    const InfoTitle = styled.h1 `
        margin-top: 0;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 48px;
        span {
            color: #FF0101;
        };
    `;

    const InfoPara = styled.p `
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
    `;


    /**
     * @description User name property retrived from the api
     */
    const { userName } = props;


    return (
        <>
            {userName &&
                <>
                    <InfoTitle>Bonjour <span>{userName}</span></InfoTitle>
                    <InfoPara>Félicitation ! Vous avez explosé vos objectifs hier 👏</InfoPara>
                </>
            }
        </>
    );
};


export default Info;
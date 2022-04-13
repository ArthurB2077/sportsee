import styled from "styled-components";

interface Props {
    userName: string
}

const InfoTitle = styled.h1 `
    margin-top: 0;
    font-weight: 600;
    span {
        color: #FF0101;
    }
`;

const InfoPara = styled.p `

`;

const Info = (props: Props): JSX.Element => {
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
}

export default Info;
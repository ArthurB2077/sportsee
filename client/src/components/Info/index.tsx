
interface Props {
    userName: string
}

const Info = (props: Props): JSX.Element => {
    const { userName } = props;

    // console.log("Info", userName);

    return (
        <>
            {userName &&
                <>
                    <h1>Bonjour {userName}</h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </>
            }
        </>
    );
}

export default Info;
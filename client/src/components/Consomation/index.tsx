

interface Props {
    keyData: any,
}

const Consomation = (props: Props): JSX.Element => {

    return (
        <div>
            {props.keyData && props.keyData.map((item: any) => {
                return(
                    <div>
                        <img src={item.image} alt={item.name}/>
                        <div> {item.name} {item.value}</div>
                    </div>
                );
            })}
        </div>
    )
};

export default Consomation;
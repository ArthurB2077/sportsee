import styled from 'styled-components';

interface Props {
    nutrients: any,
};

const NutrientConsumptionContainer = styled.div `
    display: flex;
    flex-direction: column;
`;

const NutrientConsumptionItem = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FBFBFB;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
    width: 260px;
    height: 125px;
    margin-bottom: 28px;
    img {
        width: 60px;
        height: 60px;
        margin-right: 20px;
    };
`;

const NutrientConsumption = (props: Props): JSX.Element => {

    return (
        <NutrientConsumptionContainer>
            {props.nutrients && props.nutrients.map((item: any) => {
                return(
                    <NutrientConsumptionItem>
                        <img src={item.image} alt={item.name}/>
                        <div> {item.name} {item.value}</div>
                    </NutrientConsumptionItem>
                );
            })}
        </NutrientConsumptionContainer>
    );
};

export default NutrientConsumption;
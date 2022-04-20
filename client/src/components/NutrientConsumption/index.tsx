import styled from 'styled-components';
import { NutrientConsumptionItem } from '../../types';

interface Props {
    nutrients: Array<NutrientConsumptionItem>,
};


const NutrientConsumption: React.FC<Props> = (props): JSX.Element => {

    /**
     * @description Style section for the nutrient list
     */

    const NutrientConsumptionContainer = styled.div `
        display: flex;
        flex-direction: column;
    `;

    const NutrientConsumptionItem = styled.div `
        display: flex;
        flex-direction: row;
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

    const NutrientConsumptionItemText = styled.div `
        display: flex;
        flex-direction: column;
        h5 {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            margin-top: 0;
            margin-bottom: 10px;
        }
        p {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            color: #74798C;
            margin: 0;
        }
    `;


    return (
        <NutrientConsumptionContainer>
            {props.nutrients && props.nutrients.map((item: NutrientConsumptionItem) => {
                return(
                    <NutrientConsumptionItem>
                        <img src={item.image} alt={item.name}/>
                        <NutrientConsumptionItemText>
                            <h5>{item.value}{item.name === 'Calories' ? 'kCal': 'g'}</h5>
                            <p>{item.name}</p>
                        </NutrientConsumptionItemText>
                    </NutrientConsumptionItem>
                );
            })}
        </NutrientConsumptionContainer>
    );
};


export default NutrientConsumption;
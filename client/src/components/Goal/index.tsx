import styled from 'styled-components';
import { Infos } from '../../types';
import Pie from '../Pie';


interface Props {
    score: Infos["todayScore"],
};

/**
 * @description Component that displays the user score in a pie chart
 */

const GoalIndicator: React.FC<Props> = (props): JSX.Element => {

    /**
     * @description Style section for the GoalIndicator component
     */

    const Goal = styled.div `
        background: transparent;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
        border-radius: 5px;
        width: 30%;
        height: 250px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    `;


    return (
        <Goal>
            <Pie percentage={props.score} colour="#FF0000"/>
        </Goal>
    );
};


export default GoalIndicator;
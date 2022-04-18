import styled from 'styled-components';
import Pie from '../Pie';
import { Infos } from '../../types';

interface Props {
    score: Infos["todayScore"],
};

const GoalIndicator: React.FC<Props> = (props): JSX.Element => {

    const Goal = styled.div `
        background: transparent;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
        border-radius: 5px;
        width: 250px;
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
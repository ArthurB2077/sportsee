import { LineChart, RadarChart, Line, Radar, CartesianGrid, PolarGrid, XAxis, PolarAngleAxis, YAxis, Tooltip, Legend } from 'recharts';
import Pie from '../Pie';
import styled from 'styled-components';

interface Props {
    sessions: any,
    performances: any,
    score: any,
}

const Sessions = (props: Props): JSX.Element => {
    const SessionsContainer = styled.div `
        display: flex;
    `;

    console.log(props.sessions);

    return(
        <SessionsContainer>
            <LineChart width={300} height={250} data={props.sessions} style={{backgroundColor: '#FF0000'}}>
                <XAxis dataKey="day"/>
                <Tooltip />
                <Line dot={false} type="monotone" dataKey="sessionLength" stroke="#ffffff" strokeWidth={2}/>
            </LineChart>
            <RadarChart outerRadius={90} width={300} height={250} data={props.performances}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" />
                <Radar dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
            </RadarChart>
            <Pie percentage={props.score} colour="#FF0000" />
        </SessionsContainer>
    )
}

export default Sessions;
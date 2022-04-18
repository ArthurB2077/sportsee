import { RadarChart, Radar, PolarGrid, PolarAngleAxis } from 'recharts';
import styled from "styled-components";
import { Performance } from "../../types";

interface Props {
    performances: Array<Performance>,
};

const PerformanceIndicator: React.FC<Props> = (props): JSX.Element => {

    const Performances = styled.div `
        background: #000000;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
        border-radius: 5px;
        width: 250px;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    return(
        <Performances>
            <RadarChart outerRadius={75} width={240} height={240} data={props.performances}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" stroke="#ffffff" tickLine={false} style={{fontSize: '10px'}} axisLine={false}/>
                <Radar dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} dot={false}/>
            </RadarChart>
        </Performances>
    );
};

export default PerformanceIndicator;
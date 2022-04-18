import { LineChart, Line, XAxis, Tooltip } from 'recharts';
import styled from 'styled-components';
import { SessionsLength } from '../../types';

interface Props {
    averageSessions: Array<SessionsLength>,
}

const SessionLengthIndicator: React.FC<Props> = (props): JSX.Element => {

    const SessionsLength = styled.div`
        background: #FF0000;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
        border-radius: 5px;
        width: 250px;
        height: 250px;
        display: flex;
        flex-direction: column;
    `;

    const SessionsLengthTitle = styled.div `
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        color: #FFFFFF;
        mix-blend-mode: normal;
        opacity: 0.5;
        height: 75px;
        width: 60%;
        margin-right: 20%;
        margin-left: 20%;
    `;

    const CustomToolTipContainer = styled.div `
        background-color: #ffffff;
        width: 50px;
        height: 25px;
        display: flex;
        justify-content:center;
        align-items: center;
    `;

    const CustomToolTipItem = styled.p `
        color: #000000;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
    `;   

    const CustomTooltipLine = ({label}: any) => {
        const days = ["L", 'M', 'ME', 'J', 'V', 'S', 'D'];
        return (
        <CustomToolTipContainer>
            {props.averageSessions && label && props.averageSessions[days.indexOf(label)] && 
                <>
                    <CustomToolTipItem>{`${props.averageSessions[days.indexOf(label)].sessionLength}`}min</CustomToolTipItem>
                </>
            }
        </CustomToolTipContainer>
        );
    };

    return (
        <SessionsLength>
            <SessionsLengthTitle>
                <h5>Durée moyenne des sessions</h5>
            </SessionsLengthTitle>
            <LineChart width={250} height={150} data={props.averageSessions}>
                <XAxis dataKey="day" axisLine={false} tickLine={false} tickMargin={40} height={55} padding={{ left: 15, right: 15 }} style={{fill: 'rgba(255, 255, 255, 0.5)'}}/>
                <Tooltip content={CustomTooltipLine}/>
                <svg width="0" height="0">
                    <defs>
                        <linearGradient id="cl1" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
                            <stop stopColor="rgba(255, 255, 255, 0.4)"/>
                            <stop offset="75%" stopColor="rgba(255, 255, 255, 1)"/>
                        </linearGradient>
                    </defs>
                </svg>
                <Line dot={false} type="natural" dataKey="sessionLength" stroke="url(#cl1)" strokeWidth={2}/>
            </LineChart>
        </SessionsLength>
    );
};

export default SessionLengthIndicator;
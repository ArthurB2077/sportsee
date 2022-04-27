import styled from 'styled-components';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { SessionsLength } from '../../types';


interface Props {
    sessionsLength: Array<SessionsLength>,
};


/**
 * @description SessionLengthIndicator component displaying the length of user sessions in line chart
 */

const SessionLengthIndicator: React.FC<Props> = (props): JSX.Element => {

    /**
     * @description Style section for the SessionLengthIndicator component
     */

    const SessionsLength = styled.div`
        background: #FF0000;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
        border-radius: 5px;
        width: 32%;
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


    /**
     * @description Style section for the custom tooltip compoenent
     */

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


    /**
     * @description Component that displays the tooltip when hovering over a point in the chart. The value label corresponding to the hovered x axis value.
     */

    const CustomTooltipLine = ({label}: any) => {

        const days: Array<string> = ["L", 'M', 'ME', 'J', 'V', 'S', 'D'];


        return (
            <CustomToolTipContainer>
                {props.sessionsLength && typeof label === 'string' && props.sessionsLength[days.indexOf(label)] && 
                    <>
                        <CustomToolTipItem>{`${props.sessionsLength[days.indexOf(label)].sessionLength}`}min</CustomToolTipItem>
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
            <ResponsiveContainer width="100%" height={150}>
                <LineChart data={props.sessionsLength}>
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
            </ResponsiveContainer>
        </SessionsLength>
    );
};

export default SessionLengthIndicator;
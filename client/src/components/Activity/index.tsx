import styled from 'styled-components';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Legend } from 'recharts';
import { SessionsCaloriesPerDay } from '../../types';


interface Props {
    activities: Array<SessionsCaloriesPerDay>
};


const Activity: React.FC<Props> = (props): JSX.Element => {
    
    /**
     * @description Style section for the activity chart container component
     */

    const ActivityChartContainer = styled.div`
        background: #FBFBFB;
        padding: 20px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
        border-radius: 5px;
    `;


    /**
     * @description Style section for the legend function 
     */

    const LegendContainer = styled.div `
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
    `;

    const LegendTitle = styled.h5 `
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        margin: 0;
    `;

    const LegendItemContainer = styled.div `
        display: flex;
        align-items: center;
    `;

    const LegendItem = styled.div `
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        margin-right: 35px;
    `;

    const LegendDot = styled.span `
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${({color}) => color};
        margin-right: 10px;
    `;


    /**
     * @description Style section for the custom tooltip component
     */

    const CustomToolTipContainer = styled.div `
        background-color: #FF0000;
        padding: 5px 15px 2px 15px;
    `;

    const CustomToolTipItem = styled.p `
        color: #ffffff;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        margin-bottom: 30px;
    `;


    /**
     * @description function that returns element to display in the legend section of the chart
     */

    const legend: Function = (): JSX.Element => {
        return (
            <LegendContainer>
                <LegendTitle>Activité quotidienne</LegendTitle>
                <LegendItemContainer>
                    <LegendDot color="#000000"/>
                    <LegendItem>Poids (kg)</LegendItem>
                    <LegendDot color="#FF0000"/>
                    <LegendItem>Calories brûlées (kCal)</LegendItem>
                </LegendItemContainer>
            </LegendContainer>
        );
    };


    /**
     * @description Array that contains data retrieved from the props.activities wich need to be displayed in the CustomToolTip component
     */

    const tooltipData: Array<{calories: number, kilogram: number}> = props.activities && props.activities.map((item: SessionsCaloriesPerDay) => {
        return (
            {
                calories: item.calories,
                kilogram: item.kilogram,
            }
        );
    });


    /**
     * @description Component that displays the tooltip when hovering over a bar in the chart. The value label corresponding to the hovered x axis value.
     */

    const CustomTooltip: Function = ({ label }: any): JSX.Element => {
          return (
            <CustomToolTipContainer>
                {tooltipData && typeof label === 'number' && tooltipData[label -1] && 
                    <>
                        <CustomToolTipItem>{`${tooltipData[label - 1].calories}`}Kcal</CustomToolTipItem>
                        <CustomToolTipItem>{`${tooltipData[label - 1].kilogram}`}kg</CustomToolTipItem>
                    </>
                }
            </CustomToolTipContainer>
        );
    };


    return(
        <ActivityChartContainer>
            <BarChart width={835} height={320} data={props.activities}>
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis dataKey="day" axisLine={false} tickLine={false} tickMargin={15}/>
                <YAxis yAxisId="right" dataKey="kilogram" orientation="right" axisLine={false} tickLine={false} type="number" domain={['dataMin - 1', 'dataMax']}/>
                <YAxis yAxisId="left" hide={true}/>
                <Tooltip content={<CustomTooltip/>}/>
                <Legend verticalAlign="top" align='right'content={() => legend()}/>
                <Bar yAxisId="right" dataKey="kilogram" fill="#000000" radius={[15, 15, 0, 0]} barSize={10}/>
                <Bar yAxisId="left" dataKey="calories" fill="#FF0000" radius={[15, 15, 0, 0]} barSize={10}/>
            </BarChart>
        </ActivityChartContainer>
    );
};


export default Activity;
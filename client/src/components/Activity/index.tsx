import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Legend, Text } from 'recharts';
import { SessionsCaloriesPerDay } from '../../types';

interface Props {
    activities: Array<SessionsCaloriesPerDay>
}

const Activity = (props: Props): JSX.Element => {
    console.log(props.activities);
    return(
        <BarChart width={730} height={250} data={props.activities}>
            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
            <XAxis dataKey="day" />
            <YAxis yAxisId="right" dataKey="kilogram" orientation="right" axisLine={false} tickLine={false} type="number" domain={['dataMin - 1', 'dataMax']}/>
            <YAxis yAxisId="left" hide={true}/>
            <Tooltip />
            <Legend verticalAlign="top" align='right'content={() => <h5>Activités</h5>}/>
            <Bar yAxisId="right" dataKey="kilogram" fill="#000000" radius={[15, 15, 0, 0]} barSize={10}/>
            <Bar yAxisId="left" dataKey="calories" fill="#FF0000" radius={[15, 15, 0, 0]} barSize={10}/>
        </BarChart>
    )
}

export default Activity;
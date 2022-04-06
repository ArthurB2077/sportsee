import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Legend } from 'recharts';

interface Props {
    activities: any
}
const Activity = (props: Props): JSX.Element => {
    return(
        <BarChart width={730} height={250} data={props.activities}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="kilogram" fill="#000000" />
            <Bar dataKey="calories" fill="#FF0000" />
        </BarChart>
    )
}

export default Activity;
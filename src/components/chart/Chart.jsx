import './chart.css'
import { Legend, LineChart, Line, XAxis, YAxis,  Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart() {
    const data = [
        {
          name: 'Sun',
          expenditure: 4000,
          income: 2400,
          amt: 2400,
        },
        {
          name: 'Mon',
          expenditure: 3000,
          income: 1398,
          amt: 2210,
        },
        {
          name: 'Tue',
          expenditure: 2000,
          income: 9800,
          amt: 2290,
        },
        {
          name: 'Wed',
          expenditure: 2780,
          income: 3908,
          amt: 2000,
        },
        {
          name: 'Thu',
          expenditure: 1890,
          income: 4800,
          amt: 2181,
        },
        {
          name: 'Fri',
          expenditure: 2390,
          income: 3800,
          amt: 2500,
        },
        {
          name: 'Sat',
          expenditure: 3490,
          income: 300,
          amt: 2100,
        },
      ];
    return (
        <div className="chart">
            <center><h3 className="chartTitle">Transaction of past 7 days</h3></center>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#4e73df" />
                    <YAxis dataKey="income" />
                    <Line type="monotone" dataKey="expenditure" stroke="#e74a3b" />
                    <Line type="monotone" dataKey="income" stroke="#1cc88a"/>
                    <Legend />
                    <Tooltip/>
                </LineChart> 
            </ResponsiveContainer>
            <p style={{textAlign:"right" ,color:"gray", fontSize:"12px"}}>Graph uses dummy data.</p>
        </div>
    )
}

import useWindowDimensions from '@/utils/windowDimensions';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';


const data = [
  {
    name: 'Jan',
    outcome: Math.floor(Math.random() * 5000),
    income: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: 'Feb',
    outcome: Math.floor(Math.random() * 5000),
    income: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: 'Mar',
    outcome: Math.floor(Math.random() * 5000),
    income: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: 'Apr',
    outcome: Math.floor(Math.random() * 5000),
    income: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: 'May',
    outcome: Math.floor(Math.random() * 5000),
    income: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: 'Jun',
    outcome: Math.floor(Math.random() * 5000),
    income: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: 'Jul',
    outcome: Math.floor(Math.random() * 5000),
    income: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: 'Aug',
    outcome: Math.floor(Math.random() * 5000),
    income: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: 'Sep',
    outcome: Math.floor(Math.random() * 5000),
    income: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: 'Oct',
    outcome: Math.floor(Math.random() * 5000),
    income: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: 'Nov',
    outcome: Math.floor(Math.random() * 5000),
    income: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: 'Dec',
    outcome: Math.floor(Math.random() * 5000),
    income: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
];



const ViewsChart = () => {
  const { width}=useWindowDimensions()
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right:  width > 650 ? 30 :0,
          left: width > 650 ? 20 :0,
          bottom: 5,
        }}
        barSize={20}
      >
        <defs>
          <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4A4D78" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#979AC2" stopOpacity={0.8}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="0 3" />
        <XAxis dataKey="name" stroke="#ccc" strokeWidth={0} />
        <YAxis stroke="#ccc" strokeWidth={0} />
        <Tooltip contentStyle={{ backgroundColor: '#0F123F', color: 'white', borderRadius: '14px', fontWeight: 'bold' }} />
        
        <Bar
          dataKey="income"
          fill="url(#colorIncome)"
          radius={[10, 10, 0, 0]}
        >
          
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ViewsChart;

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,  
  ResponsiveContainer,
  Tooltip,
} from 'recharts';


const data = [
  {
    name: 'January',
    outcome: Math.floor(Math.random() * 5000),
    income: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: 'Feb.',
    outcome: Math.floor(Math.random() * 5000),
    income: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: 'Mar.',
    outcome: Math.floor(Math.random() * 5000),
    income: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: 'Apr.',
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
    name: 'Jun.',
    outcome: Math.floor(Math.random() * 5000),
    income: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: 'July',
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
    name: 'Sept.',
    outcome: Math.floor(Math.random() * 5000),
    income: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: 'Oct.',
    outcome: Math.floor(Math.random() * 5000),
    income: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: 'Nov.',
    outcome: Math.floor(Math.random() * 5000),
    income: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
  {
    name: 'Dec.',
    outcome: Math.floor(Math.random() * 5000),
    income: Math.floor(Math.random() * 5000),
    amt: Math.floor(Math.random() * 5000),
  },
];

const RevenueChart = () => {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,          
          right: 30,
          bottom: 5,
        }}
        barSize={10}
      >
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" stroke="#ccc" strokeWidth={0} />
        <YAxis stroke="#ccc" strokeWidth={0} />       
        <Tooltip/>
        <Bar
          dataKey="outcome"
          style={{ width: '2px' }}
          width={2}
          fill="#64cff6"
          activeBar={<Rectangle width={2} fill="#64cff6" stroke="#64cff6" />}
        />
        <Bar
          dataKey="income"
          width={1}
          fill="#2B3674"
          activeBar={<Rectangle width={2} fill="#2B3674" stroke="#2B3674" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;

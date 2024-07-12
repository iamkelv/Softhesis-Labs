import useWindowDimensions from '@/utils/windowDimensions';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';


const data = [
  {
    name: 'Feb',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Mar.',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Apr.',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Jun.',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Jul',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const SalesLineChart = () => {
  const { width } = useWindowDimensions();
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{
          top: 5,
          right: width > 650 ? 30 : 10,
          left: width > 650 ? 10 : 10,
          bottom: 5,
        }}
      >
        <CartesianGrid
          stroke="#ccc"
          strokeDasharray="3 3"
          vertical={false}
          horizontal={false}
        />
        <XAxis dataKey="name" stroke="#ccc" strokeWidth={0} />
        <YAxis stroke="#ccc" strokeWidth={0} />
        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default SalesLineChart;

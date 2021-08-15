import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from "recharts";

const Chart = ({
  width = 400,
  height = 400,
  data,
  dataKey1 = "cases",
  dataKey2 = "deaths",
  ...otherProps
}) => (
  <LineChart
    {...otherProps}
    width={400}
    height={400}
    data={data}
    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
  >
    <XAxis dataKey="name" />
    <Tooltip />
    <CartesianGrid stroke="#f5f5f5" />
    <Line type="monotone" dataKey={dataKey1} stroke="#ff7300" yAxisId={0} />
    <Line type="monotone" dataKey={dataKey2} stroke="#387908" yAxisId={1} />
  </LineChart>
);

export default Chart;

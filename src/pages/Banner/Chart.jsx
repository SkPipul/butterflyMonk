import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const data = [
        {
          name: '20',
          Employer: 50,
          Employee: 100,
          Total_Interest: 50,
          amt: 300,
        },
        {
          name: 'Page B',
          Employer: 60,
          Employee: 120,
          Total_Interest: 60,
          amt: 300,
        },
        {
          name: '25',
          Employer: 70,
          Employee: 140,
          Total_Interest: 70,
          amt: 300,
        },
        {
          name: 'Page D',
          Employer: 75,
          Employee: 150,
          Total_Interest: 75,
          amt: 300
        },
        {
          name: '30',
          Employer: 80,
          Employee: 160,
          Total_Interest: 80,
          amt: 300
        },
        {
          name: 'Page F',
          Employer: 90,
          Employee: 180,
          Total_Interest: 90,
          amt: 300
        },
        {
          name: '35',
          Employer: 100,
          Employee: 200,
          Total_Interest: 100,
          amt: 300
        },
        {
          name: 'Page H',
          Employer: 110,
          Employee: 220,
          Total_Interest: 110,
          amt: 300
        },
        {
          name: '40',
          Employer: 120,
          Employee: 240,
          Total_Interest: 120,
          amt: 300
        },
        {
          name: 'Page J',
          Employer: 130,
          Employee: 260,
          Total_Interest: 130,
          amt: 300
        },
        {
          name: '60',
          Employer: 135,
          Employee: 270,
          Total_Interest: 135,
          amt: 300
        },
        {
          name: '',
          Employer: 140,
          Employee: 280,
          Total_Interest: 140,
          amt: 300
        },
        {
          name: '65',
          Employer: 150,
          Employee: 300,
          Total_Interest: 150,
          amt: 300
        },
      ];
    return (
        <ResponsiveContainer width={300}
        height={300} className="mx-auto">
        <BarChart
          width={300}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 10,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Bar dataKey="Employer" stackId="a" fill="#00308F" />
          <Bar dataKey="Employee" stackId="a" fill="#007FFF" />
          <Bar dataKey="Total_Interest" stackId="a" fill="#6699CC" />
        </BarChart>
      </ResponsiveContainer>
    );
};

export default Chart;
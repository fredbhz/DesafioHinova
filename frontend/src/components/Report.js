import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Report({ data }) {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Relatório de Utilização</h2>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="mesclagens" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

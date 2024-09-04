export default function History({ merges }) {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Histórico de Mesclagens</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Nome do Arquivo</th>
            <th className="py-2 px-4 border-b">Data de Mesclagem</th>
            <th className="py-2 px-4 border-b">Link</th>
          </tr>
        </thead>
        <tbody>
          {merges.map((merge) => (
            <tr key={merge.id}>
              <td className="py-2 px-4 border-b">{merge.name}</td>
              <td className="py-2 px-4 border-b">{merge.createdAt}</td>
              <td className="py-2 px-4 border-b">
                <a href={merge.link} className="text-blue-500 hover:underline">Ver PDF</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

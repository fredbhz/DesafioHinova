export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Mesclar PDFs</h2>
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Nome do arquivo" 
            className="w-full px-3 py-2 border rounded-md"
          />
          <input 
            type="file" 
            multiple 
            className="w-full px-3 py-2 border rounded-md"
          />
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Mesclar PDFs
          </button>
        </form>
      </div>
    </div>
  );
}

import { useState } from 'react';

export default function MergeForm() {
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState('');
  const [files, setFiles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Implementação da chamada para mesclagem de PDFs
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input 
        type="text" 
        placeholder="Nome do arquivo" 
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
        className="w-full px-3 py-2 border rounded-md"
      />
      <input 
        type="file" 
        multiple 
        onChange={(e) => setFiles(e.target.files)}
        className="w-full px-3 py-2 border rounded-md"
      />
      <button 
        type="submit" 
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        disabled={loading}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : (
          'Mesclar PDFs'
        )}
      </button>
    </form>
  );
}

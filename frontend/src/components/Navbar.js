import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">PDF Merger</div>
        <div className="flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-400">Home</Link>
          <Link href="/report" className="text-white hover:text-gray-400">Relatório</Link>
        </div>
      </div>
    </nav>
  );
}

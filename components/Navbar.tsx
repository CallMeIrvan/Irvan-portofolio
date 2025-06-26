// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl md:text-2xl font-bold hover:text-blue-400 transition-colors">
          Reovan W. Sakbana
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
            Tentang Saya
          </Link>
          <Link href="#skills" className="text-gray-300 hover:text-white transition-colors">
            Keahlian
          </Link>
          <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
            Proyek
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
            Kontak
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
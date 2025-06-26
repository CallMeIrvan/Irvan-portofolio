// components/Footer.tsx
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Impor ikon

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 text-center text-gray-400">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/CallMeIrvan" target="_blank" rel="noopener noreferrer" className="hover:text-white text-2xl"><FaGithub /></a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="hover:text-white text-2xl"><FaLinkedin /></a>
          <a href="https://www.instagram.com/irvansakbana29____/?__pwa=1#" target="_blank" rel="noopener noreferrer" className="hover:text-white text-2xl"><FaInstagram /></a>
        </div>
        <p>&copy; {currentYear} Reovan Wilfred Sakbana. Powered by Next.js.</p>
      </div>
    </footer>
  );
};
export default Footer;
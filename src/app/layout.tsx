// app/layout.tsx

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google'; // Impor font Poppins
import './globals.css';

// Impor komponen Navbar dan Footer (cukup sekali)
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import Background from '@/components/Background';

// Konfigurasi font dengan weight yang dibutuhkan
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '800'], // Regular, Bold, ExtraBold
});

// Definisikan metadata untuk SEO (cukup sekali)
export const metadata: Metadata = {
  title: 'Reovan Wilfred Sakbana - Web & Mobile Developer',
  description: 'Portofolio Reovan Wilfred Sakbana, seorang mahasiswa Manajemen Data dan Informasi dengan keahlian dalam pengembangan web dan mobile menggunakan Next.js, Vue.js, dan Java.',
};

// Definisikan RootLayout sebagai default export (cukup sekali)
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="!scroll-smooth">
      {/* PERBAIKAN: Gunakan kurung kurawal {} dan backtick `` untuk className */}
      <body className={`${poppins.className} text-gray-300 relative`}>
        <Background />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
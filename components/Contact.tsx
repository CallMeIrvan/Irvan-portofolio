// components/Contact.tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  // State untuk status pengiriman dan loading
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('Mengirim...');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('Pesan Anda berhasil terkirim! Terima kasih.');
        (e.target as HTMLFormElement).reset(); // Reset form setelah berhasil
      } else {
        const result = await response.json();
        setStatus(result.error || 'Gagal mengirim pesan. Silakan coba lagi.');
      }
    } catch (error) {
      setStatus('Terjadi kesalahan. Periksa koneksi internet Anda.');
    } finally {
      setIsLoading(false); // Selalu hentikan loading, baik berhasil maupun gagal
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-20 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
        <h2 className="text-4xl font-bold text-center mb-12">Hubungi Saya</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Nama Lengkap</label>
                <input type="text" name="name" id="name" required className="w-full p-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"/>
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Alamat Email</label>
                <input type="email" name="email" id="email" required className="w-full p-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"/>
            </div>
            <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Pesan Anda</label>
                <textarea name="message" id="message" rows={5} required className="w-full p-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"></textarea>
            </div>
            <button type="submit" disabled={isLoading} className="w-full py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 disabled:bg-gray-500 disabled:cursor-not-allowed transition">
                {isLoading ? 'Mengirim...' : 'Kirim Pesan'}
            </button>
            {status && <p className="text-center mt-4 text-sm font-medium">{status}</p>}
        </form>
    </motion.section>
  );
};

export default Contact;
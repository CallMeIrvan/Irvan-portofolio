// app/api/contact/route.ts

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inisialisasi Resend dengan API Key dari file .env.local
const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL; // Simpan email tujuan Anda di .env.local juga

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // 1. Validasi Sederhana
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Semua field harus diisi.' }, { status: 400 });
    }

    // 2. Kirim Email Menggunakan Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Alamat pengirim default dari Resend
      to: ['reovanwilfredsakbana@gmail.com'], // GANTI DENGAN ALAMAT EMAIL ANDA!
      subject: `Pesan Baru dari Portofolio - ${name}`,
      replyTo: email, // Agar saat Anda 'reply', emailnya terkirim ke pengunjung
      html: `
        <div>
          <h1>Pesan dari ${name}</h1>
          <p>Email Pengirim: ${email}</p>
          <hr />
          <p>${message}</p>
        </div>
      `,
    });

    // 3. Handle jika ada error dari Resend
    if (error) {
      console.error({ error });
      return NextResponse.json({ error: 'Gagal mengirim email.' }, { status: 500 });
    }

    // 4. Kirim respon sukses
    return NextResponse.json({ message: 'Pesan berhasil terkirim!', data }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Terjadi kesalahan pada server.' }, { status: 500 });
  }
}
// src/app/api/contact/route.ts

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL; // Variabel ini sekarang akan kita gunakan

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Semua field harus diisi.' }, { status: 400 });
    }

    // Pastikan toEmail tidak kosong sebelum mengirim
    if (!toEmail) {
      console.error('TO_EMAIL environment variable is not set.');
      return NextResponse.json({ error: 'Konfigurasi server tidak lengkap.' }, { status: 500 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [toEmail], // <-- PERUBAHAN DI SINI: Menggunakan variabel toEmail
      subject: `Pesan Baru dari Portofolio - ${name}`,
      replyTo: email,
      html: `<div><h1>Pesan dari ${name}</h1><p>Email Pengirim: ${email}</p><hr /><p>${message}</p></div>`,
    });

    if (error) {
      console.error({ error });
      return NextResponse.json({ error: 'Gagal mengirim email.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Pesan berhasil terkirim!', data }, { status: 200 });
  
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Terjadi kesalahan pada server.' }, { status: 500 });
  }
}
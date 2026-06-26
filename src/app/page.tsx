import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Navbar Sederhana */}
      <header className="px-6 py-4 flex justify-between items-center border-b border-slate-200 bg-white sticky top-0 z-10">
        <h1 className="font-heading text-2xl font-bold text-slate-800">
          PRD pro
        </h1>
        <nav className="flex gap-4">
          <Link href="/login">
            <Button variant="ghost">Masuk</Button>
          </Link>
          <Link href="/register">
            <Button>Daftar Gratis</Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
        <h2 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl">
          Ubah Ide Menjadi{" "}
          <span className="text-blue-600">Product Requirements Document</span>{" "}
          dalam Hitungan Menit.
        </h2>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl">
          Generator PRD bertenaga AI untuk Website & Aplikasi. Jawab beberapa
          pertanyaan interaktif, dan biarkan AI menyusun dokumen terstruktur
          untuk proyek Anda.
        </p>
        <Link href="/register">
          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Mulai Buat PRD - Gratis
          </Button>
        </Link>

        {/* Pricing Section */}
        <div className="mt-32 w-full max-w-5xl">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-12 text-center">
            Pilih Paket Sesuai Kebutuhan
          </h3>

          {/* Grid Responsif: 1 kolom di HP, 3 kolom di PC/Laptop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kartu Freemium */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
              <h4 className="font-heading text-xl font-semibold mb-2">
                Freemium
              </h4>
              <p className="text-slate-500 mb-6">
                Coba kualitas AI kami sekarang.
              </p>
              <p className="text-4xl font-bold mb-6">Rp 0</p>
              <ul className="text-left space-y-3 mb-8 flex-1 text-slate-600">
                <li>✓ 1x Generate PRD</li>
                <li>✓ Multi-step Q&A</li>
                <li>✓ Export .md file</li>
              </ul>
              <Link href="/register" className="w-full">
                <Button variant="outline" className="w-full">
                  Coba Sekarang
                </Button>
              </Link>
            </div>

            {/* Kartu Paket A (Di-highlight) */}
            <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-blue-500 relative flex flex-col transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide">
                TERPOPULER
              </div>
              <h4 className="font-heading text-xl font-semibold mb-2">
                Paket A
              </h4>
              <p className="text-slate-500 mb-6">
                Untuk freelancer & startup kecil.
              </p>
              <p className="text-4xl font-bold mb-6">
                Rp 49rb
                <span className="text-sm font-normal text-slate-500">/bln</span>
              </p>
              <ul className="text-left space-y-3 mb-8 flex-1 text-slate-600">
                <li>✓ 3x Generate PRD / Hari</li>
                <li>✓ Fitur Revisi AI Spesifik</li>
                <li>✓ Simpan Riwayat Dokumen</li>
                <li>✓ Export .md file</li>
              </ul>
              <Button className="w-full">Pilih Paket A</Button>
            </div>

            {/* Kartu Paket B */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
              <h4 className="font-heading text-xl font-semibold mb-2">
                Paket B
              </h4>
              <p className="text-slate-500 mb-6">
                Untuk product manager profesional.
              </p>
              <p className="text-4xl font-bold mb-6">
                Rp 99rb
                <span className="text-sm font-normal text-slate-500">/bln</span>
              </p>
              <ul className="text-left space-y-3 mb-8 flex-1 text-slate-600">
                <li>✓ 5x Generate PRD / Hari</li>
                <li>✓ Fitur Revisi AI Spesifik</li>
                <li>✓ Simpan Riwayat Dokumen</li>
                <li>✓ Export .md file</li>
                <li>✓ Prioritas Dukungan</li>
              </ul>
              <Button variant="outline" className="w-full">
                Pilih Paket B
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Sederhana */}
      <footer className="py-8 text-center text-slate-500 text-sm mt-20 border-t border-slate-200">
        <p>&copy; 2026 PRD pro. Semua Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
}

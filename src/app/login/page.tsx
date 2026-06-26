import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex w-full">
      {/* KIRI: Area Form (Muncul di semua perangkat) */}
      <div className="flex w-full md:w-1/2 flex-col items-center justify-center p-8 bg-white z-10">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center md:text-left">
            <h1 className="font-heading text-3xl font-bold text-slate-900 mb-2">
              Selamat Datang Kembali
            </h1>
            <p className="text-slate-500">
              Masuk untuk melanjutkan pembuatan PRD Anda.
            </p>
          </div>

          <form className="space-y-6 mt-8">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="nama@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Lupa password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Masuk
            </Button>
          </form>

          <p className="text-center text-sm text-slate-600 mt-6">
            Belum punya akun?{" "}
            <Link
              href="/register"
              className="font-semibold text-blue-600 hover:underline"
            >
              Daftar Gratis
            </Link>
          </p>
        </div>
      </div>

      {/* KANAN: Area Branding & Aset Melayang (Hanya muncul di PC/Tablet) */}
      <div className="hidden md:flex md:w-1/2 bg-slate-50 relative items-center justify-center overflow-hidden">
        {/* Konten Tengah */}
        <div className="relative z-10 text-center">
          <h2 className="font-heading text-4xl font-extrabold text-slate-800 tracking-tight">
            PRD pro
          </h2>
          <p className="mt-2 text-slate-500 font-medium">
            SaaS Generator PRD AI Terbaik
          </p>
        </div>

        {/* --- Kumpulan Aset Melayang dengan Opasitas Rendah --- */}

        {/* Aset 1: Bentuk Geometris */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        {/* Aset 2: Bentuk Geometris */}
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        {/* Aset 3: Ikon Dokumen Melayang */}
        <svg
          className="absolute top-1/4 right-1/4 w-24 h-24 text-slate-300 opacity-40 -rotate-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>

        {/* Aset 4: Ikon Sparkle/AI Melayang */}
        <svg
          className="absolute bottom-1/3 left-1/4 w-16 h-16 text-blue-400 opacity-30 rotate-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>

        {/* Aset 5: Elemen Kotak Kecil */}
        <div className="absolute top-1/2 right-16 w-8 h-8 border-2 border-slate-300 rounded-lg opacity-40 rotate-45"></div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex w-full">
      {/* KIRI: Area Form */}
      <div className="flex w-full md:w-1/2 flex-col items-center justify-center p-8 bg-white z-10">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center md:text-left">
            <h1 className="font-heading text-3xl font-bold text-slate-900 mb-2">
              Buat Akun Baru
            </h1>
            <p className="text-slate-500">
              Daftar sekarang dan dapatkan gratis 1x generate PRD.
            </p>
          </div>

          <form className="space-y-6 mt-8">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Lengkap</Label>
              <Input id="name" type="text" placeholder="John Doe" required />
            </div>

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
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Daftar Gratis
            </Button>
          </form>

          <p className="text-center text-sm text-slate-600 mt-6">
            Sudah punya akun?{" "}
            <Link
              href="/login"
              className="font-semibold text-blue-600 hover:underline"
            >
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>

      {/* KANAN: Area Branding & Aset Melayang */}
      <div className="hidden md:flex md:w-1/2 bg-slate-50 relative items-center justify-center overflow-hidden">
        {/* Konten Tengah */}
        <div className="relative z-10 text-center">
          <h2 className="font-heading text-4xl font-extrabold text-slate-800 tracking-tight">
            PRD pro
          </h2>
          <p className="mt-2 text-slate-500 font-medium">
            Langkah Awal Produk Hebat Anda
          </p>
        </div>

        {/* --- Kumpulan Aset Melayang --- */}

        {/* Aset 1 & 2: Bentuk Geometris (Posisi dibalik dari Login) */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        {/* Aset 3: Ikon Roket Melayang */}
        <svg
          className="absolute top-1/4 left-1/4 w-24 h-24 text-slate-300 opacity-40 rotate-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>

        {/* Aset 4: Ikon AI/Sparkle Melayang */}
        <svg
          className="absolute bottom-1/3 right-1/4 w-16 h-16 text-blue-400 opacity-30 -rotate-12"
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
        <div className="absolute top-1/2 left-16 w-8 h-8 border-2 border-slate-300 rounded-lg opacity-40 -rotate-12"></div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header Halaman */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-slate-900">
            Halo, Pengguna! 👋
          </h1>
          <p className="text-slate-500 mt-1">
            Siap untuk merancang produk hebat hari ini?
          </p>
        </div>
        <Link href="/dashboard/create">
          <Button size="lg" className="shadow-md">
            + Buat PRD Baru
          </Button>
        </Link>
      </div>

      {/* Statistik Akun (Menggunakan komponen Card) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-sm border-slate-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">
              Sisa Kuota Hari Ini
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-blue-600">
              3<span className="text-lg text-slate-400 font-normal">/3</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">
              Paket Saat Ini
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">Paket A</div>
            <p className="text-sm text-slate-500 mt-1">
              Aktif hingga 26 Juli 2026
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">
              Total PRD Dibuat
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-slate-800">12</div>
          </CardContent>
        </Card>
      </div>

      {/* Tabel/Daftar Riwayat Kosong */}
      <div className="mt-10">
        <h2 className="font-heading text-xl font-bold text-slate-800 mb-4">
          Riwayat PRD Terakhir
        </h2>

        <div className="bg-white border border-slate-200 rounded-xl p-12 flex flex-col items-center justify-center text-center shadow-sm">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-slate-400"
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
          </div>
          <h3 className="text-lg font-semibold text-slate-900">
            Belum ada PRD yang dibuat
          </h3>
          <p className="text-slate-500 max-w-sm mt-2 mb-6">
            Mulai tuangkan ide Anda dan biarkan AI menyusun kerangka produknya
            untuk Anda.
          </p>
          <Link href="/dashboard/create">
            <Button variant="outline">Mulai Buat PRD Pertama</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

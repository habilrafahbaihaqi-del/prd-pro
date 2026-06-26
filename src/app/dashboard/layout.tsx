import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* HEADER MOBILE: Muncul hanya di layar HP */}
      <header className="md:hidden flex items-center justify-between bg-white border-b border-slate-200 p-4 sticky top-0 z-20">
        <h2 className="font-heading text-xl font-bold text-slate-800">
          PRD pro
        </h2>
        <Button variant="outline" size="sm">
          Menu
        </Button>
      </header>

      {/* SIDEBAR DESKTOP: Muncul hanya di PC/Tablet */}
      <aside className="hidden md:flex w-64 flex-col bg-white border-r border-slate-200 px-4 py-6 sticky top-0 h-screen">
        <div className="mb-10 px-2">
          <h2 className="font-heading text-2xl font-extrabold text-slate-800">
            PRD pro
          </h2>
        </div>

        {/* Menu Navigasi */}
        <nav className="flex-1 space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium transition-colors"
          >
            {/* Ikon Home */}
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Dashboard Utama
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium transition-colors"
          >
            {/* Ikon Dokumen */}
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Riwayat PRD
          </Link>
        </nav>

        {/* Menu Bawah (Keluar) */}
        <div className="mt-auto border-t border-slate-200 pt-4">
          <Link href="/login" className="w-full">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              Keluar Akun
            </Button>
          </Link>
        </div>
      </aside>

      {/* AREA KONTEN UTAMA */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">{children}</main>
    </div>
  );
}

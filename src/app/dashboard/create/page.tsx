"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

// Simulasi pertanyaan dari AI (Nantinya ini didapatkan dari output AI)
const mockQuestions = [
  {
    id: 1,
    question: "Apa nama project/aplikasi ini dan apa tujuan utamanya?",
    example:
      "Contoh: Nama aplikasinya 'KasirKu'. Tujuannya untuk membantu pemilik warung mencatat penjualan harian dan stok barang secara digital.",
  },
  {
    id: 2,
    question: "Masalah apa yang ingin diselesaikan oleh aplikasi ini?",
    example:
      "Contoh: Pemilik warung sering lupa mencatat barang yang keluar, sehingga stok sering tidak sinkron dan sulit menghitung keuntungan bersih.",
  },
  {
    id: 3,
    question:
      "Siapa target pengguna utamanya dan apa saja fitur inti yang wajib ada?",
    example:
      "Contoh: Targetnya bapak/ibu pemilik warung kelontong (usia 30-50 thn). Fitur intinya: Scan barcode, input produk, riwayat transaksi harian, dan fitur hutang pelanggan.",
  },
];

export default function CreatePRDPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const handleNext = () => {
    if (currentStep < mockQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswers({
      ...answers,
      [currentStep]: e.target.value,
    });
  };

  const handleSubmit = () => {
    alert(
      "Draf dikirim ke AI! Di fase selanjutnya, efek streaming teks akan muncul di sini.",
    );
    // Logika kirim ke DeepSeek akan ditaruh di sini pada Fase 4
  };

  const currentQ = mockQuestions[currentStep];
  const progressPercentage = ((currentStep + 1) / mockQuestions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto py-6">
      {/* Navigasi Kembali */}
      <Link href="/dashboard">
        <Button
          variant="ghost"
          className="mb-6 text-slate-500 hover:text-slate-800 -ml-4"
        >
          ← Kembali ke Dashboard
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-slate-900">
          Buat PRD Baru
        </h1>
        <p className="text-slate-500 mt-1">
          Jawab pertanyaan berikut dengan detail agar AI dapat menyusun PRD yang
          akurat.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-2 rounded-full mb-8 overflow-hidden">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Area Pertanyaan (Card) */}
      <Card className="shadow-sm border-slate-200 bg-white">
        <CardContent className="p-8">
          <div className="mb-6">
            <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-2 block">
              Pertanyaan {currentStep + 1} dari {mockQuestions.length}
            </span>
            <h2 className="text-2xl font-heading font-bold text-slate-800 mb-4 leading-snug">
              {currentQ.question}
            </h2>

            {/* Box Contoh Jawaban */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
              <p className="text-sm text-blue-800 italic">{currentQ.example}</p>
            </div>
          </div>

          <div className="space-y-4">
            <Textarea
              placeholder="Ketik jawaban Anda di sini..."
              className="min-h-[150px] text-base resize-y"
              value={answers[currentStep] || ""}
              onChange={handleChange}
            />
          </div>

          {/* Tombol Navigasi Bawah */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentStep === 0}
            >
              Sebelumnya
            </Button>

            {currentStep === mockQuestions.length - 1 ? (
              <Button
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700"
              >
                🚀 Generate PRD
              </Button>
            ) : (
              <Button onClick={handleNext}>Selanjutnya</Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

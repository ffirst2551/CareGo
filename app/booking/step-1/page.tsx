"use client";

import { TopBar } from "@/components/layout/TopBar";
import { useBookingStore } from "@/store/useBookingStore";
import { ChevronRight, Check, Hospital, Wallet, Calendar, Route, Shield } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { clsx } from "clsx";
import { useEffect } from "react";

export default function BookingStep1() {
  const router = useRouter();
  const { setStep, selectedPatientId, setPatientId, selectedPurpose, setPurpose } = useBookingStore();

  useEffect(() => {
    setStep(1);
  }, [setStep]);

  const purposes = [
    { id: "doctor", label: "พบแพทย์", icon: Hospital },
    { id: "pharmacy", label: "รับยา", icon: Wallet },
    { id: "followup", label: "ตรวจตามนัด", icon: Calendar },
    { id: "multi", label: "หลายแผนก", icon: Route },
  ];

  return (
    <div className="flex flex-col min-h-full pb-24">
      <TopBar back contact title="ขั้นตอนการจอง" />

      {/* Stepper */}
      <div className="px-6 py-4 bg-white border-b border-gray-50">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-100 -z-10" />
          {[1, 2, 3, 4, 5].map((step) => {
            const isDone = step < 1;
            const isActive = step === 1;
            return (
              <div key={step} className="bg-white px-2">
                <div
                  className={clsx(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors",
                    isActive ? "bg-navy text-white shadow-sm shadow-navy/20" : 
                    isDone ? "bg-teal/10 text-teal" : "bg-gray-50 text-gray-400 border border-gray-100"
                  )}
                >
                  {isDone ? <Check className="w-4 h-4" /> : step}
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-3 text-xs font-bold text-navy">ขั้นตอน 1 จาก 5</div>
      </div>

      <div className="p-4 space-y-6 flex-1">
        <div>
          <h2 className="text-xl font-bold text-gray-900">จองคิว CareGo</h2>
          <p className="text-gray-500 text-sm mt-1">วันนี้คุณต้องการให้ CareGo ดูแลผู้ป่วยท่านใด</p>
        </div>

        {/* Patient Selection */}
        <div>
          <label className="text-sm font-bold text-gray-700 mb-2 block">ผู้ป่วยที่ต้องการรับบริการ</label>
          <div className="space-y-3">
            <button
              onClick={() => setPatientId("p1")}
              className={clsx(
                "w-full bg-white rounded-2xl p-4 flex items-center gap-4 text-left transition-all",
                selectedPatientId === "p1"
                  ? "border-2 border-navy shadow-md shadow-navy/10 bg-navy/5"
                  : "border border-gray-200 shadow-sm hover:border-navy/30"
              )}
            >
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-orange/10 text-orange flex items-center justify-center text-xl font-bold flex-shrink-0 border-2 border-white shadow-sm">
                  ส
                </div>
                {selectedPatientId === "p1" && (
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-navy text-white rounded-full flex items-center justify-center border-2 border-white">
                    <Check className="w-3 h-3" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-gray-900 text-lg">คุณแม่สมศรี ใจดี</h3>
                  <span className="bg-teal/10 text-teal text-[10px] font-bold px-2 py-0.5 rounded-full">ผู้ป่วยหลัก</span>
                </div>
                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green"></span>
                  โรคประจำตัว: เบาหวาน, ความดัน
                </p>
              </div>
            </button>

            <Link href="/patients/add" className="w-full bg-gray-50 rounded-2xl p-4 border border-dashed border-gray-300 flex items-center justify-center gap-2 text-center active:scale-[0.98] transition-transform hover:bg-gray-100 hover:border-gray-400">
              <div className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="text-lg font-medium">+</span>
              </div>
              <span className="font-bold text-gray-700">เพิ่มผู้ป่วยใหม่</span>
            </Link>
          </div>
        </div>

        {/* Info Card / Trust Block */}
        <div className="bg-gradient-to-r from-navy to-navy-light rounded-2xl p-5 text-white shadow-lg shadow-navy/10 relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">รับช่วงดูแลอย่างมืออาชีพ</h3>
              <p className="text-xs text-blue-100 mt-1.5 leading-relaxed">
                ญาติพามาส่งที่โรงพยาบาล ผู้ดูแลของเรารับช่วงพาพบแพทย์และประสานงานต่อจนเสร็จสิ้น
              </p>
            </div>
          </div>
        </div>

        {/* Purpose Selection */}
        <div>
          <label className="text-sm font-bold text-gray-700 mb-2 block">วัตถุประสงค์ในการรับบริการ</label>
          <div className="grid grid-cols-2 gap-3">
            {purposes.map((purpose) => (
              <button
                key={purpose.id}
                onClick={() => setPurpose(purpose.id)}
                className={clsx(
                  "flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all text-center",
                  selectedPurpose === purpose.id
                    ? "border-teal bg-teal/5 text-teal shadow-sm"
                    : "border-gray-100 bg-white text-gray-500 hover:border-gray-200 hover:bg-gray-50"
                )}
              >
                <div className={clsx(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  selectedPurpose === purpose.id ? "bg-teal text-white" : "bg-gray-100 text-gray-500"
                )}>
                  <purpose.icon className="w-5 h-5" />
                </div>
                <span className={clsx("text-sm font-bold", selectedPurpose === purpose.id ? "text-teal" : "text-gray-700")}>{purpose.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Sticky Action */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 z-10 pb-safe shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
        <button
          onClick={() => router.push("/booking/step-2")}
          className="w-full bg-navy text-white rounded-xl py-3.5 font-bold shadow-sm shadow-navy/20 hover:bg-navy-light transition-colors active:scale-[0.98]"
        >
          ไปต่อ
        </button>
        <p className="text-center text-[10px] text-gray-400 mt-2">
          ข้อมูลของคุณปลอดภัย เราไม่เปิดเผยข้อมูลแก่บุคคลที่สาม
        </p>
      </div>
    </div>
  );
}

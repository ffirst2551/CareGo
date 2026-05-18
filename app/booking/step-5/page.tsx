"use client";

import { TopBar } from "@/components/layout/TopBar";
import { useBookingStore } from "@/store/useBookingStore";
import { CheckCircle2, Calendar, Hospital, Share2, ArrowRight, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function BookingStep5() {
  const router = useRouter();
  const { setStep, selectedDate, selectedSlot, selectedPackage, selectedHospital, selectedMeetingPoint } = useBookingStore();

  useEffect(() => {
    setStep(5);
  }, [setStep]);

  return (
    <div className="flex flex-col min-h-full bg-gray-50">
      <TopBar centerBrand={true} />

      <div className="p-4 flex-1 flex flex-col items-center justify-center text-center max-w-md mx-auto w-full relative z-10">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-green/20 rounded-full blur-xl scale-150 animate-pulse"></div>
          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green text-white rounded-full flex items-center justify-center shadow-lg shadow-green/30 relative z-10 border-4 border-white">
            <CheckCircle2 className="w-12 h-12" />
          </div>
        </div>
        
        <h2 className="text-3xl font-black text-navy mb-2">จองคิวสำเร็จ!</h2>
        <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
          เราได้รับคำขอจองบริการของคุณแล้ว CareGo กำลังจัดหาผู้ดูแลที่เหมาะสมให้คุณ
        </p>

        <div className="w-full bg-white rounded-3xl p-6 border border-gray-100 shadow-xl shadow-navy/5 mt-8 text-left relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal to-navy"></div>
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-teal/5 rounded-full blur-xl"></div>
          
          <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-4 relative z-10">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">รหัสการจอง</span>
            <span className="font-black text-navy text-lg bg-navy/5 px-3 py-1 rounded-lg">CG-260522-0897</span>
          </div>
          
          <div className="space-y-5 relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-teal" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">วันที่และเวลา</p>
                <p className="text-sm font-bold text-gray-900 mt-0.5">
                  {selectedDate?.split("-")[2] || "22"} พ.ค. 2567
                </p>
                <p className="text-xs font-medium text-teal mt-0.5 bg-teal/10 inline-block px-2 py-0.5 rounded-md">{selectedSlot || "08:00 - 12:00"} น.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                <Hospital className="w-5 h-5 text-navy" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">โรงพยาบาล</p>
                <p className="text-sm font-bold text-gray-900 mt-0.5">{selectedHospital || "โรงพยาบาลศิริราช"}</p>
                <p className="text-xs text-gray-600 mt-0.5">แพ็กเกจ{selectedPackage === "full" ? "เต็มวัน" : "ครึ่งวัน"} · {selectedPackage === "full" ? "1,500" : "800"} ฿</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-orange" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">จุดนัดพบ / ส่งมอบผู้ป่วย</p>
                <p className="text-sm font-bold text-gray-900 mt-0.5">{selectedMeetingPoint || "หน้าอาคารผู้ป่วยนอก (OPD)"}</p>
                <p className="text-xs text-gray-500 mt-0.5">ผู้ดูแลจะรอรับผู้ป่วยที่จุดนี้</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6 w-full">
          <button className="flex-1 bg-white border-2 border-gray-100 text-gray-700 py-3.5 rounded-xl font-bold text-sm hover:border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
            <Share2 className="w-4 h-4" />
            แชร์ให้ครอบครัว
          </button>
          <button className="flex-1 bg-white border-2 border-gray-100 text-gray-700 py-3.5 rounded-xl font-bold text-sm hover:border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
            <Calendar className="w-4 h-4" />
            บันทึกลงปฏิทิน
          </button>
        </div>

        <div className="w-full mt-8 space-y-3">
          <Link 
            href="/bookings"
            className="w-full bg-navy text-white rounded-xl py-4 font-bold shadow-lg shadow-navy/20 hover:bg-navy-light transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            ติดตามสถานะการจอง
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </Link>
          
          <Link href="/" className="w-full py-4 text-sm font-bold text-gray-500 hover:text-navy transition-colors block">
            กลับสู่หน้าหลัก
          </Link>
        </div>
      </div>
    </div>
  );
}

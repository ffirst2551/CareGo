"use client";

import { TopBar } from "@/components/layout/TopBar";
import { useBookingStore } from "@/store/useBookingStore";
import { Check, UserCircle, Stethoscope, Phone, Shield, ChevronRight, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import { clsx } from "clsx";
import { useEffect } from "react";

export default function BookingStep3() {
  const router = useRouter();
  const { setStep, selectedPackage, setPackage } = useBookingStore();

  useEffect(() => {
    setStep(3);
  }, [setStep]);

  return (
    <div className="flex flex-col min-h-full pb-24">
      <TopBar back contact title="เลือกแพ็กเกจและรายละเอียด" />

      {/* Stepper */}
      <div className="px-6 py-4 bg-white border-b border-gray-50">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-100 -z-10" />
          {[1, 2, 3, 4, 5].map((step) => {
            const isDone = step < 3;
            const isActive = step === 3;
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
        <div className="text-center mt-3 text-xs font-bold text-navy">ขั้นตอน 3 จาก 5</div>
      </div>

      <div className="p-4 space-y-6 flex-1">
        <div>
          <h2 className="text-xl font-bold text-gray-900">เลือกแพ็กเกจดูแล</h2>
          <p className="text-gray-500 text-sm mt-1">ค่าบริการครอบคลุมการดูแลผู้ป่วยภายในโรงพยาบาล</p>
        </div>

        {/* Packages */}
        <div className="space-y-4">
          <button
            onClick={() => setPackage("half")}
            className={clsx(
              "w-full rounded-2xl p-5 border-2 text-left transition-all relative overflow-hidden",
              selectedPackage === "half"
                ? "bg-white border-navy shadow-md shadow-navy/5"
                : "bg-white border-gray-100 hover:border-gray-300 shadow-sm"
            )}
          >
            {selectedPackage === "half" && <div className="absolute top-0 right-0 w-12 h-12 bg-navy/5 rounded-bl-full"></div>}
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">แพ็กเกจ ครึ่งวัน</h3>
                <p className="text-xs text-gray-500 mt-1 font-medium bg-gray-100 inline-block px-2 py-0.5 rounded-md">ประมาณ 4-5 ชั่วโมง</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-gray-900">800 <span className="text-sm text-gray-500 font-normal">฿</span></div>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-50 my-3"></div>
            <ul className="space-y-2 text-xs font-medium text-gray-600">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal" /> รับช่วงดูแลผู้ป่วยภายในโรงพยาบาล</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal" /> พาพบแพทย์ ประสานงานแผนก</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal" /> ช่วยรับยาและเอกสาร</li>
            </ul>
          </button>

          <button
            onClick={() => setPackage("full")}
            className={clsx(
              "w-full rounded-2xl p-5 border-2 text-left transition-all relative overflow-hidden",
              selectedPackage === "full"
                ? "bg-gradient-to-b from-white to-teal/5 border-teal shadow-md shadow-teal/10"
                : "bg-white border-gray-100 hover:border-teal/30 shadow-sm"
            )}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-teal text-white text-[10px] font-bold px-4 py-1 rounded-b-xl shadow-sm">แนะนำสำหรับผู้สูงอายุ</div>
            <div className="flex justify-between items-start mb-3 mt-4">
              <div>
                <h3 className="font-bold text-navy text-lg">แพ็กเกจ เต็มวัน</h3>
                <p className="text-xs text-teal mt-1 font-bold bg-teal/10 inline-block px-2 py-0.5 rounded-md">ดูแลต่อเนื่องตลอดวัน</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-navy">1,500 <span className="text-sm text-gray-500 font-normal">฿</span></div>
              </div>
            </div>
            <div className="w-full h-[1px] bg-teal/10 my-3"></div>
            <ul className="space-y-2 text-xs font-medium text-gray-700">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal" /> ครอบคลุมบริการครึ่งวันทั้งหมด</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal" /> ดูแลหลายแผนกอย่างเป็นระบบ</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal" /> ประสานงานพิเศษ รายงานผลละเอียด</li>
            </ul>
          </button>
        </div>

        {/* Service scope notice */}
        <div className="bg-orange/5 border border-orange/10 rounded-2xl p-4 flex gap-3">
          <Clock className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-orange">ขอบเขตบริการ</h4>
            <p className="text-[11px] text-orange/90 mt-1 leading-relaxed">ค่าบริการครอบคลุมการดูแลภายในโรงพยาบาลเท่านั้น ไม่รวมค่ารักษาพยาบาล ค่ายา หรือบริการรับ-ส่งจากบ้าน ญาติต้องพาผู้ป่วยมาส่งเอง</p>
          </div>
        </div>

        {/* Info summary */}
        <div className="bg-white rounded-3xl p-5 border border-gray-200 shadow-sm relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal to-navy rounded-t-3xl"></div>
          <h3 className="font-bold text-gray-900 mb-4 text-sm flex items-center gap-2">
            สรุปข้อมูลผู้ป่วยที่เลือก
            <span className="bg-green/10 text-green px-2 py-0.5 rounded text-[10px]">ตรวจสอบแล้ว</span>
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                <UserCircle className="w-5 h-5 text-navy" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">ชื่อผู้ป่วย</p>
                <p className="text-sm font-bold text-gray-900 mt-0.5">คุณแม่สมศรี ใจดี</p>
                <p className="text-xs text-gray-600 mt-1">โรคประจำตัว: ความดันโลหิตสูง, เบาหวาน</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 border border-gray-100 rounded-xl">
                <p className="text-[10px] font-bold text-gray-500 flex items-center gap-1.5 mb-1"><Stethoscope className="w-3 h-3"/> การเคลื่อนไหว</p>
                <p className="text-xs font-bold text-gray-900">เดินได้เอง</p>
                <p className="text-[10px] text-gray-500 mt-0.5">ไม่ต้องใช้รถเข็น</p>
              </div>
              <div className="p-3 border border-gray-100 rounded-xl">
                <p className="text-[10px] font-bold text-gray-500 flex items-center gap-1.5 mb-1"><Phone className="w-3 h-3"/> ผู้ติดต่อฉุกเฉิน</p>
                <p className="text-xs font-bold text-gray-900">คุณนัท (บุตร)</p>
                <p className="text-[10px] text-teal font-medium mt-0.5">081-234-5678</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Sticky Action */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-10 pb-safe shadow-[0_-15px_30px_-15px_rgba(0,0,0,0.1)] rounded-t-3xl">
        <div className="p-5">
          <div className="flex justify-between items-end mb-4">
            <div>
              <span className="text-xs font-bold text-gray-500 block mb-0.5">ค่าบริการดูแลภายใน รพ.</span>
              <span className="text-xs text-gray-400">รวมภาษีมูลค่าเพิ่มแล้ว</span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-navy">
                {selectedPackage === "full" ? "1,500" : "800"}
              </span>
              <span className="text-sm text-gray-600 font-bold ml-1">฿</span>
            </div>
          </div>
          <button
            onClick={() => router.push("/booking/step-4")}
            className="w-full bg-navy text-white rounded-xl py-4 font-bold shadow-lg shadow-navy/20 hover:bg-navy-light transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            ดำเนินการชำระเงิน
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <ChevronRight className="w-4 h-4 text-white" />
            </div>
          </button>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-gray-400 font-medium">
            <Shield className="w-3 h-3" /> ชำระเงินอย่างปลอดภัย
          </div>
        </div>
      </div>
    </div>
  );
}

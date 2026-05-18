"use client";

import { TopBar } from "@/components/layout/TopBar";
import { useBookingStore } from "@/store/useBookingStore";
import { Check, QrCode, CreditCard, Building2, ShieldCheck, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { clsx } from "clsx";
import { useEffect } from "react";

export default function BookingStep4() {
  const router = useRouter();
  const { setStep, selectedPayment, setPayment, selectedPackage, selectedHospital, selectedMeetingPoint } = useBookingStore();

  useEffect(() => {
    setStep(4);
  }, [setStep]);

  const totalAmount = selectedPackage === "full" ? 1500 : 800;

  const paymentMethods = [
    { id: "promptpay", label: "QR พร้อมเพย์", icon: QrCode, desc: "ไม่มีค่าธรรมเนียม" },
    { id: "credit", label: "บัตรเครดิต / เดบิต", icon: CreditCard, desc: "ไม่มีค่าธรรมเนียม" },
    { id: "bank", label: "โอนผ่านธนาคาร", icon: Building2, desc: "ใช้เวลาตรวจสอบ" },
  ];

  return (
    <div className="flex flex-col min-h-full pb-24">
      <TopBar back contact title="ชำระเงิน" />

      {/* Stepper */}
      <div className="px-6 py-4 bg-white border-b border-gray-50">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-100 -z-10" />
          {[1, 2, 3, 4, 5].map((step) => {
            const isDone = step < 4;
            const isActive = step === 4;
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
        <div className="text-center mt-3 text-xs font-bold text-navy">ขั้นตอน 4 จาก 5</div>
      </div>

      <div className="p-4 space-y-6 flex-1">
        <div>
          <h2 className="text-xl font-bold text-gray-900">สรุปการจองและชำระเงิน</h2>
        </div>

        {/* Summary Card */}
        <div className="bg-white rounded-3xl p-5 border border-gray-200 shadow-sm relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal to-navy rounded-t-3xl"></div>
          <h3 className="font-bold text-gray-900 mb-4 text-sm flex items-center gap-2">
            สรุปรายการจอง
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-gray-900 font-bold block">แพ็กเกจ{selectedPackage === "full" ? "เต็มวัน" : "ครึ่งวัน"}</span>
                <span className="text-xs text-gray-500">ดูแลผู้ป่วยภายในโรงพยาบาล</span>
              </div>
              <span className="font-medium text-gray-900">{selectedPackage === "full" ? "1,500" : "800"} ฿</span>
            </div>
            
            {/* Hospital & meeting point info */}
            <div className="bg-gray-50 rounded-xl p-3 space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <MapPin className="w-3.5 h-3.5 text-teal flex-shrink-0" />
                <span className="text-gray-700 font-bold">{selectedHospital || "โรงพยาบาลศิริราช"}</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                </div>
                <span className="text-gray-500">จุดนัดพบ: {selectedMeetingPoint || "หน้าอาคารผู้ป่วยนอก (OPD)"}</span>
              </div>
            </div>

            <div className="bg-orange/5 rounded-xl p-3 text-[11px] text-orange/90 font-medium leading-relaxed border border-orange/10">
              ญาติพาผู้ป่วยมาส่งเอง · ไม่รวมบริการรับ-ส่งจากบ้าน
            </div>
            
            <div className="bg-gray-50 rounded-xl p-3 flex justify-between items-center">
              <span className="text-xs text-gray-600 font-medium">ส่วนลดจากคูปอง</span>
              <span className="text-xs text-gray-400">- 0 ฿</span>
            </div>
            
            <div className="pt-4 mt-2 border-t border-dashed border-gray-200 flex justify-between items-end">
              <div>
                <span className="font-bold text-gray-900 block">ยอดรวมทั้งสิ้น</span>
                <span className="text-[10px] text-gray-400">รวมภาษีมูลค่าเพิ่ม 7% แล้ว</span>
              </div>
              <span className="text-2xl font-black text-teal">{totalAmount.toLocaleString()} <span className="text-sm font-bold">฿</span></span>
            </div>
          </div>
        </div>

        {/* Promo Code */}
        <div>
          <h3 className="font-bold text-gray-900 text-sm mb-2">โค้ดส่วนลด</h3>
          <div className="bg-white rounded-xl p-1.5 border border-gray-200 flex overflow-hidden shadow-sm focus-within:border-teal transition-colors">
            <input type="text" placeholder="พิมพ์รหัสส่วนลดที่นี่" className="flex-1 px-3 text-sm outline-none font-medium placeholder-gray-400 text-gray-700 uppercase" />
            <button className="px-5 py-2.5 bg-gray-900 text-white font-bold text-xs rounded-lg hover:bg-black transition-colors active:scale-95">ใช้งาน</button>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3 text-sm">เลือกวิธีชำระเงิน</h3>
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setPayment(method.id)}
                className={clsx(
                  "w-full bg-white rounded-2xl p-4 border-2 flex items-center gap-4 text-left transition-all relative overflow-hidden",
                  selectedPayment === method.id
                    ? "border-navy shadow-md shadow-navy/5 bg-navy/5"
                    : "border-gray-100 shadow-sm hover:border-gray-300"
                )}
              >
                <div className={clsx(
                  "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors shadow-sm",
                  selectedPayment === method.id ? "bg-white text-navy border border-navy/10" : "bg-gray-50 text-gray-400 border border-gray-100"
                )}>
                  <method.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className={clsx("font-bold text-base", selectedPayment === method.id ? "text-navy" : "text-gray-700")}>{method.label}</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5 font-medium">{method.desc}</p>
                </div>
                <div className={clsx(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center bg-white",
                  selectedPayment === method.id ? "border-navy" : "border-gray-300"
                )}>
                  {selectedPayment === method.id && <div className="w-3 h-3 rounded-full bg-navy" />}
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-start gap-2 justify-center text-gray-500 text-xs bg-green/5 p-3 rounded-xl border border-green/10">
          <ShieldCheck className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
          <span className="leading-relaxed">ระบบชำระเงินของ CareGo ถูกเข้ารหัสและปลอดภัยตามมาตรฐานสูงสุด <b>(PCI-DSS Compliant)</b></span>
        </div>
      </div>

      {/* Bottom Sticky Action */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-white border-t border-gray-100 z-10 pb-safe shadow-[0_-15px_30px_-15px_rgba(0,0,0,0.1)] rounded-t-3xl">
        <button
          onClick={() => router.push("/booking/step-5")}
          className="w-full bg-navy text-white rounded-xl py-4 font-bold shadow-lg shadow-navy/20 hover:bg-navy-light transition-colors active:scale-[0.98] flex justify-center items-center gap-2"
        >
          {selectedPayment === "promptpay" ? "สร้าง QR สำหรับสแกนจ่าย" : "ยืนยันและชำระเงิน"}
          <ShieldCheck className="w-4 h-4 text-white/70" />
        </button>
      </div>
    </div>
  );
}

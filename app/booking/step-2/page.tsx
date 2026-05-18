"use client";

import { TopBar } from "@/components/layout/TopBar";
import { useBookingStore } from "@/store/useBookingStore";
import { ChevronRight, Check, Hospital, Wallet, Shield, Route, Calendar, Car, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { clsx } from "clsx";
import { useEffect } from "react";

export default function BookingStep2() {
  const router = useRouter();
  const { 
    setStep, 
    selectedHospital, setHospital,
    selectedMeetingPoint, setMeetingPoint,
    selectedDepartment, setDepartment, 
    selectedDate, setDate, 
    selectedSlot, setSlot 
  } = useBookingStore();

  useEffect(() => {
    setStep(2);
  }, [setStep]);

  const departments = [
    { id: "medicine", label: "อายุรกรรม", icon: Hospital },
    { id: "surgery", label: "ศัลยกรรม", icon: Hospital },
    { id: "pharmacy", label: "รับยา", icon: Wallet },
    { id: "special", label: "ตรวจพิเศษ", icon: Shield },
    { id: "other", label: "อื่น ๆ", icon: Route },
  ];

  const hospitals = [
    "โรงพยาบาลศิริราช",
    "โรงพยาบาลจุฬาลงกรณ์",
    "โรงพยาบาลรามาธิบดี",
    "โรงพยาบาลกรุงเทพ",
    "โรงพยาบาลบำรุงราษฎร์",
    "โรงพยาบาลสมิติเวช",
    "โรงพยาบาลพญาไท",
    "โรงพยาบาลพระมงกุฎเกล้า"
  ];

  const meetingPoints = [
    "หน้าอาคารผู้ป่วยนอก (OPD)",
    "ล็อบบี้หลัก (Main Lobby)",
    "ศูนย์บริการผู้ป่วยใหม่",
    "จุด Drop-off หน้าโรงพยาบาล"
  ];

  const dates = [
    { value: "2026-05-22", label: "พฤ.", day: "22" },
    { value: "2026-05-23", label: "ศ.", day: "23" },
    { value: "2026-05-24", label: "ส.", day: "24" },
    { value: "2026-05-25", label: "อา.", day: "25" },
    { value: "2026-05-26", label: "จ.", day: "26" },
  ];

  const morningSlots = ["08:00 - 12:00", "09:00 - 13:00", "10:00 - 14:00", "11:00 - 15:00"];
  const afternoonSlots = ["12:00 - 16:00", "13:00 - 17:00", "14:00 - 18:00", "08:00 - 17:00"];

  return (
    <div className="flex flex-col min-h-full pb-24">
      <TopBar back contact title="เลือกสถานที่ วัน และเวลา" />

      {/* Stepper */}
      <div className="px-6 py-4 bg-white border-b border-gray-50">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-100 -z-10" />
          {[1, 2, 3, 4, 5].map((step) => {
            const isDone = step < 2;
            const isActive = step === 2;
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
        <div className="text-center mt-3 text-xs font-bold text-navy">ขั้นตอน 2 จาก 5</div>
      </div>

      <div className="p-4 space-y-6 flex-1">
        <div>
          <h2 className="text-xl font-bold text-gray-900">สถานที่ และวันเวลา</h2>
          <p className="text-gray-500 text-sm mt-1">เพื่อให้ CareGo เตรียมผู้ดูแลและประสานงานกับโรงพยาบาลได้อย่างเหมาะสม</p>
        </div>

        {/* Hospital Selection */}
        <div>
          <h3 className="font-bold text-gray-900 mb-2 block">โรงพยาบาลที่ต้องการรับบริการ</h3>
          <p className="text-[11px] text-gray-500 mb-3">ญาติจะเป็นผู้พาผู้ป่วยมาส่งที่โรงพยาบาล</p>
          <div className="relative">
            <select 
              value={selectedHospital || ""}
              onChange={(e) => setHospital(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all appearance-none shadow-sm"
            >
              <option value="" disabled>เลือกโรงพยาบาล</option>
              {hospitals.map(h => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <ChevronRight className="w-5 h-5 rotate-90" />
            </div>
          </div>
        </div>

        {/* Meeting Point Selection */}
        <div>
          <h3 className="font-bold text-gray-900 mb-2 block">จุดนัดพบ / จุดส่งมอบผู้ป่วย</h3>
          <p className="text-[11px] text-gray-500 mb-3">ผู้ดูแลจะไปรอรับผู้ป่วยที่จุดนี้</p>
          <div className="space-y-2">
            {meetingPoints.map(point => (
              <button
                key={point}
                onClick={() => setMeetingPoint(point)}
                className={clsx(
                  "w-full text-left px-4 py-3 rounded-xl border-2 transition-all flex items-center justify-between",
                  selectedMeetingPoint === point
                    ? "border-teal bg-teal/5 text-teal shadow-sm"
                    : "border-gray-100 bg-white text-gray-600 hover:border-gray-200"
                )}
              >
                <div className="flex items-center gap-3">
                  <MapPin className={clsx("w-4 h-4", selectedMeetingPoint === point ? "text-teal" : "text-gray-400")} />
                  <span className="text-sm font-bold">{point}</span>
                </div>
                {selectedMeetingPoint === point && <Check className="w-4 h-4 text-teal" />}
              </button>
            ))}
          </div>
        </div>

        {/* Department */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3">แผนก / วัตถุประสงค์</h3>
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setDepartment(dept.id)}
                className={clsx(
                  "flex items-center gap-2 px-3 py-2 rounded-full border transition-colors text-sm font-medium",
                  selectedDepartment === dept.id
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                )}
              >
                <dept.icon className="w-4 h-4" />
                {dept.label}
              </button>
            ))}
          </div>
        </div>

        {/* Date */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-900 text-lg">เลือกวันที่ต้องการ</h3>
            <span className="text-xs font-bold text-teal flex items-center gap-1"><Calendar className="w-3 h-3"/> พฤษภาคม 2567</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
            {dates.map((date) => (
              <button
                key={date.value}
                onClick={() => setDate(date.value)}
                className={clsx(
                  "flex-shrink-0 w-[4.5rem] p-3 rounded-2xl border-2 text-center transition-all relative overflow-hidden",
                  selectedDate === date.value
                    ? "bg-navy border-navy text-white shadow-lg shadow-navy/20"
                    : "bg-white border-gray-100 text-gray-600 hover:border-gray-300"
                )}
              >
                {selectedDate === date.value && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-teal"></div>
                )}
                <div className={clsx("text-xs mb-1", selectedDate === date.value ? "text-blue-100" : "text-gray-400")}>{date.label}</div>
                <div className="text-2xl font-black">{date.day}</div>
              </button>
            ))}
            <button className="flex-shrink-0 w-[4.5rem] p-3 rounded-2xl border-2 border-dashed border-gray-300 text-gray-400 flex flex-col items-center justify-center gap-1 hover:text-gray-600 hover:border-gray-400 bg-gray-50/50">
              <Calendar className="w-5 h-5" />
              <div className="text-[10px] font-bold">ปฏิทิน</div>
            </button>
          </div>
        </div>

        {/* Time Slots */}
        <div>
          <h3 className="font-bold text-gray-900 text-lg mb-4">เลือกช่วงเวลา</h3>
          
          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-orange/10 flex items-center justify-center">
                <Clock className="w-3 h-3 text-orange" />
              </div>
              <p className="text-sm font-bold text-gray-800">ช่วงเช้า</p>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {morningSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSlot(slot)}
                  className={clsx(
                    "p-3 rounded-xl border-2 transition-all",
                    selectedSlot === slot
                      ? "bg-white border-teal shadow-sm text-teal"
                      : "bg-white border-gray-100 text-gray-600 hover:border-gray-200"
                  )}
                >
                  <span className="font-bold text-sm">{slot}</span>
                </button>
              ))}
            </div>
            
            <div className="w-full h-[1px] bg-gray-200 my-4"></div>
            
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-navy/10 flex items-center justify-center">
                <Clock className="w-3 h-3 text-navy" />
              </div>
              <p className="text-sm font-bold text-gray-800">ช่วงบ่าย / เต็มวัน</p>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {afternoonSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSlot(slot)}
                  className={clsx(
                    "p-3 rounded-xl border-2 transition-all",
                    selectedSlot === slot
                      ? "bg-white border-teal shadow-sm text-teal"
                      : "bg-white border-gray-100 text-gray-600 hover:border-gray-200"
                  )}
                >
                  <span className="font-bold text-sm">{slot}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Notice */}
        <div className="bg-orange/5 border border-orange/10 rounded-2xl p-4 flex gap-3">
          <Clock className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-orange">กรุณามาถึงก่อนเวลา</h4>
            <p className="text-[11px] text-orange/90 mt-1 leading-relaxed">กรุณาพาผู้ป่วยมาถึงจุดนัดพบก่อนเวลาอย่างน้อย 15 นาที เพื่อให้ผู้ดูแลรับช่วงต่อได้อย่างราบรื่น</p>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Action */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 z-10 pb-safe shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
        <button
          onClick={() => router.push("/booking/step-3")}
          className="w-full bg-navy text-white rounded-xl py-3.5 font-bold shadow-sm shadow-navy/20 hover:bg-navy-light transition-colors active:scale-[0.98]"
        >
          ยืนยันช่วงเวลา {selectedDate?.split("-")[2]} พ.ค. 2567 · {selectedSlot}
        </button>
      </div>
    </div>
  );
}

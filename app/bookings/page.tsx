"use client";

import { TopBar } from "@/components/layout/TopBar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Calendar, Users, ChevronRight, User } from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";

export default function Bookings() {
  const tabs = ["ทั้งหมด", "กำลังจะมาถึง", "เสร็จสิ้น", "ยกเลิก"];
  
  const bookings = [
    {
      id: "CG-240518",
      dateLabel: "23 พ.ค. 2567",
      dayStr: "ศ. 23",
      monthStr: "พ.ค. 2567",
      hospital: "โรงพยาบาลศิริราช",
      hospitalArea: "เขตบางกอกน้อย กรุงเทพมหานคร",
      time: "08:00 - 16:00 น.",
      packageLabel: "แพ็กเกจเต็มวัน · 1,500 ฿",
      status: "confirmed",
      patient: "คุณแม่สมศรี ใจดี",
      age: 72,
    },
    {
      id: "CG-240428-0766",
      dateLabel: "28 เม.ย. 2567",
      dayStr: "อา. 28",
      monthStr: "เม.ย. 2567",
      hospital: "โรงพยาบาลจุฬาลงกรณ์",
      hospitalArea: "เขตปทุมวัน กรุงเทพมหานคร",
      time: "08:30 - 12:30 น.",
      packageLabel: "แพ็กเกจครึ่งวัน · 800 ฿",
      status: "completed",
      patient: "คุณพ่อวิชัย ใจดี",
      age: 75,
    }
  ];

  const getStatusMeta = (status: string) => {
    switch(status) {
      case "confirmed": return { label: "ยืนยันแล้ว", cls: "bg-teal/10 text-teal" };
      case "matching": return { label: "กำลังจับคู่ผู้ดูแล", cls: "bg-orange/10 text-orange" };
      case "completed": return { label: "เสร็จสิ้น", cls: "bg-teal/10 text-teal" };
      case "cancelled": return { label: "ยกเลิก", cls: "bg-red/10 text-red" };
      default: return { label: "กำลังดำเนินการ", cls: "bg-orange/10 text-orange" };
    }
  };

  return (
    <div className="flex flex-col min-h-full pb-24 bg-gray-50">
      <TopBar contact title="การจองของฉัน" />
      
      <div className="bg-white px-4 py-3 border-b border-gray-100 flex overflow-x-auto hide-scrollbar gap-2 sticky top-[60px] z-20 shadow-sm shadow-navy/5">
        {tabs.map((tab, i) => (
          <button 
            key={tab} 
            className={clsx(
              "whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all",
              i === 0 
                ? "bg-navy text-white shadow-md shadow-navy/20" 
                : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-navy border border-gray-100"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-4 space-y-4">
        {bookings.map((booking, i) => {
          const status = getStatusMeta(booking.status);
          return (
            <Link 
              key={booking.id} 
              href="/booking/detail" 
              className={clsx(
                "block bg-white rounded-3xl p-5 border-2 transition-all active:scale-[0.98] relative overflow-hidden",
                i === 0 ? "border-teal shadow-md shadow-teal/5" : "border-gray-100 shadow-sm hover:border-gray-300"
              )}
            >
              {i === 0 && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal to-navy"></div>}
              
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center text-navy font-bold text-[10px]">
                    CG
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">รหัสการจอง</p>
                    <p className="text-xs font-bold text-gray-900">{booking.id}</p>
                  </div>
                </div>
                <div className={clsx("px-2.5 py-1 rounded-full text-[10px] font-bold border", status.cls, i===0 ? "border-teal/20" : "border-transparent")}>
                  {status.label}
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 flex flex-col items-center justify-center w-[4.5rem] py-3 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">{booking.dayStr.split(" ")[0]}</span>
                  <span className="text-2xl font-black text-navy my-0.5">{booking.dayStr.split(" ")[1]}</span>
                  <span className="text-[10px] font-medium text-gray-500">{booking.monthStr.split(" ")[0]}</span>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-base">{booking.hospital}</h3>
                  <p className="text-[10px] text-gray-500 mt-0.5 truncate bg-gray-100 inline-block px-1.5 py-0.5 rounded">{booking.packageLabel}</p>
                  
                  <div className="mt-3 space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-3.5 h-3.5 text-teal flex-shrink-0" />
                      <span className="truncate font-medium">{booking.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <User className="w-3.5 h-3.5 text-navy flex-shrink-0" />
                      <span className="truncate font-medium">{booking.patient} <span className="text-gray-400 font-normal">(อายุ {booking.age} ปี)</span></span>
                    </div>
                  </div>
                </div>
              </div>

              {i === 0 && (
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange/10 text-orange flex items-center justify-center flex-shrink-0 border border-orange/20">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs">กำลังจับคู่ผู้ดูแล</h4>
                      <p className="text-[10px] text-gray-500 mt-0.5">ระบบจะแจ้งเตือนเมื่อพบผู้ดูแล</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              )}
              {i !== 0 && (
                <div className="mt-4 pt-3 border-t border-gray-50 flex justify-end">
                   <div className="text-[10px] font-bold text-teal flex items-center gap-1">ดูรายละเอียด <ChevronRight className="w-3 h-3" /></div>
                </div>
              )}
            </Link>
          );
        })}

        <div className="bg-gradient-to-b from-gray-50 to-white rounded-3xl p-6 flex flex-col items-center text-center mt-6 border-2 border-dashed border-gray-200">
          <div className="w-16 h-16 rounded-full bg-teal/10 text-teal flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8" />
          </div>
          <h4 className="font-bold text-gray-900 text-sm mb-1">เริ่มต้นการดูแลคนที่คุณรัก</h4>
          <p className="text-gray-500 text-xs mb-5 max-w-[240px]">ญาติพามาส่ง เรารับช่วงดูแลต่อที่โรงพยาบาลชั้นนำในกรุงเทพ</p>
          <Link href="/booking/step-1" className="bg-navy text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-navy/20 hover:bg-navy-light transition-all active:scale-95 text-sm">
            จองบริการใหม่
          </Link>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}

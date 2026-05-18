"use client";

import { TopBar } from "@/components/layout/TopBar";
import { Phone, Shield, Bell, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";

export default function Tracking() {
  const timeline = [
    { label: "ยืนยันการจอง", time: "16 พ.ค. 2567 07:45", status: "done" },
    { label: "จับคู่ผู้ดูแล", time: "16 พ.ค. 2567 08:05", status: "done" },
    { label: "ผู้ดูแลพร้อมรอที่จุดนัดพบ", time: "รอรับผู้ป่วยจากญาติ", status: "active" },
    { label: "รับช่วงดูแลแล้ว", time: "รออัปเดต", status: "pending" },
    { label: "กำลังประสานงานภายใน รพ.", time: "รออัปเดต", status: "pending" },
    { label: "เสร็จสิ้นบริการ", time: "รออัปเดต", status: "pending" },
  ];

  return (
    <div className="flex flex-col min-h-full pb-24 bg-gray-50">
      <TopBar back help title="ติดตามสถานะ" />
      
      <div className="p-4 space-y-4">
        {/* Status Banner */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-teal to-teal-light text-white shadow-lg shadow-teal/20 relative overflow-hidden">
          <div className="inline-block px-3 py-1 bg-black/10 rounded-full text-[10px] font-bold mb-4">
            วันนี้ 16 พ.ค. 2567
          </div>
          <h2 className="text-2xl font-bold leading-tight mb-2">ผู้ดูแลพร้อมรอ<br/>ที่จุดนัดพบแล้ว</h2>
          <p className="text-white/90 text-sm mb-4">กรุณาพาผู้ป่วยมาส่งที่จุดนัดพบ</p>
          <div className="flex items-center gap-2 text-sm bg-black/10 w-max px-3 py-1.5 rounded-lg">
            <Calendar className="w-4 h-4" /> รพ.ศิริราช · หน้าอาคารผู้ป่วยนอก
          </div>
          <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        </div>

        {/* Summary Card */}
        <div className="bg-white rounded-3xl p-5 border border-gray-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal to-navy"></div>
          <div className="flex justify-between items-start pb-4 mb-4 relative z-10 border-b border-gray-50">
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">รหัสการจอง</p>
              <h3 className="font-black text-navy text-xl mt-0.5">CG-240516-0897</h3>
            </div>
            <div className="px-2.5 py-1 bg-teal/10 text-teal rounded-full text-[10px] font-bold border border-teal/20">
              ยืนยันแล้ว
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-4 gap-x-3 text-sm relative z-10">
            <div>
              <strong className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">ผู้ป่วย</strong>
              <p className="text-gray-900 text-xs mt-1 font-bold">คุณแม่สมศรี ใจดี <span className="font-normal text-gray-500">อายุ 72 ปี</span></p>
            </div>
            <div>
              <strong className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">วันและเวลา</strong>
              <p className="text-gray-900 text-xs mt-1 font-bold">16 พ.ค. 2567 <span className="font-normal text-gray-500">· 08:30 - 16:30 น.</span></p>
            </div>
            <div>
              <strong className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">แพ็กเกจ</strong>
              <p className="text-gray-900 text-xs mt-1 font-bold bg-gray-50 inline-block px-1.5 py-0.5 rounded">แพ็กเกจเต็มวัน</p>
            </div>
            <div>
              <strong className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">จุดนัดพบ</strong>
              <p className="text-gray-900 text-xs mt-1 font-bold truncate">หน้าอาคารผู้ป่วยนอก</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Timeline */}
          <div className="bg-white rounded-3xl p-5 border border-gray-200 shadow-sm col-span-2 md:col-span-1">
            <h3 className="font-bold text-gray-900 mb-5 text-sm border-b border-gray-50 pb-3">สถานะการดูแล</h3>
            <div className="space-y-0 relative">
              <div className="absolute left-[15px] top-2 bottom-6 w-0.5 bg-gray-100 z-0"></div>
              {timeline.map((step, i) => (
                <div key={i} className="flex gap-4 relative z-10 pb-5 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className={clsx(
                      "w-8 h-8 rounded-full flex items-center justify-center border-2 bg-white",
                      step.status === "done" ? "border-teal text-teal shadow-sm shadow-teal/10" : 
                      step.status === "active" ? "border-navy text-navy shadow-md shadow-navy/20 bg-navy/5" : 
                      "border-gray-200 text-gray-300"
                    )}>
                      {step.status === "done" ? (
                        <div className="w-2.5 h-2.5 rounded-full bg-teal" />
                      ) : step.status === "active" ? (
                        <>
                          <div className="w-3 h-3 rounded-full bg-navy animate-ping absolute"></div>
                          <div className="w-3 h-3 rounded-full bg-navy relative"></div>
                        </>
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-gray-200" />
                      )}
                    </div>
                  </div>
                  <div className="-mt-0.5">
                    <h4 className={clsx(
                      "text-sm font-bold",
                      step.status === "active" ? "text-navy" : step.status === "done" ? "text-gray-900" : "text-gray-400"
                    )}>{step.label}</h4>
                    <p className={clsx(
                      "text-xs mt-1",
                      step.status === "active" ? "text-navy/70 font-medium" : "text-gray-500"
                    )}>{step.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
            {/* Caregiver */}
            <div className="bg-white rounded-3xl p-5 border border-gray-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal/5 rounded-bl-full blur-xl"></div>
              <div className="flex gap-4 items-center relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal to-teal-light text-white flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-md shadow-teal/20 border-2 border-white">
                  ก
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">ผู้ดูแลของคุณ</p>
                  <h3 className="font-bold text-gray-900 text-lg">กมลวรรณ (แนน)</h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="text-xs text-gray-500 font-medium">Care Companion</span>
                    <span className="text-xs text-gray-300">•</span>
                    <span className="text-xs font-bold text-orange flex items-center">⭐ 4.9 <span className="text-gray-400 font-normal ml-0.5">(120)</span></span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-5 bg-navy text-white py-3.5 rounded-xl font-bold text-sm shadow-md shadow-navy/20 hover:bg-navy-light flex items-center justify-center gap-2 active:scale-95 transition-all relative z-10">
                <Phone className="w-4 h-4" /> โทรหาผู้ดูแล
              </button>
            </div>

            {/* Updates */}
            <div className="bg-white rounded-3xl p-5 border border-gray-200 shadow-sm flex-1">
              <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-50">
                <h3 className="font-bold text-gray-900 text-sm">อัปเดตให้ครอบครัว</h3>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3 relative">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1 mt-0.5">
                    <h4 className="font-bold text-gray-900 text-xs">ผู้ดูแลจะโทรหาคุณก่อนเวลานัด</h4>
                    <p className="text-[10px] text-gray-500 mt-1 leading-relaxed">เพื่อยืนยันรายละเอียดการรับบริการ</p>
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium">08:30</span>
                </div>
                <div className="flex gap-3 relative">
                  <div className="w-8 h-8 rounded-full bg-teal/10 text-teal flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div className="flex-1 mt-0.5">
                    <h4 className="font-bold text-gray-900 text-xs">ยืนยันการจองสำเร็จ</h4>
                    <p className="text-[10px] text-gray-500 mt-1 leading-relaxed">ระบบได้รับข้อมูลและยืนยันการจองเรียบร้อย</p>
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium">เมื่อวาน</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warning Notice */}
        <div className="bg-red/5 rounded-2xl p-4 flex gap-3 border border-red/10 mt-4">
          <Shield className="w-5 h-5 text-red flex-shrink-0" />
          <div>
            <h4 className="font-bold text-red text-sm">บริการนี้ไม่ใช่บริการฉุกเฉิน</h4>
            <p className="text-xs text-red/80 mt-1">หากมีเหตุฉุกเฉินกรุณาโทร 1669 ทันที</p>
          </div>
        </div>
      </div>
    </div>
  );
}

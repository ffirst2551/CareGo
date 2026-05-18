"use client";

import { TopBar } from "@/components/layout/TopBar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Plus, Shield, Calendar } from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";

export default function Patients() {
  const patients = [
    {
      id: "p1",
      name: "คุณแม่สมศรี ใจดี",
      age: 72,
      gender: "เพศหญิง",
      mobility: "เดินได้เอง",
      tags: ["ความดันโลหิตสูง", "เบาหวาน"],
      initials: "ส",
      isPrimary: true
    },
    {
      id: "p2",
      name: "คุณพ่อวิชัย ใจดี",
      age: 75,
      gender: "เพศชาย",
      mobility: "เดินได้เอง",
      tags: ["ไขมันในเลือดสูง"],
      initials: "ว",
      isPrimary: false
    },
    {
      id: "p3",
      name: "คุณยายทองใบ ใจดี",
      age: 84,
      gender: "เพศหญิง",
      mobility: "ใช้รถเข็น",
      tags: ["ความดันโลหิตสูง", "หัวใจ"],
      initials: "ท",
      isPrimary: false
    }
  ];

  return (
    <div className="flex flex-col min-h-full pb-24 bg-gray-50">
      <TopBar bell title="ผู้ป่วยของฉัน" />
      
      <div className="p-4 space-y-4">
        {/* Add Patient Hero */}
        <Link href="/patients/add" className="block bg-gradient-to-br from-navy to-navy-light rounded-3xl p-6 text-white relative overflow-hidden shadow-lg shadow-navy/20 active:scale-[0.98] transition-all">
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/20">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold leading-tight mb-1">เพิ่มผู้ป่วยใหม่</h2>
            <p className="text-xs text-blue-100 max-w-[200px] leading-relaxed">เพิ่มข้อมูลเบื้องต้นของผู้ป่วย เพื่อความสะดวกในการจองบริการ CareGo</p>
          </div>
          <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/10 rounded-tl-full blur-2xl transform translate-x-8 translate-y-8"></div>
          <div className="absolute top-0 right-0 p-6 opacity-30">
            <Shield className="w-24 h-24" />
          </div>
        </Link>

        {/* Patients List */}
        <div className="space-y-4 mt-6">
          <div className="flex items-center justify-between px-1">
            <h3 className="font-bold text-gray-900 text-sm">ผู้ป่วยที่บันทึกไว้ (3)</h3>
          </div>
          {patients.map((patient, index) => (
            <div key={patient.id} className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              {patient.isPrimary && <div className="absolute top-0 left-0 w-full h-1 bg-teal"></div>}
              <Link href="/patients/detail" className="flex gap-4 mb-5 active:opacity-70 transition-opacity relative z-10">
                <div className={clsx(
                  "w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl flex-shrink-0 border-4 border-white shadow-sm",
                  index % 3 === 0 ? "bg-orange/10 text-orange" : index % 3 === 1 ? "bg-navy/10 text-navy" : "bg-teal/10 text-teal"
                )}>
                  {patient.initials}
                </div>
                <div className="flex-1 mt-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-900 text-lg">{patient.name}</h3>
                    {patient.isPrimary && (
                      <span className="px-2 py-0.5 bg-teal text-white rounded-full text-[10px] font-bold shadow-sm shadow-teal/20">ผู้ป่วยหลัก</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5 font-medium">อายุ {patient.age} ปี · {patient.gender}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    <span className={clsx(
                      "px-2 py-1 rounded text-[10px] font-bold",
                      patient.mobility === "ใช้รถเข็น" ? "bg-purple-50 text-purple-600 border border-purple-100" : "bg-green-50 text-green-700 border border-green-100"
                    )}>
                      {patient.mobility}
                    </span>
                    {patient.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 rounded text-[10px] font-bold bg-gray-50 text-gray-600 border border-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
              <div className="pt-4 border-t border-gray-100 flex gap-3 relative z-10">
                <Link href="/booking/step-1" className="flex-1 bg-teal text-white py-3 rounded-xl font-bold text-sm shadow-md shadow-teal/20 hover:bg-teal/90 flex items-center justify-center gap-2 active:scale-95 transition-all">
                  <Calendar className="w-4 h-4" /> จองบริการ
                </Link>
                <Link href="/patients/detail" className="flex-1 bg-gray-50 border border-gray-200 text-gray-700 py-3 rounded-xl font-bold text-sm hover:bg-gray-100 flex items-center justify-center gap-2 active:scale-95 transition-all">
                  ดูข้อมูล
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div className="bg-green/5 rounded-2xl p-4 flex gap-3 border border-green/10 mt-6 shadow-sm">
          <Shield className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-green text-sm">ข้อมูลปลอดภัย มั่นใจได้</h4>
            <p className="text-xs text-green/80 mt-1 leading-relaxed">ข้อมูลผู้ป่วยของคุณถูกเข้ารหัสและรักษาความลับตามมาตรฐานทางการแพทย์</p>
          </div>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}

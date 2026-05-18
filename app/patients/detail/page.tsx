"use client";

import { TopBar } from "@/components/layout/TopBar";
import { Edit2, Calendar, FileText, Heart, Activity, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";

export default function PatientDetail() {
  const patient = {
    name: "คุณแม่สมศรี ใจดี",
    age: 72,
    gender: "เพศหญิง",
    relation: "มารดา",
    mobility: "เดินได้เอง",
    tags: ["ความดันโลหิตสูง", "เบาหวาน"],
    initials: "ส",
    emergencyContact: "คุณพ่อวิชัย ใจดี (บุตรสาว) 081 234 5678",
    conditions: ["ความดันโลหิตสูง", "เบาหวานชนิดที่ 2", "ไขมันในเลือดสูง"],
    allergy: ["แพ้ยาแก้ปวด (NSAIDs)", "แพ้อาหารทะเล"],
    address: "123/456 หมู่บ้านสุขสบาย ซอยลาดพร้าว 71 แขวงลาดพร้าว เขตลาดพร้าว กรุงเทพมหานคร 10230",
    note: "คุณแม่ปวดเข่า เดินช้า มีโรคประจำตัว ความดันโลหิตสูง",
  };

  return (
    <div className="flex flex-col min-h-full pb-24 bg-gray-50">
      <TopBar back title="ข้อมูลผู้ป่วย" />
      
      <div className="p-4 space-y-4">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-teal/10 text-teal flex items-center justify-center font-bold text-3xl mb-3">
            {patient.initials}
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{patient.name}</h2>
          <p className="text-sm text-gray-500 mt-1">อายุ {patient.age} ปี | {patient.gender}</p>
          <div className="flex gap-2 mt-3">
            <span className="px-3 py-1 bg-teal/10 text-teal rounded-full text-xs font-bold">ผู้ป่วยหลัก</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-bold">{patient.relation}</span>
          </div>
          <button className="w-full mt-5 bg-white border border-gray-200 text-gray-700 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-50 flex items-center justify-center gap-2">
            <Edit2 className="w-4 h-4" /> แก้ไขข้อมูล
          </button>
        </div>

        {/* Health Data Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-4 h-4 text-orange" />
              <h3 className="font-bold text-gray-900 text-sm">โรคประจำตัว</h3>
            </div>
            <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
              {patient.conditions.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-red" />
              <h3 className="font-bold text-gray-900 text-sm">การแพ้ยา / อาหาร</h3>
            </div>
            <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
              {patient.allergy.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-navy" />
              <h3 className="font-bold text-gray-900 text-sm">การเคลื่อนไหว</h3>
            </div>
            <p className="text-sm text-gray-600 font-medium">{patient.mobility}</p>
            <p className="text-xs text-gray-500 mt-1">เดินช้า เหนื่อยง่าย ต้องการพยุงบางครั้ง</p>
          </div>
          
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-navy" />
              <h3 className="font-bold text-gray-900 text-sm">อุปกรณ์ช่วยเดิน</h3>
            </div>
            <p className="text-sm text-gray-600 font-medium">ไม่ใช้รถเข็น</p>
          </div>
        </div>

        {/* Contacts & Address */}
        <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Phone className="w-4 h-4 text-navy" />
              <h3 className="font-bold text-gray-900 text-sm">ผู้ติดต่อฉุกเฉิน</h3>
            </div>
            <p className="text-sm text-gray-600 pl-6">{patient.emergencyContact}</p>
          </div>
          <div className="border-t border-gray-50 pt-4">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-4 h-4 text-navy" />
              <h3 className="font-bold text-gray-900 text-sm">ที่อยู่สำหรับการประสานงาน</h3>
            </div>
            <p className="text-sm text-gray-600 pl-6 leading-relaxed">{patient.address}</p>
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900 text-sm">การจองล่าสุดของผู้ป่วยท่านนี้</h3>
            <Link href="/bookings" className="text-xs font-bold text-navy">ดูทั้งหมด</Link>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 border-b border-gray-50 pb-3">
              <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-sm">โรงพยาบาลศิริราช</h4>
                <p className="text-xs text-gray-500 mt-0.5">23 พ.ค. 2567 · 08:00 - 18:00 น.</p>
              </div>
              <span className="px-2 py-1 bg-teal/10 text-teal rounded-lg text-[10px] font-bold">ยืนยันแล้ว</span>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-sm">โรงพยาบาลจุฬาลงกรณ์</h4>
                <p className="text-xs text-gray-500 mt-0.5">16 พ.ค. 2567 · 08:30 - 12:30 น.</p>
              </div>
              <span className="px-2 py-1 bg-teal/10 text-teal rounded-lg text-[10px] font-bold">เสร็จสิ้น</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 z-10 pb-safe shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
        <Link 
          href="/booking/step-1" 
          className="w-full bg-navy text-white rounded-xl py-3.5 font-bold shadow-sm shadow-navy/20 hover:bg-navy-light transition-colors flex items-center justify-center gap-2"
        >
          <Calendar className="w-5 h-5" /> จอง CareGo ให้ผู้ป่วยท่านนี้
        </Link>
        <p className="text-center text-[10px] text-gray-400 mt-3">ข้อมูลผู้ป่วยจะถูกเก็บอย่างปลอดภัย และใช้เพื่อการดูแลเท่านั้น</p>
      </div>
    </div>
  );
}

function Shield(props: any) {
  return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 5 6v6c0 5 3.5 8.5 7 9 3.5-.5 7-4 7-9V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></svg>;
}

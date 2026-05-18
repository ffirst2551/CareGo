"use client";

import { TopBar } from "@/components/layout/TopBar";
import { User, Wallet, Users, Route, Check, ChevronRight, Heart, FileText, Calendar, MessageCircle, Info } from "lucide-react";
import Link from "next/link";

export default function BookingDetail() {
  return (
    <div className="flex flex-col min-h-full pb-24 bg-gray-50">
      <TopBar back contact title="รายละเอียดการจอง" />
      
      <div className="px-4 pt-4 pb-2 flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-gray-900">รายละเอียดการจอง</h2>
          <p className="text-gray-500 text-sm mt-0.5">ญาติพามาส่ง เรารับช่วงดูแลต่อภายในโรงพยาบาล</p>
        </div>
        <div className="px-2 py-1 bg-teal/10 text-teal rounded-lg text-xs font-bold whitespace-nowrap mt-1">
          กำลังดำเนินการ
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Main Card */}
        <div className="bg-white rounded-3xl p-5 border border-gray-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal to-navy"></div>
          
          <div className="flex gap-4 pb-4 mb-4 relative z-10">
            <div className="flex-1">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">รหัสการจอง</p>
              <h3 className="font-black text-navy text-xl mt-0.5">CG-240518</h3>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-teal" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase">วันที่และเวลา</p>
                <p className="text-sm font-bold text-gray-900 mt-0.5">23 พ.ค. 2567</p>
                <p className="text-xs font-medium text-teal mt-0.5 bg-teal/10 inline-block px-2 py-0.5 rounded-md">08:00 - 18:00 น.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 px-1">
              <div className="w-10 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex-1 border-b border-gray-100 pb-3">
                <p className="text-[10px] font-bold text-gray-500 uppercase">ผู้ป่วย</p>
                <p className="text-sm font-bold text-gray-900 mt-0.5">คุณแม่สมศรี ใจดี <span className="text-gray-500 font-normal">(อายุ 72 ปี)</span></p>
              </div>
            </div>

            <div className="flex items-start gap-4 px-1">
              <div className="w-10 flex items-center justify-center flex-shrink-0">
                <Route className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex-1 border-b border-gray-100 pb-3">
                <p className="text-[10px] font-bold text-gray-500 uppercase">โรงพยาบาลและจุดนัดพบ</p>
                <p className="text-sm font-bold text-gray-900 mt-0.5">โรงพยาบาลศิริราช</p>
                <p className="text-xs text-gray-500 mt-0.5">จุดนัดพบ: หน้าอาคารผู้ป่วยนอก (OPD)</p>
              </div>
            </div>

            <div className="flex items-start gap-4 px-1">
              <div className="w-10 flex items-center justify-center flex-shrink-0">
                <Wallet className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-gray-500 uppercase">แพ็กเกจ</p>
                <p className="text-sm font-bold text-gray-900 mt-0.5">แพ็กเกจเต็มวัน</p>
              </div>
            </div>
          </div>
        </div>

        {/* Included Services */}
        <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-3 text-sm">สิ่งที่รวมในบริการ</h3>
          <div className="space-y-2">
            {["รับช่วงดูแลผู้ป่วยที่จุดนัดพบ", "พาพบแพทย์ตามนัดหมาย", "ประสานงานภายในโรงพยาบาล", "ช่วยรับยา / เอกสาร", "ส่งมอบผู้ป่วยคืนญาติ"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-teal" /> {item}
              </div>
            ))}
          </div>
        </div>

        {/* Caregiver matching */}
        <div className="bg-white rounded-3xl p-5 border-2 border-orange/20 shadow-sm relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange/5 rounded-full blur-xl"></div>
          
          <div className="flex justify-between items-center mb-4 relative z-10">
            <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
              <Users className="w-4 h-4 text-orange" />
              ผู้ดูแลประจำบริการ
            </h3>
          </div>
          <div className="flex gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0 text-orange border border-orange/20">
              <div className="w-2 h-2 rounded-full bg-orange animate-ping absolute"></div>
              <div className="w-2 h-2 rounded-full bg-orange relative"></div>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-orange text-base">กำลังจับคู่ผู้ดูแล</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">เราจะแจ้งข้อมูลผู้ดูแลให้คุณทราบภายใน 2-4 ชม. ก่อนเวลานัดหมาย</p>
            </div>
          </div>
        </div>

        {/* Patient Details */}
        <div className="bg-white rounded-3xl p-5 border border-gray-200 shadow-sm space-y-4">
          <h3 className="font-bold text-gray-900 text-sm border-b border-gray-100 pb-3 mb-2">ข้อมูลเบื้องต้น</h3>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
              <Users className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex-1 mt-0.5">
              <p className="text-[10px] text-gray-400 font-bold uppercase">ผู้ติดต่อฉุกเฉิน</p>
              <p className="text-sm text-gray-900 font-bold">คุณนัท (บุตร)</p>
              <p className="text-xs text-teal font-medium">081-234-5678</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
              <Heart className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex-1 mt-0.5">
              <p className="text-[10px] text-gray-400 font-bold uppercase">สภาพผู้ป่วยในปัจจุบัน</p>
              <p className="text-sm text-gray-900 font-medium">แข็งแรงดี / เดินได้ด้วยตนเอง ไม่ต้องใช้รถเข็น</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
              <FileText className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex-1 mt-0.5">
              <p className="text-[10px] text-gray-400 font-bold uppercase">หมายเหตุพิเศษ</p>
              <p className="text-sm text-gray-900 font-medium p-3 bg-orange/5 text-orange/80 rounded-xl mt-1 text-xs">คุณแม่ปวดเข่า เดินช้า มีโรคประจำตัว ความดันโลหิตสูง</p>
            </div>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex gap-3 mt-6">
          <button className="flex-1 bg-white border-2 border-gray-100 text-gray-700 py-3.5 rounded-xl font-bold text-sm hover:border-gray-300 transition-colors flex flex-col items-center justify-center gap-1.5 active:scale-95">
            <Calendar className="w-5 h-5" />
            เลื่อนนัด
          </button>
          <button className="flex-1 bg-white border-2 border-red/20 text-red py-3.5 rounded-xl font-bold text-sm hover:border-red/40 transition-colors flex flex-col items-center justify-center gap-1.5 active:scale-95">
            <Info className="w-5 h-5" />
            ยกเลิก
          </button>
          <button className="flex-1 bg-white border-2 border-gray-100 text-gray-700 py-3.5 rounded-xl font-bold text-sm hover:border-gray-300 transition-colors flex flex-col items-center justify-center gap-1.5 active:scale-95">
            <MessageCircle className="w-5 h-5" />
            แชร์
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 z-10 pb-safe shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)] flex justify-between items-center">
        <div>
          <h4 className="font-bold text-gray-900 text-sm">ต้องการความช่วยเหลือ?</h4>
          <p className="text-xs text-gray-500 mt-0.5">โทร 06:00 - 20:00 น.</p>
        </div>
        <Link 
          href="/tracking" 
          className="bg-navy text-white px-6 py-3 rounded-xl font-bold shadow-sm shadow-navy/20 hover:bg-navy-light transition-colors"
        >
          ติดตามสถานะ
        </Link>
      </div>
    </div>
  );
}

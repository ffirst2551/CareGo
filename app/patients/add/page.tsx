"use client";

import { TopBar } from "@/components/layout/TopBar";
import { Info, Save } from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";

export default function PatientAdd() {
  return (
    <div className="flex flex-col min-h-full pb-24 bg-gray-50">
      <TopBar back help title="เพิ่มผู้ป่วยใหม่" />
      
      <div className="px-4 pt-4 pb-2">
        <h2 className="text-xl font-bold text-gray-900">ข้อมูลผู้ป่วย</h2>
        <p className="text-gray-500 text-sm mt-0.5">ข้อมูลนี้ช่วยให้เราจัดผู้ดูแลได้เหมาะสม</p>
      </div>

      <div className="p-4 space-y-5 flex-1 overflow-y-auto">
        {/* Basic Info */}
        <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-4">
          <h3 className="font-bold text-gray-900 text-sm border-b border-gray-50 pb-3">ข้อมูลพื้นฐาน</h3>
          
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="col-span-2">
              <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">ชื่อ-นามสกุล (ผู้ป่วย) <span className="text-red">*</span></label>
              <input type="text" placeholder="ระบุชื่อและนามสกุล" className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all placeholder-gray-400 font-medium text-gray-900" />
            </div>
            <div className="col-span-1">
              <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">อายุ <span className="text-red">*</span></label>
              <input type="number" placeholder="เช่น 65" className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all placeholder-gray-400 font-medium text-gray-900" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">เพศ <span className="text-red">*</span></label>
              <div className="flex bg-gray-100/80 p-1.5 rounded-xl border border-gray-100 shadow-inner">
                <button className="flex-1 py-2 text-sm font-bold bg-white text-navy shadow-sm rounded-lg active:scale-95 transition-transform">หญิง</button>
                <button className="flex-1 py-2 text-sm font-medium text-gray-500 rounded-lg hover:text-navy hover:bg-white/50 transition-colors">ชาย</button>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">ความสัมพันธ์ <span className="text-red">*</span></label>
              <select className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all appearance-none font-medium text-gray-900">
                <option value="">เลือกความสัมพันธ์</option>
                <option value="mother">มารดา</option>
                <option value="father">บิดา</option>
                <option value="spouse">คู่สมรส</option>
                <option value="other">อื่นๆ</option>
              </select>
            </div>
          </div>
        </div>

        {/* Health Info */}
        <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-4">
          <h3 className="font-bold text-gray-900 text-sm border-b border-gray-50 pb-3">ข้อมูลสุขภาพ</h3>
          
          <div className="mt-4">
            <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">โรคประจำตัว</label>
            <input type="text" placeholder="เช่น เบาหวาน ความดันโลหิตสูง หัวใจ" className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all placeholder-gray-400 font-medium text-gray-900" />
          </div>
          
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">การแพ้ยา / อาหาร / สิ่งอื่น ๆ</label>
            <input type="text" placeholder="เช่น แพ้ยาแก้ปวด แพ้อาหารทะเล" className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all placeholder-gray-400 font-medium text-gray-900" />
          </div>
          
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">การเคลื่อนไหว <span className="text-red">*</span></label>
            <div className="grid grid-cols-2 gap-2">
              <button className="py-2.5 rounded-xl text-sm font-bold bg-navy text-white shadow-md shadow-navy/20 border-2 border-navy transition-all active:scale-95">เดินได้เอง</button>
              <button className="py-2.5 rounded-xl text-sm font-medium bg-white text-gray-600 border-2 border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition-all active:scale-95">เดินได้บ้าง</button>
              <button className="py-2.5 rounded-xl text-sm font-medium bg-white text-gray-600 border-2 border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition-all active:scale-95">เดินได้น้อย</button>
              <button className="py-2.5 rounded-xl text-sm font-medium bg-white text-gray-600 border-2 border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition-all active:scale-95">นอนติดเตียง</button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">ใช้รถเข็นหรือไม่ <span className="text-red">*</span></label>
            <div className="flex bg-gray-100/80 p-1.5 rounded-xl border border-gray-100 shadow-inner w-full max-w-[240px]">
              <button className="flex-1 py-2 text-sm font-bold bg-white text-navy shadow-sm rounded-lg active:scale-95 transition-transform">ไม่ใช้</button>
              <button className="flex-1 py-2 text-sm font-medium text-gray-500 rounded-lg hover:text-navy hover:bg-white/50 transition-colors">ใช้รถเข็น</button>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-4">
          <h3 className="font-bold text-gray-900 text-sm border-b border-gray-50 pb-3">ผู้ติดต่อฉุกเฉิน</h3>
          
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="col-span-2">
              <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">ชื่อ-นามสกุล <span className="text-red">*</span></label>
              <input type="text" placeholder="ระบุชื่อผู้ติดต่อฉุกเฉิน" className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all placeholder-gray-400 font-medium text-gray-900" />
            </div>
            <div className="col-span-1">
              <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">เบอร์โทรศัพท์ <span className="text-red">*</span></label>
              <input type="tel" placeholder="08X XXX XXXX" className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all placeholder-gray-400 font-medium text-gray-900" />
            </div>
            <div className="col-span-1">
              <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">ความสัมพันธ์</label>
              <select className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all appearance-none font-medium text-gray-900">
                <option value="">เลือก</option>
                <option value="child">บุตร</option>
                <option value="spouse">คู่สมรส</option>
                <option value="other">อื่นๆ</option>
              </select>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-4 mb-8">
          <h3 className="font-bold text-gray-900 text-sm border-b border-gray-50 pb-3">ที่อยู่รับผู้ป่วย</h3>
          
          <div className="mt-4">
            <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">ที่อยู่ปัจจุบัน <span className="text-red">*</span></label>
            <textarea rows={3} placeholder="ระบุบ้านเลขที่ หมู่บ้าน ซอย ถนน แขวง เขต จังหวัด รหัสไปรษณีย์" className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all resize-none placeholder-gray-400 font-medium text-gray-900"></textarea>
          </div>

          <div className="bg-orange/5 rounded-xl p-4 flex gap-3 border border-orange/10">
            <Info className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
            <p className="text-[11px] text-orange/90 leading-relaxed font-medium">หากต้องการเปลี่ยนที่อยู่รับผู้ป่วยในแต่ละครั้ง สามารถแก้ไขได้ในขั้นตอนการจองบริการ</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 bg-white border-t border-gray-100 z-10 pb-safe shadow-[0_-15px_30px_-15px_rgba(0,0,0,0.1)] rounded-t-3xl">
        <Link 
          href="/patients" 
          className="w-full bg-navy text-white rounded-xl py-4 font-bold shadow-lg shadow-navy/20 hover:bg-navy-light transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <Save className="w-5 h-5" /> บันทึกข้อมูลผู้ป่วย
        </Link>
      </div>
    </div>
  );
}

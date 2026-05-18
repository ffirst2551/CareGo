"use client";

import { TopBar } from "@/components/layout/TopBar";
import { BottomNav } from "@/components/layout/BottomNav";
import { User, Users, Wallet, Home, Bell, Globe, Shield, Lock, ChevronRight, Edit2, LogOut, Check } from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";

export default function Profile() {
  const settingsGroup1 = [
    { title: "ข้อมูลส่วนตัว", subtitle: "ข้อมูลติดต่อ อีเมล และการยืนยันตัวตน", icon: User },
    { title: "สมาชิกครอบครัว", subtitle: "จัดการข้อมูลสมาชิกครอบครัวและผู้มีสิทธิ์ใช้งาน", icon: Users },
    { title: "วิธีชำระเงิน", subtitle: "จัดการบัตรเครดิต/เดบิต และช่องทางการชำระเงิน", icon: Wallet },
    { title: "ข้อมูลการประสานงาน", subtitle: "โรงพยาบาลที่ใช้บ่อย จุดนัดพบ และข้อมูลผู้ติดต่อ", icon: Home },
  ];

  const settingsGroup2 = [
    { title: "การแจ้งเตือน", subtitle: "ตั้งค่าการแจ้งเตือนและช่องทางการรับข่าวสาร", icon: Bell },
    { title: "ภาษา", subtitle: "เปลี่ยนภาษาการใช้งานแอปพลิเคชัน", icon: Globe, badge: "ภาษาไทย" },
    { title: "ความเป็นส่วนตัว", subtitle: "จัดการข้อมูลส่วนตัวและสิทธิ์ความเป็นส่วนตัว", icon: Shield },
    { title: "รหัสผ่านและความปลอดภัย", subtitle: "เปลี่ยนรหัสผ่าน ตั้งค่าความปลอดภัยของบัญชี", icon: Lock },
  ];

  return (
    <div className="flex flex-col min-h-full pb-24 bg-gray-50">
      <TopBar bell title="โปรไฟล์และตั้งค่า" />
      
      <div className="p-4 space-y-6">
        {/* Profile Card */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-navy/5 to-transparent"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-navy to-navy-light text-white flex items-center justify-center font-black text-4xl mb-4 shadow-lg shadow-navy/20 border-4 border-white">
                W
              </div>
              <div className="absolute bottom-4 right-0 w-6 h-6 bg-teal rounded-full border-2 border-white flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
            </div>
            
            <h2 className="text-2xl font-black text-gray-900 mb-1">คุณวรรณา ใจดี</h2>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium bg-gray-50 px-3 py-1.5 rounded-full mt-2">
              <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> 081 234 5678</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span>wanna.jaidee@email.com</span>
            </div>
            
            <div className="mt-4 w-full bg-teal/5 border border-teal/10 p-3 rounded-xl flex items-center justify-center gap-2 text-xs font-bold text-teal">
              <Users className="w-4 h-4" /> บัญชีนี้เชื่อมต่อกับ 3 ผู้ป่วย
            </div>
            
            <button className="w-full mt-5 bg-white border-2 border-gray-100 text-gray-700 py-3.5 rounded-xl font-bold text-sm hover:border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2 transition-all active:scale-95">
              <Edit2 className="w-4 h-4" /> แก้ไขข้อมูลส่วนตัว
            </button>
          </div>
        </div>

        {/* Group 1 */}
        <div>
          <h3 className="font-bold text-gray-900 text-sm mb-3 ml-2">บัญชีและข้อมูลส่วนตัว</h3>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden p-2 space-y-1">
            {settingsGroup1.map((item, i) => (
              <button key={i} className="w-full p-3 rounded-2xl flex items-center gap-4 hover:bg-gray-50 transition-colors active:bg-gray-100 group">
                <div className="w-12 h-12 rounded-full bg-gray-50 group-hover:bg-white flex items-center justify-center border border-gray-100 flex-shrink-0 text-navy shadow-sm transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">{item.subtitle}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300 flex-shrink-0 group-hover:text-navy transition-colors" />
              </button>
            ))}
          </div>
        </div>

        {/* Group 2 */}
        <div>
          <h3 className="font-bold text-gray-900 text-sm mb-3 ml-2">การตั้งค่าและความปลอดภัย</h3>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden p-2 space-y-1">
            {settingsGroup2.map((item, i) => (
              <button key={i} className="w-full p-3 rounded-2xl flex items-center gap-4 hover:bg-gray-50 transition-colors active:bg-gray-100 group">
                <div className="w-12 h-12 rounded-full bg-gray-50 group-hover:bg-white flex items-center justify-center border border-gray-100 flex-shrink-0 text-navy shadow-sm transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">{item.subtitle}</p>
                </div>
                {item.badge ? (
                  <span className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-[10px] font-bold border border-gray-200">{item.badge}</span>
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-300 flex-shrink-0 group-hover:text-navy transition-colors" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Notice */}
        <div className="bg-green/5 rounded-2xl p-4 flex gap-3 border border-green/10 mt-6 shadow-sm">
          <Shield className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-green text-sm">เราดูแลข้อมูลของคุณอย่างปลอดภัย</h4>
            <p className="text-xs text-green/80 mt-1 leading-relaxed">ข้อมูลของคุณจะถูกเข้ารหัสและดูแลอย่างเป็นความลับที่สุดตามมาตรฐาน</p>
          </div>
        </div>

        <button className="w-full bg-white border border-red/20 text-red py-3.5 rounded-xl font-bold text-sm shadow-sm hover:bg-red/5 flex items-center justify-center gap-2 transition-colors">
          <LogOut className="w-5 h-5" /> ออกจากระบบ
        </button>
      </div>
      
      <BottomNav />
    </div>
  );
}

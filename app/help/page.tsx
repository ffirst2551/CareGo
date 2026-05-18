"use client";

import { TopBar } from "@/components/layout/TopBar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Phone, Search, ChevronRight, MessageCircle, Info, Shield, Wallet, Calendar } from "lucide-react";
import Link from "next/link";

export default function Help() {
  const faqs = [
    { title: "วิธีการจอง", subtitle: "ขั้นตอนการจองบริการ การเตรียมตัว และสิ่งที่ควรรู้", icon: Calendar },
    { title: "จุดนัดพบและการส่งมอบผู้ป่วย", subtitle: "จุดนัดพบภายในโรงพยาบาล การส่งมอบคืนญาติเมื่อเสร็จสิ้น", icon: Shield },
    { title: "การชำระเงิน", subtitle: "วิธีการชำระเงิน ใบเสร็จรับเงิน และการขอคืนเงิน", icon: Wallet },
    { title: "ขอบเขตบริการ", subtitle: "ดูแลภายใน รพ. เท่านั้น ไม่รวมบริการรับ-ส่งจากบ้าน", icon: Shield },
    { title: "โรงพยาบาลที่รองรับ", subtitle: "ใช้ได้กับโรงพยาบาลชั้นนำในกรุงเทพ 8 แห่ง", icon: Calendar },
    { title: "ความปลอดภัยและข้อมูลส่วนตัว", subtitle: "มาตรการดูแลข้อมูลผู้ป่วยและความปลอดภัยของผู้ดูแล", icon: Shield },
  ];

  return (
    <div className="flex flex-col min-h-full pb-24 bg-gray-50">
      <TopBar bell title="ช่วยเหลือ" />
      
      <div className="p-4 space-y-4">
        {/* Help Hero */}
        <div className="bg-gradient-to-br from-navy to-navy-light rounded-3xl p-6 text-white relative overflow-hidden shadow-lg shadow-navy/20">
          <div className="absolute right-0 top-0 w-40 h-40 bg-white/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
          <div className="absolute left-0 bottom-0 w-32 h-32 bg-teal/10 rounded-full blur-xl transform -translate-x-10 translate-y-10"></div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/20">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-black leading-tight mb-2">ทีมดูแลลูกค้า CareGo</h2>
            <p className="text-blue-100 text-sm mb-6 leading-relaxed">เราพร้อมช่วยเหลือและดูแลคุณ<br/>ทุกวัน 06:00 - 20:00 น.</p>
            
            <button className="w-full bg-white text-navy px-4 py-3.5 rounded-xl font-bold text-sm shadow-sm flex items-center justify-center gap-2 active:scale-95 transition-transform hover:bg-gray-50">
              <Phone className="w-5 h-5 text-teal" /> 02-012-5555
            </button>
            <p className="text-[10px] text-blue-200/80 mt-4 text-center">บริการของเราไม่ใช่บริการฉุกเฉิน หากมีเหตุฉุกเฉินกรุณาโทร 1669</p>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-2xl p-1 flex border border-gray-200 shadow-sm items-center">
          <div className="pl-4 pr-2 text-gray-400">
            <Search className="w-5 h-5" />
          </div>
          <input 
            type="text" 
            placeholder="ค้นหาคำถามที่พบบ่อย เช่น การเลื่อนนัด, ชำระเงิน" 
            className="flex-1 bg-transparent py-3.5 text-sm focus:outline-none"
          />
        </div>

        {/* FAQ */}
        <div className="space-y-4 mt-6">
          <h3 className="font-bold text-gray-900 text-base mb-2">คำถามที่พบบ่อย</h3>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <button key={i} className="w-full bg-white rounded-3xl p-4 border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md hover:border-gray-200 hover:-translate-y-0.5 transition-all active:scale-[0.98] group">
                <div className="w-12 h-12 rounded-full bg-teal/10 text-teal flex items-center justify-center flex-shrink-0 group-hover:bg-teal group-hover:text-white transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                  <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">{item.subtitle}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300 flex-shrink-0 group-hover:text-teal transition-colors" />
              </button>
            ))}
          </div>
        </div>

        {/* Contact Actions */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <button className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-left flex flex-col hover:bg-gray-50 transition-colors active:scale-[0.98]">
            <div className="w-10 h-10 rounded-full bg-teal/10 text-teal flex items-center justify-center mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">โทรหาเรา</h4>
            <p className="text-[11px] text-gray-500 leading-tight">พูดคุยกับทีมงานโดยตรง 06:00 - 20:00 น.</p>
          </button>
          <button className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-left flex flex-col hover:bg-gray-50 transition-colors active:scale-[0.98]">
            <div className="w-10 h-10 rounded-full bg-navy/10 text-navy flex items-center justify-center mb-4">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">แชตกับทีมงาน</h4>
            <p className="text-[11px] text-gray-500 leading-tight">ตอบแชตภายในไม่กี่นาทีในช่วงเวลาทำการ</p>
          </button>
        </div>

        {/* Warning */}
        <div className="bg-red/5 rounded-2xl p-4 flex gap-3 border border-red/10 mt-6">
          <Info className="w-5 h-5 text-red flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-red text-sm">บริการของเราไม่ใช่บริการฉุกเฉิน</h4>
            <p className="text-xs text-red/80 mt-1 leading-relaxed">หากมีเหตุฉุกเฉินกรุณาโทร 1669 ทันที CareGo ดูแลผู้ป่วยภายในโรงพยาบาลเท่านั้น ไม่รวมบริการรับ-ส่งจากบ้าน</p>
          </div>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}

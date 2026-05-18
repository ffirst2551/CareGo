import { TopBar } from "@/components/layout/TopBar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Calendar, Wallet, Users, Shield, Phone, Heart, ChevronRight, MapPin, Star, Clock, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <TopBar bell={true} />
      
      <div className="px-4 py-6 space-y-8">
        {/* Greeting */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-navy text-white flex items-center justify-center text-xl font-bold shadow-sm">
            ว
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">สวัสดีค่ะ คุณวรรณา</h1>
            <p className="text-gray-500 text-sm mt-0.5">ให้เราช่วยดูแลคนที่คุณรัก ภายในโรงพยาบาล</p>
          </div>
        </div>

        {/* Hero Card */}
        <div className="rounded-2xl relative overflow-hidden shadow-xl shadow-navy/10 border border-navy/5">
          <div className="absolute inset-0">
            <Image 
              src="/images/hero.png" 
              alt="CareGo Caregiver and Patient" 
              fill
              className="object-cover object-[center_top]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 p-6 w-[85%] sm:w-[70%]">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold text-white mb-3">
              <Shield className="w-3 h-3" /> ผู้ช่วยดูแลผู้ป่วยภายในโรงพยาบาล
            </div>
            <h2 className="text-2xl font-bold leading-tight mb-2 text-white">
              ญาติพามาส่ง<br />
              <span className="text-teal-light">เรารับช่วงดูแลต่อ</span>
            </h2>
            <p className="text-sm text-blue-50 mb-6 leading-relaxed opacity-90">
              หมดกังวลเมื่อไม่มีเวลาอยู่ดูแลที่โรงพยาบาล<br />รองรับโรงพยาบาลชั้นนำในกรุงเทพ
            </p>
            <Link
              href="/booking/step-1"
              className="inline-flex items-center justify-center gap-2 bg-white text-navy px-5 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-gray-50 transition-colors w-full sm:w-auto"
            >
              <Calendar className="w-4 h-4" />
              เริ่มจองบริการ
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3">
          <Link href="/booking/step-1" className="bg-white rounded-2xl p-4 flex flex-col items-center text-center shadow-sm border border-gray-100 active:scale-95 transition-transform">
            <div className="w-12 h-12 rounded-full bg-teal/10 text-teal flex items-center justify-center mb-3">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-sm">จองใหม่</h3>
            <p className="text-[10px] text-gray-500 mt-1">เริ่มจองบริการ</p>
          </Link>
          <Link href="/bookings" className="bg-white rounded-2xl p-4 flex flex-col items-center text-center shadow-sm border border-gray-100 active:scale-95 transition-transform">
            <div className="w-12 h-12 rounded-full bg-navy/10 text-navy flex items-center justify-center mb-3">
              <Wallet className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-sm">การจองของฉัน</h3>
            <p className="text-[10px] text-gray-500 mt-1">ดูสถานะการจอง</p>
          </Link>
          <Link href="/patients" className="bg-white rounded-2xl p-4 flex flex-col items-center text-center shadow-sm border border-gray-100 active:scale-95 transition-transform">
            <div className="w-12 h-12 rounded-full bg-orange/10 text-orange flex items-center justify-center mb-3">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-sm">ผู้ป่วยของฉัน</h3>
            <p className="text-[10px] text-gray-500 mt-1">จัดการข้อมูลผู้ป่วย</p>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm space-y-4">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-navy/5 text-navy flex-shrink-0 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900">ผู้ดูแลผ่านการอบรม</h4>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">เชี่ยวชาญในการดูแลและการประสานงานในโรงพยาบาล</p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-50"></div>
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-teal/5 text-teal flex-shrink-0 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900">อัปเดตสดให้ครอบครัว</h4>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">รายงานความคืบหน้าการดูแลผ่านแอปพลิเคชันตลอดเวลา</p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-50"></div>
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-orange/5 text-orange flex-shrink-0 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900">จุดรับ-ส่งภายในโรงพยาบาล</h4>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">บริการนี้ไม่รวมการเดินทางจากบ้าน ญาติต้องมาส่งผู้ป่วย</p>
            </div>
          </div>
        </div>

        {/* Packages */}
        <section>
          <div className="flex items-end justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900">แพ็กเกจของเรา</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative hover:border-teal/30 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  ประมาณ 5 ชม.
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-900">800<span className="text-sm font-normal text-gray-500"> ฿</span></div>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 text-base">แพ็กเกจ ครึ่งวัน</h3>
              <p className="text-xs text-gray-500 mt-1 mb-3">เหมาะสำหรับนัดตรวจทั่วไป หรือรับยา</p>
              <div className="space-y-2 mt-4 pt-4 border-t border-gray-50">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Check className="w-3.5 h-3.5 text-teal" /> ครอบคลุมการดูแลภายใน รพ.
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Check className="w-3.5 h-3.5 text-teal" /> ดูแลใกล้ชิดตลอดเวลา
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-white to-teal/5 rounded-2xl p-5 border-2 border-teal/20 shadow-md shadow-teal/5 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                แนะนำสำหรับผู้สูงอายุ
              </div>
              <div className="flex justify-between items-start mb-3 mt-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-teal/10 text-teal rounded-lg text-xs font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  เต็มวัน
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-navy">1,500<span className="text-sm font-normal text-gray-500"> ฿</span></div>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 text-base">แพ็กเกจ เต็มวัน</h3>
              <p className="text-xs text-gray-500 mt-1 mb-3">เหมาะสำหรับนัดหลายแผนก หรือทำหัตถการ</p>
              <div className="space-y-2 mt-4 pt-4 border-t border-teal/10">
                <div className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                  <Check className="w-3.5 h-3.5 text-teal" /> ดูแลต่อเนื่องยาวนานตลอดวัน
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                  <Check className="w-3.5 h-3.5 text-teal" /> ประสานงานพิเศษ และรายงานผลละเอียด
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Booking */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">การจองที่กำลังจะมาถึง</h2>
            <Link href="/bookings" className="text-sm font-bold text-teal">ดูทั้งหมด</Link>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden flex flex-col">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-teal"></div>
            
            <div className="p-4 flex gap-4 border-b border-gray-100">
              <div className="flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 bg-navy/5 rounded-xl border border-navy/10">
                <span className="text-xs font-bold text-navy">พฤ.</span>
                <span className="text-2xl font-black text-navy leading-none mt-0.5">22</span>
                <span className="text-[10px] font-medium text-navy/70 mt-1">พ.ค.</span>
              </div>
              <div className="flex-1 min-w-0 py-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-gray-900 text-base">08:00 - 17:00 น.</h3>
                  <span className="px-2 py-1 bg-teal/10 text-teal text-[10px] font-bold rounded-md">ยืนยันแล้ว</span>
                </div>
                <p className="text-xs font-medium text-gray-600">แพ็กเกจเต็มวัน</p>
                
                <div className="mt-2 flex flex-col gap-1 text-xs">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-teal flex-shrink-0" />
                    <span className="text-gray-800 font-bold truncate">รพ.ศิริราช</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0"><span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span></div>
                    <span className="text-gray-500 truncate">จุดนัดพบ: หน้าอาคารผู้ป่วยนอก</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50/50 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <Image src="/images/caregiver.png" alt="Caregiver" width={40} height={40} className="object-cover" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green text-white rounded-full flex items-center justify-center border-2 border-white">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-gray-500">ผู้ดูแลของคุณ</p>
                    <p className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                      คุณกัญญา
                      <span className="flex items-center text-[10px] font-bold text-orange bg-orange/10 px-1.5 py-0.5 rounded">
                        <Star className="w-2.5 h-2.5 fill-orange text-orange mr-0.5" /> 4.9
                      </span>
                    </p>
                  </div>
                </div>
                <Link 
                  href="/booking/detail" 
                  className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-50 shadow-sm"
                >
                  ดูรายละเอียด
                </Link>
              </div>
              
              <div className="flex items-center gap-2 pt-3 border-t border-gray-200/60">
                <div className="w-6 h-6 rounded-full bg-orange text-white flex items-center justify-center text-[10px] font-bold shadow-sm">ส</div>
                <span className="text-xs text-gray-700 font-medium">ดูแล <span className="font-bold">คุณแม่สมศรี ใจดี</span></span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <div className="bg-navy/5 rounded-2xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white text-navy flex items-center justify-center flex-shrink-0 shadow-sm">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">ต้องการความช่วยเหลือ?</h4>
            <p className="text-xs text-gray-500 mt-1 mb-1">โทรหาเราได้ทุกวัน 06:00 - 20:00 น.</p>
            <a href="tel:02-012-5555" className="text-teal font-bold">02-012-5555</a>
          </div>
        </div>

        <div className="h-4"></div>
      </div>

      <BottomNav />
    </>
  );
}

"use client";

import { TopBar } from "@/components/layout/TopBar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Phone, Calendar, Shield, Bell } from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";

export default function Notifications() {
  const tabs = ["ทั้งหมด", "การจอง", "ผู้ดูแล", "ระบบ"];
  
  const notifications = [
    { type: "booking", time: "09:12", title: "จับคู่ผู้ดูแลสำเร็จแล้ว", body: "คุณกมลวรรณ (แนน) จะดูแลคุณแม่สมศรีที่ รพ.ศิริราช วันที่ 16 พ.ค. 2567 เวลา 08:30 น.", bookingId: "CG-240516-0897", highlight: true, dateGroup: "today" },
    { type: "caregiver", time: "08:30", title: "ผู้ดูแลพร้อมรอที่จุดนัดพบ", body: "กรุณาพาผู้ป่วยมาส่งที่หน้าอาคารผู้ป่วยนอก (OPD)", bookingId: "CG-240516-0897", dateGroup: "today" },
    { type: "caregiver", time: "07:55", title: "ผู้ดูแลจะโทรยืนยันก่อนเวลานัด", body: "เพื่อยืนยันรายละเอียดจุดนัดพบและสิ่งที่ต้องเตรียม", bookingId: "CG-240516-0897", highlight: true, dateGroup: "today" },
    { type: "booking", time: "เมื่อวาน 21:10", title: "ยืนยันการจองสำเร็จ", body: "การจองดูแลภายใน รพ.ศิริราช วันที่ 16 พ.ค. 2567 เวลา 08:30 - 16:30 น. ได้รับการยืนยันแล้ว", bookingId: "CG-240516-0897", dateGroup: "earlier" },
    { type: "system", time: "12 พ.ค. 2567", title: "อัปเดตระบบ", body: "เราได้ปรับปรุงระบบเพื่อประสบการณ์ที่ดียิ่งขึ้น ขอบคุณที่ไว้วางใจ CareGo", bookingId: null, dateGroup: "earlier" },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "caregiver": return <Phone className="w-5 h-5 text-orange" />;
      case "system": return <Bell className="w-5 h-5 text-gray-400" />;
      default: return <Calendar className="w-5 h-5 text-teal" />;
    }
  };

  const getBgClass = (type: string) => {
    switch (type) {
      case "caregiver": return "bg-orange/10";
      case "system": return "bg-gray-100";
      default: return "bg-teal/10";
    }
  };

  const todayNotifs = notifications.filter(n => n.dateGroup === "today");
  const earlierNotifs = notifications.filter(n => n.dateGroup === "earlier");

  return (
    <div className="flex flex-col min-h-full pb-24 bg-gray-50">
      <TopBar bell title="การแจ้งเตือน" />
      
      <div className="bg-white px-4 py-3 border-b border-gray-100 flex overflow-x-auto hide-scrollbar gap-2 sticky top-[60px] z-20">
        {tabs.map((tab, i) => (
          <button 
            key={tab} 
            className={clsx(
              "whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-colors",
              i === 0 ? "bg-navy text-white shadow-sm" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-4 space-y-6">
        {/* Today */}
        <div>
          <h3 className="font-bold text-gray-900 text-base mb-3">วันนี้</h3>
          <div className="space-y-3">
            {todayNotifs.map((item, i) => (
              <Link 
                key={i}
                href={item.type === "system" ? "/profile" : "/tracking"}
                className={clsx(
                  "flex gap-4 p-4 rounded-2xl border transition-all active:scale-[0.98]",
                  item.highlight ? "bg-teal/5 border-teal/20 shadow-sm shadow-teal/5" : "bg-white border-gray-100 shadow-sm"
                )}
              >
                <div className={clsx("w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0", getBgClass(item.type))}>
                  {getIcon(item.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-900 text-sm leading-tight">{item.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{item.body}</p>
                  {item.bookingId && (
                    <div className="mt-2 inline-flex px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px] font-bold">
                      การจอง {item.bookingId}
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">{item.time}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Earlier */}
        <div>
          <h3 className="font-bold text-gray-900 text-base mb-3">ก่อนหน้านี้</h3>
          <div className="space-y-3">
            {earlierNotifs.map((item, i) => (
              <Link 
                key={i}
                href={item.type === "system" ? "/profile" : "/tracking"}
                className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all active:scale-[0.98]"
              >
                <div className={clsx("w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0", getBgClass(item.type))}>
                  {getIcon(item.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-900 text-sm leading-tight">{item.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{item.body}</p>
                </div>
                <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">{item.time}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}

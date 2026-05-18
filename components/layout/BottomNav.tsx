"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calendar, Users, MessageCircle, User } from "lucide-react";
import { clsx } from "clsx";

export function BottomNav() {
  const pathname = usePathname();

  const items = [
    { name: "หน้าหลัก", href: "/", icon: Home },
    { name: "การจอง", href: "/bookings", icon: Calendar },
    { name: "ผู้ป่วย", href: "/patients", icon: Users },
    { name: "ช่วยเหลือ", href: "/help", icon: MessageCircle },
    { name: "บัญชี", href: "/profile", icon: User },
  ];

  return (
    <nav className="absolute bottom-0 left-0 right-0 h-[80px] bg-white border-t border-gray-100 flex justify-around items-center px-2 z-50 pb-safe shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
      {items.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
        return (
          <Link
            key={item.name}
            href={item.href}
            className={clsx(
              "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",
              isActive ? "text-navy" : "text-gray-400 hover:text-gray-600"
            )}
          >
            <item.icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-medium">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}

"use client";

import { ChevronLeft, Bell, Phone, HelpCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";

interface TopBarProps {
  back?: boolean;
  contact?: boolean;
  bell?: boolean;
  help?: boolean;
  centerBrand?: boolean;
  title?: string;
  onBack?: () => void;
}

export function TopBar({
  back = false,
  contact = false,
  bell = false,
  help = false,
  centerBrand = true,
  title,
  onBack,
}: TopBarProps) {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-gray-100/50">
      {/* iOS style status bar spacing can be handled via pt-safe */}
      <div className="flex items-center justify-between px-4 h-14">
        {/* Left */}
        <div className="flex-1 flex items-center justify-start">
          {back && (
            <button
              onClick={handleBack}
              aria-label="ย้อนกลับ"
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors -ml-2 text-gray-800"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Center */}
        <div className={clsx("flex flex-col items-center justify-center", !centerBrand && "flex-1 items-start")}>
          {title ? (
            <h1 className="text-lg font-bold text-navy truncate max-w-[200px]">{title}</h1>
          ) : (
            <Link href="/" className="text-xl font-bold tracking-tight text-navy">
              Care<span className="text-teal">Go</span>
            </Link>
          )}
        </div>

        {/* Right */}
        <div className="flex-1 flex items-center justify-end gap-1">
          {contact && (
            <Link
              href="/help"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-700 rounded-full hover:bg-gray-100 transition-colors border border-gray-100"
            >
              <Phone className="w-4 h-4" />
              <span className="text-xs font-medium">ติดต่อเรา</span>
            </Link>
          )}
          {bell && (
            <Link
              href="/notifications"
              aria-label="การแจ้งเตือน"
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors relative text-gray-700"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red rounded-full border-2 border-background"></span>
            </Link>
          )}
          {help && (
            <Link
              href="/help"
              aria-label="ศูนย์ช่วยเหลือ"
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-700"
            >
              <HelpCircle className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

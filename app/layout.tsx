import type { Metadata, Viewport } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CareGo | ผู้ช่วยดูแลผู้ป่วยภายในโรงพยาบาล",
  description: "ญาติพามาส่ง เรารับช่วงดูแลต่อ — บริการดูแลผู้ป่วยภายในโรงพยาบาลชั้นนำในกรุงเทพ พาพบแพทย์ ประสานงาน รับยา ส่งมอบคืนญาติอย่างอุ่นใจ",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#f8fafc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${notoSansThai.variable} font-sans`}>
      <body className="bg-background min-h-screen">
        <main className="max-w-lg mx-auto min-h-screen bg-background relative flex flex-col shadow-sm lg:shadow-xl lg:shadow-navy/5">
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}


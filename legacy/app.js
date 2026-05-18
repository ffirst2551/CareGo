const appState = {
  route: "home",
  step: 1,
  selectedPatientId: "p1",
  selectedPurpose: "doctor",
  selectedDepartment: "medicine",
  selectedDate: "2026-05-23",
  selectedSlot: "08:00 - 12:00",
  selectedPackage: "full",
  addOnHomeVisit: true,
  selectedPayment: "promptpay",
};

const patients = [
  {
    id: "p1",
    name: "คุณแม่สมศรี ใจดี",
    age: 72,
    gender: "เพศหญิง",
    relation: "มารดา",
    mobility: "เดินได้เอง",
    tags: ["ความดันโลหิตสูง", "เบาหวาน"],
    initials: "ส",
    photo: "photo-2",
    emergencyContact: "คุณพ่อวิชัย ใจดี (บุตรสาว) 081 234 5678",
    conditions: ["ความดันโลหิตสูง", "เบาหวานชนิดที่ 2", "ไขมันในเลือดสูง"],
    allergy: ["แพ้ยาแก้ปวด (NSAIDs)", "แพ้อาหารทะเล"],
    address: "123/456 หมู่บ้านสุขสบาย ซอยลาดพร้าว 71 แขวงลาดพร้าว เขตลาดพร้าว กรุงเทพมหานคร 10230",
    note: "คุณแม่ปวดเข่า เดินช้า มีโรคประจำตัว ความดันโลหิตสูง",
  },
  {
    id: "p2",
    name: "คุณพ่อวิชัย ใจดี",
    age: 75,
    gender: "เพศชาย",
    relation: "บิดา",
    mobility: "เดินได้เอง",
    tags: ["ไขมันในเลือดสูง"],
    initials: "ว",
    photo: "photo-3",
    emergencyContact: "คุณวรรณา ใจดี (บุตร) 081 234 5678",
    conditions: ["ไขมันในเลือดสูง"],
    allergy: ["ไม่มีข้อมูลการแพ้ยา"],
    address: "123/456 หมู่บ้านสุขสบาย ซอยลาดพร้าว 71 แขวงลาดพร้าว เขตลาดพร้าว กรุงเทพมหานคร 10230",
    note: "ตรวจตามนัดทั่วไป",
  },
  {
    id: "p3",
    name: "คุณยายทองใบ ใจดี",
    age: 84,
    gender: "เพศหญิง",
    relation: "ยาย",
    mobility: "ใช้รถเข็น",
    tags: ["ความดันโลหิตสูง", "หัวใจ"],
    initials: "ท",
    photo: "photo-1",
    emergencyContact: "คุณวรรณา ใจดี 081 234 5678",
    conditions: ["ความดันโลหิตสูง", "โรคหัวใจ"],
    allergy: ["ไม่มีข้อมูล"],
    address: "123/456 หมู่บ้านสุขสบาย ซอยลาดพร้าว 71 แขวงลาดพร้าว เขตลาดพร้าว กรุงเทพมหานคร 10230",
    note: "ต้องใช้รถเข็นในการเดินทาง",
  },
  {
    id: "p4",
    name: "คุณตาประเสริฐ ใจดี",
    age: 78,
    gender: "เพศชาย",
    relation: "ตา",
    mobility: "เดินได้เอง",
    tags: ["โรคไตเรื้อรัง"],
    initials: "ป",
    photo: "photo-4",
    emergencyContact: "คุณวรรณา ใจดี 081 234 5678",
    conditions: ["โรคไตเรื้อรัง"],
    allergy: ["ไม่มีข้อมูล"],
    address: "123/456 หมู่บ้านสุขสบาย ซอยลาดพร้าว 71 แขวงลาดพร้าว เขตลาดพร้าว กรุงเทพมหานคร 10230",
    note: "เดินได้นานไม่มาก",
  },
];

const bookings = [
  {
    id: "CG-240518",
    dateLabel: "23 พ.ค. 2567",
    dayLabel: "ศ. 23",
    monthLabel: "พ.ค. 2567",
    hospital: "โรงพยาบาลศิริราช",
    hospitalArea: "เขตบางกอกน้อย กรุงเทพมหานคร",
    time: "08:00 - 18:00 น.",
    packageLabel: "แพ็กเกจเต็มวัน",
    status: "confirmed",
    patientId: "p1",
    route: "บ้าน > โรงพยาบาลศิริราช",
    caregiver: "กำลังจับคู่ผู้ดูแล",
    total: 4900,
  },
  {
    id: "CG-240516-0897",
    dateLabel: "16 พ.ค. 2567",
    dayLabel: "พฤ. 16",
    monthLabel: "พ.ค. 2567",
    hospital: "โรงพยาบาลศิริราช",
    hospitalArea: "กรุงเทพฯ",
    time: "08:30 - 16:30 น.",
    packageLabel: "แพ็กเกจเต็มวัน",
    status: "inprogress",
    patientId: "p1",
    route: "บ้าน > โรงพยาบาลศิริราช",
    caregiver: "กมลวรรณ (แนน)",
    total: 4900,
  },
  {
    id: "CG-240509",
    dateLabel: "9 พ.ค. 2567",
    dayLabel: "ศ. 9",
    monthLabel: "พ.ค. 2567",
    hospital: "โรงพยาบาลศิริราช",
    hospitalArea: "เขตบางกอกน้อย กรุงเทพมหานคร",
    time: "08:00 - 18:00 น.",
    packageLabel: "แพ็กเกจเต็มวัน",
    status: "matching",
    patientId: "p1",
    route: "บ้าน > โรงพยาบาลศิริราช",
    caregiver: "กำลังจับคู่ผู้ดูแล",
    total: 4900,
  },
  {
    id: "CG-240428-0766",
    dateLabel: "28 เม.ย. 2567",
    dayLabel: "อา. 28",
    monthLabel: "เม.ย. 2567",
    hospital: "โรงพยาบาลศิริราช",
    hospitalArea: "เขตบางกอกน้อย กรุงเทพมหานคร",
    time: "08:30 - 12:30 น.",
    packageLabel: "แพ็กเกจครึ่งวัน",
    status: "completed",
    patientId: "p1",
    route: "บ้าน > โรงพยาบาลศิริราช",
    caregiver: "คุณนุช",
    total: 2900,
  },
  {
    id: "CG-240417",
    dateLabel: "17 เม.ย. 2567",
    dayLabel: "พ. 17",
    monthLabel: "เม.ย. 2567",
    hospital: "โรงพยาบาลศิริราช",
    hospitalArea: "เขตบางกอกน้อย กรุงเทพมหานคร",
    time: "12:00 - 17:00 น.",
    packageLabel: "แพ็กเกจครึ่งวัน",
    status: "cancelled",
    patientId: "p3",
    route: "บ้าน > โรงพยาบาลศิริราช",
    caregiver: "ไม่ระบุ",
    total: 2900,
  },
];

const notifications = [
  { type: "booking", time: "09:12", title: "จับคู่ผู้ดูแลสำเร็จแล้ว", body: "คุณกมลวรรณ (แนน) จะดูแลคุณแม่สมศรีในวันที่ 16 พ.ค. 2567 เวลา 08:30 น.", bookingId: "CG-240516-0897", highlight: true },
  { type: "caregiver", time: "08:30", title: "ผู้ดูแลจะโทรหาคุณก่อนวันนัด", body: "เพื่อยืนยันรายละเอียดการรับบริการ", bookingId: "CG-240516-0897" },
  { type: "caregiver", time: "07:55", title: "ผู้ดูแลกำลังเดินทางไปรับผู้ป่วย", body: "คาดว่าจะถึงภายใน 20 นาที", bookingId: "CG-240516-0897", highlight: true },
  { type: "booking", time: "เมื่อวาน 21:10", title: "ยืนยันการจองสำเร็จ", body: "การจองของคุณได้รับการยืนยันแล้ว วันที่ 16 พ.ค. 2567 เวลา 08:30 - 16:30 น.", bookingId: "CG-240516-0897" },
  { type: "system", time: "12 พ.ค. 2567", title: "อัปเดตระบบ", body: "เราได้ปรับปรุงระบบเพื่อประสบการณ์ที่ดียิ่งขึ้น ขอบคุณที่ไว้วางใจ CareGo", bookingId: null },
];

const faqs = [
  { title: "วิธีการจอง", subtitle: "ขั้นตอนการจองบริการ การเตรียมตัว และสิ่งที่ควรรู้" },
  { title: "การชำระเงิน", subtitle: "วิธีการชำระเงิน ใบเสร็จรับเงิน และการขอคืนเงิน" },
  { title: "การเลื่อนนัดและยกเลิก", subtitle: "การเปลี่ยนแปลงวันนัดหมาย และเงื่อนไขการยกเลิก" },
  { title: "ขอบเขตบริการ", subtitle: "บริการของเรา ครอบคลุมอะไรบ้าง" },
  { title: "ความปลอดภัยและข้อมูลส่วนตัว", subtitle: "มาตรการดูแลข้อมูล และความปลอดภัยของผู้ป่วย" },
];

const settings = [
  { title: "ข้อมูลส่วนตัว", subtitle: "ข้อมูลติดต่อ อีเมล และการยืนยันตัวตน" },
  { title: "สมาชิกครอบครัว", subtitle: "จัดการข้อมูลสมาชิกครอบครัวและผู้มีสิทธิ์ใช้งาน" },
  { title: "วิธีชำระเงิน", subtitle: "จัดการบัตรเครดิต/เดบิต และช่องทางการชำระเงิน" },
  { title: "ที่อยู่รับผู้ป่วย", subtitle: "จัดการที่อยู่สำหรับการรับ-ส่งผู้ป่วย" },
  { title: "การแจ้งเตือน", subtitle: "ตั้งค่าการแจ้งเตือนและช่องทางการรับข่าวสาร" },
  { title: "ภาษา", subtitle: "เปลี่ยนภาษาการใช้งานแอปพลิเคชัน", badge: "ภาษาไทย" },
  { title: "ความเป็นส่วนตัว", subtitle: "จัดการข้อมูลส่วนตัวและสิทธิ์ความเป็นส่วนตัว" },
  { title: "รหัสผ่านและความปลอดภัย", subtitle: "เปลี่ยนรหัสผ่าน ตั้งค่าความปลอดภัยของบัญชี" },
];

const routeTitles = {
  home: "หน้าหลัก",
  bookings: "การจอง",
  patients: "ผู้ป่วย",
  help: "ช่วยเหลือ",
  profile: "บัญชี",
};

const allowedRoutes = new Set([
  "home",
  "booking-step-1",
  "booking-step-2",
  "booking-step-3",
  "booking-step-4",
  "booking-step-5",
  "bookings",
  "booking-detail",
  "tracking",
  "patients",
  "patient-add",
  "patient-detail",
  "notifications",
  "help",
  "profile",
]);

function icon(name, size = 22) {
  const common = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"`;
  const icons = {
    home: `<svg ${common}><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10.5V20h14v-9.5"/></svg>`,
    calendar: `<svg ${common}><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>`,
    users: `<svg ${common}><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="8" r="3.5"/><path d="M21 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 4.13a3.5 3.5 0 0 1 0 6.74"/></svg>`,
    help: `<svg ${common}><circle cx="12" cy="12" r="10"/><path d="M9 9a3 3 0 0 1 6 0c0 2-3 2.4-3 5"/><circle cx="12" cy="17" r="1"/></svg>`,
    bell: `<svg ${common}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>`,
    phone: `<svg ${common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.82.35 1.6.68 2.33a2 2 0 0 1-.45 2.11L8.1 9.91a16 16 0 0 0 6 6l1.75-1.25a2 2 0 0 1 2.11-.45c.74.33 1.53.56 2.36.69A2 2 0 0 1 22 16.92Z"/></svg>`,
    shield: `<svg ${common}><path d="M12 3 5 6v6c0 5 3.5 8.5 7 9 3.5-.5 7-4 7-9V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></svg>`,
    heart: `<svg ${common}><path d="m12 20-7-7a4.5 4.5 0 0 1 6.36-6.36L12 7.22l.64-.58A4.5 4.5 0 0 1 19 13l-7 7Z"/></svg>`,
    plus: `<svg ${common}><path d="M12 5v14M5 12h14"/></svg>`,
    check: `<svg ${common}><path d="m5 12 4 4 10-10"/></svg>`,
    chevronRight: `<svg ${common}><path d="m9 6 6 6-6 6"/></svg>`,
    chevronLeft: `<svg ${common}><path d="m15 6-6 6 6 6"/></svg>`,
    hospital: `<svg ${common}><path d="M3 21h18"/><path d="M5 21V8l7-4v17"/><path d="M19 21V11l-5-3"/><path d="M9 10h.01M9 14h.01M9 18h.01M13 10h.01M13 14h.01M13 18h.01"/></svg>`,
    car: `<svg ${common}><path d="M5 16 3.5 11l2-4h13l2 4L19 16"/><path d="M5 16h14"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>`,
    qr: `<svg ${common}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zM20 14v2M14 20h2M18 18h3v3"/></svg>`,
    userPlus: `<svg ${common}><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="8" r="3.5"/><path d="M19 8v6M16 11h6"/></svg>`,
    route: `<svg ${common}><circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M8.5 17.5c3.5-5.5 6-6 7.5-6.5"/><path d="M8 8c2 1 3.5 1.5 5.5 1.5"/></svg>`,
    star: `<svg ${common}><path d="m12 2.5 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17l-5.5 2.7 1-6.2L3 9.1l6.2-.9L12 2.5Z"/></svg>`,
    info: `<svg ${common}><circle cx="12" cy="12" r="10"/><path d="M12 8h.01M11 12h1v4h1"/></svg>`,
    wheelchair: `<svg ${common}><circle cx="10" cy="17" r="4"/><path d="M10 7h2l2 5h5"/><path d="M11 9 8 14"/><path d="M14 18h4"/></svg>`,
    note: `<svg ${common}><path d="M14 3H6a2 2 0 0 0-2 2v14l4-3h10a2 2 0 0 0 2-2V9Z"/><path d="M14 3v6h6"/></svg>`,
    menu: `<svg ${common}><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
    wallet: `<svg ${common}><path d="M4 7h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4z"/><path d="M4 7V5a2 2 0 0 1 2-2h10"/><path d="M20 12h-5"/></svg>`,
    user: `<svg ${common}><circle cx="12" cy="8" r="4"/><path d="M6 20a6 6 0 0 1 12 0"/></svg>`,
    gear: `<svg ${common}><path d="M12 8.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Z"/><path d="m19.4 15 .1 0 .1.1a1.7 1.7 0 0 1 0 2.4l-.3.3a1.7 1.7 0 0 1-2.4 0l-.1-.1a1.5 1.5 0 0 0-1.5-.3 1.5 1.5 0 0 0-.9 1.3V19a1.7 1.7 0 0 1-1.7 1.7h-.5A1.7 1.7 0 0 1 10.5 19v-.1a1.5 1.5 0 0 0-.9-1.3 1.5 1.5 0 0 0-1.5.3l-.1.1a1.7 1.7 0 0 1-2.4 0l-.3-.3a1.7 1.7 0 0 1 0-2.4l.1-.1a1.5 1.5 0 0 0 .3-1.5 1.5 1.5 0 0 0-1.3-.9H4a1.7 1.7 0 0 1-1.7-1.7v-.5A1.7 1.7 0 0 1 4 8.5h.1a1.5 1.5 0 0 0 1.3-.9 1.5 1.5 0 0 0-.3-1.5l-.1-.1a1.7 1.7 0 0 1 0-2.4l.3-.3a1.7 1.7 0 0 1 2.4 0l.1.1a1.5 1.5 0 0 0 1.5.3 1.5 1.5 0 0 0 .9-1.3V2.9A1.7 1.7 0 0 1 11.9 1h.5a1.7 1.7 0 0 1 1.7 1.9v.1a1.5 1.5 0 0 0 .9 1.3 1.5 1.5 0 0 0 1.5-.3l.1-.1a1.7 1.7 0 0 1 2.4 0l.3.3a1.7 1.7 0 0 1 0 2.4l-.1.1a1.5 1.5 0 0 0-.3 1.5 1.5 1.5 0 0 0 1.3.9h.1a1.7 1.7 0 0 1 1.7 1.7v.5A1.7 1.7 0 0 1 20 14h-.1a1.5 1.5 0 0 0-1.4 1Z"/></svg>`,
    message: `<svg ${common}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>`,
    card: `<svg ${common}><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 10h19"/></svg>`,
    copy: `<svg ${common}><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  };
  return icons[name] || "";
}

function getSelectedPatient() {
  return patients.find((patient) => patient.id === appState.selectedPatientId) || patients[0];
}

function formatBaht(value) {
  return `${value.toLocaleString("th-TH")} บาท`;
}

function packagePrice(packageKey) {
  return packageKey === "full" ? 4400 : 2600;
}

function appTotal() {
  return packagePrice(appState.selectedPackage) + (appState.addOnHomeVisit ? 500 : 0);
}

function statusMeta(status) {
  if (status === "confirmed") return { label: "ยืนยันแล้ว", className: "success" };
  if (status === "matching") return { label: "กำลังจับคู่ผู้ดูแล", className: "orange" };
  if (status === "completed") return { label: "เสร็จสิ้น", className: "success" };
  if (status === "cancelled") return { label: "ยกเลิก", className: "red" };
  return { label: "กำลังดำเนินการ", className: "orange" };
}

function shell(content, { showNav = true, activeNav = "home" } = {}) {
  return `
    <div class="desktop-stage">
      <div class="device">
        <div class="screen">
          ${statusBar()}
          ${content}
        </div>
        ${showNav ? bottomNav(activeNav) : ""}
      </div>
    </div>
  `;
}

function statusBar() {
  return `
    <div class="statusbar">
      <div>9:41</div>
      <div class="status-icons">
        <span class="signal">${icon("menu", 14)}</span>
        <span class="wifi">${icon("help", 14)}</span>
        <span class="battery"><svg width="24" height="12" viewBox="0 0 24 12" fill="none"><rect x="1" y="1" width="20" height="10" rx="3" stroke="black" stroke-width="1.6"/><rect x="22" y="4" width="2" height="4" rx="1" fill="black"/><rect x="3" y="3" width="14" height="6" rx="2" fill="black"/></svg></span>
      </div>
    </div>
  `;
}

function brand() {
  return `<div class="brand">Care<span>Go</span></div>`;
}

function topbar({ back = false, contact = false, bell = false, centerBrand = true, help = false } = {}) {
  return `
    <div class="topbar ${centerBrand ? "" : "center"}">
      <div class="topbar-side">
        ${back ? `<button class="icon-circle" data-route-back="true">${icon("chevronLeft", 24)}</button>` : ""}
      </div>
      ${brand()}
      <div class="topbar-side right">
        ${contact ? `<button class="icon-pill" data-route="help">${icon("phone", 22)}<small>ติดต่อเรา</small></button>` : ""}
        ${bell ? `<button class="icon-circle" style="position:relative" data-route="notifications">${icon("bell", 24)}<span class="badge-dot"></span></button>` : ""}
        ${help ? `<button class="icon-circle" data-route="help">${icon("help", 24)}</button>` : ""}
      </div>
    </div>
  `;
}

function bottomNav(active) {
  const items = [
    ["home", "หน้าหลัก", "home"],
    ["bookings", "การจอง", "calendar"],
    ["patients", "ผู้ป่วย", "users"],
    ["help", "ช่วยเหลือ", "message"],
    ["profile", "บัญชี", "user"],
  ];
  return `
    <nav class="bottom-nav">
      ${items
        .map(
          ([route, label, iconName]) => `
            <button class="nav-item ${active === route ? "active" : ""}" data-route="${route}">
              <span class="nav-icon">${icon(iconName, 24)}</span>
              <span>${label}</span>
            </button>`,
        )
        .join("")}
    </nav>
  `;
}

function stepper(step) {
  const dots = [1, 2, 3, 4, 5];
  return `
    <div class="stepper">
      <div class="step-track">
        ${dots
          .map((num, index) => {
            const cls = num < step ? "done" : num === step ? "active" : "";
            const content = num < step ? icon("check", 18) : num;
            return `
              <div class="step-dot ${cls}">${content}</div>
              ${index < dots.length - 1 ? `<div class="step-line"></div>` : ""}
            `;
          })
          .join("")}
      </div>
      <div class="step-caption">ขั้นตอน ${step} จาก 5</div>
    </div>
  `;
}

function sectionHeader(title, subtitle, right = "") {
  return `
    <div class="section-title">
      <div>
        <h2 class="page-title">${title}</h2>
        ${subtitle ? `<div class="page-subtitle">${subtitle}</div>` : ""}
      </div>
      ${right}
    </div>
  `;
}

function routeBack() {
  const backMap = {
    "booking-step-1": "home",
    "booking-step-2": "booking-step-1",
    "booking-step-3": "booking-step-2",
    "booking-step-4": "booking-step-3",
    "booking-step-5": "booking-step-4",
    "booking-detail": "bookings",
    tracking: "booking-detail",
    "patient-add": "patients",
    "patient-detail": "patients",
    notifications: "home",
    help: "home",
    profile: "home",
  };
  appState.route = backMap[appState.route] || "home";
  syncHash();
  render();
}

function go(route) {
  appState.route = route;
  syncHash();
  render();
}

function syncHash() {
  const nextHash = `#${appState.route}`;
  if (window.location.hash !== nextHash) {
    window.location.hash = nextHash;
  }
}

function heroHome() {
  return `
    <div class="card hero">
      <div class="hero-grid">
        <div class="hero-content">
          <h2>พาผู้ป่วยไปศิริราช<br /><span>อย่างอุ่นใจ</span></h2>
          <p>มีผู้ดูแลไปด้วยตลอดเส้นทาง ดูแลใกล้ชิด ไม่ทิ้ง ไม่หายห่วง</p>
          <button class="primary-btn" data-route="booking-step-1">
            ${icon("calendar", 24)}
            <span>เริ่มจองบริการ</span>
          </button>
        </div>
        <div class="hero-visual">
          <div class="care-scene">
            <div class="hospital-badge">ศิริราช</div>
            <div class="building"></div>
            <div class="figure caregiver">
              <div class="figure-head"></div>
              <div class="figure-body"></div>
              <div class="figure-arm"></div>
              <div class="figure-label">CareGo</div>
            </div>
            <div class="figure patient">
              <div class="figure-head"></div>
              <div class="figure-body"></div>
              <div class="figure-arm"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function homePage() {
  const patient = getSelectedPatient();
  const upcoming = bookings[0];
  return shell(`
    ${topbar({ bell: true })}
    <div class="greeting">
      <div class="avatar photo-1" data-initials="W"></div>
      <div>
        <h1>สวัสดีค่ะ คุณวรรณา</h1>
        <div class="page-subtitle">ให้เราดูแลคนที่คุณรัก ไปศิริราชอย่างอุ่นใจ</div>
      </div>
    </div>
    ${heroHome()}
    <div class="spacer-18"></div>
    <div class="grid-3">
      <button class="quick-card" data-route="booking-step-1">
        <div class="icon-tile">${icon("calendar", 24)}</div>
        <h3>จองใหม่</h3>
        <p>เริ่มจองบริการ</p>
      </button>
      <button class="quick-card" data-route="bookings">
        <div class="icon-tile blue">${icon("wallet", 24)}</div>
        <h3>การจองของฉัน</h3>
        <p>ดูสถานะการจอง</p>
      </button>
      <button class="quick-card" data-route="patients">
        <div class="icon-tile">${icon("users", 24)}</div>
        <h3>ผู้ป่วยของฉัน</h3>
        <p>จัดการข้อมูลผู้ป่วย</p>
      </button>
    </div>
    <div class="spacer-12"></div>
    <div class="grid-3">
      <div class="trust-card">
        <div class="icon-tile blue">${icon("shield", 24)}</div>
        <h3>ผู้ดูแลผ่านการอบรม</h3>
        <p>เชี่ยวชาญในการดูแลและการประสานงาน</p>
      </div>
      <div class="trust-card">
        <div class="icon-tile">${icon("phone", 24)}</div>
        <h3>อัปเดตสดให้ครอบครัว</h3>
        <p>รายงานความคืบหน้าตลอดการเดินทาง</p>
      </div>
      <div class="trust-card">
        <div class="icon-tile red">${icon("heart", 24)}</div>
        <h3>บริการสำหรับผู้ป่วยทั่วไป</h3>
        <p>ไม่ใช่บริการฉุกเฉิน ไม่รวมค่ารักษาพยาบาล</p>
      </div>
    </div>
    <div class="spacer-18"></div>
    ${sectionHeader("แพ็กเกจของเรา", "", `<button class="muted" data-route="booking-step-3">ดูรายละเอียดทั้งหมด</button>`)}
    <div class="packages">
      <div class="card package-card">
        <div class="pill">${icon("calendar", 12)} ประมาณ 5 ชม.</div>
        <div class="spacer-12"></div>
        <div class="package-title">ครึ่งวัน</div>
        <p class="small">เหมาะสำหรับนัดตรวจทั่วไป หรือทำธุระช่วงเช้า/บ่าย</p>
        <div class="price"><strong>2,900</strong> บาท</div>
        <p class="small">ครอบคลุมไป-กลับ</p>
        <div class="avatar photo-1" data-initials="น"></div>
      </div>
      <div class="card package-card">
        <div class="pill">${icon("shield", 12)} ประมาณ 10 ชม.</div>
        <div class="spacer-12"></div>
        <div class="package-title">เต็มวัน</div>
        <p class="small">เหมาะสำหรับนัดหลายรายการ หรือทำหัตถการ</p>
        <div class="price"><strong>4,900</strong> บาท</div>
        <p class="small">ครอบคลุมไป-กลับ</p>
        <div class="avatar photo-4" data-initials="ม"></div>
      </div>
    </div>
    <div class="spacer-18"></div>
    ${sectionHeader("การจองที่กำลังจะมาถึง")}
    <div class="card summary-card">
      <div class="booking-highlight">
        <div class="date-chip">
          <div class="label">พฤหัสบดี</div>
          <strong>22</strong>
          <div class="muted">พ.ค. 2567</div>
        </div>
        <div class="stack">
          <div class="split">
            <div>
              <div class="price"><strong style="font-size:24px">08:00 - 13:00 น.</strong></div>
              <div class="muted">${upcoming.packageLabel}</div>
            </div>
            <div class="pill success">${statusMeta(upcoming.status).label}</div>
          </div>
          <div class="package-title" style="font-size:24px">${upcoming.hospital}</div>
          <div class="route">${icon("route", 18)} รับที่บ้าน → โรงพยาบาลศิริราช</div>
          <div class="split">
            <div class="muted">${patient.name}</div>
            <button class="icon-circle" data-route="booking-detail">${icon("chevronRight", 22)}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="spacer-18"></div>
    <div class="card contact-card">
      <div class="icon-tile outline">${icon("phone", 22)}</div>
      <div>
        <div class="package-title" style="font-size:20px">ต้องการความช่วยเหลือ?</div>
        <div class="page-subtitle">โทรหาเราได้ทุกวัน 06:00 - 20:00 น.</div>
      </div>
      <div class="package-title" style="font-size:20px;color:var(--teal-2)">02-012-5555</div>
    </div>
  `, { activeNav: "home" });
}

function bookingStep1Page() {
  const selectedPatient = getSelectedPatient();
  const purposes = [
    ["doctor", "พบแพทย์", "hospital"],
    ["pharmacy", "รับยา", "wallet"],
    ["followup", "ตรวจตามนัด", "calendar"],
    ["multi", "หลายแผนก", "route"],
  ];
  return shell(`
    ${topbar({ back: true, contact: true })}
    ${stepper(1)}
    ${sectionHeader("จองคิว CareGo", "วันนี้คุณต้องการให้ CareGo ดูแลผู้ป่วยท่านใด")}
    <div class="stack">
      <button class="select-card ${appState.selectedPatientId === selectedPatient.id ? "active" : ""}" data-select-patient="${selectedPatient.id}">
        <div class="avatar ${selectedPatient.photo}" data-initials="${selectedPatient.initials}"></div>
        <div style="text-align:left">
          <h3>ผู้ป่วยเดิม</h3>
          <div class="page-subtitle">เลือกจากรายชื่อผู้ป่วยที่คุณเคยบันทึกไว้</div>
          <div class="small" style="margin-top:8px">${selectedPatient.name}</div>
        </div>
        <div class="tick">${icon("check", 18)}</div>
      </button>
      <button class="select-card" data-route="patient-add">
        <div class="avatar photo-1" data-initials="+"></div>
        <div style="text-align:left">
          <h3>เพิ่มผู้ป่วยใหม่</h3>
          <div class="page-subtitle">เพิ่มข้อมูลผู้ป่วยเพื่อจองบริการ</div>
        </div>
        <div>${icon("chevronRight", 20)}</div>
      </button>
      <div class="card hero soft" style="min-height:auto;padding:18px">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="package-title" style="font-size:22px">CareGo ดูแลอะไรบ้าง</div>
            <p style="font-size:16px;margin:10px 0 0">ผู้ดูแลมืออาชีพพาผู้ป่วยจากบ้านไปศิริราช ดูแลตลอดการเดินทาง ประสานงานในโรงพยาบาล และพากลับบ้านอย่างปลอดภัย</p>
            <div class="grid-3" style="margin-top:14px">
              <div class="small"><strong style="color:var(--navy)">ผู้ดูแลผ่านการอบรม</strong><br/>เชี่ยวชาญและใส่ใจ</div>
              <div class="small"><strong style="color:var(--navy)">ไป-กลับ ปลอดภัย</strong><br/>ดูแลตลอดเส้นทาง</div>
              <div class="small"><strong style="color:var(--navy)">ประสานงานครบ</strong><br/>สะดวก ไม่ต้องกังวล</div>
            </div>
          </div>
          <div class="hero-visual">
            <div class="care-scene" style="min-height:190px">
              <div class="hospital-badge">ศิริราช</div>
              <div class="building"></div>
              <div class="figure caregiver"><div class="figure-head"></div><div class="figure-body"></div><div class="figure-arm"></div></div>
              <div class="figure patient"><div class="figure-head"></div><div class="figure-body"></div><div class="figure-arm"></div></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="package-title" style="font-size:22px;margin-bottom:12px">วัตถุประสงค์ในการจอง</div>
        <div class="purpose-grid">
          ${purposes
            .map(
              ([id, label, iconName]) => `
                <button class="chip ${appState.selectedPurpose === id ? "active" : ""}" data-select-purpose="${id}">
                  ${icon(iconName, 22)}
                  <span>${label}</span>
                </button>
              `,
            )
            .join("")}
        </div>
      </div>
      <div class="summary-bar">
        <div class="summary-inner">
          <button class="primary-btn" data-route="booking-step-2">ไปต่อ</button>
          <div class="footer-note">ข้อมูลของคุณปลอดภัย เราไม่เปิดเผยข้อมูลแก่บุคคลที่สาม</div>
        </div>
      </div>
    </div>
  `, { showNav: false });
}

function bookingStep2Page() {
  const departments = [
    ["medicine", "อายุรกรรม"],
    ["surgery", "ศัลยกรรม"],
    ["pharmacy", "รับยา"],
    ["special", "ตรวจพิเศษ"],
    ["other", "อื่น ๆ"],
  ];
  const dates = [
    ["2026-05-22", "พฤ.", "22"],
    ["2026-05-23", "ศ.", "23"],
    ["2026-05-24", "ส.", "24"],
    ["2026-05-25", "อา.", "25"],
    ["2026-05-26", "จ.", "26"],
    ["2026-05-27", "อ.", "27"],
    ["2026-05-28", "พ.", "28"],
  ];
  const morningSlots = ["08:00 - 12:00", "09:00 - 13:00", "10:00 - 14:00", "11:00 - 15:00"];
  const afternoonSlots = ["12:00 - 16:00", "13:00 - 17:00", "14:00 - 18:00", "08:00 - 17:00"];
  return shell(`
    ${topbar({ back: true, contact: true })}
    ${stepper(2)}
    ${sectionHeader("เลือกสถานที่ วัน และเวลา", "เพื่อให้ CareGo วางแผนการเดินทางและเตรียมผู้ดูแลให้เหมาะสม")}
    <div class="stack">
      <div class="hospital-card card">
        <div class="hospital-thumb"></div>
        <div>
          <div class="package-title" style="font-size:28px">โรงพยาบาลศิริราช</div>
          <div class="page-subtitle">เขตบางกอกน้อย กรุงเทพมหานคร</div>
          <div class="spacer-8"></div>
          <div class="pill success">${icon("check", 12)} โรงพยาบาลหลักของเรา</div>
        </div>
        <div>${icon("chevronRight", 24)}</div>
      </div>
      <div>
        <div class="package-title" style="font-size:22px;margin-bottom:10px">แผนก / วัตถุประสงค์</div>
        <div class="chip-grid">
          ${departments
            .map(
              ([id, label]) => `
                <button class="chip ${appState.selectedDepartment === id ? "active" : ""}" data-select-department="${id}">
                  ${icon(id === "medicine" ? "hospital" : id === "pharmacy" ? "wallet" : id === "special" ? "shield" : id === "surgery" ? "note" : "menu", 22)}
                  <span>${label}</span>
                </button>`,
            )
            .join("")}
        </div>
      </div>
      <div class="route-card card">
        <div class="package-title" style="font-size:22px;margin-bottom:10px">จุดรับผู้ป่วย</div>
        <div class="split">
          <div>
            <div class="package-title" style="font-size:20px">บ้าน</div>
            <div class="page-subtitle">หมู่บ้านเพลินใจ ถนนบรมราชชนนี</div>
          </div>
          <div class="route">${icon("car", 20)} → ${icon("hospital", 20)}</div>
          <div style="text-align:right">
            <div class="package-title" style="font-size:20px">ศิริราช</div>
            <div class="page-subtitle">รพ.ศิริราช</div>
          </div>
        </div>
      </div>
      <div>
        <div class="package-title" style="font-size:22px;margin-bottom:10px">เลือกวันที่ต้องการ</div>
        <div class="date-scroll">
          ${dates
            .map(
              ([value, label, day]) => `
                <button class="date-card ${appState.selectedDate === value ? "active" : ""}" data-select-date="${value}">
                  <div>${label}</div>
                  <strong>${day}</strong>
                  <div class="muted">พ.ค.</div>
                </button>`,
            )
            .join("")}
          <button class="date-card">${icon("calendar", 24)}<div class="muted">ดูปฏิทิน</div></button>
        </div>
      </div>
      <div>
        <div class="package-title" style="font-size:22px;margin-bottom:10px">เลือกช่วงเวลา</div>
        <div class="label" style="margin-bottom:8px">ช่วงเช้า</div>
        <div class="slot-grid">
          ${morningSlots
            .map(
              (slot) => `
                <button class="slot-card ${appState.selectedSlot === slot ? "active" : ""}" data-select-slot="${slot}">
                  <strong>${slot}</strong>
                  <div class="muted">ว่าง</div>
                </button>`,
            )
            .join("")}
        </div>
        <div class="label" style="margin:16px 0 8px">ช่วงบ่าย</div>
        <div class="slot-grid">
          ${afternoonSlots
            .map(
              (slot) => `
                <button class="slot-card ${appState.selectedSlot === slot ? "active" : ""}" data-select-slot="${slot}">
                  <strong>${slot}</strong>
                  <div class="muted">ว่าง</div>
                </button>`,
            )
            .join("")}
        </div>
      </div>
      <div class="notice">
        <div class="icon-tile outline">${icon("car", 18)}</div>
        <div>
          <div class="package-title" style="font-size:20px">การเดินทางโดยประมาณ</div>
          <div>จากบ้าน ถึง ศิริราช ใช้เวลาประมาณ 35-45 นาที ระยะทางประมาณ 14 กม. (อาจเปลี่ยนแปลงตามสภาพการจราจร)</div>
        </div>
      </div>
      <div class="summary-bar">
        <div class="summary-inner">
          <button class="primary-btn" data-route="booking-step-3">
            ยืนยันช่วงเวลา ${new Date(appState.selectedDate).getDate()} พ.ค. 2567 · ${appState.selectedSlot}
          </button>
        </div>
      </div>
    </div>
  `, { showNav: false });
}

function bookingStep3Page() {
  const details = [
    ["สถานะผู้ป่วยในปัจจุบัน", "แข็งแรงดี / ผู้สูงอายุทั่วไป"],
    ["การเคลื่อนไหว", "ผู้ป่วยเดินเองได้"],
    ["ต้องใช้รถเข็นหรือไม่", "ไม่ต้องใช้รถเข็น"],
    ["มีเอกสารหรือยาที่ต้องรับกลับ", "มี"],
    ["ผู้ติดต่อฉุกเฉิน", "คุณนัท (บุตร) 081-234-5678"],
    ["หมายเหตุเพิ่มเติมสำหรับผู้ดูแล", "ไม่มี"],
  ];
  return shell(`
    ${topbar({ back: true, contact: true })}
    ${stepper(3)}
    ${sectionHeader("เลือกราคาและรายละเอียด", "เลือกแพ็กเกจที่เหมาะสมกับแผนการเดินทางของคุณ")}
    <div class="stack">
      <div class="package-choice">
        <button class="card package-option ${appState.selectedPackage === "half" ? "active" : ""}" data-select-package="half">
          <div class="package-title">ครึ่งวัน</div>
          <div class="page-subtitle">ประมาณ 5 ชั่วโมง</div>
          <div class="price"><strong>2,600</strong> บาท</div>
          <ul>
            <li>รับ-ส่ง ถึง รพ.ศิริราช</li>
            <li>ดูแลตลอดการเดินทาง</li>
            <li>ประสานงานที่โรงพยาบาล</li>
            <li>ช่วยเหลือรับยา / พบแพทย์</li>
          </ul>
        </button>
        <button class="card package-option ${appState.selectedPackage === "full" ? "active" : ""}" data-select-package="full">
          <div class="pill success" style="width:max-content">แนะนำ</div>
          <div class="package-title" style="margin-top:8px">เต็มวัน</div>
          <div class="page-subtitle">ประมาณ 10 ชั่วโมง</div>
          <div class="price"><strong>4,400</strong> บาท</div>
          <ul>
            <li>รับ-ส่ง ถึง รพ.ศิริราช</li>
            <li>ดูแลตลอดการเดินทาง</li>
            <li>ประสานงานที่โรงพยาบาล</li>
            <li>ช่วยเหลือรับยา / พบแพทย์</li>
            <li>ช่วยจัดการหลายแผนก</li>
          </ul>
        </button>
      </div>
      <button class="card detail-row" data-toggle-addon="true">
        <div class="icon-tile outline">${icon("heart", 18)}</div>
        <div>
          <strong>ติดตามอาการที่บ้าน</strong>
          <div class="page-subtitle">ติดตามอาการหลังกลับบ้าน 1 ครั้ง ภายใน 24 ชม. โดยพยาบาลวิชาชีพ</div>
        </div>
        <div style="display:flex;align-items:center;gap:12px">
          <strong>+ 500 บาท</strong>
          <div class="tick" style="${appState.addOnHomeVisit ? "background:linear-gradient(135deg, var(--teal), var(--teal-2));color:#fff;border-color:transparent;" : ""}">${appState.addOnHomeVisit ? icon("check", 18) : ""}</div>
        </div>
      </button>
      <div class="card detail-list">
        ${details
          .map(
            ([label, value], index) => `
              <button class="detail-row" ${index === 4 ? `data-route="patient-detail"` : ""}>
                <div class="muted">${icon(index === 1 ? "user" : index === 2 ? "wheelchair" : index === 4 ? "users" : index === 5 ? "note" : index === 3 ? "wallet" : "heart", 18)}</div>
                <div style="text-align:left">
                  <strong>${label}</strong>
                </div>
                <span>${value}</span>
              </button>`,
          )
          .join("")}
      </div>
      <div class="notice warn">
        <div class="icon-tile outline" style="background:rgba(255,155,104,.12);color:#e78a57">${icon("shield", 18)}</div>
        <div>
          <div class="package-title" style="font-size:20px">บริการของเราไม่ใช่บริการฉุกเฉิน</div>
          <div>หากเป็นกรณีฉุกเฉิน กรุณาโทร 1669 หรือไปโรงพยาบาลใกล้ที่สุด</div>
        </div>
      </div>
      <div class="summary-bar">
        <div class="summary-inner">
          <div class="split">
            <div>
              <div class="muted">สรุปการจอง</div>
              <div class="package-title" style="font-size:20px">${appState.selectedPackage === "full" ? "แพ็กเกจเต็มวัน" : "แพ็กเกจครึ่งวัน"}</div>
              <div class="page-subtitle">23 พ.ค. 2567 • ${appState.selectedSlot}</div>
            </div>
            <div class="price"><strong style="font-size:28px">${appTotal().toLocaleString("th-TH")}</strong> บาท</div>
          </div>
          <button class="primary-btn" data-route="booking-step-4">ไปต่อ (ขั้นตอนถัดไป)</button>
          <div class="footer-note">ข้อมูลของคุณปลอดภัย เราไม่เปิดเผยข้อมูลแก่บุคคลที่สาม</div>
        </div>
      </div>
    </div>
  `, { showNav: false });
}

function bookingStep4Page() {
  const patient = getSelectedPatient();
  const total = appTotal();
  const methods = [
    ["promptpay", "QR พร้อมเพย์"],
    ["card", "บัตรเครดิต / เดบิต"],
    ["bank", "โอนผ่านธนาคาร"],
  ];
  return shell(`
    ${topbar({ back: true, contact: true })}
    ${stepper(4)}
    ${sectionHeader("ชำระเงิน", "ตรวจสอบรายละเอียดและชำระเงินเพื่อยืนยันการจอง")}
    <div class="stack">
      <div class="card summary-card">
        <div class="split">
          <div class="package-title" style="font-size:24px">สรุปรายการจอง</div>
          <button class="ghost-btn" style="width:auto;padding:0 16px;min-height:46px" data-route="booking-step-3">${icon("note", 18)} แก้ไข</button>
        </div>
        <div class="booking-top">
          <div class="mini-hospital"></div>
          <div>
            <div class="package-title" style="font-size:22px">โรงพยาบาลศิริราช</div>
            <div class="page-subtitle">เขตบางกอกน้อย กรุงเทพมหานคร</div>
            <div class="spacer-8"></div>
            <div class="page-subtitle">วันที่ 23 พ.ค. 2567</div>
            <div class="page-subtitle">${appState.selectedSlot} (${appState.selectedPackage === "full" ? "เต็มวัน" : "ครึ่งวัน"})</div>
          </div>
          <div class="stack">
            <div class="small">${patient.name}</div>
            <div class="small">อายุ ${patient.age} ปี</div>
          </div>
        </div>
      </div>
      <div class="card pad">
        <div class="package-title" style="font-size:22px">รายละเอียดราคา</div>
        <div class="spacer-12"></div>
        <div class="split"><span class="page-subtitle">ค่าบริการ${appState.selectedPackage === "full" ? "แพ็กเกจเต็มวัน" : "แพ็กเกจครึ่งวัน"}</span><strong>${formatBaht(packagePrice(appState.selectedPackage))}</strong></div>
        <div class="split"><span class="page-subtitle">ค่าติดตามอาการที่บ้าน</span><strong>${formatBaht(appState.addOnHomeVisit ? 500 : 0)}</strong></div>
        <div class="split"><span class="page-subtitle">ค่าบริการเพิ่มเติม</span><strong>0 บาท</strong></div>
        <div class="spacer-12"></div>
        <div class="split"><div class="package-title" style="font-size:24px">ยอดรวม</div><div class="price"><strong style="font-size:32px">${total.toLocaleString("th-TH")}</strong> บาท</div></div>
      </div>
      <div class="card pad">
        <div class="detail-row" style="padding:0;border-bottom:0">
          <div class="muted">${icon("note", 18)}</div>
          <div style="text-align:left"><strong>ใส่โค้ดส่วนลด (ถ้ามี)</strong></div>
          <button class="pill">ใช้โค้ด</button>
        </div>
      </div>
      <div class="card payment-methods">
        <div class="package-title" style="font-size:22px;margin-bottom:12px">ช่องทางชำระเงิน</div>
        <div class="payment-option-row">
          ${methods
            .map(
              ([value, label]) => `
                <button class="payment-card card ${appState.selectedPayment === value ? "active" : ""}" data-select-payment="${value}">
                  <div class="split">
                    <div class="tick" style="${appState.selectedPayment === value ? "background:linear-gradient(135deg, var(--teal), var(--teal-2));color:#fff;border-color:transparent;" : ""}">${appState.selectedPayment === value ? icon("check", 18) : ""}</div>
                    ${value === "promptpay" ? `<div class="pill success">แนะนำ</div>` : ""}
                  </div>
                  <div class="package-title" style="font-size:18px">${label}</div>
                  <div class="page-subtitle">${value === "promptpay" ? "พร้อมเพย์" : value === "card" ? "VISA / MasterCard" : "โอนผ่านธนาคาร"}</div>
                </button>
              `,
            )
            .join("")}
        </div>
      </div>
      <div class="notice">
        <div class="icon-tile outline">${icon("shield", 18)}</div>
        <div>
          <div class="package-title" style="font-size:20px">ชำระเงินอย่างปลอดภัย</div>
          <div>ข้อมูลการชำระเงินของคุณได้รับการเข้ารหัส และข้อมูลผู้ป่วยจะถูกเก็บอย่างปลอดภัย</div>
        </div>
      </div>
      <div class="summary-bar">
        <div class="summary-inner">
          <div class="split">
            <div class="price"><strong style="font-size:34px">${total.toLocaleString("th-TH")}</strong> บาท</div>
            <button class="ghost-btn" style="width:auto;padding:0 12px;min-height:46px" data-route="booking-detail">ดูรายละเอียดการจอง</button>
          </div>
          <button class="primary-btn" data-route="booking-step-5">${icon("shield", 22)} ยืนยันและชำระเงิน</button>
          <div class="footer-note">ไม่ต้องกังวล หากมีเหตุจำเป็นสามารถยกเลิกได้ตามเงื่อนไขที่กำหนด</div>
        </div>
      </div>
    </div>
  `, { showNav: false });
}

function bookingStep5Page() {
  const patient = getSelectedPatient();
  return shell(`
    ${topbar({ contact: true })}
    ${stepper(5)}
    <div class="success-panel">
      <div class="hero-grid" style="align-items:center">
        <div>
          <div class="icon-circle" style="width:72px;height:72px;border-radius:24px;color:var(--teal-2)">${icon("check", 30)}</div>
          <div class="spacer-12"></div>
          <h1 class="page-title" style="font-size:42px">การจองสำเร็จแล้ว</h1>
          <p class="page-subtitle">ขอบคุณที่ให้ CareGo ดูแลคนที่คุณรัก เราอยู่เคียงข้าง เพื่อพาคนที่คุณรักไปศิริราชอย่างอุ่นใจ</p>
        </div>
        <div class="hero-visual">
          <div class="care-scene" style="min-height:210px">
            <div class="building"></div>
            <div class="figure caregiver"><div class="figure-head"></div><div class="figure-body"></div><div class="figure-arm"></div></div>
            <div class="figure patient"><div class="figure-head"></div><div class="figure-body"></div><div class="figure-arm"></div></div>
          </div>
        </div>
      </div>
      <div class="card coupon">
        <div class="coupon-grid">
          <div class="stack">
            <div class="split">
              <div class="package-title" style="font-size:24px">คูปองการจอง</div>
              <div>
                <div class="muted">รหัสการจอง</div>
                <div class="package-title" style="font-size:28px">CG-240518</div>
              </div>
            </div>
            <div class="pill success">${icon("check", 12)} ยืนยันแล้ว</div>
            <div class="page-subtitle">ผู้ป่วย: ${patient.name} (อายุ ${patient.age} ปี)</div>
            <div class="page-subtitle">โรงพยาบาล: โรงพยาบาลศิริราช</div>
            <div class="page-subtitle">วันและเวลา: ศ. 23 พ.ค. 2567 · ${appState.selectedSlot}</div>
            <div class="page-subtitle">แพ็กเกจ: ${appState.selectedPackage === "full" ? "แพ็กเกจเต็มวัน" : "แพ็กเกจครึ่งวัน"}</div>
            <div class="page-subtitle">จุดรับ-ส่ง: บ้าน → โรงพยาบาลศิริราช</div>
            <div class="page-subtitle">หมายเหตุ: ${patient.note}</div>
          </div>
          <div class="stack">
            <div class="card pad">
              <div class="qr"></div>
              <div class="footer-note" style="margin-top:10px">แสดงคูปองนี้ให้ผู้ดูแลในวันใช้บริการ</div>
            </div>
            <div class="card pad">
              <div class="package-title" style="font-size:20px">สถานะผู้ดูแล</div>
              <div class="spacer-8"></div>
              <div class="package-title" style="font-size:24px;color:var(--teal-2)">กำลังจับคู่ผู้ดูแล</div>
              <div class="page-subtitle">เราจะแจ้งข้อมูลผู้ดูแลให้คุณทราบเร็ว ๆ นี้</div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-row">
        <button class="secondary-btn" data-share="family">${icon("message", 18)} แชร์ให้ญาติ</button>
        <button class="secondary-btn" data-route="bookings">${icon("calendar", 18)} เพิ่มลงปฏิทิน</button>
        <button class="secondary-btn" data-route="booking-detail">${icon("note", 18)} ดูสถานะการจอง</button>
      </div>
      <div class="card pad">
        <div class="package-title" style="font-size:22px">ขั้นตอนถัดไป</div>
        <div class="spacer-12"></div>
        <div class="timeline">
          <div class="timeline-step done"><div class="line"><div class="timeline-dot"></div></div><div><strong>เรากำลังจับคู่ผู้ดูแลที่เหมาะสม</strong><div class="page-subtitle">จะแจ้งข้อมูลผู้ดูแลและเบอร์โทรติดต่อภายใน 2-4 ชม.</div></div></div>
          <div class="timeline-step active"><div class="line"><div class="timeline-dot"></div></div><div><strong>ผู้ดูแลจะติดต่อคุณก่อนวันนัด</strong><div class="page-subtitle">เพื่อยืนยันเวลา จุดรับ และรายละเอียดการดูแล</div></div></div>
          <div class="timeline-step"><div class="line"><div class="timeline-dot"></div></div><div><strong>วันเดินทาง</strong><div class="page-subtitle">ผู้ดูแลไปรับตามเวลานัดหมาย และดูแลตลอดเส้นทาง</div></div></div>
        </div>
      </div>
      <div class="notice">
        <div class="icon-tile outline">${icon("shield", 18)}</div>
        <div>
          <div class="package-title" style="font-size:20px">มั่นใจได้กับ CareGo</div>
          <div>บริการของเราไม่ใช่บริการฉุกเฉิน หากเป็นกรณีฉุกเฉิน กรุณาโทร 1669 หรือไปโรงพยาบาลที่ใกล้ที่สุด</div>
        </div>
      </div>
    </div>
  `, { activeNav: "bookings" });
}

function bookingsPage() {
  const tabs = [
    ["all", "ทั้งหมด"],
    ["upcoming", "กำลังจะมาถึง"],
    ["done", "เสร็จสิ้น"],
    ["cancelled", "ยกเลิก"],
  ];
  return shell(`
    ${topbar({ contact: true })}
    ${sectionHeader("การจองของฉัน", "ติดตามและจัดการการจองบริการของคุณ")}
    <div class="tab-row">
      ${tabs.map(([value, label], i) => `<button class="tab-chip ${i === 0 ? "active" : ""}">${label}</button>`).join("")}
    </div>
    <div class="spacer-18"></div>
    <div class="stack">
      ${bookings
        .map((booking, index) => {
          const patient = patients.find((item) => item.id === booking.patientId);
          const status = statusMeta(booking.status);
          return `
            <button class="booking-card ${index === 0 ? "card soft" : "card"}" data-route="${index === 0 ? "booking-detail" : "booking-detail"}">
              ${index === 0 ? `<div class="split"><div class="pill">${icon("calendar", 12)} กำลังจะมาถึง</div><div class="pill ${status.className}">${status.label}</div></div>` : ""}
              <div class="booking-top">
                <div class="${index === 0 ? "hospital-thumb" : "date-chip"}">
                  ${index === 0 ? "" : `<div class="label">${booking.dayLabel.split(" ")[0]}</div><strong>${booking.dayLabel.split(" ")[1]}</strong><div class="muted">${booking.monthLabel}</div>`}
                </div>
                <div style="text-align:left">
                  <div class="package-title" style="font-size:28px">${booking.hospital}</div>
                  <div class="page-subtitle">${booking.hospitalArea}</div>
                  <div class="spacer-8"></div>
                  <div class="route">${icon("calendar", 16)} ${booking.dateLabel} · ${booking.time}</div>
                  <div class="route">${icon("user", 16)} ${patient.name} (อายุ ${patient.age} ปี)</div>
                </div>
                <div style="text-align:right">
                  <div class="page-subtitle">${booking.packageLabel}</div>
                  ${index !== 0 ? `<div class="pill ${status.className}" style="margin-top:8px">${status.label}</div>` : ""}
                </div>
              </div>
              ${index === 0 ? `<div class="notice" style="padding:14px"><div class="icon-tile outline">${icon("users", 18)}</div><div><strong>กำลังจับคู่ผู้ดูแลที่เหมาะสม</strong><div class="page-subtitle">เราจะแจ้งข้อมูลผู้ดูแลให้คุณทราบเร็ว ๆ นี้</div></div></div>` : ""}
            </button>`;
        })
        .join("")}
      <div class="split">
        <div class="page-subtitle">ไม่พบการจองหรือไม่? ลองเปลี่ยนช่วงเวลา หรือจองบริการใหม่</div>
        <button class="primary-btn" style="width:auto;padding:0 20px;min-height:56px" data-route="booking-step-1">${icon("plus", 20)} จองใหม่</button>
      </div>
    </div>
  `, { activeNav: "bookings" });
}

function bookingDetailPage() {
  const patient = getSelectedPatient();
  const current = bookings[0];
  return shell(`
    ${topbar({ back: true, contact: true })}
    ${sectionHeader("รายละเอียดการจอง", "เราอยู่เคียงข้าง เพื่อพาคนที่คุณรักไปศิริราชอย่างอุ่นใจ", `<div class="pill success">${statusMeta(current.status).label}</div>`)}
    <div class="stack">
      <div class="card summary-card">
        <div class="booking-top">
          <div class="hospital-thumb"></div>
          <div>
            <div class="muted">รหัสการจอง</div>
            <div class="package-title" style="font-size:34px">${current.id}</div>
            <div class="package-title" style="font-size:22px">${current.hospital}</div>
            <div class="page-subtitle">${current.hospitalArea}</div>
            <div class="route">${icon("calendar", 16)} ${current.dateLabel} · ${current.time}</div>
          </div>
          <div class="pill">${current.packageLabel}</div>
        </div>
        <div class="card detail-list">
          <div class="detail-row"><div>${icon("user", 18)}</div><div><strong>ผู้ป่วย</strong></div><span>${patient.name} (อายุ ${patient.age} ปี)</span></div>
          <div class="detail-row"><div>${icon("wallet", 18)}</div><div><strong>แพ็กเกจและบริการ</strong></div><span>${current.packageLabel}</span></div>
          <div class="detail-row"><div>${icon("users", 18)}</div><div><strong>ผู้ดูแลประจำบริการ</strong></div><span>${current.caregiver}</span></div>
          <div class="detail-row"><div>${icon("route", 18)}</div><div><strong>จุดรับ-ส่ง</strong></div><span>${current.route}</span></div>
        </div>
      </div>
      <div class="card summary-card">
        <div class="package-title" style="font-size:22px">สิ่งที่รวมในบริการ</div>
        <div class="stack">
          <div class="route">${icon("check", 16)} รับ-ส่ง ถึง รพ.ศิริราช</div>
          <div class="route">${icon("check", 16)} ดูแลตลอดการเดินทาง</div>
          <div class="route">${icon("check", 16)} ประสานงานที่โรงพยาบาล</div>
          <div class="route">${icon("check", 16)} ช่วยเหลือรับยา / พบแพทย์</div>
          <div class="route">${icon("check", 16)} ช่วยจัดการหลายแผนก</div>
        </div>
      </div>
      <div class="card summary-card">
        <div class="split">
          <div class="package-title" style="font-size:22px">ผู้ดูแลประจำบริการ</div>
          <button class="icon-circle" data-route="tracking">${icon("chevronRight", 22)}</button>
        </div>
        <div class="split">
          <div>
            <div class="package-title" style="font-size:26px;color:var(--teal-2)">กำลังจับคู่ผู้ดูแลที่เหมาะสม</div>
            <div class="page-subtitle">เราจะแจ้งข้อมูลผู้ดูแลให้คุณทราบภายใน 2-4 ชม. ก่อนวันนัดหมาย</div>
          </div>
          <div class="avatar photo-4" data-initials="น"></div>
        </div>
      </div>
      <div class="card detail-list">
        <div class="detail-row"><div>${icon("users", 18)}</div><div><strong>ผู้ติดต่อฉุกเฉิน</strong></div><span>คุณนัท (บุตร) 081-234-5678</span></div>
        <div class="detail-row"><div>${icon("heart", 18)}</div><div><strong>สภาพผู้ป่วยในปัจจุบัน</strong></div><span>แข็งแรงดี / ผู้สูงอายุทั่วไป</span></div>
        <div class="detail-row"><div>${icon("note", 18)}</div><div><strong>หมายเหตุสำหรับผู้ดูแล</strong></div><span>${patient.note}</span></div>
      </div>
      <div class="card summary-card">
        <div class="package-title" style="font-size:22px">สิ่งที่ควรเตรียมในวันนัดหมาย</div>
        <div class="grid-2">
          <div class="chip active">บัตรประชาชนผู้ป่วยตัวจริง</div>
          <div class="chip active">บัตรนัด / ใบส่งตัว</div>
          <div class="chip active">ยาประจำตัวและรายการยา</div>
          <div class="chip active">เอกสาร/ผลตรวจ (ถ้ามี)</div>
        </div>
      </div>
      <div class="btn-row">
        <button class="secondary-btn" data-route="booking-step-2">${icon("calendar", 18)} เลื่อนนัด</button>
        <button class="danger-btn">${icon("help", 18)} ยกเลิกการจอง</button>
        <button class="secondary-btn">${icon("message", 18)} แชร์ให้ญาติ</button>
      </div>
      <div class="summary-bar">
        <div class="summary-inner">
          <div class="split">
            <div>
              <div class="package-title" style="font-size:20px">ต้องการความช่วยเหลือ?</div>
              <div class="page-subtitle">โทรหา CareGo ได้ตลอด 06:00 - 20:00 น.</div>
            </div>
            <button class="primary-btn" style="width:auto;padding:0 18px;min-height:56px" data-route="tracking">ติดตามสถานะ</button>
          </div>
        </div>
      </div>
    </div>
  `, { showNav: false });
}

function trackingPage() {
  return shell(`
    ${topbar({ back: true, help: true })}
    <div class="card status-banner" style="background:linear-gradient(135deg,#13b3aa,#18a6c7);color:#fff">
      <div class="pill" style="background:rgba(0,0,0,.16);color:#fff;width:max-content">วันนี้ 16 พ.ค. 2567</div>
      <div class="spacer-12"></div>
      <div class="page-title" style="font-size:32px;color:#fff">ผู้ดูแลกำลังเดินทาง<br/>ไปรับผู้ป่วย</div>
      <div class="page-subtitle" style="color:rgba(255,255,255,.9);font-size:18px">ใกล้ถึงในอีกประมาณ 25 นาที</div>
      <div class="spacer-12"></div>
      <div class="route" style="color:#fff">${icon("car", 18)} บ้าน → โรงพยาบาลศิริราช</div>
    </div>
    <div class="spacer-18"></div>
    <div class="card summary-card">
      <div class="split">
        <div>
          <div class="muted">รหัสการจอง</div>
          <div class="package-title" style="font-size:32px">CG-240516-0897</div>
        </div>
        <div class="pill success">ยืนยันแล้ว</div>
      </div>
      <div class="grid-2">
        <div class="small"><strong style="color:var(--navy)">ผู้ป่วย</strong><br/>คุณแม่สมศรี ใจดี อายุ 72 ปี</div>
        <div class="small"><strong style="color:var(--navy)">วันและเวลา</strong><br/>16 พ.ค. 2567 · 08:30 - 16:30 น.</div>
        <div class="small"><strong style="color:var(--navy)">แพ็กเกจ</strong><br/>แพ็กเกจเต็มวัน</div>
        <div class="small"><strong style="color:var(--navy)">จุดรับ-ส่ง</strong><br/>บ้าน > โรงพยาบาลศิริราช</div>
      </div>
    </div>
    <div class="spacer-18"></div>
    <div class="grid-2">
      <div class="card pad">
        <div class="timeline">
          <div class="timeline-step done"><div class="line"><div class="timeline-dot"></div></div><div><strong>ยืนยันแล้ว</strong><div class="page-subtitle">16 พ.ค. 2567 07:45</div></div></div>
          <div class="timeline-step done"><div class="line"><div class="timeline-dot"></div></div><div><strong>จับคู่ผู้ดูแล</strong><div class="page-subtitle">16 พ.ค. 2567 08:05</div></div></div>
          <div class="timeline-step active"><div class="line"><div class="timeline-dot"></div></div><div><strong>ผู้ดูแลกำลังเดินทาง</strong><div class="page-subtitle">ใกล้ถึงในอีกประมาณ 25 นาที</div></div></div>
          <div class="timeline-step"><div class="line"><div class="timeline-dot"></div></div><div><strong>รับผู้ป่วยแล้ว</strong><div class="page-subtitle">รออัปเดต</div></div></div>
          <div class="timeline-step"><div class="line"><div class="timeline-dot"></div></div><div><strong>ถึงโรงพยาบาล</strong><div class="page-subtitle">รออัปเดต</div></div></div>
          <div class="timeline-step"><div class="line"><div class="timeline-dot"></div></div><div><strong>เสร็จสิ้นบริการ</strong><div class="page-subtitle">รออัปเดต</div></div></div>
        </div>
      </div>
      <div class="stack">
        <div class="card pad">
          <div class="split">
            <div class="avatar photo-4" data-initials="ก"></div>
            <div>
              <div class="muted">ผู้ดูแลของคุณ</div>
              <div class="package-title" style="font-size:24px">กมลวรรณ (แนน)</div>
              <div class="page-subtitle">Care Companion · ⭐ 4.9 (120 รีวิว)</div>
            </div>
          </div>
          <div class="spacer-12"></div>
          <button class="primary-btn">${icon("phone", 18)} โทรหาผู้ดูแล</button>
          <div class="footer-note" style="margin-top:10px">ข้อมูลนี้ใช้สำหรับการบริการเท่านั้น</div>
        </div>
        <div class="card pad">
          <div class="package-title" style="font-size:22px">อัปเดตให้ครอบครัว</div>
          <div class="spacer-12"></div>
          ${notifications
            .slice(0, 3)
            .map(
              (item) => `
              <div class="detail-row" style="padding:12px 0;border-bottom:1px solid rgba(23,59,120,.08)">
                <div>${icon(item.type === "caregiver" ? "phone" : item.type === "booking" ? "calendar" : "shield", 18)}</div>
                <div style="text-align:left">
                  <strong>${item.title}</strong>
                  <div class="page-subtitle">${item.body}</div>
                </div>
                <span>${item.time}</span>
              </div>`,
            )
            .join("")}
        </div>
      </div>
    </div>
    <div class="spacer-18"></div>
    <div class="notice warn">
      <div class="icon-tile red">${icon("info", 18)}</div>
      <div>
        <div class="package-title" style="font-size:20px">บริการนี้ไม่ใช่บริการฉุกเฉิน</div>
        <div>หากมีเหตุฉุกเฉินกรุณาโทร 1669 ทันที</div>
      </div>
    </div>
  `, { activeNav: "bookings" });
}

function patientsPage() {
  return shell(`
    ${topbar({ bell: true })}
    ${sectionHeader("ผู้ป่วยของฉัน", "จัดการข้อมูลผู้ป่วยเพื่อการจองที่สะดวกยิ่งขึ้น")}
    <button class="card faq-hero" data-route="patient-add">
      <div>
        <div class="icon-circle" style="margin-bottom:12px">${icon("plus", 22)}</div>
        <div class="page-title" style="font-size:26px;color:#fff">เพิ่มผู้ป่วยใหม่</div>
        <div class="page-subtitle" style="color:rgba(255,255,255,.86)">เพิ่มข้อมูลผู้ป่วยเพื่อจองบริการ CareGo</div>
      </div>
      <div class="support-figure"></div>
    </button>
    <div class="spacer-18"></div>
    <div class="stack">
      ${patients
        .map(
          (patient, index) => `
            <button class="patient-card card" data-route="patient-detail" data-select-patient="${patient.id}">
              <div class="avatar-lg ${patient.photo}" data-initials="${patient.initials}"></div>
              <div style="text-align:left">
                <div class="package-title" style="font-size:28px">${patient.name}</div>
                <div class="page-subtitle">อายุ ${patient.age} ปี | ${patient.gender}</div>
                <div class="patient-meta">
                  ${index === 0 ? `<span class="tag teal">ผู้ป่วยหลัก</span>` : ""}
                  <span class="tag ${patient.mobility.includes("รถเข็น") ? "purple" : "teal"}">${patient.mobility}</span>
                  ${patient.tags.map((tag, tagIndex) => `<span class="tag ${tagIndex % 2 === 0 ? "orange" : "blue"}">${tag}</span>`).join("")}
                </div>
                <div class="page-subtitle" style="margin-top:10px">อัปเดตล่าสุด 2 พ.ค. 2567</div>
              </div>
              <button class="secondary-btn" style="width:auto;padding:0 18px;min-height:54px" data-route="booking-step-1" data-select-patient="${patient.id}">${icon("calendar", 18)} จองให้คนนี้</button>
            </button>`,
        )
        .join("")}
      <div class="notice">
        <div class="icon-tile outline">${icon("shield", 18)}</div>
        <div>
          <div class="package-title" style="font-size:20px">ข้อมูลปลอดภัย มั่นใจได้</div>
          <div>ข้อมูลผู้ป่วยของคุณจะถูกเก็บอย่างปลอดภัย เพื่อการดูแลที่ดีที่สุด</div>
        </div>
      </div>
    </div>
  `, { activeNav: "patients" });
}

function patientAddPage() {
  return shell(`
    ${topbar({ back: true, help: true })}
    ${sectionHeader("เพิ่มผู้ป่วยใหม่", "ข้อมูลนี้ช่วยให้เราจัดผู้ดูแลได้เหมาะสมและดูแลได้อย่างปลอดภัย")}
    <div class="stack">
      <div class="card form-section">
        <div class="package-title" style="font-size:22px">ข้อมูลพื้นฐาน</div>
        <div class="spacer-12"></div>
        <div class="form-row">
          <div class="field"><label>ชื่อ-นามสกุล (ผู้ป่วย)</label><input value="คุณแม่สมศรี ใจดี" /></div>
          <div class="field"><label>อายุ</label><input value="72" /></div>
        </div>
        <div class="spacer-12"></div>
        <div class="form-row">
          <div class="field"><label>เพศ</label><div class="option-row"><button class="option-btn active">หญิง</button><button class="option-btn">ชาย</button></div></div>
          <div class="field"><label>ความสัมพันธ์กับผู้จอง</label><select><option>มารดา</option></select></div>
        </div>
      </div>
      <div class="card form-section">
        <div class="package-title" style="font-size:22px">ข้อมูลสุขภาพ</div>
        <div class="spacer-12"></div>
        <div class="field"><label>โรคประจำตัว</label><input value="เช่น เบาหวาน ความดันโลหิตสูง หัวใจ" /></div>
        <div class="spacer-12"></div>
        <div class="field"><label>การแพ้ยา / อาหาร / สิ่งอื่น ๆ</label><input value="เช่น แพ้ยาแก้ปวด แพ้อาหารทะเล" /></div>
        <div class="spacer-12"></div>
        <div class="field"><label>การเคลื่อนไหว</label><div class="chip-grid"><button class="chip active">เดินได้เอง</button><button class="chip">เดินได้บ้าง</button><button class="chip">เดินได้น้อย</button><button class="chip">นอนติดเตียง</button></div></div>
        <div class="spacer-12"></div>
        <div class="field"><label>ใช้รถเข็นหรือไม่</label><div class="option-row"><button class="option-btn active">ไม่ใช้รถเข็น</button><button class="option-btn">ใช้รถเข็น</button></div></div>
      </div>
      <div class="card form-section">
        <div class="package-title" style="font-size:22px">ผู้ติดต่อฉุกเฉิน</div>
        <div class="spacer-12"></div>
        <div class="form-row">
          <div class="field"><label>ชื่อ-นามสกุล</label><input value="คุณนัท ใจดี" /></div>
          <div class="field"><label>เบอร์โทรศัพท์</label><input value="081 234 5678" /></div>
        </div>
        <div class="spacer-12"></div>
        <div class="field"><label>ความสัมพันธ์</label><select><option>บุตร</option></select></div>
      </div>
      <div class="card form-section">
        <div class="package-title" style="font-size:22px">ที่อยู่รับผู้ป่วย</div>
        <div class="spacer-12"></div>
        <div class="field"><label>ที่อยู่ปัจจุบัน</label><textarea>123/456 หมู่บ้านสุขสบาย ซอยลาดพร้าว 71 แขวงลาดพร้าว เขตลาดพร้าว กรุงเทพมหานคร 10230</textarea></div>
        <div class="spacer-12"></div>
        <div class="notice">
          <div class="icon-tile outline">${icon("info", 18)}</div>
          <div>หากต้องการเปลี่ยนที่อยู่รับผู้ป่วยในแต่ละครั้ง สามารถแก้ไขได้ในขั้นตอนการจองบริการ</div>
        </div>
      </div>
      <div class="summary-bar">
        <div class="summary-inner">
          <button class="primary-btn" data-route="patients">${icon("wallet", 20)} บันทึกข้อมูลผู้ป่วย</button>
        </div>
      </div>
    </div>
  `, { showNav: false });
}

function patientDetailPage() {
  const patient = getSelectedPatient();
  return shell(`
    ${topbar({ back: true })}
    ${sectionHeader("ข้อมูลผู้ป่วย")}
    <div class="stack">
      <div class="profile-card card">
        <div class="avatar-lg ${patient.photo}" data-initials="${patient.initials}"></div>
        <div>
          <div class="package-title" style="font-size:30px">${patient.name}</div>
          <div class="page-subtitle">อายุ ${patient.age} ปี | ${patient.gender}</div>
          <div class="patient-meta">
            <span class="tag teal">ผู้ป่วยหลัก</span>
            <span class="tag">${patient.relation}</span>
          </div>
        </div>
        <button class="secondary-btn" style="width:auto;padding:0 18px;min-height:54px">${icon("note", 18)} แก้ไขข้อมูล</button>
      </div>
      <div class="grid-2">
        <div class="card pad">
          <div class="package-title" style="font-size:20px">โรคประจำตัว</div>
          <ul>
            ${patient.conditions.map((item) => `<li class="page-subtitle">${item}</li>`).join("")}
          </ul>
        </div>
        <div class="card pad">
          <div class="package-title" style="font-size:20px">การแพ้ยา / อาหาร</div>
          <ul>
            ${patient.allergy.map((item) => `<li class="page-subtitle">${item}</li>`).join("")}
          </ul>
        </div>
        <div class="card pad">
          <div class="package-title" style="font-size:20px">การเคลื่อนไหว</div>
          <div class="page-subtitle">${patient.mobility}</div>
          <div class="page-subtitle">เดินช้า เหนื่อยง่าย ต้องการพยุงบางครั้ง</div>
        </div>
        <div class="card pad">
          <div class="package-title" style="font-size:20px">อุปกรณ์ช่วยเดิน</div>
          <div class="page-subtitle">${patient.mobility.includes("รถเข็น") ? "ใช้รถเข็น" : "ไม่ใช้รถเข็น"}</div>
        </div>
      </div>
      <div class="card pad">
        <div class="package-title" style="font-size:20px">ผู้ติดต่อฉุกเฉิน</div>
        <div class="page-subtitle">${patient.emergencyContact}</div>
      </div>
      <div class="card pad">
        <div class="package-title" style="font-size:20px">ที่อยู่รับผู้ป่วย</div>
        <div class="page-subtitle">${patient.address}</div>
      </div>
      <div class="card pad">
        <div class="split">
          <div class="package-title" style="font-size:22px">การจองล่าสุดของผู้ป่วยท่านนี้</div>
          <button class="muted" data-route="bookings">ดูทั้งหมด</button>
        </div>
        <div class="spacer-12"></div>
        ${bookings
          .filter((booking) => booking.patientId === patient.id)
          .slice(0, 2)
          .map(
            (booking) => `
              <div class="detail-row">
                <div>${icon("calendar", 18)}</div>
                <div style="text-align:left">
                  <strong>${booking.hospital}</strong>
                  <div class="page-subtitle">${booking.dateLabel} · ${booking.time}</div>
                </div>
                <span>${statusMeta(booking.status).label}</span>
              </div>`,
          )
          .join("")}
      </div>
      <div class="summary-bar">
        <div class="summary-inner">
          <button class="primary-btn" data-route="booking-step-1" data-select-patient="${patient.id}">${icon("calendar", 20)} จอง CareGo ให้ผู้ป่วยท่านนี้</button>
          <div class="footer-note">ข้อมูลผู้ป่วยจะถูกเก็บอย่างปลอดภัย และใช้เพื่อการดูแลเท่านั้น</div>
        </div>
      </div>
    </div>
  `, { showNav: false });
}

function notificationsPage() {
  return shell(`
    ${topbar({ bell: true })}
    ${sectionHeader("การแจ้งเตือน", "อัปเดตล่าสุดเกี่ยวกับการจองและบริการของคุณ")}
    <div class="tab-row">
      <button class="tab-chip active">ทั้งหมด</button>
      <button class="tab-chip">การจอง</button>
      <button class="tab-chip">ผู้ดูแล</button>
      <button class="tab-chip">ระบบ</button>
    </div>
    <div class="spacer-18"></div>
    <div class="stack">
      <div class="package-title" style="font-size:22px">วันนี้</div>
      ${notifications
        .slice(0, 4)
        .map(
          (item) => `
            <button class="notification-card ${item.highlight ? "highlight" : "card"}" data-route="${item.type === "system" ? "profile" : "tracking"}">
              <div class="icon-tile outline">${icon(item.type === "caregiver" ? "phone" : item.type === "system" ? "bell" : "calendar", 22)}</div>
              <div style="text-align:left">
                <div class="package-title" style="font-size:22px">${item.title}</div>
                <div class="page-subtitle">${item.body}</div>
                ${item.bookingId ? `<div class="pill" style="margin-top:8px">การจอง ${item.bookingId}</div>` : ""}
              </div>
              <div class="muted">${item.time}</div>
            </button>`,
        )
        .join("")}
      <div class="package-title" style="font-size:22px">ก่อนหน้านี้</div>
      ${notifications
        .slice(4)
        .map(
          (item) => `
            <button class="notification-card card">
              <div class="icon-tile outline">${icon("bell", 22)}</div>
              <div style="text-align:left">
                <div class="package-title" style="font-size:22px">${item.title}</div>
                <div class="page-subtitle">${item.body}</div>
              </div>
              <div class="muted">${item.time}</div>
            </button>`,
        )
        .join("")}
    </div>
  `, { activeNav: "home" });
}

function helpPage() {
  return shell(`
    ${topbar({ bell: true })}
    ${sectionHeader("ช่วยเหลือ", "เราพร้อมดูแลคุณทุกวัน")}
    <div class="stack">
      <div class="card faq-hero">
        <div>
          <div class="package-title" style="font-size:28px;color:#fff">ทีมดูแลลูกค้า CareGo</div>
          <div class="page-subtitle" style="color:rgba(255,255,255,.92)">เราพร้อมดูแลคุณทุกวัน 06:00 - 20:00 น.</div>
          <div class="spacer-12"></div>
          <button class="secondary-btn" style="width:auto;padding:0 18px;min-height:52px;color:var(--teal-2)">${icon("phone", 18)} 02-012-5555</button>
          <div class="spacer-12"></div>
          <div class="small" style="color:rgba(255,255,255,.92)">บริการของเราไม่ใช่บริการฉุกเฉิน หากมีเหตุฉุกเฉินกรุณาโทร 1669</div>
        </div>
        <div class="support-figure"></div>
      </div>
      <div class="search-box">${icon("help", 18)} ค้นหาคำถามที่พบบ่อย เช่น การเลื่อนนัด, ชำระเงิน</div>
      <div class="package-title" style="font-size:22px">คำถามที่พบบ่อย</div>
      ${faqs
        .map(
          (item) => `
            <button class="faq-card card">
              <div class="icon-tile outline">${icon(item.title.includes("ชำระเงิน") ? "wallet" : item.title.includes("เลื่อนนัด") ? "calendar" : item.title.includes("ขอบเขต") ? "shield" : item.title.includes("ข้อมูล") ? "shield" : "calendar", 20)}</div>
              <div style="text-align:left">
                <div class="package-title" style="font-size:22px">${item.title}</div>
                <div class="page-subtitle">${item.subtitle}</div>
              </div>
              <div>${icon("chevronRight", 22)}</div>
            </button>`,
        )
        .join("")}
      <div class="grid-2">
        <button class="card pad" style="text-align:left">
          <div class="icon-tile outline">${icon("phone", 20)}</div>
          <div class="spacer-12"></div>
          <div class="package-title" style="font-size:22px">โทรหาเรา</div>
          <div class="page-subtitle">พูดคุยกับทีมงานโดยตรง 06:00 - 20:00 น.</div>
        </button>
        <button class="card pad" style="text-align:left">
          <div class="icon-tile outline">${icon("message", 20)}</div>
          <div class="spacer-12"></div>
          <div class="package-title" style="font-size:22px">แชตกับทีมงาน</div>
          <div class="page-subtitle">ตอบแชตภายในไม่กี่นาทีในช่วงเวลาทำการ</div>
        </button>
      </div>
      <div class="notice warn">
        <div class="icon-tile red">${icon("info", 18)}</div>
        <div>
          <div class="package-title" style="font-size:20px">บริการของเราไม่ใช่บริการฉุกเฉิน</div>
          <div>หากมีเหตุฉุกเฉินหรืออาการรุนแรง กรุณาโทร 1669 ทันที CareGo ให้บริการดูแลและอำนวยความสะดวกในการเดินทางเท่านั้น</div>
        </div>
      </div>
    </div>
  `, { activeNav: "help" });
}

function profilePage() {
  return shell(`
    ${topbar({ bell: true })}
    ${sectionHeader("โปรไฟล์และตั้งค่า", "จัดการข้อมูลบัญชีและการตั้งค่าของคุณ")}
    <div class="stack">
      <div class="profile-card card">
        <div class="avatar-lg photo-1" data-initials="W"></div>
        <div>
          <div class="package-title" style="font-size:30px">คุณวรรณา ใจดี</div>
          <div class="page-subtitle">081 234 5678</div>
          <div class="page-subtitle">wanna.jaidee@email.com</div>
          <div class="spacer-8"></div>
          <div class="pill">บัญชีนี้เชื่อมต่อกับ 3 ผู้ป่วย</div>
        </div>
        <button class="secondary-btn" style="width:auto;padding:0 18px;min-height:54px">${icon("note", 18)} แก้ไขโปรไฟล์</button>
      </div>
      <div class="package-title" style="font-size:22px">บัญชีและข้อมูลส่วนตัว</div>
      ${settings
        .slice(0, 4)
        .map(
          (item) => `
            <button class="setting-row card">
              <div class="icon-tile outline">${icon(item.title.includes("ส่วนตัว") ? "user" : item.title.includes("สมาชิก") ? "users" : item.title.includes("ชำระ") ? "card" : "home", 20)}</div>
              <div style="text-align:left">
                <div class="package-title" style="font-size:22px">${item.title}</div>
                <div class="page-subtitle">${item.subtitle}</div>
              </div>
              <div>${item.badge ? `<span class="pill">${item.badge}</span>` : icon("chevronRight", 22)}</div>
            </button>`,
        )
        .join("")}
      <div class="package-title" style="font-size:22px">การตั้งค่าและความปลอดภัย</div>
      ${settings
        .slice(4)
        .map(
          (item) => `
            <button class="setting-row card">
              <div class="icon-tile outline">${icon(item.title.includes("แจ้งเตือน") ? "bell" : item.title.includes("ภาษา") ? "route" : item.title.includes("ส่วนตัว") ? "shield" : "shield", 20)}</div>
              <div style="text-align:left">
                <div class="package-title" style="font-size:22px">${item.title}</div>
                <div class="page-subtitle">${item.subtitle}</div>
              </div>
              <div>${item.badge ? `<span class="pill">${item.badge}</span>` : icon("chevronRight", 22)}</div>
            </button>`,
        )
        .join("")}
      <div class="notice">
        <div class="icon-tile outline">${icon("shield", 18)}</div>
        <div>
          <div class="package-title" style="font-size:20px">เราดูแลข้อมูลของคุณอย่างปลอดภัย</div>
          <div>ข้อมูลของคุณจะถูกเก็บเป็นความลับ และใช้เพื่อการดูแลที่ดีที่สุด</div>
        </div>
      </div>
      <button class="danger-btn">${icon("route", 18)} ออกจากระบบ</button>
    </div>
  `, { activeNav: "profile" });
}

function renderPage() {
  switch (appState.route) {
    case "booking-step-1":
      return bookingStep1Page();
    case "booking-step-2":
      return bookingStep2Page();
    case "booking-step-3":
      return bookingStep3Page();
    case "booking-step-4":
      return bookingStep4Page();
    case "booking-step-5":
      return bookingStep5Page();
    case "bookings":
      return bookingsPage();
    case "booking-detail":
      return bookingDetailPage();
    case "tracking":
      return trackingPage();
    case "patients":
      return patientsPage();
    case "patient-add":
      return patientAddPage();
    case "patient-detail":
      return patientDetailPage();
    case "notifications":
      return notificationsPage();
    case "help":
      return helpPage();
    case "profile":
      return profilePage();
    case "home":
    default:
      return homePage();
  }
}

function render() {
  document.getElementById("app").innerHTML = renderPage();
}

window.addEventListener("hashchange", () => {
  const route = window.location.hash.replace(/^#/, "");
  if (allowedRoutes.has(route)) {
    appState.route = route;
    render();
  }
});

document.addEventListener("click", (event) => {
  const routeTarget = event.target.closest("[data-route]");
  if (routeTarget) {
    const patientId = routeTarget.getAttribute("data-select-patient");
    if (patientId) appState.selectedPatientId = patientId;
    go(routeTarget.getAttribute("data-route"));
    return;
  }

  if (event.target.closest("[data-route-back]")) {
    routeBack();
    return;
  }

  const patientButton = event.target.closest("[data-select-patient]");
  if (patientButton) {
    appState.selectedPatientId = patientButton.getAttribute("data-select-patient");
    render();
    return;
  }

  const purposeButton = event.target.closest("[data-select-purpose]");
  if (purposeButton) {
    appState.selectedPurpose = purposeButton.getAttribute("data-select-purpose");
    render();
    return;
  }

  const departmentButton = event.target.closest("[data-select-department]");
  if (departmentButton) {
    appState.selectedDepartment = departmentButton.getAttribute("data-select-department");
    render();
    return;
  }

  const dateButton = event.target.closest("[data-select-date]");
  if (dateButton) {
    appState.selectedDate = dateButton.getAttribute("data-select-date");
    render();
    return;
  }

  const slotButton = event.target.closest("[data-select-slot]");
  if (slotButton) {
    appState.selectedSlot = slotButton.getAttribute("data-select-slot");
    render();
    return;
  }

  const packageButton = event.target.closest("[data-select-package]");
  if (packageButton) {
    appState.selectedPackage = packageButton.getAttribute("data-select-package");
    render();
    return;
  }

  const addonButton = event.target.closest("[data-toggle-addon]");
  if (addonButton) {
    appState.addOnHomeVisit = !appState.addOnHomeVisit;
    render();
    return;
  }

  const paymentButton = event.target.closest("[data-select-payment]");
  if (paymentButton) {
    appState.selectedPayment = paymentButton.getAttribute("data-select-payment");
    render();
  }
});

const initialRoute = window.location.hash.replace(/^#/, "");
if (allowedRoutes.has(initialRoute)) {
  appState.route = initialRoute;
}

render();

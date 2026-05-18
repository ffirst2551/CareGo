# CareGo Web App Prototype

Web app prototype สำหรับแปลงชุดหน้าจอ CareGo ให้เป็น SPA ที่กดใช้งาน flow หลักได้จริง

## สิ่งที่มีในรอบนี้

- หน้าหลัก
- Booking flow 5 ขั้น
- การจองของฉัน
- รายละเอียดการจอง
- ติดตามสถานะวันนัด
- ผู้ป่วยของฉัน
- เพิ่มผู้ป่วยใหม่
- ข้อมูลผู้ป่วย
- การแจ้งเตือน
- ช่วยเหลือ
- โปรไฟล์และตั้งค่า

## วิธีเปิดดู

เปิด [index.html](/D:/Product/carego-webapp/index.html) ตรง ๆ ได้เลย หรือเสิร์ฟด้วย local server เช่น Python:

```powershell
cd D:\Product\carego-webapp
python -m http.server 3306
```

จากนั้นเปิด `http://127.0.0.1:3306`

## หมายเหตุ

- รอบนี้เป็น front-end prototype ที่เน้น fidelity ของ flow และข้อมูลตัวอย่าง
- ยังไม่ได้ต่อ backend, auth, payment gateway, live tracking จริง หรือ notification service

# CareGo Web App Bug Report

อัปเดตล่าสุด: 17 พฤษภาคม 2026  
ทดสอบบน: `http://localhost:3000/`  
ลักษณะงาน: UX/UI review only, ไม่แก้โค้ด

## Executive Summary

สถานะตอนนี้ยังติด blocker ระดับใช้งานจริง เพราะ flow หลักของ CareGo เดินต่อไม่ได้หลัง Step 1 และ route สำคัญส่วนใหญ่ขึ้น `404` ทำให้ปัญหาหลักไม่ใช่แค่เรื่องความสวย แต่เป็นเรื่อง `information architecture / routing completeness / interaction reliability`

## Priority Legend

- `P0` = blocker ใช้งานจริงไม่ได้
- `P1` = กระทบ conversion หรือ user task สำคัญมาก
- `P2` = กระทบ usability / trust / accessibility
- `P3` = polish issue

## Open Bugs

### 1. [P0] Booking flow พังตั้งแต่ Step 1 ไป Step 2

- หน้าที่พบ: `/booking/step-1`
- วิธีทำซ้ำ:
  1. เปิด `http://localhost:3000/booking/step-1`
  2. กดปุ่ม `ไปต่อ`
- ผลที่เกิดขึ้นจริง:
  - ระบบพาไป `http://localhost:3000/booking/step-2`
  - หน้าแสดง `404 - This page could not be found.`
- ผลที่ควรเกิด:
  - ผู้ใช้ควรไปหน้า `เลือกสถานที่ / วัน / เวลา`
- ผลกระทบ:
  - ผู้ใช้จองบริการต่อไม่ได้
  - conversion ของ flow หลักเป็นศูนย์
- Owner ที่ควรรับ:
  - Dev
  - UX reviewer เพื่อตรวจ state flow หลังแก้

### 2. [P0] Route สำคัญส่วนใหญ่ของระบบขึ้น 404

- หน้าที่พบ:
  - `/booking/step-2`
  - `/booking/step-3`
  - `/booking/step-4`
  - `/booking/step-5`
  - `/bookings`
  - `/booking/detail`
  - `/tracking`
  - `/patients`
  - `/patients/add`
  - `/patients/detail`
  - `/notifications`
  - `/help`
  - `/profile`
- วิธีทำซ้ำ:
  1. เปิด route ตามรายการด้านบนตรง ๆ
- ผลที่เกิดขึ้นจริง:
  - ทุกหน้าขึ้น `404`
- ผลที่ควรเกิด:
  - ทุก route สำคัญควรเปิดได้
- ผลกระทบ:
  - information architecture ใช้งานจริงไม่ได้
  - navigation ทั้งระบบพาผู้ใช้หลุดออกจาก experience หลัก
- Owner ที่ควรรับ:
  - Dev
  - QA หลังแก้

### 3. [P1] First-time user flow พังจากปุ่ม “เพิ่มผู้ป่วยใหม่”

- หน้าที่พบ: `/booking/step-1`
- วิธีทำซ้ำ:
  1. เปิด `http://localhost:3000/booking/step-1`
  2. กด `เพิ่มผู้ป่วยใหม่`
- ผลที่เกิดขึ้นจริง:
  - ระบบพาไป `/patients/add`
  - หน้าเป็น `404`
- ผลที่ควรเกิด:
  - ผู้ใช้ใหม่ควรกรอกข้อมูลผู้ป่วยและกลับเข้าสู่ flow จองได้
- ผลกระทบ:
  - ผู้ใช้ที่ยังไม่มี patient profile ใช้งานไม่ได้เลย
- Owner ที่ควรรับ:
  - Dev
  - UX reviewer

### 4. [P1] Notification entry point ใช้งานไม่ได้

- หน้าที่พบ: `/`
- วิธีทำซ้ำ:
  1. เปิด `http://localhost:3000/`
  2. กดไอคอนแจ้งเตือนมุมขวาบน
- ผลที่เกิดขึ้นจริง:
  - พาไป `/notifications`
  - หน้าเป็น `404`
- ผลที่ควรเกิด:
  - ไปหน้าการแจ้งเตือนที่ใช้งานได้
- ผลกระทบ:
  - trust ลดลง เพราะ icon สำคัญพาไป dead page
- Owner ที่ควรรับ:
  - Dev

### 5. [P2] ปุ่ม “ดูรายละเอียด” ใน section แพ็กเกจเป็น dead CTA

- หน้าที่พบ: `/`
- วิธีทำซ้ำ:
  1. เปิด `http://localhost:3000/`
  2. กดปุ่ม `ดูรายละเอียด`
- ผลที่เกิดขึ้นจริง:
  - ไม่เห็นการเปลี่ยนหน้า
  - ไม่เกิด state change ชัดเจน
- ผลที่ควรเกิด:
  - ควร expand detail, เปิดหน้าแพ็กเกจ, หรือไม่ก็ควรเอาออกถ้ายังไม่รองรับ
- ผลกระทบ:
  - ผู้ใช้สับสน
  - CTA ดูเหมือนพัง
- Owner ที่ควรรับ:
  - Design
  - Dev

### 6. [P2] Interactive elements บางจุดไม่มี label ที่ชัดเจน

- หน้าที่พบ:
  - `/booking/step-1`
  - `/`
- จุดที่พบ:
  - ปุ่ม back บน step 1 ไม่มีข้อความ/label ชัด
  - ไอคอนแจ้งเตือนบนหน้าแรกไม่มี label ชัด
  - ลิงก์ไอคอนบางจุดบนหน้าแรกไม่มีข้อความกำกับ
- ผลที่เกิดขึ้นจริง:
  - ผู้ใช้เดาตามภาพได้ แต่ semantic/assistive clarity ต่ำ
- ผลที่ควรเกิด:
  - ควรมี label ที่ชัดเจนอย่างน้อยในระดับ accessibility
- ผลกระทบ:
  - accessibility ต่ำ
  - trust และ clarity ลดลง
- Owner ที่ควรรับ:
  - Design
  - Dev

### 7. [P2] Desktop experience ยังเป็น mobile frame กลางจอมากเกินไป

- หน้าที่พบ: `/`
- วิธีสังเกต:
  - บน viewport กว้าง หน้าแอปหลักกว้างเพียงประมาณ `480px`
  - พื้นที่ว่างรอบข้างเยอะมาก
- ผลที่เกิดขึ้นจริง:
  - ประสบการณ์เหมือน preview มือถือ มากกว่าเว็บที่ใช้งานจริง
- ผลที่ควรเกิด:
  - ควรตัดสินใจให้ชัดว่าจะเป็น
    - mobile web centered shell แบบ intentional
    - หรือ responsive web ที่ใช้พื้นที่จอกว้างได้ดีกว่านี้
- ผลกระทบ:
  - ดูเป็น prototype มากกว่า production
- Owner ที่ควรรับ:
  - Design

## Suggested Fix Order

### Phase 1: Blocker fixes

1. แก้ route ให้ทุกหน้าหลักเปิดได้
2. แก้ flow `Step 1 -> Step 2`
3. แก้ flow `เพิ่มผู้ป่วยใหม่`

### Phase 2: UX reliability

4. แก้ notification entry point
5. จัดการ dead CTA เช่น `ดูรายละเอียด`
6. เช็ก bottom nav และ in-flow links ทั้งระบบ

### Phase 3: Trust and polish

7. เติม label ให้ icon controls
8. ปรับ desktop presentation ให้ intentional มากขึ้น

## QA Retest Scope หลังแก้

- ต้อง retest flow นี้ครบ:
  - Home
  - Booking Step 1
  - Booking Step 2
  - Booking Step 3
  - Payment
  - Confirmation
- ต้อง retest secondary routes:
  - Bookings
  - Booking detail
  - Tracking
  - Patients
  - Add patient
  - Patient detail
  - Notifications
  - Help
  - Profile

## Ready-To-Send Handoff Note

ข้อความสั้นสำหรับส่งทีม:

> ตอนนี้ CareGo ยังติด blocker ที่ routing และ interaction หลักหลายจุด โดยเฉพาะ booking flow ไปต่อจาก Step 1 ไม่ได้และ route สำคัญส่วนใหญ่ขึ้น 404 กรุณาเคลียร์ P0/P1 ก่อน แล้วค่อยลง polish UX/UI รอบถัดไป โดยใช้ `QA_CHECKLIST.md` กับ `BUG_REPORT.md` ในโฟลเดอร์โปรเจกต์เป็นฐาน retest

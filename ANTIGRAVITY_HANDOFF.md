# CareGo Web App Handoff For Antigravity

## Project Goal

ต่อยอด `CareGo` จาก front-end prototype ปัจจุบันให้เป็น web app ที่ `สวยขึ้น, premium ขึ้น, และ faithful กับภาพอ้างอิงมากขึ้น` โดยยังรักษา flow ธุรกิจหลักเดิมไว้

CareGo คือบริการ `non-emergency patient companion service` สำหรับพาผู้ป่วยจากบ้านไป `โรงพยาบาลศิริราช` และกลับบ้านอย่างปลอดภัย โดยเน้นลูกหลานหรือครอบครัวที่จองให้พ่อแม่/ผู้สูงอายุ

## Current Prototype

- App entry: [index.html](/D:/Product/carego-webapp/index.html)
- Main logic: [app.js](/D:/Product/carego-webapp/app.js)
- Styles: [styles.css](/D:/Product/carego-webapp/styles.css)
- Notes: [README.md](/D:/Product/carego-webapp/README.md)

สถานะปัจจุบัน:
- เป็น `single-page web app prototype`
- มี routing แบบ `URL hash`
- ใช้งาน flow หลักได้ครบ
- ยังไม่ต่อ backend / auth / payment gateway / realtime tracking จริง
- มีหน้าครบแล้ว แต่ยังต้อง polish เรื่อง visual fidelity, component consistency, และ responsive behavior บางหน้า

## UI Reference Set

ภาพอ้างอิงถูกคัดลอกและเปลี่ยนชื่อใหม่แล้วในโฟลเดอร์นี้:

[refs](/D:/Product/carego-webapp/refs)

รายการไฟล์:

1. [01-home-dashboard.png](/D:/Product/carego-webapp/refs/01-home-dashboard.png)
2. [02-booking-step-1-patient-selection.png](/D:/Product/carego-webapp/refs/02-booking-step-1-patient-selection.png)
3. [03-booking-step-2-hospital-date-time.png](/D:/Product/carego-webapp/refs/03-booking-step-2-hospital-date-time.png)
4. [04-booking-step-3-package-details.png](/D:/Product/carego-webapp/refs/04-booking-step-3-package-details.png)
5. [05-booking-step-4-payment.png](/D:/Product/carego-webapp/refs/05-booking-step-4-payment.png)
6. [06-booking-step-5-confirmation-coupon.png](/D:/Product/carego-webapp/refs/06-booking-step-5-confirmation-coupon.png)
7. [07-bookings-list.png](/D:/Product/carego-webapp/refs/07-bookings-list.png)
8. [08-booking-detail.png](/D:/Product/carego-webapp/refs/08-booking-detail.png)
9. [09-live-tracking-status.png](/D:/Product/carego-webapp/refs/09-live-tracking-status.png)
10. [10-patients-list.png](/D:/Product/carego-webapp/refs/10-patients-list.png)
11. [11-add-new-patient.png](/D:/Product/carego-webapp/refs/11-add-new-patient.png)
12. [12-patient-detail.png](/D:/Product/carego-webapp/refs/12-patient-detail.png)
13. [13-notifications.png](/D:/Product/carego-webapp/refs/13-notifications.png)
14. [14-help-support.png](/D:/Product/carego-webapp/refs/14-help-support.png)
15. [15-profile-settings.png](/D:/Product/carego-webapp/refs/15-profile-settings.png)

## Core User Flow To Preserve

Flow หลักห้ามหลุด:

1. หน้าหลัก
2. จองคิว
3. เลือกสถานที่ / วัน / เวลา
4. เลือกราคา / ระบุรายละเอียดการจอง
5. ชำระเงิน
6. คูปองการจอง

หน้ารองที่ต้องคงไว้:

- การจองของฉัน
- รายละเอียดการจอง
- ติดตามสถานะวันนัด
- ผู้ป่วยของฉัน
- เพิ่มผู้ป่วยใหม่
- ข้อมูลผู้ป่วย
- การแจ้งเตือน
- ช่วยเหลือ
- โปรไฟล์และตั้งค่า

## Current Route Map

เปิดตรงผ่าน hash ได้:

- `#home`
- `#booking-step-1`
- `#booking-step-2`
- `#booking-step-3`
- `#booking-step-4`
- `#booking-step-5`
- `#bookings`
- `#booking-detail`
- `#tracking`
- `#patients`
- `#patient-add`
- `#patient-detail`
- `#notifications`
- `#help`
- `#profile`

## Design Direction To Keep

- โทน `premium healthcare service`
- ไม่ใช่แอปโรงพยาบาลเชิงราชการ
- ไม่ใช่ fintech
- ไม่ใช่ startup gradient ม่วงทั่วไป
- mobile-first
- calm, warm, trustworthy
- white / navy / teal เป็นแกน
- cards มน, soft shadows, spacing โปร่ง
- Thai-first copy
- ดูเป็นบริการสำหรับครอบครัว ไม่ใช่ dashboard เชิงระบบล้วน

## What Needs Improvement

### Visual Fidelity

- ให้หน้าจอ web app ใกล้ภาพ ref มากขึ้น โดยเฉพาะ
  - hero composition
  - card proportions
  - icon treatment
  - typography hierarchy
  - spacing rhythm
  - CTA prominence

### Responsive Quality

- บางหน้าใน prototype ปัจจุบันยังเป็น `functional-first`
- หน้า `tracking` โดยเฉพาะยังควรออกแบบ layout ใหม่ให้แน่นขึ้นแต่ไม่อึดอัดบนจอแคบ
- ควรแยก layout logic สำหรับ `mobile portrait` และ `tablet / desktop web preview`

### UI System Consistency

- ทำ design system ให้ชัดขึ้น
  - color tokens
  - type scale
  - border radius system
  - card variants
  - stepper style
  - bottom navigation style
  - status pills

### Production Structure

- ถ้า Antigravity จะต่อจริง แนะนำให้ย้ายจาก current SPA ไปเป็น:
  - `React + Next.js` หรือ `React + Vite`
- แยก component structure ให้ชัด เช่น
  - App shell
  - Navigation
  - Booking step screens
  - Patient cards
  - Booking cards
  - Status timeline
  - Help/FAQ modules

## Recommended Tech Stack

### Recommended build stack for Antigravity continuation

- `Next.js + TypeScript`
  - ใช้เป็นแกนของ web app รอบถัดไป
  - เหมาะกับงานที่มีทั้ง UI, routing, server-side logic, และ API ในโปรเจกต์เดียว
  - ถ้าจะเริ่มใหม่ ให้ใช้ `App Router`

- `Tailwind CSS`
  - ใช้ทำ visual system ให้คุม spacing, token, และ responsive ได้เร็ว
  - แต่ห้ามปล่อยให้หน้าตาออกแนว template
  - ควรใช้ `CSS variables` คู่กันเพื่อคุม brand colors, radius, shadows, typography scale

- `Custom design system components`
  - ไม่ควรพึ่ง component library สำเร็จรูปแบบปล่อยตรง ๆ
  - ให้ build component พื้นฐานเอง เช่น
    - `AppShell`
    - `TopBar`
    - `BottomNav`
    - `BookingStepper`
    - `BookingCard`
    - `PatientCard`
    - `StatusTimeline`
    - `SupportCard`

- `React Hook Form + Zod`
  - ใช้กับหน้า form เช่น
    - เพิ่มผู้ป่วยใหม่
    - รายละเอียดการจอง
    - จุดรับ-ส่ง
    - ผู้ติดต่อฉุกเฉิน
  - ช่วยจัดการ validation และลด form bugs

- `Zustand` หรือ `React Context`
  - ใช้เก็บ state ของ booking flow
  - เช่น selected patient, date/time, package, add-ons, payment method
  - ถ้าระบบยังไม่ใหญ่มาก `Zustand` จะเบาและตรงกว่า

### Recommended product/backend stack after UI stabilizes

- `Supabase Postgres`
  - ใช้เป็น database หลัก
  - เหมาะกับข้อมูล booking, patient profiles, caregiver assignments, status updates, audit logs

- `Supabase Auth`
  - ใช้สำหรับ login / family member accounts / role-based access
  - เหมาะกับ use case ที่ 1 account ดูแลผู้ป่วยหลายคน

- `Supabase Storage`
  - ใช้เก็บไฟล์เอกสาร เช่น ใบนัด, ผลตรวจ, สำเนาบัตร, เอกสารประกอบการจอง

- `Supabase Realtime`
  - ใช้กับ booking status updates
  - เหมาะกับหน้า `ติดตามสถานะ`

- `Next.js Route Handlers` หรือ `Server Actions`
  - ใช้ทำ backend layer สำหรับ booking creation, payment session, notification triggers, caregiver assignment actions

### Payments stack recommendation

- `Opn (เดิม Omise)`
  - เหมาะกับตลาดไทยมากกว่า generic global-first flow
  - รองรับ `PromptPay`, `cards`, และ local payment scenarios ที่สอดคล้องกับภาพ UX ปัจจุบัน
  - เหมาะกับหน้า `ชำระเงิน` ของ CareGo ที่มี `QR พร้อมเพย์`, `บัตรเครดิต/เดบิต`, `โอนผ่านธนาคาร`

### Messaging / notification recommendation

- `LINE Messaging API` เป็น phase ที่ควรพิจารณาหลัง booking flow หลักนิ่ง
  - ใช้ส่งอัปเดตให้ครอบครัว
  - ใช้ส่ง booking confirmation, caregiver assigned, caregiver on the way, service completed
  - เข้ากับพฤติกรรมผู้ใช้ไทยมากกว่า email-first

### Suggested stack by phase

#### Phase 1: UX/UI rebuild in Antigravity

- Next.js
- TypeScript
- Tailwind CSS
- Custom components
- React Hook Form
- Zod
- Zustand

#### Phase 2: Real product MVP

- Supabase Postgres
- Supabase Auth
- Supabase Storage
- Supabase Realtime
- Next.js backend routes
- Opn payments

#### Phase 3: Service operations layer

- LINE Messaging API
- caregiver assignment logic
- admin / dispatch dashboard
- incident / audit logging
- service report generation

## Product Constraints

- CareGo เป็น `non-emergency` service เท่านั้น
- โฟกัส `ศิริราช` เป็น wedge แรก
- ลูกค้าหลักคือครอบครัวที่จองให้ผู้สูงอายุ
- UX ต้องลดความกังวล ไม่เพิ่ม cognitive load
- ต้องสื่อ `trust + safety + coordination`

## Suggested Antigravity Prompt

```text
Continue the CareGo web app from the existing front-end prototype in D:\\Product\\carego-webapp.

Use the renamed reference screens in D:\\Product\\carego-webapp\\refs as the source of truth for UX/UI polish and visual direction.

Goal:
Turn the current functional prototype into a premium mobile-first healthcare service web app with much stronger visual fidelity, cleaner spacing, more consistent typography, and a more polished component system.

Preserve the product flow:
Home > Booking Step 1 > Booking Step 2 > Booking Step 3 > Payment > Confirmation Coupon

Also preserve these supporting screens:
Bookings list, Booking detail, Live tracking, Patients list, Add patient, Patient detail, Notifications, Help, Profile/Settings

What to improve:
- visual fidelity to the reference images
- mobile responsiveness
- component consistency
- CTA hierarchy
- icon styling
- spacing and layout balance
- premium trust-building look and feel

Keep the product feeling:
calm, premium, Thai-first, trustworthy, family-friendly, medically responsible, and non-emergency

Do not change the product concept or the main information architecture.
Improve the UX/UI quality and implementation quality.
```

## Recommended Next Build Phase

หลังจาก polish UI แล้ว ค่อยต่อ:

1. booking data model
2. patient profile persistence
3. auth
4. payment integration
5. caregiver assignment status model
6. family notifications
7. admin / dispatch dashboard

## Handoff Summary

สั้นที่สุด:

- โปรเจกต์นี้ `ทำ flow ได้แล้ว`
- ภาพ ref ถูกจัดระเบียบและเปลี่ยนชื่อใหม่แล้ว
- งานที่ Antigravity ควรรับช่วงคือ `ยก UX/UI จาก prototype ให้เป็น production-grade web app`

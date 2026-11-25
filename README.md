# BRIGHT Oral Care — โปรเจกต์เว็บไซต์ขายแปรงสีฟัน

## ไฟล์ในโปรเจกต์
- `index.html` หน้า Landing Page และส่วนจัดการออเดอร์
- `style.css` รูปแบบเว็บไซต์ รองรับมือถือ
- `app.js` สินค้า 2 SKU, ตะกร้า, สั่งซื้อ, รายการออเดอร์, Picking/Packing และส่งออก CSV
- `config.js` ตั้งค่า URL สำหรับ Google Sheets
- `assets/` เก็บภาพสินค้าแยกเป็นโฟลเดอร์

## วิธีเปิดดู
เปิด `index.html` ในเว็บเบราว์เซอร์ หรือใช้ VS Code Live Server

## สินค้าตัวอย่าง
| SKU | ชื่อสินค้า | ราคา | สต็อกเริ่มต้น |
|---|---|---:|---:|
| TB001 | แปรงสีฟันขนนุ่ม | 39 บาท | 50 |
| TB002 | แปรงสีฟันไม้ไผ่ | 59 บาท | 35 |

## การใช้งานระบบ
1. กดเพิ่มสินค้าลงตะกร้า
2. กดตะกร้า กรอกชื่อ เบอร์โทร และที่อยู่ แล้วกดยืนยันคำสั่งซื้อ
3. ออเดอร์จะแสดงในส่วน “จัดการคำสั่งซื้อ” สถานะ “รอหยิบ”
4. เมื่อหยิบสินค้าและแพ็กเรียบร้อย กด “ยืนยันหยิบและแพ็กแล้ว”
5. กด “ดาวน์โหลด CSV” เพื่อส่งออเดอร์ออกเป็นไฟล์ตาราง

> หมายเหตุ: เวอร์ชันเริ่มต้นเก็บออเดอร์ใน Local Storage ของเบราว์เซอร์ที่ใช้งาน ยังไม่ใช่ฐานข้อมูลกลาง และสต็อกตัวอย่างยังไม่ได้ตัดอัตโนมัติ

## เชื่อม Google Sheets (ต้องทำในบัญชี Google ของผู้เรียน)
1. สร้าง Google Sheet ตั้งชื่อ `BRIGHT Orders`
2. สร้างหัวตารางแถวแรก: `Order ID | Date | Customer | Phone | Address | SKU | Product | Qty | Unit Price | Total | Status`
3. ใน Google Sheets ไปที่ Extensions → Apps Script
4. วางโค้ดจากไฟล์ `google-apps-script.gs` แล้ว Save
5. Deploy → New deployment → Web app
6. Execute as: Me; Who has access: Anyone (หรือจำกัดตามนโยบายชั้นเรียน) แล้ว Deploy
7. คัดลอก Web app URL มาใส่ใน `config.js` ที่ `GOOGLE_SHEETS_WEB_APP_URL`
8. ทดสอบสั่งซื้อ 1 รายการ และตรวจสอบ Google Sheet

## GitHub และ Vercel
1. สร้าง GitHub repository ชื่อ `bright-toothbrush-store`
2. อัปโหลดทุกไฟล์และโฟลเดอร์ใน ZIP นี้ โดยคงโครงสร้างเดิม
3. เข้า Vercel แล้วเลือก Add New → Project → Import Git Repository
4. เลือก repository นี้ แล้วกด Deploy (เป็นเว็บ Static ไม่ต้องตั้ง Build Command)
5. คัดลอก URL ที่ Vercel สร้างให้เพื่อส่งอาจารย์

## ข้อควรระวัง
- อย่าใส่ข้อมูลส่วนตัวจริงของลูกค้าในการทดลอง
- URL ของ Apps Script ที่ตั้ง Anyone อาจรับข้อมูลจากผู้ที่มีลิงก์ได้ ควรใช้ข้อมูลสมมติสำหรับงานเรียน
- ต้องทดสอบ URL Google Sheets และ Vercel ด้วยบัญชีของผู้เรียนก่อนส่งงาน

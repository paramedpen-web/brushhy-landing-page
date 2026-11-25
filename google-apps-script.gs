// วางใน Google Sheets > Extensions > Apps Script
// แก้ SHEET_NAME ให้ตรงกับชื่อแท็บชีต (ตัวอย่าง: Orders)
const SHEET_NAME = "Orders";
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const order = JSON.parse(e.postData.contents);
  order.items.forEach(item => sheet.appendRow([
    order.id, order.date, order.customer, order.phone, order.address,
    item.sku, item.name, item.qty, item.price, order.total, order.status
  ]));
  return ContentService.createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}
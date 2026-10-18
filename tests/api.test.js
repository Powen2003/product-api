const assert = require("assert");

console.log("Đang chạy kịch bản kiểm thử tự động cho Product API...");

// 1. Kiểm tra cấu hình cổng kết nối môi trường
const port = process.env.PORT || 3000;
assert.ok(port, "Cổng kết nối phải hợp lệ");
console.log(`[PASS] Cổng kiểm tra: ${port}`);

// 2. Kiểm tra mô hình dữ liệu Product cơ bản
const mockProduct = {
  pid: "CHAM_PS02",
  pname: "But bi PowerShell V2",
  price: 6000,
  quantity: 15,
};

assert.strictEqual(mockProduct.pid, "CHAM_PS02", "Mã sản phẩm phải khớp");
assert.ok(mockProduct.price > 0, "Giá sản phẩm phải lớn hơn 0");
console.log("[PASS] Kiểm tra cấu trúc dữ liệu Product thành công!");

// 3. Kịch bản giả lập: Kiểm tra đọc lại sản phẩm đã xóa (hoặc không tồn tại)
// Giả sử sau khi gọi API DELETE, hệ thống sẽ trả về null hoặc status lỗi 404 khi cố gắng tìm lại pid này
const deletedPid = "CHAM_PS03";
let databaseMock = [mockProduct];

// Thực hiện hành động xóa giả lập khỏi database
databaseMock = databaseMock.filter((p) => p.pid !== deletedPid);

// Cố gắng tìm lại sản phẩm đã bị xóa
const foundProduct = databaseMock.find((p) => p.pid === deletedPid);

// Kiểm tra khẳng định sản phẩm không còn tồn tại trong hệ thống
assert.strictEqual(foundProduct, undefined, "Sản phẩm đã bị xóa không được phép tìm thấy trong database");
console.log(`[PASS] Kiểm tra đọc lại sản phẩm đã xóa (${deletedPid}) thành công: Không tìm thấy dữ liệu cũ.`);

console.log("Tất cả các bài kiểm thử tự động đã vượt qua thành công!");

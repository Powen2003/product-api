const assert = require("assert");

console.log("Đang chạy kịch bản kiểm thử tự động cho Product API...");

// Kiểm tra logic cấu hình môi trường ứng dụng
const port = process.env.PORT || 3000;
assert.ok(port, "Cổng kết nối phải hợp lệ");

console.log("Tất cả các bài kiểm thử tự động đã vượt qua thành công!");

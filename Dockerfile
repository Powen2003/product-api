# Sử dụng image Node.js chính thức phiên bản ổn định
FROM node:20-alpine

# Đặt thư mục làm việc bên trong container
WORKDIR /app

# Sao chép file package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt các gói phụ thuộc (chỉ cài production dependencies cho gọn nhẹ, hoặc npm install nếu muốn cài đủ)
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Mở cổng 3000 của ứng dụng
EXPOSE 3000

# Lệnh khởi chạy ứng dụng
CMD ["npm", "start"]
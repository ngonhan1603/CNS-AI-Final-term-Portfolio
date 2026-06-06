# Web Portfolio - Nhập môn CNS&AI

## Mô tả chung thông tin dự án
Đây là dự án Web Portfolio cá nhân được xây dựng cho môn học **Nhập môn CNS&AI**. Dự án đóng vai trò như một hồ sơ học tập kỹ thuật số, tổng hợp và lưu trữ toàn bộ quá trình thực hành, kiến thức, kỹ năng cũng như các bài tập (file PDF) đã thực hiện trong khóa học. Giao diện được thiết kế tối giản, tập trung vào trải nghiệm người dùng, giúp hiển thị nội dung học thuật một cách rõ ràng và mạch lạc trên nhiều thiết bị.

## Công nghệ sử dụng
- **Framework/Library:** React (Phiên bản 18+)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Animation:** Motion (Framer Motion) cho chuyển động giao diện mượt mà
- **Icons:** Lucide React

## Yêu cầu cài đặt
Để chạy dự án này trên máy tính cá nhân, bạn cần cài đặt sẵn môi trường sau:
- **Node.js**: Phiên bản 18.0.0 trở lên.
- **Node Package Manager (npm)**: (Thường đã được cài đặt kèm với Node.js).

## Cấu trúc thư mục
Dưới đây là cấu trúc thư mục chính yếu của dự án:

```
/
├── public/                 # Chứa các tài nguyên tĩnh: các file báo cáo PDF (CNS_W1.pdf đến CNS_W6.pdf)
├── src/                    # Chứa toàn bộ mã nguồn của dự án
│   ├── components/         # Các thành phần giao diện (Navbar, Hero, Tasks, Journey, TaskDetail...)
│   ├── App.tsx             # Điểm vào chính của giao diện, điều phối hiển thị và Routing
│   ├── index.css           # Cấu hình Tailwind CSS, định nghĩa Font và các biến CSS
│   └── main.tsx            # File cấu hình khởi chạy chính của React
├── .env.example            # Mẫu tham khảo các biến môi trường
├── index.html              # File HTML cơ sở
├── package.json            # Khai báo thông tin dự án và các thư viện cần thiết
├── tsconfig.json           # Tùy chỉnh quy tắc của TypeScript
└── vite.config.ts          # Cấu hình cho công cụ build Vite
```

## Cách cài đặt và chạy

Để cấu hình và khởi chạy dự án, hãy mở Terminal (Command Prompt / PowerShell) và thực hiện tuần tự các bước sau:

**Bước 1: Tải mã nguồn về máy (hoặc xả nén file Zip)**
```bash
git clone <url_repository>
cd <thu_muc_du_an>
```
*(Bỏ qua lệnh clone nếu bạn đã có sẵn thư mục)*

**Bước 2: Cài đặt các thư viện phụ thuộc (Dependencies)**
Đảm bảo bạn đang đứng tại thư mục gốc của dự án (nơi có chứa file `package.json`), sau đó chạy lệnh:
```bash
npm install
```

**Bước 3: Khởi chạy môi trường lập trình (Development server)**
Sau khi cài đặt xong, gõ lệnh sau để mở ứng dụng ở chế độ nhà phát triển:
```bash
npm run dev
```
Terminal sẽ hiển thị địa chỉ localhost đang trỏ về. Mở trình duyệt Web của bạn và truy cập vào đường dẫn đó để xem Portfolio.

**Bước 4: Đóng gói dự án (Tùy chọn)**
Khi bạn muốn đóng gói toàn bộ Website (Build) để up lên host, hãy chạy:
```bash
npm run build
```
Hệ thống sẽ tạo ra một thư mục `dist` chứa code đã được nén tối ưu, sẵn sàng cho việc triển khai (deploy).

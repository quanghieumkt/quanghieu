# Portfolio — Trương Quang Hiếu (SEO Specialist)

Website portfolio tĩnh, thiết kế theo hướng "Rank Climb" — bold, dữ liệu-hoá, xoay quanh chủ đề tăng hạng từ khóa. Không dùng framework, sẵn sàng deploy GitHub Pages.

## Cấu trúc
- `index.html` — Trang chủ (hero, năng lực cốt lõi, số liệu, dự án nổi bật)
- `about.html` — Giới thiệu, kinh nghiệm (timeline), kỹ năng, chứng chỉ
- `projects.html` — Danh sách case study (có filter)
- `projects/*.html` — 4 case study chi tiết
- `contact.html` — Form liên hệ + thông tin
- `404.html`
- `css/style.css`, `js/main.js`
- `data/projects.json` — dữ liệu dự án (tham khảo/mở rộng sau)

## Trước khi publish
1. Thêm file CV thật vào `assets/documents/CV_Truong_Quang_Hieu.pdf`
2. Thay `YOUR-USERNAME` và `YOUR-REPO` trong `robots.txt` và `sitemap.xml` bằng domain thật của bạn
3. Kiểm tra lại các số liệu traffic — README gốc của theme demo có nhắc: **không publish số liệu SEO chưa xác thực**, số liệu trong bản này lấy trực tiếp từ CV của bạn nên hãy đảm bảo vẫn đúng tại thời điểm publish
4. Cân nhắc: trang Liên hệ hiện chỉ hiển thị khu vực "Tân Phú, TP.HCM" (không có số nhà) để bảo vệ thông tin cá nhân — bạn có thể đổi lại nếu muốn

## Deploy lên GitHub Pages
1. Tạo repository mới trên GitHub
2. Push toàn bộ nội dung thư mục này lên nhánh `main`
3. Vào Settings → Pages → chọn nhánh `main`, thư mục `/root`
4. Đợi vài phút, site sẽ có tại `https://<username>.github.io/<repo>/`

# Portfolio — Trương Quang Hiếu (SEO Specialist & Web Developer)

Website portfolio tĩnh, thiết kế theo hướng "Source & Signal" — chuyên nghiệp, dữ liệu-hoá, thể hiện song song năng lực SEO và triển khai kỹ thuật độc lập (WordPress, plugin, deploy). Không dùng framework, sẵn sàng deploy GitHub Pages.

## Cấu trúc
- `index.html` — Trang chủ (hero, hai vai trò, năng lực cốt lõi, số liệu, dự án nổi bật)
- `about.html` — Giới thiệu, kinh nghiệm (timeline), kỹ năng, chứng chỉ
- `projects.html` — Danh sách case study (có filter)
- `projects/*.html` — 4 case study chi tiết
- `contact.html` — Form liên hệ + thông tin + LinkedIn/Facebook
- `404.html`
- `css/style.css`, `js/main.js`
- `assets/favicon.svg` — favicon dạng chữ "H"
- `data/projects.json` — dữ liệu dự án (tham khảo/mở rộng sau)

## Đã tối ưu SEO/kỹ thuật sẵn
- Favicon SVG
- `<link rel="preconnect">` tới Google Fonts để tải nhanh hơn
- JSON-LD Schema (`Person`) thật trong `index.html` — gồm sameAs LinkedIn/Facebook
- Tôn trọng `prefers-reduced-motion` (tắt hiệu ứng marquee/reveal cho người dùng cần)
- Meta description, Open Graph cơ bản

## Trước khi publish
1. Thêm file CV thật vào `assets/documents/CV_Truong_Quang_Hieu.pdf`
2. Thay `YOUR-USERNAME` và `YOUR-REPO` trong `robots.txt` và `sitemap.xml` bằng domain thật của bạn
3. Kiểm tra lại các số liệu traffic cho đúng tại thời điểm publish
4. Cân nhắc thêm ảnh cá nhân thật vào hero/about, và ảnh `og:image` để chia sẻ link đẹp hơn trên LinkedIn/Zalo
5. Trang Liên hệ hiện chỉ hiển thị khu vực "Tân Phú, TP.HCM" (không có số nhà) để bảo vệ thông tin cá nhân

## Deploy lên GitHub Pages
1. `git add .`
2. `git commit -m "..."`
3. `git push`
4. Vào Settings → Pages → chọn nhánh (main/master), thư mục `/root`
5. Site có tại `https://<username>.github.io/<repo>/`

Thư mục này dùng để chứa hình ảnh local (nếu bạn muốn thay ảnh Unsplash).

Hiện tại website đang dùng ảnh trực tiếp từ Unsplash (CDN) nên không cần
ảnh trong thư mục này. Nếu muốn dùng ảnh local:

1. Copy ảnh vào đây, ví dụ: images/halong.jpg
2. Trong js/script.js, sửa thuộc tính `image` của mỗi địa điểm thành
   đường dẫn tương đối: image: "images/halong.jpg"
3. Trong index.html, sửa các URL background-image của .slide tương tự.

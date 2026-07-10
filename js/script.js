// Xử lý Giao diện Dark/Light Mode
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
if (toggleSwitch) {
    toggleSwitch.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
}
// Giữ bộ nhớ theme khi tải lại trang
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark' && toggleSwitch) {
        toggleSwitch.checked = true;
    }
}

// Bật/tắt Menu Hamburger trên Điện thoại
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Hàm chuyển đổi tiếng Việt có dấu thành không dấu phục vụ Tìm kiếm nâng cao
function removeVietnameseTones(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|á|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    return str.trim();
}

// Logic bộ lọc tìm kiếm thời gian thực
function searchLocation() {
    let input = document.getElementById('searchInput').value;
    let filter = removeVietnameseTones(input);
    let cards = document.querySelectorAll('.location-card');

    cards.forEach(card => {
        let title = card.querySelector('.location-title').innerText;
        let cleanTitle = removeVietnameseTones(title);

        if (cleanTitle.includes(filter)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

// Slide trình chiếu ảnh tự động ở Trang Chủ
let slideIndex = 0;
function showSlides() {
    let slides = document.querySelectorAll(".slide");
    if (slides.length === 0) return;
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
    slideIndex++;
    if (slideIndex >= slides.length) { slideIndex = 0; }
    setTimeout(showSlides, 4000); // Đổi ảnh sau mỗi 4 giây
}
document.addEventListener("DOMContentLoaded", showSlides);

// Cửa sổ Bản đồ Google Maps Modal
function openMapModal(mapUrl) {
    document.getElementById('mapIframe').src = mapUrl;
    document.getElementById('mapModal').style.display = "flex";
}
function closeMapModal() {
    document.getElementById('mapModal').style.display = "none";
    document.getElementById('mapIframe').src = "";
}

// Lightbox xem ảnh lớn phóng to (Thư viện Gallery)
function openLightbox(imgElement) {
    let lightbox = document.getElementById('lightbox');
    let lightboxImg = document.getElementById('lightboxImg');
    lightboxImg.src = imgElement.src;
    lightbox.style.display = "flex";
}
function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
}

// Xử lý gửi Form liên hệ/Góp ý thành công
function handleContactSubmit(event) {
    event.preventDefault();
    alert("Cảm ơn bạn đã đóng góp ý kiến! Chúng tôi sẽ phản hồi sớm nhất qua Email.");
    event.target.reset();
}

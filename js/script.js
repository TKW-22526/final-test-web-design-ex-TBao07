/* ==========================================================
   Du Lịch Việt Nam — Vanilla JS
   ========================================================== */

/* ---------- DỮ LIỆU ĐỊA ĐIỂM ---------- */
const destinations = [
  { slug: "vinh-ha-long", name: "Vịnh Hạ Long", region: "bac", regionLabel: "Miền Bắc", province: "Quảng Ninh",
    shortDesc: "Kỳ quan thiên nhiên thế giới với hàng ngàn đảo đá vôi.",
    description: "Vịnh Hạ Long là Di sản Thiên nhiên Thế giới được UNESCO công nhận, nổi tiếng với gần 2.000 hòn đảo đá vôi nhô lên giữa làn nước xanh ngọc bích.",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=80",
    highlights: ["Du thuyền qua đêm", "Hang Sửng Sốt", "Đảo Ti Tốp"],
    bestTime: "Tháng 10 – Tháng 4" },
  { slug: "sa-pa", name: "Sa Pa", region: "bac", regionLabel: "Miền Bắc", province: "Lào Cai",
    shortDesc: "Thị trấn mờ sương giữa ruộng bậc thang trùng điệp.",
    description: "Sa Pa nằm ở độ cao 1.500m, nổi tiếng với ruộng bậc thang, đỉnh Fansipan và văn hóa các dân tộc H'Mông, Dao Đỏ.",
    image: "content://media/external/downloads/1000145935",
    highlights: ["Đỉnh Fansipan", "Bản Cát Cát", "Ruộng bậc thang"],
    bestTime: "Tháng 9 – Tháng 11" },
  { slug: "trang-an", name: "Tràng An", region: "bac", regionLabel: "Miền Bắc", province: "Ninh Bình",
    shortDesc: "Vịnh Hạ Long trên cạn với hệ thống hang động kỳ vĩ.",
    description: "Quần thể Tràng An được UNESCO công nhận là Di sản hỗn hợp Văn hóa và Thiên nhiên. Du khách ngồi thuyền nan qua các hang nước, đền cổ và rừng nguyên sinh.",
    image: "https://images.vietnamtourism.gov.vn/vn//images/2021/trang_an.jpg",
    highlights: ["Thuyền nan qua hang", "Cố đô Hoa Lư", "Hang Múa"],
    bestTime: "Tháng 1 – Tháng 3" },
  { slug: "hoi-an", name: "Phố cổ Hội An", region: "trung", regionLabel: "Miền Trung", province: "Quảng Nam",
    shortDesc: "Phố cổ rực rỡ đèn lồng bên dòng sông Hoài.",
    description: "Hội An là thương cảng cổ từ thế kỷ 15-19, nay là Di sản Văn hóa Thế giới với nhà cổ vàng tươi, cầu Nhật Bản và hàng nghìn chiếc đèn lồng đầy màu sắc.",
    image: "content://media/external/downloads/1000145933",
    highlights: ["Chùa Cầu", "Đèn lồng đêm rằm", "Cao lầu"],
    bestTime: "Tháng 2 – Tháng 4" },
  { slug: "ba-na-hills", name: "Bà Nà Hills", region: "trung", regionLabel: "Miền Trung", province: "Đà Nẵng",
    shortDesc: "Khu nghỉ dưỡng trên mây với Cầu Vàng nổi tiếng.",
    description: "Bà Nà Hills nằm trên đỉnh núi Chúa cao 1.487m, sở hữu tuyến cáp treo dài bậc nhất thế giới. Cầu Vàng với hai bàn tay khổng lồ đã trở thành biểu tượng du lịch Việt Nam.",
    image: "https://images2.thanhnien.vn/528068263637045248/2024/3/27/ban-sao-cua-sun-world-ba-na-hills-4-17115055398311570071595.jpg",
    highlights: ["Cầu Vàng", "Cáp treo kỷ lục", "Làng Pháp"],
    bestTime: "Tháng 4 – Tháng 9" },
  { slug: "dai-noi-hue", name: "Đại Nội Huế", region: "trung", regionLabel: "Miền Trung", province: "Thừa Thiên Huế",
    shortDesc: "Hoàng thành cổ kính của triều Nguyễn bên sông Hương.",
    description: "Đại Nội Huế là quần thể kiến trúc cung đình triều Nguyễn được UNESCO công nhận. Tham quan Ngọ Môn, điện Thái Hòa, Tử Cấm Thành và lăng tẩm các vua Nguyễn.",
    image: "content://media/external/downloads/1000145936",
    highlights: ["Ngọ Môn", "Điện Thái Hòa", "Lăng Tự Đức"],
    bestTime: "Tháng 1 – Tháng 4" },
  { slug: "cho-ben-thanh", name: "Chợ Bến Thành", region: "nam", regionLabel: "Miền Nam", province: "TP. Hồ Chí Minh",
    shortDesc: "Biểu tượng sầm uất giữa lòng Sài Gòn hoa lệ.",
    description: "Chợ Bến Thành hơn 100 năm tuổi là biểu tượng của Sài Gòn. Bày bán đủ loại hàng hóa, đặc sản và là thiên đường ẩm thực đường phố.",
    image: "content://media/external/downloads/1000145939",
    highlights: ["Ẩm thực đường phố", "Đặc sản ba miền", "Chợ đêm"],
    bestTime: "Tháng 12 – Tháng 4" },
  { slug: "phu-quoc", name: "Đảo Phú Quốc", region: "nam", regionLabel: "Miền Nam", province: "Kiên Giang",
    shortDesc: "Đảo ngọc với bãi biển cát trắng và hoàng hôn tuyệt đẹp.",
    description: "Phú Quốc là hòn đảo lớn nhất Việt Nam với bãi Sao, bãi Khem cát trắng mịn. Du khách có thể lặn ngắm san hô, đi cáp treo vượt biển dài nhất thế giới.",
    image: "content://media/external/downloads/1000145937",
    highlights: ["Bãi Sao", "Cáp treo Hòn Thơm", "Lặn ngắm san hô"],
    bestTime: "Tháng 11 – Tháng 4" },
  { slug: "mui-ne", name: "Mũi Né", region: "nam", regionLabel: "Miền Nam", province: "Bình Thuận",
    shortDesc: "Đồi cát vàng – đỏ độc đáo và biển xanh trải dài.",
    description: "Mũi Né nổi tiếng với những đồi cát đỏ, đồi cát trắng đẹp như sa mạc thu nhỏ, làng chài nhộn nhịp. Điểm đến lý tưởng cho lướt ván diều và ngắm bình minh.",
    image: "content://media/external/downloads/1000145938",
    highlights: ["Đồi cát bay", "Suối Tiên", "Lướt ván diều"],
    bestTime: "Tháng 11 – Tháng 3" },
];

/* ---------- HELPERS ---------- */
const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];

function cardHTML(d) {
  return `
    <article class="card">
      <div class="card-img">
        <img src="${d.image}" alt="${d.name}" loading="lazy" />
        <span class="card-tag">${d.regionLabel}</span>
      </div>
      <div class="card-body">
        <div class="card-meta">📍 ${d.province}</div>
        <h3>${d.name}</h3>
        <p class="card-desc">${d.description}</p>
        <div class="tags">${d.highlights.slice(0,3).map(h=>`<span class="tag">${h}</span>`).join("")}</div>
        <div class="card-time">📅 Mùa đẹp: ${d.bestTime}</div>
      </div>
    </article>`;
}

/* ---------- YEAR ---------- */
$$("#year").forEach(el => el.textContent = new Date().getFullYear());

/* ---------- MOBILE MENU ---------- */
const menuToggle = $("#menuToggle");
const navMenu = $("#navMenu");
if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => navMenu.classList.toggle("open"));
}

/* ---------- DARK / LIGHT MODE ---------- */
const themeToggle = $("#themeToggle");
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
if (themeToggle) {
  themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
  themeToggle.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    themeToggle.textContent = next === "dark" ? "☀️" : "🌙";
  });
}

/* ---------- TRANG CHỦ: SLIDESHOW + FEATURED ---------- */
const slideshow = $("#slideshow");
if (slideshow) {
  const slides = $$(".slide", slideshow);
  const dotsWrap = $("#slideDots");
  let cur = 0;
  slides.forEach((_, i) => {
    const b = document.createElement("button");
    if (i === 0) b.classList.add("active");
    b.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(b);
  });
  const dots = $$("button", dotsWrap);
  function goTo(i) {
    slides[cur].classList.remove("active");
    dots[cur].classList.remove("active");
    cur = i;
    slides[cur].classList.add("active");
    dots[cur].classList.add("active");
  }
  setInterval(() => goTo((cur + 1) % slides.length), 5000);
}

const featuredGrid = $("#featuredGrid");
if (featuredGrid) {
  featuredGrid.innerHTML = destinations.slice(0, 6).map(cardHTML).join("");
}

/* ---------- TRANG ĐỊA ĐIỂM: FILTER + SEARCH ---------- */
const placeGrid = $("#placeGrid");
if (placeGrid) {
  const tabs = $$("#filterTabs button");
  const searchInput = $("#searchInput");
  const empty = $("#emptyState");
  let region = "all";
  let q = "";

  // Lấy ?mien= từ URL
  const params = new URLSearchParams(location.search);
  const mien = params.get("mien");
  if (mien && ["bac","trung","nam"].includes(mien)) {
    region = mien;
    tabs.forEach(t => t.classList.toggle("active", t.dataset.region === mien));
  }

  function render() {
    const list = destinations.filter(d => {
      if (region !== "all" && d.region !== region) return false;
      if (q && !(`${d.name} ${d.province} ${d.shortDesc}`.toLowerCase().includes(q))) return false;
      return true;
    });
    placeGrid.innerHTML = list.map(cardHTML).join("");
    empty.hidden = list.length > 0;
  }

  tabs.forEach(btn => btn.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    btn.classList.add("active");
    region = btn.dataset.region;
    render();
  }));
  searchInput.addEventListener("input", e => {
    q = e.target.value.trim().toLowerCase();
    render();
  });
  render();
}

/* ---------- GALLERY + LIGHTBOX ---------- */
const gallery = $("#gallery");
if (gallery) {
  gallery.innerHTML = destinations.map((d, i) => `
    <div class="gallery-item" data-idx="${i}">
      <img src="${d.image}" alt="${d.name}" loading="lazy" />
      <div class="gallery-caption">
        <span>${d.regionLabel}</span>
        <strong>${d.name}</strong>
      </div>
    </div>
  `).join("");

  const lb = $("#lightbox");
  const lbImg = $("#lbImg");
  const lbCap = $("#lbCaption");
  let active = 0;

  function openLB(i) {
    active = i;
    const d = destinations[i];
    lbImg.src = d.image;
    lbImg.alt = d.name;
    lbCap.innerHTML = `<span>${d.regionLabel} · ${d.province}</span><h3>${d.name}</h3><p>${d.shortDesc}</p>`;
    lb.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeLB() {
    lb.hidden = true;
    document.body.style.overflow = "";
  }
  function nav(dir) {
    active = (active + dir + destinations.length) % destinations.length;
    openLB(active);
  }

  $$(".gallery-item", gallery).forEach(el => {
    el.addEventListener("click", () => openLB(+el.dataset.idx));
  });
  $("#lbClose").addEventListener("click", closeLB);
  $("#lbPrev").addEventListener("click", () => nav(-1));
  $("#lbNext").addEventListener("click", () => nav(1));
  lb.addEventListener("click", e => { if (e.target === lb) closeLB(); });
  document.addEventListener("keydown", e => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLB();
    if (e.key === "ArrowLeft") nav(-1);
    if (e.key === "ArrowRight") nav(1);
  });
}

/* ---------- FORM LIÊN HỆ ---------- */
const form = $("#contactForm");
if (form) {
  const showErr = (name, msg) => {
    const el = form.querySelector(`[data-err="${name}"]`);
    if (el) el.textContent = msg || "";
  };
  form.addEventListener("submit", e => {
    e.preventDefault();
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };
    let ok = true;
    showErr("name"); showErr("email"); showErr("message");

    if (data.name.length < 2) { showErr("name", "Vui lòng nhập họ tên (≥ 2 ký tự)"); ok = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) { showErr("email", "Email không hợp lệ"); ok = false; }
    if (data.message.length < 10) { showErr("message", "Nội dung tối thiểu 10 ký tự"); ok = false; }

    if (!ok) return;
    const success = $("#successMsg");
    success.hidden = false;
    form.reset();
    setTimeout(() => success.hidden = true, 5000);
  });
}

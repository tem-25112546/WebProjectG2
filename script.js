document.addEventListener("DOMContentLoaded", function() {
    
    const wrapper = document.getElementById('sliderWrapper');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.getElementById('sliderDots');

    // เช็กว่าหาโครงสร้างสไลด์เจอไหม
    if (!wrapper || slides.length === 0 || !dotsContainer) {
        console.error("หา Element ของ Slider ไม่เจอ! เช็กว่าใน HTML มี id='sliderWrapper' และ id='sliderDots' หรือยัง");
        return; // หยุดทำงานเพื่อไม่ให้เว็บพัง
    }

    let currentIndex = 0;
    let slideInterval;
    const intervalTime = 4000; // เวลาเปลี่ยนสไลด์ (4 วินาที)

    // 1. สร้างจุด (Dots) ตามจำนวนสไลด์
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        
        // เมื่อคลิกที่จุด ให้ข้ามไปสไลด์นั้น
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // 2. ฟังก์ชันอัปเดตการแสดงผลของ Slider และ Dots
    function updateSlider() {
        wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        if(dots[currentIndex]) {
            dots[currentIndex].classList.add('active');
        }
    }

    // 3. ฟังก์ชันเลื่อนสไลด์ (ทำเป็น Global เพื่อให้ปุ่มใน HTML เรียกใช้ได้)
    window.moveSlide = function(direction) {
        currentIndex += direction;
        
        if (currentIndex >= slides.length) {
            currentIndex = 0; // ถ้าถึงรูปสุดท้าย ให้กลับไปรูปแรก
        } else if (currentIndex < 0) {
            currentIndex = slides.length - 1; // ถ้ากดถอยหลังจากรูปแรก ให้ไปรูปสุดท้าย
        }
        
        updateSlider();
        resetInterval();
    };

    // 4. ฟังก์ชันกระโดดไปหน้าสไลด์ที่เลือกจากจุด
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
        resetInterval();
    }

    // 5. ระบบเลื่อนอัตโนมัติ
    function startInterval() {
        slideInterval = setInterval(() => {
            window.moveSlide(1);
        }, intervalTime);
    }

    // รีเซ็ตเวลาอัตโนมัติเมื่อมีการกดปุ่มด้วยตัวเอง
    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    // เริ่มทำงาน
    startInterval();
    console.log("ระบบ JavaScript Slider โหลดสมบูรณ์แล้ว! ✅");
});
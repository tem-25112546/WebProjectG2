const careerData = {
    programming: [
        { name: "Software Developer", score: 40, desc: "พัฒนาเว็บไซต์ ระบบบริษัท แอป หรือซอฟต์แวร์ธุรกิจ" },
        { name: "Full Stack Developer", score: 35, desc: "ทำ Frontend Backend" },
        { name: "AI / Machine Learning Engineer", score: 25, desc: "พัฒนาระบบวิเคราะห์ข้อมูล, AI Chatbot, Computer Vision" }
    ],
    iot: [
        { name: "IoT Engineer", score: 35, desc: "ออกแบบ พัฒนา และติดตั้งระบบเชื่อมต่ออุปกรณ์อัจฉริยะผ่านอินเทอร์เน็ต เพื่อรวบรวมข้อมูล และควบคุมการทำงานระยะไกล" },
        { name: "Embedded Systems Engineer", score: 30, desc: "ทำหน้าที่ออกแบบ พัฒนา และดูแลรักษา ระบบสมองกลฝังตัว" },
        { name: "Industrial IoT Engineer", score: 25, desc: "เอา IoT ไปใช้กับเครื่องจักร วิเคราะห์ข้อมูลเครื่องจักร" }
    ],
    digital: [
        { name: "Hardware Design Engineer", score: 30, desc: "ออกแบบวงจรดิจิทัล, FPGA, Logic Circuit" },
        { name: "Embedded Engineer", score: 25, desc: "ทำหน้าที่ออกแบบ พัฒนา และดูแลรักษา ระบบสมองกลฝังตัว" },
        { name: "Semiconductor Test Engineer", score: 20, desc: "ทำงานในอุตสาหกรรมชิป/IC" }
    ],
    circuits: [
        { name: "Electronics Engineer", score: 35, desc: "ออกแบบและวิเคราะห์วงจรไฟฟ้า" },
        { name: "Power Electronics Engineer", score: 25, desc: "ทำวงจรแปลงพลังงาน (EV, Solar, Charger)" },
        { name: "Maintenance Engineer", score: 20, desc: "ดูแลระบบไฟฟ้าในโรงงาน" }
    ],
    security: [
        { name: "Cybersecurity Analyst", score: 40, desc: "ป้องกันระบบจากการโจมตี" },
        { name: "Penetration Tester", score: 30, desc: "ทดสอบเจาะระบบหาช่องโหว่" },
        { name: "Network Security Engineer", score: 25, desc: "ดูแล Firewall และโครงข่ายองค์กร" }
    ],
    sensors: [
        { name: "Instrumentation Engineer", score: 30, desc: "ออกแบบระบบวัดค่าอุตสาหกรรม" },
        { name: "IoT System Engineer", score: 25, desc: "ใช้เซนเซอร์เชื่อมระบบออนไลน์" },
        { name: "Robotics Engineer", score: 20, desc: "ใช้เซนเซอร์ควบคุมหุ่นยนต์" }
    ],
    micro: [
        { name: "Embedded Systems Engineer", score: 45, desc: "เขียน Firmware ควบคุมอุปกรณ์, ทำระบบในเครื่องใช้ไฟฟ้า, อุปกรณ์การแพทย์, อุปกรณ์ IoT" },
        { name: "Control Engineer", score: 20, desc: "ใช้ไมโครคอนโทรลเลอร์ควบคุมมอเตอร์, ออกแบบระบบควบคุมขนาดเล็ก" },
        { name: "IoT Device Developer", score: 35, desc: "ทำอุปกรณ์ IoT ตั้งแต่ฮาร์ดแวร์ถึงส่งข้อมูลขึ้น Cloud, เขียนโปรแกรมเชื่อม WiFi, MQTT" }
    ],
    mobile: [
        { name: "Mobile Application Developer", score: 50, desc: "พัฒนาแอป, แก้ Bug และอัปเดตฟีเจอร์" },
        { name: "Frontend / Cross-Platform Developer", score: 35, desc: "ทำ UI หน้าแอป, เชื่อมระบบหลังบ้าน, ดูแลประสบการณ์ผู้ใช้" },
        { name: "App Startup Developer", score: 15, desc: "พัฒนาและดูแลจัดการธุรกิจ start up" }
    ],
    interaction: [
        { name: "UX/UI Designer", score: 50, desc: "ออกแบบหน้าจอแอป / เว็บไซต์, วาง Flow การใช้งาน, ทำ Wireframe และ Prototype" },
        { name: "Product Designer", score: 40, desc: "ออกแบบทั้ง UX + กลยุทธ์สินค้า, วิเคราะห์ผู้ใช้ + ธุรกิจ" },
        { name: "Frontend Developer", score: 10, desc: "แปลงดีไซน์เป็นโค้ด, ดูแล Animation / Interaction" }
    ],
    em_field: [
        { name: "RF Engineer", score: 50, desc: "ออกแบบ/ทดสอบเสาอากาศ, วิเคราะห์สัญญาณ RF, ทำงานกับระบบสื่อสารไร้สาย" },
        { name: "Telecom Engineer", score: 35, desc: "วางระบบเครือข่ายสื่อสาร, ดูแลสัญญาณ 4G / 5G" },
        { name: "EMC/EMI Test Engineer", score: 15, desc: "ทดสอบว่าอุปกรณ์รบกวนคลื่นหรือไม่, ตรวจสอบมาตรฐานอุตสาหกรรม" }
    ],
    physics_app: [
        { name: "R&D Engineer", score: 35, desc: "วิจัยและพัฒนาผลิตภัณฑ์ใหม่, วิเคราะห์ปัญหาทางฟิสิกส์ในสินค้า" },
        { name: "Mechanical / Mechatronics Support Engineer", score: 35, desc: "วิเคราะห์แรง การสั่นสะเทือน เครื่องจักร, แก้ปัญหาการทำงานของระบบกลไก" },
        { name: "Physicist", score: 30, desc: "วิจัยด้านวัสดุ พลังงาน แสง เลเซอร์ เซมิคอนดักเตอร์, ทำงานในห้องแล็บ / สถาบันวิจัย" }
    ],
    mechanics: [
        { name: "Vibration / Reliability Engineer", score: 40, desc: "วิเคราะห์การสั่นของมอเตอร์เครื่องจักร, ใช้เซนเซอร์วัดการสั่น" },
        { name: "Researcher", score: 30, desc: "ทำวิจัยด้านพลศาสตร์, ทำงานในมหาวิทยาลัย" },
        { name: "Mechanical Engineer", score: 30, desc: "วิเคราะห์แรงในโครงสร้าง, คำนวณการสั่นสะเทือนของเครื่องจักร, ทำงานในโรงงาน ยานยนต์" }
    ],
    modern_physics: [
        { name: "Researcher / Academic", score: 45, desc: "วิจัย, สอนในมหาวิทยาลัย" },
        { name: "Medical Physicist", score: 40, desc: "ควบคุมเครื่องฉายรังสีรักษามะเร็ง, คำนวณปริมาณรังสี" },
        { name: "Semiconductor / Electronics R&D Engineer", score: 5, desc: "วิเคราะห์คุณสมบัติวัสดุ, ทำงานกับการออกแบบอุปกรณ์อิเล็กทรอนิกส์" }
    ],
    math_physics: [
        { name: "Data Scientist / AI Engineer", score: 35, desc: "สร้างโมเดลทำนายข้อมูล, วิเคราะห์ Big Data, Machine Learning" },
        { name: "Simulation / Modeling Engineer", score: 35, desc: "ทำแบบจำลองระบบทางฟิสิกส์, เขียนโปรแกรมจำลอง (MATLAB / Python)" },
        { name: "Quant / Financial Engineer", score: 30, desc: "สร้างโมเดลคำนวณความเสี่ยง, วิเคราะห์ตลาดหุ้น, ทำ Algorithm Trading" }
    ]
};

// จำกัดการเลือกไม่เกิน 3 วิชา
const checkboxes = document.querySelectorAll('input[name="subject"]');
checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
        const checkedCount = document.querySelectorAll('input[name="subject"]:checked').length;
        if (checkedCount > 3) {
            cb.checked = false;
            alert("คุณสามารถเลือกได้สูงสุด 3 วิชาเท่านั้นครับ");
        }
    });
});

function analyzeCareer() {
    const selected = Array.from(document.querySelectorAll('input[name="subject"]:checked')).map(cb => cb.value);
    const resultDiv = document.getElementById('result-container');
    
    if (selected.length === 0) {
        resultDiv.innerHTML = "<p style='text-align:center; color:#ff3d00; margin-top:30px; font-weight:bold;'>กรุณาเลือกวิชาอย่างน้อย 1 วิชาเพื่อวิเคราะห์ครับ</p>";
        return;
    }

    let scores = {};
    selected.forEach(sub => {
        if (careerData[sub]) {
            careerData[sub].forEach(career => {
                if (!scores[career.name]) {
                    scores[career.name] = { score: 0, desc: career.desc };
                }
                scores[career.name].score += career.score;
            });
        }
    });

    // เรียงอันดับคะแนนจากมากไปน้อย
    const sortedCareers = Object.keys(scores)
        .map(name => ({ name, ...scores[name] }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);

    resultDiv.innerHTML = "<h2 style='text-align:center; margin-top:40px; color:white; text-shadow: 0 0 10px #b829ff;'>ผลการวิเคราะห์อาชีพ:</h2>";
    sortedCareers.forEach(c => {
        resultDiv.innerHTML += `
            <div class="career-card">
                <div class="career-name">${c.name}</div>
                <div class="career-desc">${c.desc}</div>
                <div class="match-score">คะแนนความเหมาะสม: ${c.score}%</div>
            </div>`;
    });
}
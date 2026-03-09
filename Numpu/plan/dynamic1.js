// โค้ดสำหรับใส่ไว้ในไฟล์ subject.html (หรือเรียกจาก dynamic1.js)
const urlParams = new URLSearchParams(window.location.search);
const subjectName = urlParams.get('name');

if(subjectName) {
    // เอาชื่อวิชาไปใส่ใน 태็ก <h1> หรือ <div> ที่เตรียมไว้
    document.getElementById('titleElement').innerText = subjectName;
    
    // ตรงนี้คุณสามารถเขียนเงื่อนไขเพื่อดึงข้อมูลรายละเอียดรายวิชามาแสดงต่อได้
}
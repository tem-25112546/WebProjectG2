function goToSubject(courseName) {
    window.location.href = `subject1.html?name=${encodeURIComponent(courseName)}`;
}

// กำหนดวิชาตัวต่อ
const connections = [
    ['cal1', 'cal2'],
    ['phy1', 'phy2'],
    ['phyLab1', 'phyLab2'],
    ['eng1', 'eng2'],
    ['fundDigi', 'microcon'],
    ['phy2', 'emag'],      
    ['phyLab2', 'emag']    
];

function drawConnections() {
    const svg = document.getElementById('arrowLayer');
    const container = document.getElementById('planContainer');

    if (!svg || !container) return;

    svg.innerHTML = '';
    svg.style.width = Math.max(container.scrollWidth, container.clientWidth) + 'px';
    svg.style.height = Math.max(container.scrollHeight, container.clientHeight) + 'px';

    const containerRect = container.getBoundingClientRect();

    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    defs.innerHTML = `
        <marker id="arrowClean" markerWidth="10" markerHeight="10" refX="0" refY="5" orient="auto">
            <path d="M 0 1 L 10 5 L 0 9" fill="none" stroke="#b829ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </marker>
    `;
    svg.appendChild(defs);

    connections.forEach(pair => {
        const startEl = document.getElementById(pair[0]);
        const endEl = document.getElementById(pair[1]);

        if (startEl && endEl) {
            const startRect = startEl.getBoundingClientRect();
            const endRect = endEl.getBoundingClientRect();

            const startX = (startRect.right - containerRect.left) + container.scrollLeft;
            const startY = (startRect.top - containerRect.top) + container.scrollTop + (startRect.height / 2);

            const boxLeft = (endRect.left - containerRect.left) + container.scrollLeft;
            const endX = boxLeft - 10;
            const endY = (endRect.top - containerRect.top) + container.scrollTop + (endRect.height / 2);

            const distX = boxLeft - startX;
            const offset = Math.max(50, distX * 0.4);

            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            const pathData = `M ${startX} ${startY} C ${startX + offset} ${startY}, ${endX - offset} ${endY}, ${endX} ${endY}`;

            path.setAttribute('d', pathData);
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke', '#b829ff'); 
            path.setAttribute('stroke-width', '1.5');
            path.setAttribute('marker-end', 'url(#arrowClean)');

            svg.appendChild(path);
        }
    });
}

window.addEventListener('load', () => setTimeout(drawConnections, 300));
window.addEventListener('resize', drawConnections);
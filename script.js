let svgDoc = null;
let svgPaths = [];
let curIdx = -1;

const svgObj = document.getElementById('svgObj');
const mapArea = document.querySelector('.map-area');
const listItems = document.querySelectorAll('#rl li');
const tt = document.getElementById('tt');
const ttN = document.getElementById('ttN');
const ttC = document.getElementById('ttC');

// Wait for SVG to load
svgObj.addEventListener('load', function () {
    svgDoc = svgObj.contentDocument;
    svgPaths = svgDoc.querySelectorAll('path[id]');

    svgPaths.forEach(p => {
        const c = COLORS[p.id];
        if (c) {
            p.style.fill = c;
            p.style.stroke = 'rgba(255,255,255,0.12)';
            p.style.strokeWidth = '0.5';
            p.style.cursor = 'pointer';
            p.style.transition = 'all 0.5s';
        }
    });

    svgPaths.forEach(path => {
        const r = R.find(x => x.id === path.id);
        if (!r) return;

        path.addEventListener('mouseenter', () => {
            ttN.textContent = r.name;
            ttC.textContent = r.clim;
            tt.classList.add('show');
            path.style.filter = 'brightness(1.4) saturate(1.4) drop-shadow(0 0 10px rgba(255,255,255,0.25))';
            path.style.stroke = 'rgba(255,255,255,0.8)';
            path.style.strokeWidth = '1.5';
            path.style.opacity = '1';
        });

        path.addEventListener('mousemove', e => {
            const rect = tt.getBoundingClientRect();
            let x = e.clientX - rect.width / 2;
            let y = e.clientY - rect.height - 12;
            if (x < 5) x = 5;
            if (x + rect.width > window.innerWidth - 5) x = window.innerWidth - rect.width - 5;
            if (y < 5) y = e.clientY + 18;
            tt.style.left = x + 'px';
            tt.style.top = y + 'px';
        });

        path.addEventListener('mouseleave', () => {
            tt.classList.remove('show');
            applyFocus(curIdx);
        });

        path.addEventListener('click', () => {
            const idx = R.findIndex(x => x.id === path.id);
            if (idx >= 0) scrollToRegion(idx);
        });
    });

    onScroll();
});

function applyFocus(idx) {
    if (!svgDoc) return;
    const r = R[idx];
    svgPaths.forEach(p => {
        if (p.id === r.id) {
            p.style.opacity = '1';
            p.style.filter = 'brightness(1.3) saturate(1.3) drop-shadow(0 0 6px rgba(255,255,255,0.15))';
            p.style.stroke = 'rgba(255,255,255,0.6)';
            p.style.strokeWidth = '1.2';
        } else {
            p.style.opacity = '0.2';
            p.style.filter = 'saturate(0.3)';
            p.style.stroke = 'rgba(255,255,255,0.08)';
            p.style.strokeWidth = '0.3';
        }
    });
}

function focusRegion(idx) {
    if (idx === curIdx || !svgDoc) return;
    curIdx = idx;
    const r = R[idx];
    const path = svgDoc.getElementById(r.id);
    if (!path) return;

    const bbox = path.getBBox();
    const cx = bbox.x + bbox.width / 2;
    const cy = bbox.y + bbox.height / 2;
    const area = bbox.width * bbox.height;
    let zoom;
    if (area < 100) zoom = 9;
    else if (area < 400) zoom = 6;
    else if (area < 1500) zoom = 4;
    else if (area < 4000) zoom = 3;
    else if (area < 10000) zoom = 2;
    else zoom = 1.3;

    const vw = mapArea.clientWidth;
    const vh = mapArea.clientHeight;
    const objW = 612, objH = 709;
    const pxX = cx * (objW / 612.5365);
    const pxY = cy * (objH / 708.72205);
    const tx = vw / 2 - pxX * zoom;
    const ty = vh / 2 - pxY * zoom;
    svgObj.style.transform = `translate(${tx}px, ${ty}px) scale(${zoom})`;

    applyFocus(idx);

    listItems.forEach(li => li.classList.remove('active'));
    const ali = document.querySelector(`[data-r="${r.id}"]`);
    if (ali) {
        ali.classList.add('active');
        ali.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    document.getElementById('icN').textContent = r.num;
    document.getElementById('icNm').innerHTML = `<span class="idot" style="background:${r.col}"></span>${r.name}`;
    document.getElementById('icCl').textContent = r.clim;
    document.getElementById('icDs').textContent = r.desc;
    document.getElementById('ic').classList.add('show');

    document.getElementById('animalDetail').classList.remove('show');

    spawnAnimals(r, vw, vh);
}

// ============================================
// SCROLL TO REGION
// ============================================
function scrollToRegion(idx) {
    if (idx < 0) idx = 0;
    if (idx >= R.length) idx = R.length - 1;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const targetScroll = ((idx + 0.5) / R.length) * maxScroll;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
}

// ============================================
// SCROLL HANDLER
// ============================================
function onScroll() {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);

    document.getElementById('pf').style.height = (progress * 100) + '%';
    document.getElementById('sh').classList.toggle('gone', progress > 0.01);

    const idx = Math.min(Math.floor(progress * R.length), R.length - 1);
    focusRegion(idx);
}

let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => { onScroll(); ticking = false; });
        ticking = true;
    }
});

// ============================================
// WHEEL
// ============================================
let lastWheelTime = 0;

window.addEventListener('wheel', function (e) {
    e.preventDefault();

    const now = Date.now();
    if (now - lastWheelTime < 350) return;
    lastWheelTime = now;

    const currentIdx = curIdx >= 0 ? curIdx : 0;
    const nextIdx = e.deltaY > 0 ? currentIdx + 1 : currentIdx - 1;

    scrollToRegion(nextIdx);
}, { passive: false });

// ============================================
// KEYBOARD
// ============================================
window.addEventListener('keydown', (e) => {
    const currentIdx = curIdx >= 0 ? curIdx : 0;
    let handled = true;

    switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
            scrollToRegion(currentIdx + 1);
            break;
        case 'ArrowUp':
        case 'ArrowLeft':
        case 'PageUp':
            scrollToRegion(currentIdx - 1);
            break;
        case 'Home':
            scrollToRegion(0);
            break;
        case 'End':
            scrollToRegion(R.length - 1);
            break;
        default:
            handled = false;
    }

    if (handled) e.preventDefault();
});

// ============================================
// TOUCH
// ============================================
let touchStartY = 0;
let touchHandled = false;

window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
    touchHandled = false;
}, { passive: true });

window.addEventListener('touchmove', (e) => {
    if (touchHandled) return;

    const delta = touchStartY - e.touches[0].clientY;
    if (Math.abs(delta) > 40) {
        touchHandled = true;
        const currentIdx = curIdx >= 0 ? curIdx : 0;
        scrollToRegion(currentIdx + (delta > 0 ? 1 : -1));
    }
}, { passive: true });

window.addEventListener('touchend', () => {
    touchHandled = false;
});

// ============================================
// SIDEBAR CLICK
// ============================================
listItems.forEach(li => {
    li.addEventListener('click', () => {
        const idx = R.findIndex(x => x.id === li.dataset.r);
        if (idx >= 0) scrollToRegion(idx);
    });
});

// ============================================
// ANIMALS — posiciones fijas ordenadas
// ============================================
function spawnAnimals(r, vw, vh) {
    const container = document.getElementById('animalsContainer');
    container.innerHTML = '';

    if (!r.animales || !r.animales.length) return;

    // Tamaño de cada card
    const cardW = 140;
    const cardH = 145;
    const gap = 20;

    // Calcular cuántas cards hay
    const count = r.animales.length;

    // Zona segura: esquina superior derecha
    // Evita: sidebar (izquierda), info card (abajo izquierda), centro (mapa)
    const startX = vw - (cardW + gap);
    const startY = 40;

    r.animales.forEach((animal, i) => {
        // Columna vertical en la derecha
        let x = startX;
        let y = startY + i * (cardH + gap);

        // Si no caben verticalmente, hacer segunda columna
        if (y + cardH > vh - 40) {
            x = startX - (cardW + gap);
            y = startY + (i - Math.floor((vh - 80) / (cardH + gap))) * (cardH + gap);
        }

        // Seguridad: no salir de pantalla
        if (x < 20) x = 20;
        if (y < 20) y = 20;
        if (y + cardH > vh - 20) y = vh - cardH - 20;

        const bubble = document.createElement('div');
        bubble.className = 'animal-bubble';
        bubble.style.left = x + 'px';
        bubble.style.top = y + 'px';

        bubble.innerHTML =
            '<img src="' + animal.img + '" alt="' + animal.nombre +
            '" onerror="this.style.background=\'rgba(126,200,227,0.1)\'">' +
            '<div class="ab-name">' + animal.nombre + '</div>';

        bubble.addEventListener('click', function (e) {
            e.stopPropagation();
            showAnimalDetail(animal, bubble);
        });

        container.appendChild(bubble);

        setTimeout(function () {
            bubble.classList.add('show');
        }, 200 + i * 150);
    });
}

// ============================================
// ANIMAL DETAIL
// ============================================
function showAnimalDetail(animal, bubbleEl) {
    const detail = document.getElementById('animalDetail');
    const rect = bubbleEl.getBoundingClientRect();

    document.getElementById('adImg').src = animal.img;
    document.getElementById('adName').textContent = animal.nombre;
    document.getElementById('adDesc').textContent = animal.desc;

    // Intentar poner a la izquierda del bubble
    let left = rect.left - 390;
    let top = rect.top;

    // Si no cabe a la izquierda, poner abajo
    if (left < 290) {
        left = rect.left;
        top = rect.bottom + 10;
    }

    // Si se sale por abajo
    if (top + 320 > window.innerHeight) {
        top = window.innerHeight - 340;
    }

    // Si se sale por arriba
    if (top < 10) top = 10;

    // No tapar sidebar
    if (left < 290) left = 290;

    detail.style.left = left + 'px';
    detail.style.top = top + 'px';
    detail.classList.add('show');
}

// ============================================
// CLOSE ANIMAL DETAIL
// ============================================
document.getElementById('adClose').addEventListener('click', function () {
    document.getElementById('animalDetail').classList.remove('show');
});

document.addEventListener('click', function (e) {
    if (!e.target.closest('.animal-bubble') && !e.target.closest('.animal-detail')) {
        document.getElementById('animalDetail').classList.remove('show');
    }
});
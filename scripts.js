

// Type tester sliders
const root = document.documentElement;
const moonElement = document.querySelector('.moon');

// Function for Stretch 
function setShape(value) {
    root.style.setProperty('--type-tester-shape', value);
    document.getElementById('current-shape').textContent = value;
}

// Function for Font-Size
function setFontSize(value) {
    root.style.setProperty('--FontSize', value + 'px');
    document.getElementById('current-font-size').textContent = value;
}

// Function for Roundness
function setPosition(value) {
    root.style.setProperty('--type-tester-position', value);
    document.getElementById('current-position').textContent = value;
}

// Typeface_Alphabet: Variable Font Effect
const typefaceHeader = document.getElementById('typeface-header');
const poseSlider = document.getElementById('pose-slider');

poseSlider.addEventListener('input', (event) => {
    const poseValue = event.target.value;
    root.style.setProperty('--POSE', poseValue);
});

window.onscroll = function () {
    const scrollHeight = document.querySelector('.container').scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    let percentScrolled = scrollPosition / scrollHeight;
    percentScrolled = Math.min(Math.max(percentScrolled, 0), 1);
    const axisValue = Math.round(percentScrolled * 1000);
    root.style.setProperty('--Position', axisValue);

    const containerHeight = document.querySelector('.container').offsetHeight;
    const offset = 500;
    if (scrollPosition > containerHeight - window.innerHeight + offset) {
        typefaceHeader.classList.add('show-typeface');
    } else {
        typefaceHeader.classList.remove('show-typeface');
    }
};

//Iluminate Effect
document.addEventListener('DOMContentLoaded', function () {
    const root = document.documentElement;
    const moonElement = document.querySelector('.moon');
    const fontSizeSlider = document.getElementById('font-size-slider');
    const shapeSlider = document.getElementById('shape-slider');
    const positionSlider = document.getElementById('position-slider');
    const illuminateButton = document.getElementById('illuminate');

    function setFontSize(value) {
        root.style.setProperty('--FontSize', value + 'px');
        document.getElementById('current-font-size').textContent = value;
    }

    function setShape(value) {
        root.style.setProperty('--type-tester-shape', value);
        document.getElementById('current-shape').textContent = value;
    }

    function setPosition(value) {
        root.style.setProperty('--type-tester-position', value);
        document.getElementById('current-position').textContent = value;
    }

    function setTextColor(color) {
        moonElement.style.color = color;
    }

    function animateSliders() {
        let fontSize = parseInt(fontSizeSlider.value);
        let shape = parseInt(shapeSlider.value);
        let position = parseInt(positionSlider.value);

        const sliderInterval = setInterval(() => {
            if (fontSize < 150) fontSize++;
            if (shape < 1000) shape += 10;
            if (position < 1000) position += 10;

            fontSizeSlider.value = fontSize;
            setFontSize(fontSize);

            shapeSlider.value = shape;
            setShape(shape);

            positionSlider.value = position;
            setPosition(position);

            if (fontSize >= 150 && shape >= 1000 && position >= 1000) {
                clearInterval(sliderInterval);
            }
        }, 5);
    }

    function animateColor() {
        let colorStep = 0;
        const colorInterval = setInterval(() => {
            if (colorStep <= 100) {
                const colorValue = Math.round((colorStep / 100) * 255);
                const color = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
                setTextColor(color);
                colorStep++;
            } else {
                clearInterval(colorInterval);
            }
        }, 15);
    }

    if (illuminateButton) {
        illuminateButton.addEventListener('click', function () {
            animateSliders();
            animateColor();
        });
    }
});




function toggleMyVariableClass(myElement) {
    myElement.classList.toggle('hidden');
}


<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"></script>


//Sparkling Cursor
let x = 0, y = 0;
const sparkles = 100;
const star = [];
const starv = [];
const starx = [];
const stary = [];

window.onload = function () {
    for (let i = 0; i < sparkles; i++) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";
        sparkle.style.position = "absolute";
        sparkle.style.width = "6px";
        sparkle.style.height = "6px";
        sparkle.style.background = "white";
        sparkle.style.pointerEvents = "none";
        sparkle.style.visibility = "hidden";
        sparkle.style.zIndex = "9999";
        sparkle.style.clipPath = "polygon(0% 45%, 45% 45%, 45% 0%, 55% 0%, 55% 45%, 100% 45%, 100% 55%, 55% 55%, 55% 100%, 45% 100%, 45% 55%, 0% 55%, 0% 45%)";
        document.body.appendChild(sparkle);
        star[i] = sparkle;
        starv[i] = 0;
    }
    requestAnimationFrame(sparkleEffect);
};

function sparkleEffect() {
    for (let i = 0; i < sparkles; i++) {
        if (starv[i] > 0) {
            updateSparkle(i);
        }
    }
    requestAnimationFrame(sparkleEffect);
}

function updateSparkle(i) {
    if (--starv[i] === 25) star[i].style.opacity = "0.5";
    if (starv[i] > 0) {
        stary[i] += 1 + Math.random() * 3;
        starx[i] += (i % 5 - 2) / 5;
        star[i].style.top = stary[i] + "px";
        star[i].style.left = starx[i] + "px";
    } else {
        star[i].style.visibility = "hidden";
    }
}

document.addEventListener('mousemove', function (e) {
    x = e.pageX;
    y = e.pageY;

    for (let i = 0; i < sparkles; i++) {
        if (!starv[i]) {
            star[i].style.left = (starx[i] = x) + "px";
            star[i].style.top = (stary[i] = y) + "px";
            star[i].style.visibility = "visible";
            star[i].style.opacity = "1";
            starv[i] = 50;
            break;
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const downloadImage = document.getElementById('download-image');
    downloadImage.addEventListener('click', function () {
        const link = document.createElement('a');
        link.href = './Font/Moon.ttf';
        link.download = 'Moon.ttf';
        link.click();
    });
    //Help from Chat-GPT
    const moonText = document.querySelector('.moonn');
    const moonContainer = document.getElementById('moon-container');
    moonText.addEventListener('click', function () {
        html2canvas(moonContainer).then(canvas => {
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = 'moon_capture.png';
            link.click();
        });
    });
});
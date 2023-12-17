document.addEventListener('DOMContentLoaded', function () {
    const h1Element = document.querySelector('.text-box h1');
    let hamsterCursor;

    h1Element.addEventListener('mouseover', function () {
        const letters = h1Element.textContent.split('');
        h1Element.innerHTML = '';

        letters.forEach(function (letter, index) {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.transition = 'color 0.5s ease ' + (0.1 * index) + 's';
            span.style.color = getRandomLighterRainbowColor();
            h1Element.appendChild(span);
        });
    });

    h1Element.addEventListener('mouseout', function () {
        const spans = h1Element.querySelectorAll('span');
        spans.forEach(function (span, index) {
            span.style.transition = 'color 0.5s ease ' + (0.1 * (spans.length - index)) + 's';
            span.style.color = '#fff';
        });
    });

    function getRandomLighterRainbowColor() {
        const hue = Math.floor(Math.random() * 360);
        const saturation = Math.floor(Math.random() * 50) + 50;
        const lightness = Math.floor(Math.random() * 20) + 70;
        return 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
    }

    document.addEventListener('mousemove', function (e) {
        if (!hamsterCursor) {
            hamsterCursor = document.createElement('div');
            hamsterCursor.className = 'hamster-cursor';
            hamsterCursor.style.position = 'absolute';
            hamsterCursor.style.width = '100px';
            hamsterCursor.style.height = '100px';
            hamsterCursor.style.backgroundImage = 'url("cutehamster.png")';
            hamsterCursor.style.backgroundSize = 'cover';
            hamsterCursor.style.pointerEvents = 'none';
            hamsterCursor.style.filter = 'drop-shadow(0 0 0 transparent)';

            document.body.appendChild(hamsterCursor);
        }

        hamsterCursor.style.left = e.clientX - 25 + 'px';
        hamsterCursor.style.top = e.clientY - 25 + 'px';
    });
});
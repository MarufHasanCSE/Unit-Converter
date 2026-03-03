const modeSelector = document.getElementById('mode-selector');
const leftInput = document.getElementById('input-left');
const rightInput = document.getElementById('input-right');
const leftLabel = document.getElementById('label-left');
const rightLabel = document.getElementById('label-right');

const configs = {
    length: { left: 'Meters', right: 'Feet', rate: 3.28084 },
    weight: { left: 'Kilograms', right: 'Pounds', rate: 2.20462 },
    temp: { left: 'Celsius', right: 'Fahrenheit' }
};

function convert(source) {
    const mode = modeSelector.value;
    const val = parseFloat(source.value);

    if (isNaN(val)) {
        source === leftInput ? rightInput.value = '' : leftInput.value = '';
        return;
    }

    if (mode === 'temp') {
        if (source === leftInput) {
            rightInput.value = ((val * 9/5) + 32).toFixed(2);
        } else {
            leftInput.value = ((val - 32) * 5/9).toFixed(2);
        }
    } else {
        const rate = configs[mode].rate;
        if (source === leftInput) {
            rightInput.value = (val * rate).toFixed(2);
        } else {
            leftInput.value = (val / rate).toFixed(2);
        }
    }
}

modeSelector.addEventListener('change', () => {
    const config = configs[modeSelector.value];
    leftLabel.textContent = config.left;
    rightLabel.textContent = config.right;
    leftInput.value = 0;
    rightInput.value = 0;
});

leftInput.addEventListener('input', () => convert(leftInput));
rightInput.addEventListener('input', () => convert(rightInput));
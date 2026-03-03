const metersInput = document.getElementById('meters');
const feetInput = document.getElementById('feet');

metersInput.addEventListener('input', () => {
    const m = parseFloat(metersInput.value);
    if (!isNaN(m)) {
        feetInput.value = (m * 3.28084).toFixed(2);
    } else {
        feetInput.value = '';
    }
});

feetInput.addEventListener('input', () => {
    const f = parseFloat(feetInput.value);
    if (!isNaN(f)) {
        metersInput.value = (f / 3.28084).toFixed(2);
    } else {
        metersInput.value = '';
    }
});
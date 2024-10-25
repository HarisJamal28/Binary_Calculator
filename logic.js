let isUpdating = false;

function detect(id) {
    let num = document.getElementById(id);
}

function toggleValue(id, increment) {
    if (isUpdating) return;
    isUpdating = true;
    let num = document.getElementById(id);
    let currentValue = num.innerText.trim() === '1' ? 1 : 0;
    currentValue = increment ? (currentValue === 1 ? 0 : 1) : (currentValue === 0 ? 1 : 0);
    num.innerText = currentValue;
    updateDecimalValue();
    updateHexadecimalValue();
    updateOctalValue();
    setTimeout(() => {
        isUpdating = false; 
    }, 100);
}

function updateDecimalValue() {
    const binaryValues = [];
    const ids = [128, 64, 32, 16, 8, 4, 2, 1];
    ids.forEach(id => {
        const num = document.getElementById(id);
        binaryValues.push(num.innerText.trim());
    });
    let decimalValue = 0;
    binaryValues.forEach((value, index) => {
        decimalValue += value === '1' ? Math.pow(2, (ids.length - 1 - index)) : 0;
    });
    const decimalDisplay = document.getElementById('decimal-value');
    decimalDisplay.innerText = `${decimalValue}`;
}

function updateHexadecimalValue() {
    const binaryValues = [];
    const ids = [128, 64, 32, 16, 8, 4, 2, 1];
    ids.forEach(id => {
        const num = document.getElementById(id);
        binaryValues.push(num.innerText.trim());
    });
    let decimalValue = 0;
    binaryValues.forEach((value, index) => {
        decimalValue += value === '1' ? Math.pow(2, (ids.length - 1 - index)) : 0;
    });
    const hexadecimalValue = decimalValue.toString(16).toUpperCase();
    const hexDisplay = document.getElementById('hexadecimal-value');
    hexDisplay.innerText = `${hexadecimalValue}`;
}

function updateOctalValue() {
    const binaryValues = [];
    const ids = [128, 64, 32, 16, 8, 4, 2, 1];
    ids.forEach(id => {
        const num = document.getElementById(id);
        binaryValues.push(num.innerText.trim());
    });
    let decimalValue = 0;
    binaryValues.forEach((value, index) => {
        decimalValue += value === '1' ? Math.pow(2, (ids.length - 1 - index)) : 0;
    });
    const octalValue = decimalValue.toString(8);
    const octalDisplay = document.getElementById('octal-value');
    octalDisplay.innerText = `${octalValue}`;
}

document.querySelectorAll('.fa-arrow-up').forEach(button => {
    button.addEventListener('click', function() {
        const asideId = this.closest('div').querySelector('aside:nth-of-type(2)').id;
        toggleValue(asideId, true);
    });
});

document.querySelectorAll('.fa-arrow-down').forEach(button => {
    button.addEventListener('click', function() {
        const asideId = this.closest('div').querySelector('aside:nth-of-type(2)').id;
        toggleValue(asideId, false);
    });
});

document.querySelectorAll('.toggle').forEach(toggle => {
    toggle.addEventListener('click', function() {
        const correspondingId = this.id.replace('toggle-', '');
        toggleValue(correspondingId, true);
    });
});

document.querySelectorAll('aside').forEach(aside => detect(aside.id));
updateDecimalValue();
updateHexadecimalValue();
updateOctalValue();

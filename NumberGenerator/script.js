
function generateNumbers() {
    const initial = parseInt(document.getElementById('initial').value);
    const final = parseInt(document.getElementById('final').value);
    const step = parseInt(document.getElementById('step').value);
    const separator = document.getElementById('separator').value;
    let result = '';

    if (isNaN(initial) || isNaN(final) || isNaN(step)) {
        alert('Please enter valid numbers for initial, final, and step values.');
        return;
    }

    for (let i = initial; i <= final; i += step) {
        result += i + separator;
    }

    if (separator) {
        result = result.slice(0, -separator.length); // to remove the last separator
    }

    document.getElementById('output').value = result;
}

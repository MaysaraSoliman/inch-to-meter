function inchToMeter(inches) {
    const value = 0.0254;
    return inches * value;
}

function displayInchToMeter() {
    let resultDiv = document.querySelector(".result");
    let inputInch = document.getElementById("numberOfInches");
    let convertInchToMeter = inchToMeter(inputInch.value);
    if (inputInch.value != "") {
        resultDiv.innerHTML = `<p>${inputInch.value} Inches = ${(convertInchToMeter).toFixed(2)} Meters</p>`;
    } else {
        resultDiv.innerHTML = `<p>Inches</p>`;
    }
}

document.querySelector(".calc").addEventListener("submit", function (e) {
    e.preventDefault()
    displayInchToMeter()
});
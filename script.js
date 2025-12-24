const diceFaces = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];
// unicode of dice
function roll() {
    const d1 = Math.floor(Math.random() * 6);
    const d2 = Math.floor(Math.random() * 6);
    const d3 = Math.floor(Math.random() * 6);

    const diceText = diceFaces[d1] + diceFaces[d2] + diceFaces[d3];
    document.getElementById("dice").innerText = diceText;

    const sum = (d1 + 1) + (d2 + 1) + (d3 + 1);
    const resultDiv = document.getElementById("result");

    if (sum > 10) {
        resultDiv.innerText = "Tài";
        resultDiv.style.color = "red";
    } else {
        resultDiv.innerText = "Xỉu";
        resultDiv.style.color = "green";
    }
}

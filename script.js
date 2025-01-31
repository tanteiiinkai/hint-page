const hint1 = document.querySelector('.i');
const hint2 = document.querySelector('.ii');
const hint3_1 = document.querySelector('.iii_i');
const hint3_2 = document.querySelector('.iii_ii');
const bunshou1 = document.querySelector('.I');
const bunshou2 = document.querySelector('.II');
const bunshou3_1 = document.querySelector('.III_I');
const bunshou3_2 = document.querySelector('.III_II');
function display(button, bunshou) {
    button.textContent = "▼ヒントを隠す";
    console.log("おされた");
    bunshou.classList.add("show")
    bunshou.classList.remove("none");
}
function destroy(button, bunshou) {
    button.textContent = "▶ヒントを表示する";
    console.log("閉じた");
    bunshou.classList.add("none");
    bunshou.classList.renive("show");
}
hint1.addEventListener('click', () => display(hint1, bunshou1));
hint2.addEventListener('click', () => display(hint2, bunshou2));
hint3_1.addEventListener('click', () => display(hint2, bunshou2));
hint3_2.addEventListener('click', () => display(hint2, bunshou2));
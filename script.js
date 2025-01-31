const hint1 = document.querySelector('.i');
const hint2 = document.querySelector('.ii');
const hint31 = document.querySelector('.iii_i');
const hint32 = document.querySelector('.iii_ii');
const bunshou1 = document.querySelector('.I');
const bunshou2 = document.querySelector('.II');
const bunshou31 = document.querySelector('.III_I');
const bunshou32 = document.querySelector('.III_II');
var hidecontent = "▼ヒントを隠す";
var showcontent = "▶ヒントを表示する";
function yobidashi(button, bunshou) {
    if (button.textContent === hidecontent) {
        destroy(button, bunshou); 
    } else {
        display(button, bunshou);
    }

}
function display(button, bunshou) {
    button.textContent = hidecontent;
    console.log("おされた");
    bunshou.classList.add("show")
    bunshou.classList.remove("none");
}
function destroy(button, bunshou) {
    button.textContent = showcontent;
    console.log("閉じた");
    bunshou.classList.add("none");
    bunshou.classList.remove("show");
}
hint1.addEventListener('click', () => yobidashi(hint1, bunshou1));
hint2.addEventListener('click', () => yobidashi(hint2, bunshou2));
hint31.addEventListener('click', () => yobidashi(hint2, bunshou31));
hint32.addEventListener('click', () => yobidashi(hint2, bunshou32));
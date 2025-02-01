document.addEventListener("DOMContentLoaded", () => {
    const hints = document.querySelectorAll(".hint");
    const hideText = "▼ヒントを隠す";
    const showText = "▶ ヒントを表示する";

    hints.forEach(hint => {
        hint.addEventListener("click", () => {
            const targetId = hint.getAttribute("data-target");
            const target = document.getElementById(targetId);

            if (target.classList.contains("show")) {
                hideHint(hint, target);
            } else {
                showHint(hint, target);
            }
        });
    });

    function showHint(button, hintBox) {
        button.textContent = hideText;
        hintBox.classList.add("show");
        hintBox.classList.remove("none");

        setTimeout(() => hideHint(button, hintBox), 15000);
    }

    function hideHint(button, hintBox) {
        button.textContent = showText;
        hintBox.classList.add("none");
        hintBox.classList.remove("show");
    }
});

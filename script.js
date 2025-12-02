function checkAnswer(question, correct) {
    const selected = document.querySelector(`input[name="${question}"]:checked`);
    if (!selected) {
        alert("請先選擇答案！");
        return;
    }

    if (selected.value === correct) {
        alert("答對了！");
    } else {
        alert("答錯了，再試試看！");
    }
}
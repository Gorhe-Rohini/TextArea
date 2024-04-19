
function toUpperCase() {
    const textarea = document.getElementById("textArea");
    textarea.value = textarea.value.toUpperCase();
    resizeTextarea();
}

function toLowerCase() {
    const textarea = document.getElementById("textArea");
    textarea.value = textarea.value.toLowerCase();
    resizeTextarea();
}

function countCharacters() {
    const textarea = document.getElementById("textArea");
    let characterCount = textarea.value.replace(/\s/g, "").length;
    document.getElementById("charCount").textContent = characterCount;
    resizeTextarea();
}

function removeSpaces() {
    const textarea = document.getElementById("textArea");
    textarea.value = textarea.value.replace(/\s{2,}/g, " ");
    resizeTextarea();
}


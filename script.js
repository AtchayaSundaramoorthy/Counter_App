const textarea = document.getElementById("message");
const charCount = document.getElementById("charCount");
const emoji = document.getElementById("emoji");
const emojiText = document.getElementById("emoji-text");
const maxChars = 100;

textarea.addEventListener("input", () => {
  const currentLength = textarea.value.length;
  const remaining = maxChars - currentLength;

  charCount.textContent = `${currentLength} / ${maxChars} characters`;

  if (remaining < 0) {
    charCount.style.color = "red";
    emoji.textContent = "😟";
    emojiText.textContent = "Too long!";
    emojiText.style.color = "red";
  } else if (remaining <= 10) {
    charCount.style.color = "#ffcc00";
    emoji.textContent = "😬";
    emojiText.textContent = "Almost full!";
    emojiText.style.color = "#ffcc00";
  } else {
    charCount.style.color = "#dcdcdc";
    emoji.textContent = "😀";
    emojiText.textContent = "Looking good!";
    emojiText.style.color = "#bbb";
  }
});

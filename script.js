const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
const maxChars = 50;

// Apply Event Listener

textInput.addEventListener("input", () => {
  const charsInInput = textInput.value.length;
  
  charCount.textContent = `Character Count: ${charsInInput}/${maxChars}`;

  // Check if character count is greater than or equal to the limit

  if (charsInInput >= maxChars) {
    charCount.style.color = "red";
    textInput.value = textInput.value.substring(0, maxChars);

  } 
});

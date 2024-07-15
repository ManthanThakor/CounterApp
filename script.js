//! Make sure elements are loaded
document.addEventListener("DOMContentLoaded", () => {
  // select elements
  const counterValue = document.getElementById("counter-value");
  const decrementBtn = document.getElementById("decrease-btn");
  const incrementBtn = document.getElementById("increase-btn");
  const resetBtn = document.getElementById("reset-btn");
  // global value
  let count = 0;

  // add events to the button

  incrementBtn.addEventListener("click", () => {
    count++;
    updateCounter();
  });
  decrementBtn.addEventListener("click", () => {
    count--;
    updateCounter();
  });
  resetBtn.addEventListener("click", () => {
    count = 0;
    updateCounter();
  });

  // update counter function
  function updateCounter() {
    counterValue.textContent = count;
  }
});

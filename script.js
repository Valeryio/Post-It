
/**
 * This first bloc of code act when you click on the poster's
 * content
 * 
 * When you click on it, the poster goes out the flux and the
 * input takes the entry you gave.
 */

posterText.addEventListener("click", (event) => {

  posterText.style.display= "none";
  let oldValue = posterText.textContent;

  activeInput.style.display= "block";
});

/**
 * This second block is triggered when your mouse got out
 * the bloc
 * 
 * Once you've finished to write you new post content, then
 * the content of the poster-text paragraph is changed and
 * displayed at its first place!
 */
activeInput.addEventListener("mouseout", (event) => {

  // Keep the old value of the poster if the new post is empty
  if (event.target.value == "")
  {
    activeInput.style.display = "None";
    posterText.style.display = oldValue;
  }
  else {
    posterText.textContent = event.target.value;
    activeInput.placeholder = event.target.value;
    activeInput.style.display = "None";
    posterText.style.display = "block";
  }
});
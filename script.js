let container = document.querySelector(".container");
let posterText = document.querySelector(".poster-text");
let activeInput = document.querySelector(".active_input");
let oldValue = "";

posterText.addEventListener("click", (event) => {

  posterText.style.display= "none";
  let oldValue = posterText.textContent;
  console.log(oldValue);

  activeInput.style.display= "block";
});

activeInput.addEventListener("mouseout", (event) => {
//   console.log("The value: ", event.target.value);
//   console.log("The type :", typeof(event.target.value));
//   console.log("The old value :", oldValue);

  if (event.target.value == "")
  {
    activeInput.style.display = "None";
    posterText.style.display = oldValue;
  }
  else {
    posterText.textContent = event.target.value;
    activeInput.style.display = "None";
    posterText.style.display = "block";
  }
});
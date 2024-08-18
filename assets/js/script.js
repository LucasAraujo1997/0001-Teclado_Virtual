(function () {
  const $txtDisplay = document.querySelector(".txtDisplay");
  const $btns = document.querySelectorAll("button");

  let capslock = false;
  let count = 0;

  const $cursor = document.createElement("span");
  $cursor.className = "cursor";

  $btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const btnClass = btn.className;

      if (btnClass === "backspace") {
        $txtDisplay.innerHTML = $txtDisplay.innerHTML.slice(0, -1);
      } else if (btnClass === "space") {
        $txtDisplay.innerHTML += " ";
      } else if (btnClass === "enter") {
        $txtDisplay.innerHTML += "<br/>";
      } else if (btnClass === "capslock") {
        if (count % 2 === 0) {
          btn.style.backgroundColor = "grey";
          btn.style.color = "white";
        } else {
          btn.style.backgroundColor = "white";
          btn.style.color = "grey";
        }
        count++;
        console.log(count);
        capslock = !capslock;
      } else {
        let char = btn.innerHTML;
        if (capslock && btnClass === "letter") {
          char = char.toUpperCase();
        }
        $txtDisplay.innerHTML += char;
      }
    });
  });

  window.addEventListener('keypress', ()=>{
    
  })
})();

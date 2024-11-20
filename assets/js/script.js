(function () {
  const $body = document.querySelector("body");
  const $txtDisplay = document.querySelector(".txtDisplay");
  const $btns = document.querySelectorAll("button");
  const $letters = document.querySelectorAll(".letter");
  const $thema = document.querySelector(".thema");

  let capslock = false;
  let count = 0;
  let countThema = 0;
  // const $cursor = document.createElement("span");
  // $cursor.className = "cursor";
  $thema.addEventListener("click", () => {
    const $thema_icon = $thema.querySelector(".thema-icon");
    if (countThema % 2 === 0) {
      $thema_icon.classList.add("thema-icon-dark");
      $thema_icon.classList.remove("thema-icon-light");
      $body.classList.toggle('dark-mode')
    } else {
      $thema_icon.classList.add("thema-icon-light");
      $thema_icon.classList.remove("thema-icon-dark");
      $body.classList.toggle('dark-mode')
    }
    countThema++;
    console.log(countThema);
  });

  $btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const btnClass = btn.className;

      if (btnClass === "backspace") {
        $txtDisplay.innerHTML = $txtDisplay.innerHTML.slice(0, -1);
      } else if (btnClass === "space") {
        $txtDisplay.innerHTML += " ";
      } else if (btnClass === "enter") {
        $txtDisplay.innerHTML += "<br/>";
      } else if (btnClass === "ed-left") {
        $txtDisplay.style.textAlign = "left";
      } else if (btnClass === "ed-middle") {
        $txtDisplay.style.textAlign = "center";
      } else if (btnClass === "ed-right") {
        $txtDisplay.style.textAlign = "right";
      } else if (btnClass === "capslock") {
        if (count % 2 === 0) {
          btn.style.backgroundColor = "grey";
          btn.style.color = "white";
        } else {
          btn.style.backgroundColor = "white";
          btn.style.color = "grey";
        }
        count++;
        capslock = !capslock;

        $letters.forEach((letterbtn) => {
          if (capslock) {
            letterbtn.textContent = letterbtn.textContent.toUpperCase();
          } else {
            letterbtn.textContent = letterbtn.textContent.toLowerCase();
          }
        });
      } else {
        let char = btn.innerHTML;
        if (capslock && btnClass === "letter") {
          char = char.toUpperCase();
        }
        $txtDisplay.innerHTML += char;
      }
    });
  });

  window.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === "Backspace") {
      $txtDisplay.innerHTML = $txtDisplay.innerHTML.slice(0, -1);
    } else if (e.key === "Enter") {
      $txtDisplay.innerHTML += "<br/>";
    } else if (e.key.length === 1) {
      let char = e.key;
      if (capslock) {
        char = char.toUpperCase();
      }
      $txtDisplay.innerHTML += char;
    }
  });
})();

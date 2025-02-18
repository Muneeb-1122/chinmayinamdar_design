const cursor = document.querySelector(".cursor");
const buttons = document.querySelectorAll(".magnet");

buttons.forEach((btn) => {
  //btn as a parameter pass to move the black curser in the website and use the arrow function
  btn.addEventListener("mousemove", function (e) {
    // use the mousemover event
    const { left, top, width, height } = btn.getBoundingClientRect();
    const x = e.clientX - (left + width / 2); // find the curser position
    const y = e.clientY - (top + height / 2);

    gsap.to(btn, {
      x: x * 0.2,
      y: y * 0.2,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  btn.addEventListener("mouseleave", function () {
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

// Move the cursor smoothly
document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX - cursor.offsetWidth / 2,
    y: e.clientY - cursor.offsetHeight / 2,
    duration: 0.2,
    ease: "power2.out",
  });
});

// Scale up cursor on hover
buttons.forEach((magnet) => {
  magnet.addEventListener("mouseenter", () => {
    gsap.to(cursor, { scale: 3, background: "#ff6161", duration: 0.2 });
    gsap.to(magnet, { scale: 1.1, duration: 0.3 });
  });

  magnet.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 1,
      background: "black",
      duration: 0.2,
    });
    gsap.to(magnet, {
      scale: 1,
      duration: 0.3,
    });
  });
});

document.querySelectorAll(".card").forEach((card) => {
  let cursor1 = card.querySelector(".section-curser");

  card.addEventListener("mousemove", (e) => {
    let rect = card.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    cursor1.style.transform = `translate(
    ${x - cursor1.offsetWidth / 2}px, 
    ${y - cursor1.offsetHeight / 2}px)`;
  });

  card.addEventListener("mouseenter", () => {
    cursor1.style.opacity = "1";
    cursor.style.display = none;
  });

  card.addEventListener("mouseleave", () => {
    cursor1.style.opacity = "0";
    cursor1.style.display = none;
  });
});

const cursor = document.querySelector(".cursor");
const buttons = document.querySelectorAll(".magnet");

buttons.forEach((btn) => {
  btn.addEventListener("mousemove", function (e) {
    const { left, top, width, height } = btn.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);

    gsap.to(btn, {
      x: x * 0.2,
      y: y * 0.2,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  btn.addEventListener("mouseleave", function () {
    gsap.to(btn, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
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
    gsap.to(cursor, { scale: 3, background: "#FF6161", duration: 0.2 });
    gsap.to(magnet, { scale: 1.1, duration: 0.3 });
  });

  magnet.addEventListener("mouseleave", () => {
    gsap.to(cursor, { scale: 1, background: "black", duration: 0.2 });
    gsap.to(magnet, { scale: 1, duration: 0.3 });
  });
});

// GSAP animations
gsap.from(".hero h1", { duration: 1, y: -50, opacity: 0 });
gsap.from(".hero p", { duration: 1, delay: 0.5, y: 30, opacity: 0 });
gsap.from(".features div", { duration: 1, stagger: 0.3, y: 20, opacity: 0 });
gsap.from(".gallery img", {
  duration: 1,
  opacity: 0,
  y: 20,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".gallery",
    start: "top 80%",
  }
});
gsap.from(".videos video", {
  duration: 1,
  opacity: 0,
  y: 20,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".videos",
    start: "top 80%",
  }
});
gsap.from("form", {
  duration: 1,
  opacity: 0,
  y: 50,
  scrollTrigger: {
    trigger: "form",
    start: "top 90%"
  }
});

// Dark mode toggle
document.getElementById("toggle-mode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

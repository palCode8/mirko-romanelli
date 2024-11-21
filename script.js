// Initialize Lenis
const lenis = new Lenis({
  duration: 2,
});
// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

function cursor() {
  document.addEventListener("mousemove", (e) => {
    const circle = document.getElementById("cursor");
    const deltaX = Math.abs(e.movementX);
    const deltaY = Math.abs(e.movementY);
    const scaleX = 1 + deltaX / 100;
    const scaleY = 1 + deltaY / 100;

    gsap.to(circle, {
      duration: 0.5,
      x: e.clientX,
      y: e.clientY,
      scaleX: scaleX,
      scaleY: scaleY,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(circle, {
          duration: 0.5,
          scaleX: 1,
          scaleY: 1,
          ease: "power2.out",
        });
      },
    });
  });
}
cursor();
gsap.registerPlugin(ScrollTrigger);

gsap.to(".heading-content", {
  opacity: 0.3,
  scrollTrigger: {
    trigger: ".page1",
    start: "90% 80%",
    end: "90% 50%",
    scrub: true,
  },
});

function showHeading() {
  ScrollTrigger.create({
    trigger: ".page3",
    start: "top bottom",
    end: "bottom bottom",
    onEnter: () => {
      gsap.to(".heading-content", { opacity: 0, duration: 0 });
      gsap.to(".about", { opacity: 1, duration: 0.5 });
    },
    onLeaveBack: () => {
      gsap.to(".heading-content", { opacity: 0.3, duration: 0.5 });
      gsap.to(".about", { opacity: 0, duration: 0.5 });
    },
  });

  ScrollTrigger.create({
    trigger: ".page4",
    start: "top bottom",
    end: "bottom bottom",
    onEnter: () => {
      gsap.to(".about", { opacity: 0, duration: 0.5 });
      gsap.to(".contact", { opacity: 1, duration: 0.5 });
    },
    onLeaveBack: () => {
      gsap.to(".about", { opacity: 1, duration: 0.5 });
      gsap.to(".contact", { opacity: 0, duration: 0.5 });
    },
  });
}
showHeading();

gsap.from(".about-paragraph", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".page3",
    start: "top bottom",
    end: "top bottom",
    scrub: true,
  },
});

gsap.from(".quote", {
  opacity: 0,
  y: 10,
  scrollTrigger: {
    trigger: ".page3",
    start: "center 30%",
    end: "center 25%",
    scrub: true,
  },
});

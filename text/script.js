function breakTest() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var splittedText = h1Text.split("");

  var clutter = "";

  var halfValue = Math.floor(splittedText.length / 2);
  splittedText.forEach(function (letter, index) {
    if (index < halfValue) {
      clutter += `<span class="start">${letter}</span>`;
    } else {
      clutter += `<span class="end";">${letter}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakTest();

gsap.from(".start", {
  y: 70,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
});
gsap.from(".end", {
  y: 70,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
});

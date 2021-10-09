//∞ C O N T A I N E R S
gsap.from('.container-left, .container-right', {
  delay: 2,
  duration: 1.5,
  top: '100%',
  ease: 'expo.inOut',
});

//∞ L O G O
gsap.from('.logo', {
  opacity: 0,
  delay: 3.3,
  duration: 2.5,
  y: -20,
  ease: 'expo.inOut',
});

//∞ N A V - I T E M
gsap.from('.nav__item', {
  opacity: 0,
  delay: 3.8,
  duration: 3,
  y: 25,
  ease: 'expo.Out',
  stagger: 0.2,
});


//∞ S E A R C H - B T N
gsap.from('.btn-wrapper', {
  opacity: 0,
  delay: 4,
  duration: 3,
  x: 20,
  ease: 'expo.Out',
});



//∞ S O C I A L - I T E M
gsap.from('.social__item, #github', {
  opacity: 0,
  delay: 4.5,
  duration: 3,
  x: -25,
  ease: 'expo.Out',
  stagger: 0.2,
});


//∞ S L I D E & D I R E C T I O N - B T N
gsap.from('.dots_wrapper, .direction_btn', {
  opacity: 0,
  delay: 4.4,
  x: -20,
  ease: 'power3.Out',
  stagger: 0.2,
});


//∞ P R O D U C T
gsap.from('.product', {
  opacity: 0,
  delay: 5,
  duration: 1.5,
  ease: 'expo.inOut',
});


//∞ O V E R L A Y
gsap.to('.first', {
  delay: 0.5,
  duration: 1,
  top: '-100%',
  ease: 'expo.inOut',
});
gsap.to('.second', {
  delay: 0.7,
  duration: 1,
  top: '-100%',
  ease: 'expo.inOut',
});
gsap.to('.third', {
  delay: 0.9,
  duration: 1,
  top: '-100%',
  ease: 'expo.inOut',
});

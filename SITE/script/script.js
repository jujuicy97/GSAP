gsap.registerPlugin(ScrollTrigger);

//header 영역 애니메이션
//안보이는 위치에서 원래 위치로 돌아오기
//같은 효과를 각각 줄 때
// const tl = gsap.timeline();
// tl.from(".slogan > h2",{
//   opacity: 0,
//   y: -50,
//   duration: 1
// })
// .from(".slogan > h1",{
//   opacity: 0,
//   y: -50,
//   duration: 1
// }, "-=0.5")
// .from(".slogan > p",{
//   opacity: 0,
//   y: -50,
//   duration: 1
// }, "-=0.5")

//같은 효과를 다 같이 줄 때
gsap.from(".slogan > h2, .slogan > h1, .slogan > p",{
  opacity: 0,
  y: -50,
  duration: 1,
  stagger: 0.5
});

//aboutme
gsap.from("#aboutme",{
  opacity: 0,
  y: 100,
  // duration: 1,
  scrollTrigger:{
    trigger: "#aboutme",
    start: "top 60%",
    end: "top 30%",
    scrub: true,
    // markers: true
  }
});

//#laster : 가로 스크롤 만들기
//스크롤 대상 가져오기
const $ul = document.querySelector("#laster > ul");
//현재 페이지를 제외한 나머지 페이지 값 구하기
// const dist = $ul.scrollWidth - window.innerWidth;
const dist = $ul.scrollWidth - (window.innerWidth*0.7);

gsap.to($ul,{
  x: -(dist),
  ease: "power2.out",
  scrollTrigger:{
    trigger: "#laster",   //화면상 멈춰야 하는 대상
    start: "top top",    //트리거의 위치와 뷰포트의 위치
    end: "+="+dist,
    pin: true,
    scrub: true,
    // markers: true
  }
});

//contact : 스크롤 되면 작아졌다가(opacity:0) 커지게(opacity:0)

gsap.from(".title",{
  opacity:0,
  scale: 0.8,
  duration: 1,
  ease: "power2.out",
  scrollTrigger:{
    trigger: "#contact",
    start: "top 60%",
  }
});
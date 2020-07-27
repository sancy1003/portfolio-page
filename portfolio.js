"use strict";

const body = document.querySelector("body");

const data = [
  {
    id: 1,
    display: "pc",
    title: "영화 예매 사이트",
    description:
      "팀 프로젝트로 제작한 영화 예매 홈페이지이며 프론트엔드 위주의 작업을 맡아 제작하였습니다.",
    img: [
      "/img/portfolio/movie1.png",
      "/img/portfolio/movie2.png",
      "/img/portfolio/movie3.png",
      "/img/portfolio/movie4.png",
    ],
  },
  {
    id: 2,
    display: "mobile",
    title: "Android Memo App",
    description:
      "안드로이드 스튜디오로 제작한 메모 앱으로 메모 작성 및 편집 기능과 체크리스트 기능이 구현되어있습니다.",
    img: [
      "/img/portfolio/memo1.jpg",
      "/img/portfolio/memo2.jpg",
      "/img/portfolio/memo3.jpg",
      "/img/portfolio/memo4.jpg",
    ],
  },
  {
    id: 3,
    display: "mobile",
    title: "VR MAP",
    description:
      "Unity 엔진에서 Google VR SDK를 이용하여 제작한 앱으로 360˚카메라로 사진과 동영상을 촬영하였기 때문에 일반 사진보다 자세하게 대학 캠퍼스를 둘러볼 수 있습니다.",
    img: [
      "/img/portfolio/vrmap1.jpg",
      "/img/portfolio/vrmap2.jpg",
      "/img/portfolio/vrmap3.jpg",
      "/img/portfolio/vrmap4.jpg",
    ],
  },
  {
    id: 4,
    display: "mobile",
    title: "VR 방탈출",
    description:
      "Unity 엔진에서 Google VR SDK를 이용하여 제작한 앱으로 vr환경에서 실감나게 방탈출을 즐길 수 있는 게임성 앱입니다.",
    img: [
      "/img/portfolio/escape1.jpg",
      "/img/portfolio/escape2.jpg",
      "/img/portfolio/escape3.jpg",
      "/img/portfolio/escape4.jpg",
    ],
  },
  {
    id: 5,
    display: "mobile",
    title: "Boss Raid",
    description:
      "Unity 엔진으로 제작한 단계별로 보스를 공략해나가는 PC 플렛폼 게임입니다.",
    img: [
      "/img/portfolio/raid1.jpg",
      "/img/portfolio/raid2.jpg",
      "/img/portfolio/raid3.jpg",
      "/img/portfolio/raid4.jpg",
    ],
  },
  {
    id: 6,
    display: "pc",
    title: "게임 커뮤니티 사이트",
    description:
      "개인 프로젝트로 진행하였으며 PHP언어를 사용하여 회원가입, 로그인, 게시글 등록, 사진 등록 등의 기능을 구현하였습니다.",
    img: [
      "/img/portfolio/gammu1.jpg",
      "/img/portfolio/gammu2.jpg",
      "/img/portfolio/gammu3.jpg",
      "/img/portfolio/gammu4.jpg",
      "/img/portfolio/gammu5.jpg",
    ],
  },
  {
    id: 7,
    display: "pc",
    title: "홈페이지 클론",
    description:
      "css, javascript를 공부하기 위해 유명 사이트 메인 페이지를 클론하여 제작하였습니다.",
    img: ["/img/portfolio/clone1.jpg"],
  },
];

class PortfolioInfo {
  constructor(data) {
    this.data = data;
  }

  showInfoToMobile() {}

  showInfoToPC() {}
}

function showPortfolioInfo(data) {
  const backScreen = document.createElement("div"),
    infoContainer = document.createElement("div"),
    screenImg = document.createElement("img"),
    info = document.createElement("div"),
    title = document.createElement("sapn"),
    description = document.createElement("sapn"),
    imgNum = document.createElement("ul"),
    imgNumitem = [],
    btnLeft = document.createElement("button"),
    btnLeftImg = document.createElement("i"),
    btnRight = document.createElement("button"),
    btnRightImg = document.createElement("i"),
    btnClose = document.createElement("button");

  for (let i = 0; i < data.img.length; i++) {
    const item = document.createElement("li");
    item.classList.add("img-num-item");
    imgNumitem.push(item);
  }

  backScreen.classList.add("portfolio-back-screen");
  infoContainer.classList.add("portfolio-info-mobile-container");
  screenImg.classList.add("mobile-phone-img");
  info.classList.add("portfolio-info");
  title.classList.add("portfolio-info-title");
  description.classList.add("portfolio-info-description");
  imgNum.classList.add("img-num");
  btnLeft.classList.add("btn-img-left");
  btnRight.classList.add("btn-img-right");
  btnLeftImg.classList.add("fas");
  btnLeftImg.classList.add("fa-caret-left");
  btnRightImg.classList.add("fas");
  btnRightImg.classList.add("fa-caret-right");
  btnClose.classList.add("btn-portfolio-info-close");
  screenImg.src = data.img[0];

  let nowImg = 0;

  btnClose.addEventListener("click", closePortfolioInfo);
  btnRight.addEventListener("click", () => {
    if (nowImg < data.img.length - 1 && nowImg != data.img.length) {
      imgNumitem[nowImg].classList.remove("active");
      nowImg += 1;
      screenImg.src = data.img[nowImg];
      imgNumitem[nowImg].classList.add("active");
    }
  });
  btnLeft.addEventListener("click", () => {
    if (nowImg != data.img[0] && nowImg != 0) {
      imgNumitem[nowImg].classList.remove("active");
      nowImg -= 1;
      screenImg.src = data.img[nowImg];
      imgNumitem[nowImg].classList.add("active");
    }
  });

  title.innerText = data.title;
  description.innerText = data.description;
  btnClose.innerText = "Close";
  info.prepend(btnClose);
  btnLeft.prepend(btnLeftImg);
  btnRight.prepend(btnRightImg);
  imgNum.prepend(btnRight);

  for (let i = data.img.length; i > 0; i--) {
    imgNum.prepend(imgNumitem[i - 1]);
  }
  imgNumitem[0].classList.add("active");
  imgNum.prepend(btnLeft);
  info.prepend(imgNum);
  info.prepend(description);
  info.prepend(title);
  infoContainer.prepend(screenImg);
  backScreen.prepend(info);
  backScreen.prepend(infoContainer);
  body.prepend(backScreen);
}

function closePortfolioInfo() {
  const showingInfo = document.querySelector(".portfolio-back-screen");
  showingInfo.remove();
}

function clickPortfolio(data) {
  if (body.clientWidth > 1000) {
    showPortfolioInfo(data);
  } else {
    alert("작은 사이즈 화면 제작 중");
  }
}

function init() {
  window.addEventListener("resize", () => {
    console.log(body.clientWidth);
  });
}

init();

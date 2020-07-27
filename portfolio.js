"use strict";

const body = document.querySelector("body");

const data = [{"id":1,"title":"Android Memo App","description":"안드로이드 스튜디오로 제작한 메모 앱으로 메모 작성 및 편집 기능과 체크리스트 기능이 구현되어있습니다.","img":["/img/portfolio/memo1.jpg", "/img/portfolio/memo2.jpg", "/img/portfolio/memo3.jpg", "/img/portfolio/memo4.jpg"]},
{"id":2,"title":"클론 페이지","description":"클론 페이지","git":"www.git.com","youtube":"www.youtube.com","img":"/src"},
{"id":3,"title":"VR MAP","description":"Unity엔진으로 제작한 VR플렛폼의 앱","git":"www.git.com","youtube":"www.youtube.com","img":"/src"}];

class PortfolioInfo {
    constructor(data) {
        this.data = data;
    }
    
    showInfoToMobile() {

    }

    showInfoToPC() {

    }
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

    for(let i=0; i < data.img.length; i++) {
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
    screenImg.src=data.img[0];

    let nowImg = 0;

    btnClose.addEventListener("click", closePortfolioInfo);
    btnRight.addEventListener("click", ()=> {
        if(nowImg < data.img.length - 1 && nowImg != data.img.length) {
            imgNumitem[nowImg].classList.remove("active");
            nowImg += 1;
            screenImg.src = data.img[nowImg];
            imgNumitem[nowImg].classList.add("active");
        }
    })
    btnLeft.addEventListener("click", ()=> {
        if(nowImg != data.img[0] && nowImg != 0) {
            imgNumitem[nowImg].classList.remove("active");
            nowImg -= 1;
            screenImg.src = data.img[nowImg];
            imgNumitem[nowImg].classList.add("active");
        }
    })
    
    title.innerText=data.title;
    description.innerText=data.description;
    btnClose.innerText = "Close";
    info.prepend(btnClose);
    btnLeft.prepend(btnLeftImg);
    btnRight.prepend(btnRightImg);
    imgNum.prepend(btnRight);
    
    for(let i=data.img.length; i > 0; i--) {
        imgNum.prepend(imgNumitem[i-1]);
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
    if(body.clientWidth > 1000) {
        showPortfolioInfo(data);
    } else {
        alert("사이즈 작음");
    }
}

function init() {
    window.addEventListener("resize", ()=> {
        console.log(body.clientWidth);
    })
}

init();
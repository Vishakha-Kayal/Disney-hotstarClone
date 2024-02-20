// 1px=6.25%
let cardContainers = document.querySelectorAll(".latest-releases ,.latest-sports");
let preBtns = document.querySelectorAll(".left-btn");
let nxtBtns = document.querySelectorAll(".right-btn");

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth - 200;
        console.log("cl");
    })
    preBtns[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth + 200;
    })
})
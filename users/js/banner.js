const imgs = document.querySelectorAll(".slide>img");
var curr = 0;
slide(imgs[curr], "center");

function toPrev() {
    if (curr > 0) {
        curr--;
        slide(imgs[curr + 1], "right");
        slide(imgs[curr], "center");
    }

}

function toNext() {
    if (curr < imgs.length - 1) {
        curr++;
        slide(imgs[curr - 1], "left");
        slide(imgs[curr], "center");
    }

}


let forward;
let backward;
startForward();
function startForward() {
    forward = setInterval(() => {
        if (curr < imgs.length - 1) {
            toNext();
        }
        else{
            clearInterval(forward);
            toPrev();
            startBackward();
        }
    }, 5000);
}

function startBackward() {
    backward = setInterval(() => {
        if (curr >0) {
            toPrev();
        }
        else{
            clearInterval(backward);
            toNext();
            startForward();
        }
    }, 5000);
}



function slide(image, position) {
    const styleSheet = document.styleSheets[5];
    const keyframesRule = styleSheet.cssRules;
    let currPos = image.offsetLeft;
    switch (position) {
        case "left":
            keyframesRule[4].appendRule(`from{top: 0px; left: ${currPos}px}`);
            image.style.animation = "slideLeft 0.4s linear forwards";
            break;
        case "center":
            keyframesRule[3].appendRule(`from{top: 0px; left: ${currPos}px}`);
            image.style.animation = "toCenter 0.4s linear forwards";
            break;
        case "right":
            keyframesRule[5].appendRule(`from{top: 0px; left: ${currPos}px}`);
            image.style.animation = "slideRight 0.4s linear forwards";
            break;
    }

}
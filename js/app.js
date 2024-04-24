const sliderBox = document.getElementById("sliderBox");
const btnBox = document.createElement('div');
const prevBtn = document.createElement('button');
prevBtn.textContent = "prev <<";
const stopBtn = document.createElement('button');
stopBtn.textContent = "stop";
const nextBtn = document.createElement('button');
nextBtn.textContent = ">> next";
buttons = [prevBtn, stopBtn, nextBtn];
buttons.forEach(button => {
    btnBox.appendChild(button);
});


let imgPath = 1;
let stopCheck = false;

function checkIndex() {
    if (imgPath > 5) {
        imgPath = 1;
    } else if (imgPath < 1) {
        imgPath = 5;
    }
}

function renderImage() {
    const myImage = document.createElement("img");
    sliderBox.innerHTML = '';
    myImage.src = `./img/img${imgPath}.jpg`;
    sliderBox.appendChild(myImage);
    sliderBox.appendChild(btnBox);

}

function changeSlide() {
    renderImage();
    imgPath++;
    checkIndex();
}

function stopCheckRender() {
    stopCheck = true;
    checkIndex();
    renderImage();
}

btnBox.addEventListener('click', function (event) {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
        clearInterval(interval3);
        if (target === prevBtn) {
            if (stopCheck === false) {
                imgPath--;
            }
            imgPath--;
            stopCheckRender();

        } else if (target === nextBtn) {
            if (stopCheck === true) {
                imgPath++;
            }
            stopCheckRender();
        }


    }
});

changeSlide();
interval3 = setInterval(changeSlide, 3000);


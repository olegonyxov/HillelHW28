const sliderBox = document.getElementById("sliderBox");
const btnBox = document.createElement('div');
const prevBtn = document.createElement('button');
prevBtn.textContent = "prev <<";
const stopBtn = document.createElement('button');
stopBtn.textContent = "stop";
const nextBtn = document.createElement('button');
nextBtn.textContent = ">> next";
const buttons = [prevBtn, stopBtn, nextBtn];
buttons.forEach(button => {
    btnBox.appendChild(button);
});


const sliderParams = {
    imgPath: 1,
    stopCheck: false
};

function checkIndex() {
    if (sliderParams.imgPath > 5) {
        sliderParams.imgPath = 1;
    } else if (sliderParams.imgPath < 1) {
        sliderParams.imgPath = 5;
    }
}

function renderImage() {
    const myImage = document.createElement("img");
    sliderBox.innerHTML = '';
    myImage.src = `./img/img${sliderParams.imgPath}.jpg`;
    sliderBox.appendChild(myImage);
    sliderBox.appendChild(btnBox);

}

function changeSlide() {
    renderImage();
    sliderParams.imgPath++;
    checkIndex();
}

function stopCheckRender() {
    sliderParams.stopCheck = true;
    checkIndex();
    renderImage();
}

btnBox.addEventListener('click', function (event) {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
        clearInterval(interval3);
        if (target === prevBtn) {
            if (sliderParams.stopCheck === false) {
                sliderParams.imgPath--;
            }
            sliderParams.imgPath--;
            stopCheckRender();

        } else if (target === nextBtn) {
            if (sliderParams.stopCheck === true) {
                sliderParams.imgPath++;
            }
            stopCheckRender();
        }


    }
});

changeSlide();
interval3 = setInterval(changeSlide, 3000);


const sliderBox = document.getElementById("sliderBox")
const btnBox = document.createElement('div')
const prevBtn = document.createElement('button')
prevBtn.textContent="prev <<"
const stopBtn = document.createElement('button')
stopBtn.textContent="stop"
const nextBtn = document.createElement('button')
nextBtn.textContent=">> next"
btnBox.appendChild(prevBtn)
btnBox.appendChild(stopBtn)
btnBox.appendChild(nextBtn)

let imgPath = 1;
let stopCheck = false;

function checkIndex(){
    if (imgPath > 5){
        imgPath = 1
    } else if (imgPath < 1){
        imgPath = 5
    }
}
function renderImage(){
    const myImage = document.createElement("img")
    myImage.id="myImage"
    sliderBox.innerHTML = '';
    myImage.src=`./img/img${imgPath}.jpg`
    sliderBox.appendChild(myImage)
    sliderBox.appendChild(btnBox)

}

function changeSlide(){
    renderImage()
    imgPath++
    checkIndex()
}

changeSlide()
interval3 = setInterval(changeSlide,3000)

btnBox.addEventListener('click', function(event) {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
        clearInterval(interval3); 
        if (target === prevBtn) {
            if (stopCheck === false) {
                imgPath--;
            }
            imgPath--;
            stopCheck = true;
            checkIndex();
            renderImage();
        } else if (target === nextBtn) {
            if (stopCheck === true) {
                imgPath++;
            }
            stopCheck = true;
            checkIndex();
            renderImage();
        }
        
        
    }
});





// stopBtn.addEventListener('click',function(){
//     clearInterval(interval3)
// })

// prevBtn.addEventListener('click',function(){
//     clearInterval(interval3)
//     if (stopCheck===false){
//         imgPath--
//     }
//     imgPath--
//     checkIndex()
//     renderImage()
//     stopCheck=true
// })

// nextBtn.addEventListener('click',function(){
//     clearInterval(interval3)
//     if (stopCheck===true){
//         imgPath++
//     }
//     checkIndex()
//     renderImage()
//     stopCheck=true
// })








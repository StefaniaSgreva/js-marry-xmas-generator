"use strict";

/*------------------------------------
    OPERAZIONI PRELIMINARI
------------------------------------*/

const changeImageBtn = document.querySelector('#change-image');
const changeTextBtn = document.querySelector('#change-text');
const previewImage = document.querySelector('#preview-img');
const previewText = document.querySelector('#preview-txt');
const previewSender = document.querySelector('.preview-sender');
const senderInput = document.querySelector('#sender');
const downloadBtn = document.querySelector('#download');
const previewArea = document.querySelector('.preview');
//variabili di funzione
const assetsCount = 4;
let currentImageIndex = 1;
let currentTextIndex = 1;

/*------------------------------------
    FUNZIONI
------------------------------------*/

function changeImage(){
    currentImageIndex++;

    if(currentImageIndex > assetsCount){
        currentImageIndex = 1;
    }

    previewImage.src = `./images/img_${currentImageIndex}.png`;
}

function changeText(){
    currentTextIndex++;

    if(currentTextIndex > assetsCount){
        currentTextIndex = 1;
    }

    previewText.src = `./images/txt_${currentTextIndex}.png`;
}

function updateSender(){
    const txt = senderInput.value;

    if(txt.trim().length > 0){
         previewSender.innerText = txt;
    } else{
        previewSender.innerText = 'Augurissimi';
    }

}

function downloadImg(){
    htmlToImage.toJpeg(previewArea)
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'my-image-name.jpeg';
    link.href = dataUrl;
    link.click();
  });
}
 
/*------------------------------------
    EVENTI DINAMICI
------------------------------------*/

changeImageBtn.addEventListener('click', changeImage);
changeTextBtn.addEventListener('click', changeText);
senderInput.addEventListener('input', updateSender);
downloadBtn.addEventListener('click', downloadImg);




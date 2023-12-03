let rRange = document.querySelector('#r-range');
let gRange = document.querySelector('#g-range');
let bRange = document.querySelector('#b-range');
let bodyTag = document.querySelector('body');
let rndBtn = document.querySelector('#random');

rRange.addEventListener('input', function(){
        let rValue = rRange.value;
        let gValue = gRange.value;
        let bValue = bRange.value;

        bodyTag.style.backgroundColor = 'rgb(' + rValue + ',' + gValue + ',' + bValue + ')';
});

gRange.addEventListener('input', function(){
        let rValue = rRange.value;
        let gValue = gRange.value;
        let bValue = bRange.value;
        
        bodyTag.style.backgroundColor = 'rgb(' + rValue + ',' + gValue + ',' + bValue + ')';
});

bRange.addEventListener('input', function(){
        let rValue = rRange.value;
        let gValue = gRange.value;
        let bValue = bRange.value;

        bodyTag.style.backgroundColor = 'rgb(' + rValue + ',' + gValue + ',' + bValue + ')';
});

rndBtn.addEventListener('click', function(){
    let randomNumber1 = Math.floor(Math.random() * 255)
    let randomNumber2 = Math.floor(Math.random() * 255)
    let randomNumber3 = Math.floor(Math.random() * 255)

    rRange.value = randomNumber1;
    gRange.value = randomNumber2;
    bRange.value = randomNumber3;

    

    bodyTag.style.backgroundColor = 'rgb(' + randomNumber1 + ',' + randomNumber2 + ',' + randomNumber3 + ')';

});
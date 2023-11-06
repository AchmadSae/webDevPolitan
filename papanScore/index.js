

const num1act = document.querySelector('.numScore1');
const num2act = document.querySelector(".numScore2");
const liveScore = document.querySelector(".liveScore");
const btnPrediction = document.querySelector(".btnPrediction");

let maxNum = 6;
let isSame = false;
let num1val = 0;
let num2val= 0;
let numPrediction = 0;
let numPrediction1=0;
let numPrediction2=0;
window.onload = () => {
     numPrediction1 = Math.floor(Math.random() * 7);
     numPrediction2 = Math.floor(Math.random() * 7);
    console.log("numPrediction1: " + numPrediction1 + " numPrediction2: " + numPrediction2);
}

num1act.addEventListener('click', function(e) {
    console.log("click");
    if (!isSame) {
        num1val += 1;
        if(num1val === maxNum) {
            isSame = true;
        }
        num1act.textContent = num1val;
    }
});

num2act.addEventListener('click', function(e) {
    console.log("click");
    if (!isSame) {
        num2val += 1;
        if(num2val === maxNum) {
            isSame = true;
        }
        num2act.textContent = num2val;
    }
});

btnPrediction.addEventListener('click', function(){
    
    if(numPrediction1 === num1val && numPrediction2 === num2val) {
        console.log("great predict");
        Swal.fire('');
        
    }else{
        alert('Your predict is inCorrect');
    }
});

let square1 = document.querySelectorAll('.upper');
let square2 = document.querySelectorAll('.lower');
let answer = '';
const resetEasygame = () => {
    for (let ele of square1) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        ele.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
    let sqidx = Math.floor(Math.random() * 3);
    let question = document.querySelector('.ques');
    question.innerText = square1[sqidx].style.backgroundColor.toUpperCase();
    answer = square1[sqidx].style.backgroundColor;

    //at reset time
    let changebackgroundcolor = document.querySelector('.container1');
    changebackgroundcolor.style.backgroundColor = 'rgb(70,130,180)';
}
const resetHardgame = () => {
    for (let ele of square1) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        ele.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
    for (let ele of square2) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        ele.style.backgroundColor = `rgb(${r},${g},${b})`;
    }
    let sqidx = Math.floor(Math.random() * 6);
    let question = document.querySelector('.ques');
    if (sqidx <= 2) {
        question.innerText = square1[sqidx].style.backgroundColor.toUpperCase();
        answer = square1[sqidx].style.backgroundColor;
    } else {
        sqidx -= 3;
        question.innerText = square2[sqidx].style.backgroundColor.toUpperCase();
        answer = square2[sqidx].style.backgroundColor;
    }
    let changebackgroundcolor = document.querySelector('.container1');
    changebackgroundcolor.style.backgroundColor = 'rgb(70,130,180)';
}

let easyBtn = document.querySelector('.easybtn');
let hardBtn = document.querySelector('.hardbtn');
easyBtn.addEventListener('click', () => {
    resetEasygame();
    let lowersq = document.querySelector('.div4');
    lowersq.style.display = 'none';
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
})
hardBtn.addEventListener('click', () => {
    resetHardgame();
    let lowersq = document.querySelector('.div4');
    lowersq.style.display = 'flex';
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
})
let newColor = document.querySelector('.new-color');
newColor.addEventListener('click', () => {
    //resetHardgame();
    if(easyBtn.classList.contains('selected')){
        resetEasygame();
    }else{
        resetHardgame();
    }
})

for (let ele of square1) {
    ele.addEventListener('click', () => {
        if (ele.style.backgroundColor === answer) {
            for (let sq1 of square1) {
                sq1.style.backgroundColor = answer;
            }
            for (let sq2 of square2) {
                sq2.style.backgroundColor = answer;
            }
            let changebackgroundcolor = document.querySelector('.container1');
            changebackgroundcolor.style.backgroundColor = answer;
        } else {
            ele.style.backgroundColor = 'black';
        }
    })
}
for (let ele of square2) {
    ele.addEventListener('click', () => {
        if (ele.style.backgroundColor === answer) {
            for (let sq1 of square1) {
                sq1.style.backgroundColor = answer;
            }
            for (let sq2 of square2) {
                sq2.style.backgroundColor = answer;
            }
            let changebackgroundcolor = document.querySelector('.container1');
            changebackgroundcolor.style.backgroundColor = answer;
        } else {
            ele.style.backgroundColor = 'black';
        }
    })
}

//click difficulty
resetHardgame();
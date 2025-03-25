let slide = document.querySelectorAll('.carousel-item');
let count = parseInt(document.querySelector(".count").innerText.trim())
let minute = parseInt(document.querySelector(".min").innerText.trim())
let startTime;
let slideIdx = 0;

// ------------- TIMER ----------------//

let timer = ()=>{
    let oldTime = count;
    let startTimer = setInterval(()=>{
        if(count == 0){
            if(minute > 0){
                minute--;
                count = oldTime;
            }
            else{
                clearInterval(startTimer);
                return;
            }
        }
        else{
            count--;
        }
        document.querySelector(".count").innerText = count > 9 ?`${count}` : ` 0${count}` ;
        document.querySelector(".min").innerText = minute < 10 ? `0${minute} :`:`0${minute}:`;
    },1000)
}
timer()











// ------------------- SLIDER ---------------//
let currSlide = (n)=>{
    slideIdx += n;
    nxtSlide(slideIdx)
}

let nxtSlide = (e)=>{
    if( e >= slide.length){
        slideIdx = 0;
    }
    if(e < 0){
        slideIdx = slide.length - 1;
    }
    slide.forEach((nxt)=>{
        nxt.classList.remove("active");
    })
    slide[slideIdx].classList.add("active");
    console.log(slideIdx);
}
// setInterval(()=>{
//     currSlide(1);
// },3000)
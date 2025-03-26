let slide = document.querySelectorAll('.carousel-item');
let count = parseInt(document.querySelector(".count").innerText.trim())
let minute = parseInt(document.querySelector(".min").innerText.trim())
let blockquote = document.querySelector(".blockquote p");
let blockFooter = document.querySelector(".blockquote-footer");
let startTime;
let slideIdx = 0;

let arr = [
    {
        detail : "Step into ultimate style and performance with PUMA's latest shoes for men. Designed for comfort and durability, our men's shoes blend cutting-edge technology with modern designs, ensuring the perfect mix of fashion and function.",
        company : "PUMA INDIA"
    },
    {
        detail : "Nike is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment, with revenue in excess of US$46 billion in its fiscal year 2022.",
        company : "NIKE INDIA"
    },
    {
        detail : "Football boots are made for grip and agility and these features can be affected greatly by the surface and its condition. Hard ground football shoes are designed for hard surfaces and a pair of hard ground football boots has studs that are fixed and rubber soles designed for durability and agility.",
        company : "FOOTBALL INDIA"
    }
]

// ------------- TIMER ----------------//
window.onload=()=>{
    timer();
    displayQuote(slideIdx)
}
let timer = ()=>{
    let oldTime = count;
    let startTimer = setInterval(()=>{
        if(count == 0){
            if(slideIdx >= slide.length - 1){
                clearInterval(startTimer);
                return;
            }
            else{
                count = oldTime;
                currSlide(1);
            }
        }
        else{
            count--;
        }
        document.querySelector(".count").innerText = count > 9 ?`${count}` : ` 0${count}` ;
        document.querySelector(".min").innerText = minute < 10 ? `0${minute} :`:`0${minute}:`;
    },1000)
}

// ------------------- SLIDER ---------------//
let currSlide = (n)=>{
    slideIdx += n;
    
    if( slideIdx >= slide.length){
        slideIdx = 0;
    }
    if(slideIdx < 0){
        slideIdx = slide.length - 1;
    }
    nxtSlide(slideIdx);
}

let nxtSlide = (para)=>{
    slide.forEach((nxt)=>{
        nxt.classList.remove("active");
    })
    slide[para].classList.add("active");
    displayQuote(para)
}

// setInterval(()=>{
//     currSlide(1);
// },3000)


//-------------------- QUOTES ------------------//
let displayQuote = (idx)=>{
        blockquote.innerText = arr[idx].detail;
        blockFooter.innerText = arr[idx].company;
}



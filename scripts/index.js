const mainSlideCurrent = document.querySelector('#main_bnr .swiper_current');
const mainSlideTotal = document.querySelector('#main_bnr .swiper_total');
const rank100 = document.querySelectorAll('.rank100 a');
const rank100Img = document.querySelectorAll('.rank100 a .img_wrap');
const mdCate = document.querySelectorAll('#md_ctnr .category a');
const roomWrapper = document.querySelector('.room_swiper .swiper-wrapper');
const roomSlides = document.querySelectorAll('.room_swiper .swiper-wrapper .swiper-slide');

let currentIndex = 0;


function activeReset(name){
    for(let i of name) i.classList.remove('active');
};


mainSlideTotal.textContent = `0${document.querySelectorAll('#main_bnr .swiper-slide').length}`;

const mainSwiper = new Swiper('.main_swiper',{
    autoplay:{delay:2500,},
    loop:true,
    spaceBetween:50,
    slidesPerView: 1.1,
    centeredSlides:true,
    navigation:{
        nextEl:'#main_bnr .next',
        prevEl:'#main_bnr .prev',
    },
    on:{
        slideChange:function(){
            mainSlideCurrent.textContent = `0${this.realIndex+1}`;
        }
    },
    scrollbar: {
        el: '#main_bnr .swiper-scrollbar',
    },
});

const rankTimer = setInterval(()=>{
    if(currentIndex == rank100.length - 1){ /* index 초기화 */
        setTimeout(()=>{
            currentIndex = 0;
            activeReset(rank100);
            rank100[0].classList.add('active')
        }, 0)
    } else {
        activeReset(rank100);
        currentIndex++;
    };
    rank100[currentIndex].classList.add('active');
}, 3000);

for(let i of mdCate){
    i.addEventListener('click',(e)=>{
        e.preventDefault();
        activeReset(mdCate);
        i.classList.add('active')
    });
};

for (let i of roomSlides){
    const clone = i.cloneNode(true);
    roomWrapper.appendChild(clone);
};

const roomSwiper = new Swiper('.room_swiper',{
    autoplay:{delay:5000,},
    loop:true,
    centeredSlides:true,
    slidesPerView: 1.01,
    spaceBetween:30,
    navigation:{
        nextEl:'.room_swiper .swiper-button-next',
        prevEl:'.room_swiper .swiper-button-prev',
    },
});

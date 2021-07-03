const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');

// throttle - 동일 이벤트를 실행하는 경우 임의 반복주기
window.addEventListener('scroll', _.throttle(function () {
    // console.log(window.scrollY);
    if (window.scrollY > 500){
        // badgeEl.style.display = "none";
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, 0.6, {
            opacity: 0,
            display: 'none'
        });
    }else{
        // badgeEl.style.display = "block";
        gsap.to(badgeEl, 0.6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));    //lodash _.throttle(함수, 시간) -> 시간당 실행

// _____________

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.7,   // 반복하면서 0.7 1.4 2.1 2.8초 간격으로 딜레이 및 함수 실행
        opacity: 1 
    });
});


// SWIPER
//생성자 (new)
// new Swiper(선택자, 옵션);
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
}); 

new Swiper('.promotion .swiper-container', {
    direction: 'horizontal',
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true, 
    // autoplay: {
    //     delay: 5000
    // },
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어
    },
    navigation: {
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'

    }

}); 


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion // 반대가 되도록(!)
    if(isHidePromotion) {
        //숨김처리
        promotionEl.classList.add('hide');
    }else{
        // 보임처리
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector,delay, size) {
    // gsap.to(요소, 시간, 옵션);
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1, //무한
        yoyo: true, // 반대로도 재생
        ease: Power1.easeInOut,
        delay: random(0, delay)
    });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);



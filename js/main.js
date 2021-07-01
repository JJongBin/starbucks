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
    console.log(window.scrollY);
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







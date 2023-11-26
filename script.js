let count = 0;
const photos = document.querySelectorAll('.card_img')
const titles = document.querySelectorAll('.card_title')
const nextBtn = document.querySelector('.right')
const prevBtn = document.querySelector('.left')
let kill = 0
function nextItem() {
    x.kill()
    gsap.fromTo(photos[count], {zIndex:100, opacity:1}, {zIndex:-100, opacity:1});
    gsap.fromTo(titles[count], {zIndex:100, opacity: 1}, {zIndex:-100, opacity: 1});
    count = count < photos.length - 1 ? ++count : 0;
    gsap.fromTo(photos[count], {zIndex:-100, opacity: 1}, { zIndex:100, opacity: 1});
    gsap.fromTo(titles[count], {zIndex:-100, opacity: 1}, { zIndex:100, opacity: 1});
  
}

nextBtn.addEventListener('click', function () { nextItem(); })

function prevItem() {
    x.kill()
    gsap.fromTo(photos[count], { opacity: 1, zIndex:100}, {zIndex:-100, opacity:1});
    gsap.fromTo(titles[count], { opacity: 1, zIndex:100}, {zIndex:-100, opacity: 1});
    count = count > 0 ? --count : photos.length - 1;
    gsap.fromTo(photos[count], {zIndex:-100, opacity: 1}, {zIndex:100, opacity: 1});
    gsap.fromTo(titles[count], {zIndex:-100, opacity: 1}, {zIndex:100, opacity: 1});
    
}

prevBtn.addEventListener('click', function () { prevItem(); })

function autoPlay() {
gsap.fromTo(photos[count], {opacity: 1}, {duration:1, opacity: 0})
gsap.fromTo(titles[count], { opacity: 1}, {duration:1,  opacity: 0})
count = count < photos.length - 1 ? ++count : 0;
gsap.fromTo(photos[count], {opacity: 0}, {duration:1,opacity: 1})
gsap.fromTo(titles[count], {opacity: 0}, {duration:1,opacity: 1});
}

var x = gsap.timeline({repeat:-1, yoyo:true,duration:1})
x.add(autoPlay)
x.startTime(1.5)


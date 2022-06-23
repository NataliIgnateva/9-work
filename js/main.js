let tabs = document.getElementById('tabs');
let content = document.querySelectorAll('.content');
let btnOpen = document.getElementById('btn-open');
let modal = document.getElementById('wrapper-modal');
let overlay = document.getElementById('overlay');
const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const slidesWrap = document.querySelectorAll('.slider-wrapper');
const tabsElement = Array.from(document.querySelectorAll('.tab-btn'));

//  Tabs

function changeClass(el){
    for(let i = 0; i < tabs.children.length; i++){
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

for (let index = 0; index < tabsElement.length; index++) {
tabsElement[index].addEventListener('click',function(event){
    let currTab = event.target.dataset.btn;
    changeClass(event.target);
    for (let i = 0; i < contents.length; i++){
        contents[i].classList.remove('active');
        if(contents[i].dataset.content == currTab){
            contents[i].classList.add('active');
        }
    }
})
}

function changeClass(el){
    for(let i = 0; i < tabs.children.length; i++){
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click',function(event){
    let currTab = event.target.dataset.btn;
    changeClass(event.target);
    for(let i = 0; i < content.length; i++){
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab){
            content[i].classList.add('active');
        }
    }
})

// Modal

btnOpen.addEventListener('click',function(){
    modal.classList.add('active');
});

function closeModal(){
    modal.classList.remove('active');
}

overlay.addEventListener('click',closeModal);

// Slider

let index = 0;

const activeSlide = n => {
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const prevSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        prepareCurrentSlide(index);
    }else{
        index++;
        prepareCurrentSlide(index);
    }
}

const nextSlide = () => {
    if(index == 0){
        index = slides.length - 1;
        prepareCurrentSlide(index);
    }else{
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item,indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
        clearInterval(interval);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const interval = setInterval(nextSlide, 2500);






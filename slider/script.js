slideArr = [
    {
        img: 'slide1.jpg',
        title: "Pierwszy tytuł",
        description: "Krótki opis dotyczący pierwszego obrazka"
    },
    {
        img: 'slide2.jpg',
        title: "Drugi tytuł",
        description: "Krótki opis dotyczący drugiego obrazka"
    },
    {
        img: 'slide3.jpg',
        title: "Trzeci tytuł",
        description: "Krótki opis dotyczący trzeciego obrazka"
    }];

slideIndex = 0;

slideTitle = document.querySelector('div.slideTitle');
slideDescription = document.querySelector('div.slideDescription');
slide = document.querySelector('div.slide');
next = document.querySelector('div.next');
prev = document.querySelector('div.prev');
index = 0;


dots = document.querySelector('div.dots');
dotArr
createDots = function () {
    for (let i = 0; i < slideArr.length; i++) {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.id =  i;
        dots.appendChild(dot);
        dotArr.push(dot);
    }
}

createDots();

changeSlide = () => {
    slideTitle.innerText = "";
    slideDescription.innerText = "";
    slide.style.opacity = 0.5;
    setTimeout(function () {
        slide.style.backgroundImage = 'url("' + slideArr[index].img + '")';
        slideTitle.innerText = slideArr[index].title;
        slideDescription.innerText = slideArr[index].description;
        slide.style.opacity = 1;
    }, 100);

}

next.addEventListener('click', function () {
    if (index === slideArr.length - 1) {
        index = 0;
    } else {
        index++;
    }
    changeSlide();
})

prev.addEventListener('click', function () {
    if (index === 0) {
        index = slideArr.length - 1;
    } else {
        index--;
    }
    changeSlide();
})
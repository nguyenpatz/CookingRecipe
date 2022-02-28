// click btn menu open searchbar and navbar
const btnMenu = document.querySelector(".btn__menu");

const mobileContainer = document.querySelector(".mobile__container");

btnMenu.addEventListener("click", function() {
    mobileContainer.classList.toggle("show");

});

const data_recipe = [{
    id: 1,
    ten: "Thịt kho",
    tieude:  "thịt kho Tàu thơm ngon đúng vị, thịt mềm béo ngậy",
    noidung: "Đang cập nhật",
    loai: "kho",
    tenloai: "Món kho",
    src: "./images/foods/thitkho.jpg",
    nguyenlieu: ["Thịt ba chỉ hay thịt chân giò 500 gr",
        "Trứng vịt luộc 5 quả",
        "Nước dừa 400 ml",
        "Hành băm 1 muỗng canh",
        "Tỏi băm 1 muỗng canh",
        "Nước mắm 3 muỗng canh",
        "Gia vị thông dụng 1 ít"
    ],
},
{
    id: 2,
    ten: "Sườn xào",
    tieude: "sườn xào chua ngọt đậm đà, hấp dẫn, đưa cơm cho gia đình",
    noidung: "Đang cập nhật",
    loai: "xao",
    tenloai: "Món xào",
    src: "./images/foods/suonxao.jpg",
    nguyenlieu: [
        " Sườn heo non 500 gr",
        "Ớt chuông 3 trái",
        "Hành tây nhỏ 1 củ",
        "Hành 2 củ",
        "Tỏi 1 củ",
        "Ớt 3 trái",
        "Ngò 1 muỗng canh",
        "Giấm 3 muỗng canh",
        "Nước mắm 2 muỗng canh",
        "Dầu ăn 1 ít",
        "Bột năng 1 ít",
        "Gia vị thông dụng 1 ít"
    ],
},
{
    id: 3,
    ten: "Rau muống xào",
    tieude: "rau muống xào tỏi ngon thơm nức mũi dân dã khó cưỡng",
    noidung: "Đang cập nhật",
    loai: "xao",
    tenloai: "Món xào",
    src: "./images/foods/raumuongxao.jpg",
    nguyenlieu: [
        "Rau muống 500 gr",
        "Tỏi 2 củ",
        "Dầu hào 1 muỗng canh",
        "Dầu ăn 2 muỗng canh",
        "Gia vị thông dụng 1 ít"
    ],
},
{
    id: 4,
    ten: "Thịt luộc",
    tieude: "Thịt heo ngon trắng mềm",
    noidung: "Đang cập nhật",
    loai: "luoc",
    tenloai: "Món luộc",
    src: "./images/foods/thitluoc.jpg",
    nguyenlieu: [
        "Thịt nạc",
        "Thịt mỡ",
    ],
}];

//object slide

const slider = [
    "./images/slide/slide1.jpg",
    "./images/slide/slide2.jpg",
    "./images/slide/slide3.jpg",
    "./images/slide/slide4.jpg"
];

const slideItem = document.querySelector(".slider__item");

let currentImage = 0;

// console.log(data_recipe);


// display Menu with object
//container button
const buttonContainter = document.querySelector(".button__container");
const foodContainer = document.querySelector(".section__center");

window.addEventListener("DOMContentLoaded", function() {
    
    displayFood(data_recipe);
    displayButton(data_recipe);
    changeSlideButton();
    changeSlideAuto();
    
});

function displayButton(data) {
    // chỉ lấy mỗi loai để hiển thị tên lên màn hình thôi 
    const initialValue = ["Tất cả"];
    const nameButtons = data.reduce(function(prev, next) {
        if(!prev.includes(next.tenloai)) {
            prev.push(next.tenloai);
        }
        return prev;
    }, initialValue);



    // hiển thị nút loại
    const filter_button = nameButtons.map(function(element) {
        return `<button class="filter__button btn1" type="button" data-id="${element}">${element}</button>`;
    }).join("");

    buttonContainter.innerHTML = filter_button;
    // sau khi có được tên loai thì bắt đầu thực hiện sự kiện 
    // khi click vào 1 loại sẽ chỉ hiển thị món ăn có liên quan tới loại đó 

    const button__id = document.querySelectorAll(".filter__button");
    button__id.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            const value__button = e.currentTarget.dataset.id;
            const selectedFood = data.filter(function(element) {
            if(element.tenloai == value__button) {
                return element;
                // console.log(element);
            }
        })
        if(value__button === "Tất cả") {
            displayFood(data);
        } else {
            displayFood(selectedFood);
        }
        });
   
        
    });
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function displayFood(data) {
    const showFood = data.map(function(element) {
        return `<div class="grid__item">
                <img class="grid__image" src="${element.src}" alt="${element.ten}">
                <div>
                    <p class="food__name">${element.ten}</p>
                    <p class="food__title">${capitalizeFirstLetter(element.tieude)}</p>
                </div>
            </div>`;
    }).join("");

    foodContainer.innerHTML = showFood;
}

function showSlide() {
    slideItem.src = slider[currentImage];
}

function changeSlideButton() {
    const buttonLeft = document.querySelector(".button__left");
    const buttonRight = document.querySelector(".button__right");
    buttonLeft.addEventListener("click", () => {
        currentImage--;
        
        if(currentImage < 0) {
            currentImage = slider.length - 1;
        }
        showSlide();
    });

    buttonRight.addEventListener("click", () => {
        currentImage++;
        
        if(currentImage > slider.length - 1) {
            currentImage = 0;
        }
        showSlide();
    });
}

function changeSlideAuto() {
    currentImage++;
    if(currentImage > slider.length-1) {
        currentImage = 0;
    }
    
    const dots = document.getElementsByClassName("dot");
    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    dots[currentImage].className += " dot-active";
    showSlide();
    setTimeout(changeSlideAuto, 2000);
}


// hiển thị các question và answer
const domContainer = document.querySelector(".container");

class Question {
    constructor(title, answer) {
        this.title = title;
        this.answer = answer;
    }
}
// const contactComponent = 
console.log(domContainer);
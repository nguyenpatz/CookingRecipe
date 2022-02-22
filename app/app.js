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
    tieude: "thịt heo ngon trắng mềm",
    noidung: "Đang cập nhật",
    loai: "luoc",
    tenloai: "Món luộc",
    src: "./images/foods/thitluoc.jpg",
    nguyenlieu: [
        "Thịt nạc",
        "Thịt mỡ",
    ],
}];

// console.log(data_recipe);


// display Menu with object
//container button
const buttonContainter = document.querySelector(".button__container");
const foodContainer = document.querySelector(".section__center");

window.addEventListener("DOMContentLoaded", function() {
    
    displayFood(data_recipe);
    displayButton(data_recipe);

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
    console.log(nameButtons);


    // hiển thị nút loại
    const filter_button = nameButtons.map(function(element) {
        return `<button class="filter__button btn1" data-id="${element}">${element}</button>`;
    }).join("");

    buttonContainter.innerHTML = filter_button;
    // sau khi có được tên loai thì bắt đầu thực hiện sự kiện 
    // khi click vào 1 loại sẽ chỉ hiển thị món ăn có liên quan tới loại đó 
}

function displayFood(data) {
    const showFood = data.map(function(element) {
        return `<div class="grid__item">
                <img class="grid__image" src="${element.src}" alt="${element.ten}">
                <div>
                    <p class="food__name">${element.ten}</p>
                    <p class="food__title">${element.tieude}</p>
                </div>
            </div>`;
    }).join("");

    foodContainer.innerHTML = showFood;
}
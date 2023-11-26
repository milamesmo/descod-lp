const menuNav = document.querySelector('#menu-nav')
        function toggleMenu() {
            menuNav.style.display = menuNav.style.display != 'block' ? 'block' : 'none'
        }

const leftbtn = document.querySelector('#left-btn');
const rightbtn = document.querySelector('#right-btn');

const img1 = document.querySelector('#image1');
const img2 = document.querySelector('#image2');
const img3 = document.querySelector('#image3');
const img4 = document.querySelector('#image4');

const wrap = document.querySelector('#carousel-wrap');

const imgList = [
    img1, img2, img3, img4
]

let currImg = 0;

leftbtn.addEventListener("click", prevImg);
function translateImg(span) {
    wrap.style.transform = 'translateX(' + span + 'px)'
}


function prevImg() {
    alert("hi");

}

rightbtn.addEventListener("click", nextImg);

function nextImg() {
    switch (currImg) {
        case 0:
            translateImg(imgList[currImg].clientWidth * -1);
            currImg++;
            break;

        case 1:
            translateImg((imgList[currImg].clientWidth * 2) * -1);
            currImg++;
            break;

        case 2:
            translateImg((imgList[currImg].clientWidth * 3) * -1);
            currImg++;
            break;

        case 3:
            currImg = 0;
            translateImg(0);
            break;
    }

}

function prevImg() {
    switch (currImg) {
        case 0:
            translateImg((imgList[currImg].clientWidth *3)*-1);
            currImg++;
            break;

        case 1:
            translateImg((imgList[currImg].clientWidth * 2) * -1);
            currImg++;
            break;

        case 2:
            translateImg(imgList[currImg].clientWidth * -1);
            currImg++;
            break;

        case 3:
            currImg = 0;
            translateImg(0);
            break;
    }

}

'use strict';

let baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=computer/science&startIndex=0&maxResults=30';
let cardWrapper = document.querySelector('.card_umumiy');
let modeBtn = document.querySelector('.modeBtn');
let body = document.body;
let search = document.querySelector('.search_input');
let aside = document.querySelector('.aside');

// Basa Url o'zgaruvchisi
(async function () {
    let response = await fetch(`${baseUrl}`);
    let result = await response.json();
    console.log(result.items);
    renderData(result.items);
}());

// Ma'lumotlarni render qilish
function renderData(data) {
    data.forEach(el => {
        let div = document.createElement('div');
        div.classList.add('cards', 'ml-[39px]', 'mt-[40px]', 'py-[13px]', 'px-[18px]', 'border', 'h-[445px]');
        div.innerHTML = `
        <div class="card border">
            <div class="card-img_panel py-[18px] px-[20px]">
                <img src="${el.volumeInfo.imageLinks.thumbnail}" class="object-cover h-[200px] pl-[20px]" alt="">
            </div>
            <div class="card-body flex flex-col">
                <h3 class="text-black text-base leading-normal  font-medium ">${el.volumeInfo.title.length < 100 ? el.volumeInfo.title.substring(0, 15) + "..." : el.volumeInfo.title}</h3>
                <p class="text-[#757881] text-[16px] leading-normal">${el.volumeInfo.authors && el.volumeInfo.authors.length > 0 ? el.volumeInfo.authors[0].substring(0, 10) + "..." : ''}</p>
                <span class="text-[#757881] text-[16px] leading-normal">${el.volumeInfo.publishedDate}</span>
            </div>
            <div class="card_button flex items-center gap-[10px] pt-[10px] pb-[10px]">
                <a href="${el.volumeInfo.infoLink}" target="_blank"><button class="p-2 bg-[#FFD80D] rounded-[4px]">Saqlash</button></a>
                <a href="${el.volumeInfo.infoLink}" target="_blank"><button class="p-2 bg-[#F3F8FF]">Batafsil</button></a>
            </div>
            <a href="${el.volumeInfo.previewLink}"><button class="flex items-center justify-center text-center w-[210px] py-[10px] rounded-[4px] bg-[#75828A]">O'qish</button></a>
        </div>
        `;
        cardWrapper.append(div);
    });
}

// Tungi rejim
modeBtn.addEventListener('click', (e) => {
    body.classList.toggle('dark-mode');
    search.classList.toggle('dark-mode');
    aside.classList.toggle('dark-mode');
    cardWrapper.classList.toggle('dark-mode');
});


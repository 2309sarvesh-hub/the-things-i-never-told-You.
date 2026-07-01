const leftPage = document.querySelector(".left-page");
const rightPage = document.querySelector(".right-page");

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

const cover = document.querySelector("#cover");
const backCover = document.querySelector("#backCover");

const bookContainer = document.querySelector("#bookContainer");

let currentPage = 0;

function updateButtons(){

    prevBtn.disabled = currentPage === 0;

}

function showPage(){

    leftPage.innerHTML = pages[currentPage].left;
    rightPage.innerHTML = pages[currentPage].right;

    updateButtons();

}

showPage();

cover.addEventListener("click",()=>{

    cover.classList.add("hide");

    setTimeout(()=>{

        cover.style.display = "none";
        bookContainer.classList.add("show");

    },800);

});

nextBtn.addEventListener("click",()=>{

    if(currentPage < pages.length-1){

        currentPage++;
        showPage();

    }

    else{

        bookContainer.classList.remove("show");
        bookContainer.style.display = "none";

        backCover.style.display = "flex";

    }

});

prevBtn.addEventListener("click",()=>{

    if(currentPage > 0){

        currentPage--;
        showPage();

    }

});
let slideIndex = 1; /*變數初始化*/
showSlides(slideIndex);

/*定義函數*/
/*plus 加*/
function plusSlides(n) {
    showSlides(slideIndex += n);
}

/*current 目前的*/
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i; /*用在for迴圈*/
    /*document.getElementsByClassName 搜尋整個 HTML 文件*/
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    /*限制幻燈片的索引值*/
    if(n > slides.length) {slideIndex= 1} /*無限向後*/
    if(n < 1) {slideIndex= slides.length} /*無限向前*/

    /*清空畫面，一次只有一張圖片顯示*/
    /*slides[i] 正在被處理的元素*/
    for(i = 0; i < slides.length; i++){
        slides[i].style.display= "none";
    }

    /*清除被標記為「選中狀態」（active）的點點*/
    /*dots[i] 正在被處理的元素*/
    for(i = 0; i < dots.length; i++){
        dots[i].className= dots[i].className.replace ("active","");
    }

    /*當前選定的圖片顯示*/
    slides[slideIndex-1].style.display = "block";
    /*當前點點加上 active*/
    dots[slideIndex-1].className += " active";
}

/*空格很重要QAQ */
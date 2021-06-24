const movieList = document.querySelector("div.VerticallList");

function mudarLeft() {
    /* let valorx = movieList.style.marginLeft - Math.round(window.innerWidth / 2);
    if (movie.style.marginLeft > 0) {      
        movieList.style.marginLeft = `${valorx}px`;
    } */
    movieList.style.marginLeft = '0px';
}

function mudar() {
    let valorx = movieList.style.marginRight - Math.round(window.innerWidth / 3);
    movieList.style.marginLeft = `${valorx}px`;
}

const arrowLeft = document.querySelectorAll("div.arrow-left");
for (const iterator of arrowLeft) {
    iterator.addEventListener('click', mudarLeft);
}

const arrowRight = document.querySelectorAll("div.arrow-right");
for (const iterator of arrowRight) {
    iterator.addEventListener('click', mudar);
}
const movieList = document.querySelector("div.VerticallList");
const cards = document.querySelectorAll("div.VerticalCard");

const bettersListhorizontal = document.querySelector("div.VerticallList");

var scroolx = 0;
const scroolVerticalSize = 280;

const bettershandleLeftArrow = () => {
    //scroolx += Math.round(window.innerWidth / 4.7);
    scroolx += scroolVerticalSize;

    if(scroolx > 0){
        scroolx = 0;
    }
    
    bettersListhorizontal.style.marginLeft = `${scroolx}px`;
}


const bettershandleRightArrow = () =>{
    let scroolxMultiplier = -scroolVerticalSize * 3;
    // scroolx += -Math.round(window.innerWidth / 4.7);
    scroolx += -scroolVerticalSize;

    if (scroolx <  scroolxMultiplier) {
        scroolx = scroolxMultiplier;
    }
    bettersListhorizontal.style.marginLeft = `${scroolx}px`;
}

const bettersArrowRight = document.querySelector('div.arrow-right');

bettersArrowRight.addEventListener('click', bettershandleRightArrow);

const bettersArrowLeft = document.querySelector('div.arrow-left');
bettersArrowLeft.addEventListener('click', bettershandleLeftArrow);

////HORIZONTALS
const scroolXSize = 364;
//hayao cards

const movieListhorizontal = document.querySelectorAll(".cardsList")[0];

const HhandleLeftArrow = () => {
    //x += Math.round(window.innerWidth / 3.7);
    x += scroolXSize;
    if(x > 0){
        x = 0;
    }

    movieListhorizontal.style.marginLeft = `${x}px`;
}

var x = 0;
const HhandleRightArrow = () =>{   
    //x += -Math.round(window.innerWidth / 3.7);
    let scroolxMultiplier = -scroolXSize * 7;
    x += -scroolXSize
    // if (x < -2400) {

    //     x = -2400
    // }
    if (x < scroolxMultiplier) {

        x = scroolxMultiplier;
    }

    movieListhorizontal.style.marginLeft = `${x}px`;
}

const hArrowRight = document.querySelector('div#h-r-arrow');

hArrowRight.addEventListener('click', HhandleRightArrow);

const hArrowLeft = document.querySelector('div#h-l-arrow');
hArrowLeft.addEventListener('click', HhandleLeftArrow);


//isao cards
const isaoListhorizontal = document.querySelectorAll(".cardsList")[1];

const IhandleLeftArrow = () => {
    //let x = movieListhorizontal.style.marginLeft + Math.round(window.innerWidth / 2);
    //iX += Math.round(window.innerWidth / 3.7);
    iX += scroolXSize
    if(iX > 0){
        iX = 0;
    }
    isaoListhorizontal.style.marginLeft = `${iX}px`;
}

var iX = 0;
const IhandleRightArrow = () =>{
    let scroolxMultiplier = -scroolXSize * 2;
    //iX += -Math.round(window.innerWidth / 3.7);
    iX += -scroolXSize;

    if (iX < scroolxMultiplier) {

        iX = scroolxMultiplier
    }
    
    isaoListhorizontal.style.marginLeft = `${iX}px`;
}

const iArrowRight = document.querySelector('div#i-r-arrow');

iArrowRight.addEventListener('click', IhandleRightArrow);

const iArrowLeft = document.querySelector('div#i-l-arrow');
iArrowLeft.addEventListener('click', IhandleLeftArrow);




// others cards
const oListhorizontal = document.querySelectorAll(".cardsList")[2];

const ohandleLeftArrow = () => {
    //ox += Math.round(window.innerWidth / 3.7);

    ox += scroolXSize;
    if(ox > 0){
        ox = 0;
    }
    
    oListhorizontal.style.marginLeft = `${ox}px`;
}

var ox = 0;
const ohandleRightArrow = () =>{
    let scroolxMultiplier = -scroolXSize * 4;
    // ox += -Math.round(window.innerWidth / 3.7);
    ox += -scroolXSize;

    if (ox < scroolxMultiplier) {

        ox = scroolxMultiplier
    }
    oListhorizontal.style.marginLeft = `${ox}px`;
}

const oArrowRight = document.querySelector('div#o-r-arrow');

oArrowRight.addEventListener('click', ohandleRightArrow);

const oArrowLeft = document.querySelector('div#o-l-arrow');
oArrowLeft.addEventListener('click', ohandleLeftArrow);

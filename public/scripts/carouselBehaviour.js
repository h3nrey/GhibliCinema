const carousels = document.querySelectorAll("div.carousel");
        carousels.forEach(carousel => {
            let carouselCards = carousel.querySelectorAll(".carousel__card");
            const cardsLength = carouselCards.length;
            const cardSize = carouselCards[0].offsetWidth;
            const cardsGap = 10;
            const carouselSize = (cardsLength + 1) * cardSize + (cardsGap * cardsLength - 1);
            carousel.style.width = `${carouselSize}px`;        
        })
    
        window.addEventListener("resize", settingCardWidth)

        function settingCardWidth() {
            const carousels = document.querySelectorAll("div.carousel");
            carousels.forEach(carousel => {
                let carouselCards = carousel.querySelectorAll(".carousel__card");
                carouselCards.forEach(card => {
                    const parentWidth = carousel.parentElement.offsetWidth;
                    card.style.width = `${parentWidth / 4.8}px`;
                })
            })
        }

        settingCardWidth();


        //---MOVE CAROUSEL---//
        const arrowsLeft = document.querySelectorAll("div.arrow__left");
        const arrowsRight = document.querySelectorAll("div.arrow__right");
        let clicks = 0;
        

        arrowsLeft.forEach(arrowLeft=> {
            arrowLeft.addEventListener("click", (e) => {
                const my = e.currentTarget;
                console.log(my);
                console.log("macacos");
                moveCarousel(1, my.nextElementSibling);
                if(clicks > 0) clicks--;
            })
        })
        arrowsRight.forEach(arrowRight=> {
            arrowRight.addEventListener("click", (e) => {
                const my = e.currentTarget;
                console.log(my);
                console.log("macacos");
                moveCarousel(-1, my.previousElementSibling);
                clicks++;
            })
        })
    
        function moveCarousel(dir, carousel) {
            let carouselCards = carousel.querySelectorAll(".carousel__card");
            const cardsLength = carouselCards.length;
            const cardSize = carouselCards[0].offsetWidth;
            const cardsGap = 10;
            const carouselSize = (cardsLength + 1) * cardSize + (cardsGap * cardsLength - 1);
            let carouselMargin = carousel.style.marginLeft;
            let carouselPos = carousel.offsetLeft;
            let sizeGapped = cardSize + cardsGap; //size of the cards plus the gap between cards
            let canMove;
    
            console.log(clicks);
    
            if(clicks >= (cardsLength - 4)) {
                console.log("macacos");
                carousel.style.marginLeft = "0px";
                
                canMove = true;
                setTimeout(function() {
                    clicks = 0;
                }, 500);
            }
    
            if(dir != -1 && carouselPos >= 0 || clicks >= (cardsLength - 4)) {
                canMove = false;
            } else canMove = true;
            if(canMove) {
                carousel.style.marginLeft = `${carouselPos + ((cardSize + cardsGap) * dir)}px`;
            }
    
            console.log(`carouselPos: ${carouselPos}, \n last child pos ${carouselCards[cardsLength - 1].offsetLeft} \n first child: ${carouselCards[0].offsetLeft}`)
        }
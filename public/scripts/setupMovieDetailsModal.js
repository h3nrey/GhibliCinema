const cards = document.querySelectorAll(".carousel__card");
cards.forEach(card => {
    const cardID = card.id;
    const section = card.parentElement.parentElement.parentElement;
    card.addEventListener("click", async() => {
        const data = await fetch(`https://ghibliapi.herokuapp.com/films/${cardID}`);
        const movie = await data.json();
        console.log(await movie)
        DisableAll();
        setupModal(await movie,section);

    })
})

function setupModal(movie,section){
    const movieDetailedModal = document.querySelector(".movie__detail__container");

    const bannerContainer = movieDetailedModal.querySelector(".banner__container");
    bannerContainer.style.backgroundImage = `url('${movie.movie_banner}')`

    const link = bannerContainer.querySelector("span a");
    link.href = `/watch/${movie.id}`

    const content = movieDetailedModal.querySelector(".movie__detail__content");

    const title = content.querySelector(".movie__detail__title");
    title.textContent = movie.title;

    const releaseDate = content.querySelector(".movie__detail__date");
    releaseDate.textContent = movie.release_date;

    const description = content.querySelector(".movie__detail__description p")
    description.textContent = movie.description;

    const director = content.querySelector(".director__wrapper h3")
    director.textContent = movie.director

    movieDetailedModal.classList.toggle("hidden");
    section.appendChild(movieDetailedModal);
}

function DisableAll() {
    const movieDetailedModal = document.querySelectorAll(".movie__detail__container");
    movieDetailedModal.forEach(modal => {
        modal.classList.add("hidden");
    })
}
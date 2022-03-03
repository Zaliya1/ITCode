const btn = document.querySelector('.getRandom');

const getResourses = () => {
    let filmId = Math.floor(Math.random()*400+300);
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}`, {
        method: 'GET',
        headers: {
            'X-API-KEY': '63370443-a34d-4400-bd01-688bd93b9929',
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => createFilm(data))
};

const createFilm = (data) => {   
    let name = data.nameRu;
    let description = data.description;
    let posterUrl = data.posterUrl;
    let year = data.year;
    let ratingKinopoisk = data.ratingKinopoisk;

    let poster = document.querySelector('.poster');
    let filmName = document.querySelector('.film-name');
    let filmDescription = document.querySelector('.film-description');
    let filmYear = document.querySelector('.film-year');
    let filmRating = document.querySelector('.film-rating');
    let film = document.querySelector('.film');

    poster.style.backgroundImage = `url(${posterUrl})`;
    filmName.textContent = name;
    filmDescription.textContent = description;
    filmYear.textContent = `${year} год`;
    filmRating.textContent = `Рейтинг КиноПоиска ${ratingKinopoisk} из 10`;
    film.style.opacity = "1";
};

btn.addEventListener('click', getResourses);
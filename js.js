
const movie = 'https://65560bfd84b36e3a431ee51f.mockapi.io/Movie'

function start() {
    getMovie(render)
}

start()




function getMovie(callback) {
    fetch(movie)
        .then(function(response) {
            return response.json()
        })
        .then(callback)
}

function render(movies) {
    const listmovie = document.querySelector('#listphim')
    const htmls = movies.map(function(movie){
        return`
        <li>
        <h4>${movie.name}</h4>
        <img src=${movie.Image} alt=${movie.name}>
        </li>
        `;
    });
    listmovie.innerHTML = htmls.join();
}
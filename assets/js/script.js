// fetch('./assets/data/movies.json') 
// .then((response) => { 
//         return response.json(); 
//     })
//     .then((datas) => {
//         datas.results.forEach((element,index)=> {
//             let sectionMovies = document.querySelector('.allMovies');
//             let card = document.createElement('div');
//             let blockPicture = document.createElement('div');
//             let blockInformation = document.createElement('div');
//             let imgMovies = document.createElement('img');
//             let title = document.createElement('h1');
//             let descriptionMovie = document.createElement('p')
//             let averageMovie = document.createElement('p')


let card = document.getElementsByClassName('card')

fetch('./assets/data/movies.json')
.then((response) => {
    return response.json();
})

.then((datas) => {
    datas.results.forEach(movieObj => {
        document.querySelector('main').innerHTML += `<div class="card" style="width: 18rem;">
                                                        <div class="cardDesign text-center bg-light">
                                                            <div class="card-img">
                                                                <img src="${movieObj.poster_path}" alt="${movieObj.original_title}">
                                                                <div class="moviesInfo">
                                                                    <h3>${movieObj.original_title}</h3>
                                                                    <span class="note">${movieObj.vote_average}</span>
                                                                </div>
                                                            </div>
                                                            <div class="overview">
                                                                <div class="description">
                                                                    ${movieObj.overview}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                `; 
})
});

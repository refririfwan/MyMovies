class Movies {
    static searchMovies (keyword) {
        fetch('http://www.omdbapi.com/?apikey=5d49748b&s=' + keyword)
        .then(response => response.json())
        .then(response => {
            const movies = response.Search;
            let moviesList = '';
            movies.forEach(m => {
                moviesList += `
                    <div class="col-md-4 my-4">
                        <div class="card">
                            <img src = "${m.Poster}"
                            class = "card-img-top"
                            alt = "${m.Title}" >
                            <div class="card-body">
                                <h5 class="card-title">${m.Title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                                <a href = "#"
                                class = "btn btn-primary modal-detail-button" data-toggle = "modal" data-target = "#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                            </div>
                        </div>
                    </div>
                `;
            })
    
            const movieListElement = document.querySelector("#movieList");
            movieListElement.innerHTML = moviesList;
    
            // movie-detail
            const modalDetailButton = document.querySelectorAll('.modal-detail-button')
            modalDetailButton.forEach(btn => {
                btn.addEventListener('click', function () {
                    const imdbID = this.dataset.imdbid
                    fetch('http://www.omdbapi.com/?apikey=5d49748b&i=' + imdbID)
                    .then(response => response.json())
                    .then(m => {
                        const movieDetail = `                    
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-3">
                                        <img src="${m.Poster}" alt="${m.Title}" class="img-fluid">
                                    </div>
                                    <div class="col-md">
                                        <ul class="list-group">
                                            <li class="list-group-item">
                                                <h4>${m.Title} (${m.Year})</h4>
                                            </li>
                                            <li class="list-group-item"><strong>
                                                    Director :
                                                </strong> ${m.Director}</li>
                                            <li class = "list-group-item" > <strong > Actors: </strong>  ${m.Actors}</li >
                                            <li class = "list-group-item" > <strong > Writer: </strong>  ${m.Writer}</li >
                                            <li class = "list-group-item" > <strong > Plot: </strong> <br>  ${m.Plot}</li >
                                        </ul>
                                    </div>
                                </div>
                            </div>`;
                        const modalBody = document.querySelector('.modal-body')
                        modalBody.innerHTML = movieDetail
                    })
                })
            })
        })
    }
}

export default Movies;
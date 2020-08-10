import "../component/app-bar.js";
import "../component/search-bar.js";
import "../component/movie-list.js";
import "../component/movie-detail.js"
import Movies from "../data/movies.js";

const main = function () {
    const searchElement = document.querySelector("#searchElement");
    const buttonSearchElement = document.querySelector("#searchButtonElement");

    const onButtonSearchClicked = function () {
        Movies.searchMovies(searchElement.value);
    }

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
}

export default main;
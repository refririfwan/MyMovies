class MovieList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="container">
                <div class="row" id="movieList">

                </div>
            </div>
        `;
    }
}

customElements.define("movie-list", MovieList);
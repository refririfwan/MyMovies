class SearchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="container">
                <div class="row mb-5">
                    <div class="col-md-2"></div>
                    <div class="col-md-8">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control input-keyword" placeholder="Search Movies"
                                id="searchElement">
                            <div class="input-group-append">
                                <button class="btn btn-dark search-button" type="button"
                                    id="searchButtonElement">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("search-bar", SearchBar);
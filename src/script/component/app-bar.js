class AppBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="container">
                <div class="row mt-5 mb-5">
                    <div class="col">
                        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div class="container">
                                <span class="navbar-brand mb-0 h1">My Movies</span>
                                <span class="nav-link disabled" tabindex="-1" aria-disabled="true">Refri Rifwan</span>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("app-bar", AppBar);
const searchRoot = document.querySelector('[data-vue-search]');

/* This is an example Vue app, feel free to use your own code. By default, Vue 2.6 and Axios are available. */

Vue.component('SearchBar', {
    data() {
        return {
            searchTerm: 'statista',
        }
    },
    template: `
        <div class="pos-relative searchApp__container">
            <input v-model="searchTerm" placeholder="Search for statistics" type="text" />
            <button type="button" class="button button--primary searchApp__submitButton">
                Search
            </button>
        </div>
    `,
});

Vue.component('SearchResults', {
    template: `
        <section class="searchApp__results">
            <div class="panelCard padding-all-20">No Results</div>
        </section>
    `,
});

Vue.component('SearchApp', {
    template: `
        <div>
            <SearchBar />
            <SearchResults />
        </div>
    `,
});

if (searchRoot) {
    new Vue({
        el: searchRoot,
        render(createElement) {
            return createElement('SearchApp');
        },
    });
}
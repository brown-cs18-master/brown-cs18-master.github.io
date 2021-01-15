import pageLink from './page-link.js';


const pageLinks = {
    props: {
        names: Array,
        urls: Array,
    },
    components: {
        'page-link': pageLink
    },
    template: `
        <ul class="list-inline">
            <li
              class="d-flex flex-column list-inline-item"
              v-for="(name, index) of names"
              :key="index"
            >
                <page-link
                  :text="name"
                  :href="urls[index]"
                >
                </page-link>
            </li>
        </ul>
    `,
};

export default pageLinks;

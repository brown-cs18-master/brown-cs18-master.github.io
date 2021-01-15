import pageSectionTitle from './page-section.js';

const staffCard = {
    props: {
        cslogin: String,
        curPageThemeColor: String,
        name: String,
        note: String,
        pronouns: String,
        hometown: String,
        personalPhotoURL: {
            type: String,
            default: 'content/staff/default.png',
        },
        themePhotoURL: {
            type: String,
            default: 'content/staff/default.png',
        },
        theme: String,
        photoStyle: {
            type: Object,
            default: function () {
                return { 'background-position': '50%, 50%' };
            },
        },
    },
    data: function () {
        return {
            showPersonalPhoto: false,
            personalPhotoWebpURL: this.getWebpURL(this.personalPhotoURL),
            themePhotoWebpURL: this.getWebpURL(this.themePhotoURL),
            useWebp: Boolean(Modernizr.webp),
        };
    },
    computed: {
        id: function () {
            return this.name.toLowerCase().replace(' ', '-');
        },
        photoURL: function () {
            return `url(${this.showPersonalPhoto
                ? this.useWebp
                    ? this.personalPhotoWebpURL
                    : this.personalPhotoURL
                : this.useWebp
                    ? this.themePhotoWebpURL
                    : this.themePhotoURL
                })`;
        },
    },
    methods: {
        getWebpURL: function (url) {
            return `${url.substring(0, url.lastIndexOf('.'))}.webp`;
        },
    },
    template: `
        <div
          :id="id"
          class="card text-center m-4"
          :style="{'border-color': curPageThemeColor}"
          @mouseenter.passive="showPersonalPhoto = true"
          @click.passive="showPersonalPhoto = !showPersonalPhoto"
          @mouseleave.passive="showPersonalPhoto = false"
        >
            <div
              class="card-header text-muted font-weight-light"
              style="font-size: medium"
            >
                {{ theme }}
            </div>
            <div
                class="card-img-top"
                :style="[{'background-image': photoURL}, photoStyle]"
                style="background-size: cover; background-repeat: no-repeat; width: 300px; height: 300px;"
            >
            </div>
            <div class="card-body d-flex flex-column justify-content-center">
                <h5 class="card-title mb-0">
                    {{ this.name }}
                </h5>
                <p class="card-text mb-0">
                    {{note}}
                </p>
                <p class="card-text mb-0">
                    {{pronouns}}
                </p>  
                <p class="card-text mb-0">
                    {{cslogin}}
                </p>
                <p class="card-text mb-0">
                    {{hometown}}
                </p>
            </div>
        </div>
    `,
};

const staffGroup = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
        title: String,
        members: Array,
    },
    components: {
        'page-section-title': pageSectionTitle,
        'staff-card': staffCard,
    },
    template: `
        <section class="container-fluid d-flex flex-wrap flex-column my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              :text="title"
              :style-object="{'color': curPageThemeColor}"
              :text-style-object="{'border-bottom': 'solid thick'}"
            >
            </page-section-title>
            <div
              class="d-flex flex-row flex-wrap justify-content-center"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <staff-card
                  v-for="(member, index) of members"
                  :key="index"
                  v-bind="member"
                  :cur-page-theme-color="curPageThemeColor"
                >
                </staff-card>
            </div>
        </section>
    `,
};

Vue.component('page-content', {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'staff-group': staffGroup,
    },
    data: function () {
        return {
            titles: ['the professor', 'the HTAs', 'the UTAs', 'the STAs'],
            groups: [
                [
                    {
                        cslogin: 'kfisler',
                        name: 'Kathi Fisler',
                        personalPhotoURL: '',
                        themePhotoURL: '',
                        theme: '',
                        pronouns: '',
                        hometown: '',
                    },
                ],
                [
                    {
                        cslogin: 'yzhuang6',
                        name: 'Carrie Zhuang',
                        personalPhotoURL: '',
                        themePhotoURL: '',
                        theme: '',
                        pronouns: '',
                        hometown: '',
                    },
                    {
                        cslogin: 'evelasq2',
                        name: 'Evan Velasquez',
                        personalPhotoURL: 'content/staff/Evan-Velasquez-evelasq2.JPG',
                        themePhotoURL: 'content/staff/Evan-Velasquez-utensil.jpg',
                        theme: '',
                    },
                    {
                        cslogin: 'ngoodson',
                        name: 'Nastassia Goodson',
                        personalPhotoURL: '',
                        themePhotoURL: '',
                        theme: '',
                        pronouns: ''
                    },
                    {
                        cslogin: 'pdam',
                        name: 'Put Dam',
                        personalPhotoURL: 'content/staff/put-blurb.png',
                        themePhotoURL: 'content/staff/put-dam.jpg',
                        theme: '',
                        pronouns: 'he/him/his',
                        hometown: 'Worcester, MA'
                    },
                ],
                [

                ],
                [

                ],
            ],
        };
    },
    mounted: function () {
        const element = this.$el;
        document.addEventListener(
            'DOMContentLoaded',
            function () {
                element.scrollIntoView(true);
                window.scrollBy(0, -150);
            },
            false
        );
    },
    template: `
        <main>
            <staff-group
                v-for="(title, index) of titles"
                :key="index"
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
                :title="title"
                :members="groups[index]"
            >
            </staff-group>
        </main>
    `,
});

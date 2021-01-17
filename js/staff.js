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
                        personalPhotoURL: 'content/staff/kathi-blurb.png',
                        themePhotoURL: 'content/staff/default.png',
                        theme: '',
                        pronouns: 'she/her/hers',
                        hometown: 'Staten Island, NY',
                    },
                ],
                [
                    {
                        cslogin: 'yzhuang6',
                        name: 'Carrie Zhuang',
                        personalPhotoURL: 'content/staff/carrie-blurb.png',
                        themePhotoURL: 'content/staff/default.png',
                        theme: '',
                        pronouns: 'she/her/hers',
                        hometown: 'Shanghai',
                    },
                    {
                        cslogin: 'evelasq2',
                        name: 'Evan Velasquez',
                        personalPhotoURL: 'content/staff/evan-blurb.JPG',
                        themePhotoURL: 'content/staff/Evan-Velasquez-evelasq2.JPG',
                        theme: '',
                        pronouns: 'he/him',
                        hometown: 'Lexington, VA',
                    },
                    {
                        cslogin: 'ngoodson',
                        name: 'Nastassia Goodson',
                        personalPhotoURL: 'content/staff/nastassia-blurb.png',
                        themePhotoURL: 'content/staff/nastassia-goodson.png',
                        theme: '',
                        pronouns: 'she/her/hers',
                        hometown: 'Portland, OR',
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
                    {
                        cslogin: 'achang57',
                        name: 'Adrian Chang',
                        personalPhotoURL: 'content/staff/adrian-blurb.png',
                        themePhotoURL: 'content/staff/adrian-chang.jpg',
                        theme: '',
                        pronouns: 'he/him/his',
                        hometown: 'Carlsbad, CA'
                    },
                    {
                        cslogin: 'agu10',
                        name: 'Alan Gu',
                        personalPhotoURL: 'content/staff/alan-blurb.png',
                        themePhotoURL: 'content/staff/alan-gu.jpg',
                        theme: '',
                        pronouns: 'he/him',
                        hometown: 'Millwood, NY'
                    },
                    {
                        cslogin: 'yguo62',
                        name: 'Alex Guo',
                        personalPhotoURL: 'content/staff/alex-blurb.png',
                        themePhotoURL: 'content/staff/default.png',
                        theme: '',
                        pronouns: 'he/him',
                        hometown: 'Buffalo Grove, IL'
                    },
                    {
                        cslogin: 'acimack',
                        name: 'Annie Cimack',
                        personalPhotoURL: 'content/staff/annie-blurb.png',
                        themePhotoURL: 'content/staff/annie-cimack.jpg',
                        theme: '',
                        pronouns: 'she/her/hers',
                        hometown: 'Mt. Prospect, IL'
                    },
                    {
                        cslogin: 'achang65',
                        name: '',
                        personalPhotoURL: 'content/staff/default.png',
                        themePhotoURL: 'content/staff/default.png',
                        theme: '',
                        pronouns: '',
                        hometown: ''
                    },
                    {
                        cslogin: 'cohwille',
                        name: 'Clark Oh-Willeke',
                        personalPhotoURL: 'content/staff/clark-blurb.png',
                        themePhotoURL: 'content/staff/default.png',
                        theme: '',
                        pronouns: 'he/him',
                        hometown: 'Denver, CO'
                    },
                    {
                        cslogin: 'elerena',
                        name: 'Erick Lerena',
                        personalPhotoURL: 'content/staff/erick-blurb.png',
                        themePhotoURL: 'content/staff/default.png',
                        theme: '',
                        pronouns: 'he/him/his',
                        hometown: 'Boyle Heights'
                    },
                    {
                        cslogin: 'emullen2',
                        name: 'Ethan Mullen',
                        personalPhotoURL: 'content/staff/ethan-blurb.png',
                        themePhotoURL: 'content/staff/ethan-mullen.jpg',
                        theme: '',
                        pronouns: 'he/him/his',
                        hometown: 'Atlanta'
                    },
                    {
                        cslogin: 'fkierzen',
                        name: 'Filip Kierzenka',
                        personalPhotoURL: 'content/staff/filip-blurb.png',
                        themePhotoURL: 'content/staff/filip-kierzenka.jpeg',
                        theme: '',
                        pronouns: 'he/him/his',
                        hometown: 'Framingham, MA'
                    },
                    {
                        cslogin: 'glee73',
                        name: 'Grace Lee',
                        personalPhotoURL: 'content/staff/grace-blurb.png',
                        themePhotoURL: 'content/staff/grace-lee.jpg',
                        theme: '',
                        pronouns: 'she/her',
                        hometown: 'Dallas, TX'
                    },
                    {
                        cslogin: 'hvenkata',
                        name: 'Harshini Venkatachalam',
                        personalPhotoURL: 'content/staff/harshini-blurb.png',
                        themePhotoURL: 'content/staff/harshini-venkatachalam.jpg',
                        theme: '',
                        pronouns: 'she/her',
                        hometown: 'Tempe, Arizona'
                    },
                    {
                        cslogin: 'hzonnenb',
                        name: 'Hunter Zonnenberg',
                        personalPhotoURL: 'content/staff/hunter-blurb.png',
                        themePhotoURL: 'content/staff/hunter-zonnenberg.jpeg',
                        theme: '',
                        pronouns: 'he/him',
                        hometown: 'Marblehead, MA'
                    },
                    {
                        cslogin: 'ihiltonv',
                        name: 'Isaac Hilton-VanOsdall',
                        personalPhotoURL: 'content/staff/isaac-blurb.png',
                        themePhotoURL: 'content/staff/isaac-hilton-vanosdall.jpeg',
                        theme: '',
                        pronouns: 'he/him/his',
                        hometown: 'Barre, VT'
                    },
                    {
                        cslogin: 'jriley5',
                        name: 'Jack Riley',
                        personalPhotoURL: 'content/staff/jack-blurb.png',
                        themePhotoURL: 'content/staff/jack-riley.jpeg',
                        theme: '',
                        pronouns: 'he/him',
                        hometown: 'LA'
                    },
                    {
                        cslogin: 'qhan3',
                        name: 'Joe Han',
                        personalPhotoURL: 'content/staff/joe-blurb.png',
                        themePhotoURL: 'content/staff/joe-han.jpg',
                        theme: '',
                        pronouns: 'he/him/his',
                        hometown: 'Madison, MS'
                    },
                    {
                        cslogin: 'ldo6',
                        name: 'Long Do',
                        personalPhotoURL: 'content/staff/long-blurb.png',
                        themePhotoURL: 'content/staff/default.png',
                        theme: '',
                        pronouns: 'him/his',
                        hometown: 'Hanoi, Vietnam'
                    },
                    {
                        cslogin: 'mthain',
                        name: 'Morgann Thain',
                        personalPhotoURL: 'content/staff/morgann-blurb.png',
                        themePhotoURL: 'content/staff/morgann-thain.jpg',
                        theme: '',
                        pronouns: 'he/his',
                        hometown: 'Abington/Philly'
                    },
                    {
                        cslogin: 'ncancell',
                        name: 'Nick Cancellaro',
                        personalPhotoURL: 'content/staff/nick-blurb.png',
                        themePhotoURL: 'content/staff/nick-cancellaro.jpeg',
                        theme: '',
                        pronouns: 'he/him',
                        hometown: 'Hebron, Connecticut'
                    },
                    {
                        cslogin: 'pmontei1',
                        name: '',
                        personalPhotoURL: 'content/staff/default.png',
                        themePhotoURL: 'content/staff/default.png',
                        theme: '',
                        pronouns: '',
                        hometown: ''
                    },
                    {
                        cslogin: 'pzubiago',
                        name: 'Peter Zubiago',
                        personalPhotoURL: 'content/staff/peter-blurb.png',
                        themePhotoURL: 'content/staff/peter-zubiago.png',
                        theme: '',
                        pronouns: 'he/him/his',
                        hometown: 'East Greenwich, Rhode Island'
                    },
                    {
                        cslogin: 'rbush',
                        name: 'Robert Bush',
                        personalPhotoURL: 'content/staff/robert-blurb.png',
                        themePhotoURL: 'content/staff/robert-bush.jpg',
                        theme: '',
                        pronouns: 'he/him/his',
                        hometown: 'West Bloomfield, Michigan'
                    },
                    {
                        cslogin: 'vpondtor',
                        name: 'Virak Pond-Tor',
                        personalPhotoURL: 'content/staff/virak-blurb.png',
                        themePhotoURL: 'content/staff/virak-pond-tor.jpg',
                        theme: '',
                        pronouns: 'he/him/his',
                        hometown: 'Cranston, RI'
                    },
                    {
                        cslogin: 'zzhu42',
                        name: 'Zachary Zhu',
                        personalPhotoURL: 'content/staff/zach-blurb.png',
                        themePhotoURL: 'content/staff/default.png',
                        theme: '',
                        pronouns: 'he/him/his',
                        hometown: 'Weston, MA'
                    },
                    {
                        cslogin: 'zzhou65',
                        name: '',
                        personalPhotoURL: 'content/staff/default.png',
                        themePhotoURL: 'content/staff/default.png',
                        theme: '',
                        pronouns: '',
                        hometown: ''
                    },
                ],
                [
                    {
                        cslogin: 'gdahl',
                        name: '',
                        personalPhotoURL: 'content/staff/default.png',
                        themePhotoURL: 'content/staff/default.png',
                        theme: '',
                        pronouns: '',
                        hometown: ''
                    },
                    {
                        cslogin: 'skothar7',
                        name: '',
                        personalPhotoURL: 'content/staff/default.png',
                        themePhotoURL: 'content/staff/default.png',
                        theme: '',
                        pronouns: '',
                        hometown: ''
                    },
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

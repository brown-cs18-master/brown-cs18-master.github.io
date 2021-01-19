import pageSectionTitle from './page-section.js';

const staffCard = {
    props: {
        cslogin: String,
        curPageThemeColor: String,
        name: String,
        note: String,
        pronouns: String,
        hometown: String,
        blurb: String,
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
          style="max-width:302px"
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
            <div style="width:300px">
                <img
                    :src="themePhotoURL"
                    class="card-img-top"
                    style="display: block; width: 100%; height: auto;"
                    :alt="name"
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
                </br>
                <p class="card-text mb-0">
                    {{blurb}}
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
                        themePhotoURL: 'content/staff/kathi.jpg',
                        theme: '',
                        pronouns: 'she/her/hers',
                        hometown: 'Staten Island, NY',
                        blurb: 'I\'ve been teaching CS for 25 years, after a rocky start in my own CS classes. I love jigsaw puzzles, puns, and cooking(and eating!) vegetarian food from around the world. Ice cream is best with rainbow sprinkles.'
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
                        blurb: 'Hi! I\'m a senior studying apma-cs. I started playing guitar since quarantine and have been obsessed with animal crossing lately!'
                    },
                    {
                        cslogin: 'evelasq2',
                        name: 'Evan Velasquez',
                        personalPhotoURL: 'content/staff/evan-blurb.JPG',
                        themePhotoURL: 'content/staff/Evan-Velasquez-evelasq2.JPG',
                        theme: '',
                        pronouns: 'he/him',
                        hometown: 'Lexington, VA',
                        blurb: 'Hi! I\'m a senior studying CS. In my free time I like playing board games and reading very generic fantasy books, all titled "The [noun] of [noun]".'
                    },
                    {
                        cslogin: 'ngoodson',
                        name: 'Nastassia Goodson',
                        personalPhotoURL: 'content/staff/nastassia-blurb.png',
                        themePhotoURL: 'content/staff/nastassia-goodson.jpg',
                        theme: '',
                        pronouns: 'she/her/hers',
                        hometown: 'Portland, OR',
                        blurb: 'Hi! I\'m a junior studying CS.  Outside of class, I like to ballroom dance, ski, and spend time outside!'
                    },
                    {
                        cslogin: 'pdam',
                        name: 'Put Dam',
                        personalPhotoURL: 'content/staff/put-blurb.png',
                        themePhotoURL: 'content/staff/put-dam.jpg',
                        theme: '',
                        pronouns: 'he/him/his',
                        hometown: 'Worcester, MA',
                        blurb: ' Hi! I\m a junior studying CS.I\'m also a part of Brown Tang Soo Do. Outside of class, I love watching the Pats and all things American football, and playing Smash Bros!'
                    },
                ],
                [
                    {
                        cslogin: 'achang57',
                        name: 'Adrian Chang',
                        personalPhotoURL: 'content/staff/adrian-blurb.png',
                        themePhotoURL: 'content/staff/adrian-chang.png',
                        theme: '',
                        pronouns: 'he/him/his',
                        hometown: 'Carlsbad, CA',
                        blurb: 'Hi, I\'m a sophomore studying CS. I like to play WoW and League outside of class. '
                    },
                    {
                        cslogin: 'agu10',
                        name: 'Alan Gu',
                        personalPhotoURL: 'content/staff/alan-blurb.png',
                        themePhotoURL: 'content/staff/alan-gu.JPG',
                        theme: '',
                        pronouns: 'he/him',
                        hometown: 'Millwood, NY',
                        blurb: 'Hi, I\'m Alan. Come to my hours.'
                    },
                    {
                        cslogin: 'yguo62',
                        name: 'Alex Guo',
                        personalPhotoURL: 'content/staff/alex-blurb.png',
                        themePhotoURL: 'content/staff/default.png',
                        theme: '',
                        pronouns: 'he/him',
                        hometown: 'Buffalo Grove, IL',
                        blurb: 'Hey! I\'m a sophomore from the greater Chicago area studying CS and dabbling in premed. In normal times, I enjoy playing the piano and working out at the Nelson.'
                    },
                    {
                        cslogin: 'acimack',
                        name: 'Annie Cimack',
                        personalPhotoURL: 'content/staff/annie-blurb.png',
                        themePhotoURL: 'content/staff/annie-cimack.jpg',
                        theme: '',
                        pronouns: 'she/her/hers',
                        hometown: 'Mt. Prospect, IL',
                        blurb: 'Hey!! I\'m a sophomore, and when I\'m not doing CS things, I write for the Brown Noser and play alto sax in the Brown Band.In my free time, I like watching old movies, and I\'m trying to learn embroidery! '
                    },
                    {
                        cslogin: 'achang65',
                        name: '',
                        personalPhotoURL: 'content/staff/default.png',
                        themePhotoURL: 'content/staff/default.png',
                        theme: '',
                        pronouns: '',
                        hometown: '',
                        blurb: ''
                    },
                    {
                        cslogin: 'cohwille',
                        name: 'Clark Oh-Willeke',
                        personalPhotoURL: 'content/staff/clark-blurb.png',
                        themePhotoURL: 'content/staff/clark.JPG',
                        theme: '',
                        pronouns: 'he/him',
                        hometown: 'Denver, CO',
                        blurb: 'Hi, I\'m from Denver, Colorado and I\'m a sophomore studying CS. I enjoy making music and playing video games. '
                    },
                    {
                        cslogin: 'elerena',
                        name: 'Erick Lerena',
                        personalPhotoURL: 'content/staff/erick-blurb.png',
                        themePhotoURL: 'content/staff/default.png',
                        theme: '',
                        pronouns: 'he/him/his',
                        hometown: 'Boyle Heights',
                        blurb: 'Yo. I\'m a sophomore studying CS. I live in a small city near the beach called Los Angeles if you\'ve ever heard of it. I love reading manga, manhwa, light novels, watching anime and stand- up comedy(Dave Chappelle is the GOAT). I look forward to being your TA this semester!'
                    },
                    {
                        cslogin: 'emullen2',
                        name: 'Ethan Mullen',
                        personalPhotoURL: 'content/staff/ethan-blurb.png',
                        themePhotoURL: 'content/staff/ethan-mullen.JPG',
                        theme: '',
                        pronouns: 'he/him/his',
                        hometown: 'Atlanta',
                        blurb: 'Hey! I\'m a sophomore concentrating in Computer Science and Theatre Arts. I love theatre, fairy lights, fake plants, and graphic design. '
                    },
                    {
                        cslogin: 'fkierzen',
                        name: 'Filip Kierzenka',
                        personalPhotoURL: 'content/staff/filip-blurb.png',
                        themePhotoURL: 'content/staff/filip-kierzenka.jpeg',
                        theme: '',
                        pronouns: 'he/him/his',
                        hometown: 'Framingham, MA',
                        blurb: 'Hi! I\'m a sophomore studying APMA+CS but I also like philosophy and art. I\'m part of the Club Hockey Team and the Brown Political Review.In my free time I like exercising, listening to music, and reinventing the wheel.'
                    },
                    {
                        cslogin: 'glee73',
                        name: 'Grace Lee',
                        personalPhotoURL: 'content/staff/grace-blurb.png',
                        themePhotoURL: 'content/staff/grace-lee.jpg',
                        theme: '',
                        pronouns: 'she/her',
                        hometown: 'Dallas, TX',
                        blurb: 'Hey! I\'m a sophomore studying CS and Econ. My favorite quarantine pastimes have been collecting teas, binging The Queen\'s Gambit, and making new playlists.'
                    },
                    {
                        cslogin: 'hvenkata',
                        name: 'Harshini Venkatachalam',
                        personalPhotoURL: 'content/staff/harshini-blurb.png',
                        themePhotoURL: 'content/staff/harshini-venkatachalam.jpg',
                        theme: '',
                        pronouns: 'she/her',
                        hometown: 'Tempe, Arizona',
                        blurb: 'hi! I\’m a sophomore studying cs and visa (hopefully!) I enjoy watching movies, growing plants, and meeting new people! '
                    },
                    {
                        cslogin: 'hzonnenb',
                        name: 'Hunter Zonnenberg',
                        personalPhotoURL: 'content/staff/hunter-blurb.png',
                        themePhotoURL: 'content/staff/hunter-zonnenberg.jpeg',
                        theme: '',
                        pronouns: 'he/him',
                        hometown: 'Marblehead, MA',
                        blurb: 'I\'m a Sophomore studying APMA-CS and Public Policy. I\'m super psyched to be TAing this semester and am looking forward to getting to know all of you! Outside of class, I\'m on the sailing team and enjoy watching F1.'
                    },
                    {
                        cslogin: 'ihiltonv',
                        name: 'Isaac Hilton-VanOsdall',
                        personalPhotoURL: 'content/staff/isaac-blurb.png',
                        themePhotoURL: 'content/staff/isaac-hilton-vanosdall.jpeg',
                        theme: '',
                        pronouns: 'he/him/his',
                        hometown: 'Barre, VT',
                        blurb: 'I\'m from Barre, Vermont and I\'m a Computer Science Concentrator focusing on AI and software development. I play a lot of music, mostly classical and jazz. I love being outdoors and spend my free time rock climbing, mountain biking and skiing!'
                    },
                    {
                        cslogin: 'jriley5',
                        name: 'Jack Riley',
                        personalPhotoURL: 'content/staff/jack-blurb.png',
                        themePhotoURL: 'content/staff/jack-riley.jpeg',
                        theme: '',
                        pronouns: 'he/him',
                        hometown: 'LA',
                        blurb: 'Hey all, I\'m Jack. I\'m a sophomore studying CS and music, and a part of the Brown Organization of Producers and Tunes for Change. In my free time, I love to run, cycle, and make music. '
                    },
                    {
                        cslogin: 'qhan3',
                        name: 'Joe Han',
                        personalPhotoURL: 'content/staff/joe-blurb.png',
                        themePhotoURL: 'content/staff/joe-han.jpg',
                        theme: '',
                        pronouns: 'he/him/his',
                        hometown: 'Madison, MS',
                        blurb: 'Hello! I\'m a junior studying CS. Outside of class, I\'m a chess coach and chess programmer. In addition, I enjoy lockpicking and running (in no particular order). '
                    },
                    {
                        cslogin: 'ldo6',
                        name: 'Long Do',
                        personalPhotoURL: 'content/staff/long-blurb.png',
                        themePhotoURL: 'content/staff/long-do.JPG',
                        theme: '',
                        pronouns: 'him/his',
                        hometown: 'Hanoi, Vietnam',
                        blurb: 'Hey you, I\'m a 3rd year studying CS and Philosophy. I like post apocalyptic movies and time travel books. On a nice day and with health conditions allowing, you can often find me on the main green playing spikeball. I\'ve recently become very invested in fantasy basketball. I look forward to meeting allow of you!'
                    },
                    {
                        cslogin: 'mthain',
                        name: 'Morgann Thain',
                        personalPhotoURL: 'content/staff/morgann-blurb.png',
                        themePhotoURL: 'content/staff/morgann-thain.jpg',
                        theme: '',
                        pronouns: 'he/his',
                        hometown: 'Abington/Philly',
                        blurb: 'Hi :) I\'m a junior studying CS. I play ultimate frisbee and am doing data analysis for it, I like to take philosophy and math classes, and I play rocket league and watch netflix for fun. '
                    },
                    {
                        cslogin: 'ncancell',
                        name: 'Nick Cancellaro',
                        personalPhotoURL: 'content/staff/nick-blurb.png',
                        themePhotoURL: 'content/staff/nick-cancellaro.jpeg',
                        theme: '',
                        pronouns: 'he/him',
                        hometown: 'Hebron, Connecticut',
                        blurb: 'Hello! I am a sophomore studying computer science. Outside of class I play for the orchestra and love listening to new music (recommendations are always appreciated).'
                    },
                    {
                        cslogin: 'pmontei1',
                        name: '',
                        personalPhotoURL: 'content/staff/default.png',
                        themePhotoURL: 'content/staff/default.png',
                        theme: '',
                        pronouns: '',
                        hometown: '',
                        blurb: ''
                    },
                    {
                        cslogin: 'pzubiago',
                        name: 'Peter Zubiago',
                        personalPhotoURL: 'content/staff/peter-blurb.png',
                        themePhotoURL: 'content/staff/peter-zubiago.png',
                        theme: '',
                        pronouns: 'he/him/his',
                        hometown: 'East Greenwich, RI',
                        blurb: 'Hello! I\'m a junior studying English and Computer Science. When I\'m not reading books or writing code, you will probably find me swimming, watching TV, or making bagels!'
                    },
                    {
                        cslogin: 'rbush',
                        name: 'Robert Bush',
                        personalPhotoURL: 'content/staff/robert-blurb.png',
                        themePhotoURL: 'content/staff/robert-bush.jpg',
                        theme: '',
                        pronouns: 'he/him/his',
                        hometown: 'West Bloomfield, MI',
                        blurb: 'Hello! I\'m a sophomore studying CS and English. I\'m apart of the Production Workshop and love all things theater. I look forward to meeting all of you!'
                    },
                    {
                        cslogin: 'vpondtor',
                        name: 'Virak Pond-Tor',
                        personalPhotoURL: 'content/staff/virak-blurb.png',
                        themePhotoURL: 'content/staff/virak-pond-tor.jpg',
                        theme: '',
                        pronouns: 'he/him/his',
                        hometown: 'Cranston, RI',
                        blurb: 'Hey! I\'m a sophomore from Rhode Island studying CS. In my free time I like to play volleyball, skateboard, and watch anime.'
                    },
                    {
                        cslogin: 'zzhu42',
                        name: 'Zachary Zhu',
                        personalPhotoURL: 'content/staff/zach-blurb.png',
                        themePhotoURL: 'content/staff/default.png',
                        theme: '',
                        pronouns: 'he/him/his',
                        hometown: 'Weston, MA',
                        blurb: 'Hello! My name is Zach, and I\'m a sophomore studying computer science from Weston, MA. Outside of class, I enjoy walks, hiking, and games of any kind.'
                    },
                    {
                        cslogin: 'zzhou65',
                        name: '',
                        personalPhotoURL: 'content/staff/default.png',
                        themePhotoURL: 'content/staff/default.png',
                        theme: '',
                        pronouns: '',
                        hometown: '',
                        blurb: ''
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
                        hometown: '',
                        blurb: ''
                    },
                    {
                        cslogin: 'skothar7',
                        name: '',
                        personalPhotoURL: 'content/staff/default.png',
                        themePhotoURL: 'content/staff/default.png',
                        theme: '',
                        pronouns: '',
                        hometown: '',
                        blurb: ''
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

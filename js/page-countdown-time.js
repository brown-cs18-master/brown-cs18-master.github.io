import pageClickCopy from './page-click-copy.js';


const pageCountdownTime = {
    props: {
        time: Object,
        showCountdownStatus: {
            type: Boolean,
            default: true
        },
        now: Object,
    },
    components: {
        'page-click-copy': pageClickCopy,
    },
    computed: {
        displayedTime: function() {
            return this.time.format('MMM Do, LT');
        },
        timeFromNow: function() {
            return this.time.diff(this.now);
        },
        timeFromNowDisplayed: function() {
            return this.time.from(this.now);
        },
        statusClasses: function() {
            if (this.timeFromNow < 0) {
                return ['fas', 'fa-calendar-check', 'fa-lg'];
            }
            /* not due yet */
            if (this.timeFromNow < 7200000 /* moment.duration(2, 'h').asMilliseconds() */) {
                return ['fas', 'fa-exclamation', 'fa-lg'];
            }

            if (this.timeFromNow < 86400000 /* moment.duration(1, 'd').asMilliseconds() */) {
                return ['fas', 'fa-calendar-day', 'fa-lg'];
            }

            if (this.timeFromNow < 604800000 /* moment.duration(1, 'w').asMilliseconds() */) {
                return ['fas', 'fa-calendar-week', 'fa-lg'];
            }

            return ['fas', 'fa-calendar', 'fa-lg'];
        },
    },
    template: `
        <span>
            <page-click-copy :text="displayedTime">
            </page-click-copy>
            <span class="ml-1">(</span>
            <i :class="statusClasses"></i>
            <span class="ml-1 text-capitalize font-weight-light">{{timeFromNowDisplayed}}</span>
            <span>)</span>
        </span>
    `
};


export default pageCountdownTime;

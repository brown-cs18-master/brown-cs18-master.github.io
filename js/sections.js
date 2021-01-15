import pageClickCopy from './page-click-copy.js';
import pageCountdownTime from './page-countdown-time.js';
import pageLink from './page-link.js';
import pageLinks from './page-links.js';
import pageTable from './page-table.js';
import pageSectionTitle from './page-section.js';

const courseSection = {
    props: {
        index: Number,
        name: String,
        date: String,
        tas: Array,
        material: Array,
        materialURL: Array,
        videoURL: String,
        now: Object,
    },
    components: {
        'page-click-copy': pageClickCopy,
        'page-countdown-time': pageCountdownTime,
        'page-link': pageLink,
        'page-links': pageLinks,
    },
    data: function() {
        return {
            outMoment: this.parseTime(this.date),
        };
    },
    computed: {
        taURLs: function() {
            return this.tas.map(this.getTAHref);
        },
    },
    methods: {
        parseTime: function(timeStr) {
            let timeObj = moment(timeStr, ['MM/DD', 'YYYY/MM/DD'], true);
            if (timeObj.isValid()) {
                timeObj.hour(18);
                timeObj.minute(0);
            } else {
                timeObj = moment(timeStr, ['MM/DD HH:mm', 'MM/DD hh:mm a', 'MM/DD hh a', 'YYYY/MM/DD HH:mm', 'YYYY/MM/DD hh:mm a', 'YYYY/MM/DD hh a']);
            }
            return timeObj;
        },
        getTAHref: function(ta) {
            return `staff.html#${ta.toLowerCase().replace(' ', '-')}`;
        },
    },
    template: `
        <tr>
            <th scope="row">
                <span>
                    Section {{index}}:
                </span>
                <page-click-copy
                  :text="name"
                >
                </page-click-copy>
            </th>
            <td>
                <page-countdown-time
                  name="deliver"
                  :time="outMoment"
                  :now="now"
                >
                </page-countdown-time>
            </td>
            <td>
                <page-links
                  :names="tas"
                  :urls="taURLs"
                >
                </page-links>
            </td>
            <td>
                <page-links
                  :names="material"
                  :urls="materialURL"
                >
                </page-links>
            </td>
            <td>
                <page-link
                  v-if="videoURL"
                  text="video"
                  :href="videoURL"
                >
                </page-link>
            </td>
        </tr>
    `,
};


Vue.component('page-content', {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'course-section': courseSection,
        'page-table': pageTable,
        'page-section-title': pageSectionTitle,
    },
    data: function() {
        return {
            sections: [
                // {
                //     name: '',
                //     date: '09/09',
                //     tas: [],
                //     material: [],
                //     materialURL: [],
                //     videoURL: ''
                // },
            ],
            now: moment(),
            tableheads: ['section #', 'date', 'TAs', 'material', 'video'],
        };
    },
    created: function() {
        setInterval(() => this.now = moment(), 1000);
    },
    mounted: function() {
        const element = this.$el;
        document.addEventListener('DOMContentLoaded', function() {
            element.scrollIntoView(true);
            window.scrollBy(0, -150);
        }, false);
    },
    template: `
        <main>
            <section class="container-fluid d-flex flex-wrap flex-column my-5 px-0 px-sm-5">
                <page-section-title
                  :icon-classes="curPageIconClasses"
                  text="course sections"
                  :style-object="{'color': curPageThemeColor}"
                  :text-style-object="{'border-bottom': 'solid thick'}"
                ></page-section-title>
                <div
                  class="mx-4 mx-sm-5 px-0 px-lg-5"
                  :style="{ color: curPageThemeColor}"
                >
                    <page-table
                      :tableheads="tableheads"
                      tableheadBackground="rgba(111, 82, 142, 0.2)"
                      :style="{ color: curPageThemeColor}"
                    >
                        <course-section
                          v-for="(section, index) of sections"
                          :key="index"
                          v-bind="section"
                          :index="index + 1"
                          :now="now"
                        >
                        </course-section>
                    </page-table>
                </div>
            </section>
        </main>
    `
});

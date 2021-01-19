import pageClickCopy from './page-click-copy.js';
import pageCountdownTime from './page-countdown-time.js';
import pageLinks from './page-links.js';
import pageTable from './page-table.js';
import pageSectionTitle from './page-section.js';

const courseLecture = {
    props: {
        index: Number,
        name: String,
        date: String,
        noteNames: Array,
        noteURLs: Array,
        recordingNames: Array,
        recordingURLs: Array,
        practiceNames: Array,
        practiceURLs: Array,
        linksNames: Array,
        linksURLs: Array,
        now: Object,
    },
    components: {
        'page-click-copy': pageClickCopy,
        'page-countdown-time': pageCountdownTime,
        'page-links': pageLinks,
    },
    data: function () {
        return {
            outMoment: this.parseTime(this.date),
        };
    },
    methods: {
        parseTime: function (timeStr) {
            let timeObj = moment(timeStr, ['MM/DD', 'YYYY/MM/DD'], true);
            if (timeObj.isValid()) {
                timeObj.hour(14);
                timeObj.minute(30);
            } else {
                timeObj = moment(timeStr, [
                    'MM/DD HH:mm',
                    'MM/DD hh:mm a',
                    'MM/DD hh a',
                    'YYYY/MM/DD HH:mm',
                    'YYYY/MM/DD hh:mm a',
                    'YYYY/MM/DD hh a',
                ]);
            }
            return timeObj;
        },
    },
    template: `
        <tr>
            <th scope="row">
                <span>
                    {{index}}:
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
                  :names="noteNames"
                  :urls="noteURLs"
                >
                </page-links>
            </td>
            <td>
                <page-links
                  :names="recordingNames"
                  :urls="recordingURLs"
                >
                </page-links>
            </td>
            <td>
                <page-links
                  :names="practiceNames"
                  :urls="practiceURLs"
                >
                </page-links>
            </td>
            <td>
                <page-links
                  :names="linksNames"
                  :urls="linksURLs"
                >
                </page-links>
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
        'course-lecture': courseLecture,
        'page-table': pageTable,
        'page-section-title': pageSectionTitle,
    },
    data: function () {
        return {
            lectures: [
                {
                    name: 'Course Overview (in main lecture); Python basics',
                    date: '01/20',
                    noteNames: [],
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: [],
                    linksURLs: []
                },
                {
                    name: 'Writing and Testing Functions',
                    date: '01/22',
                    noteNames: [],
                    noteURLs: [

                    ],
                    recordingNames: [],
                    recordingURLs: [],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: [],
                    linksURLs: []
                },
                {
                    name: 'Working with Map and Filter',
                    date: '01/25',
                    noteNames: [],
                    noteURLs: [

                    ],
                    recordingNames: [],
                    recordingURLs: [],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: [],
                    linksURLs: []
                },
                {
                    name: 'Defining and Traversing Recursive Datatypes',
                    date: '01/27',
                    noteNames: [],
                    noteURLs: [

                    ],
                    recordingNames: [],
                    recordingURLs: [],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: [],
                    linksURLs: []
                },
                {
                    name: 'Implement Lists (Functionally) -- Attend main CS18 lecture',
                    date: '01/29',
                    noteNames: [],
                    noteURLs: [

                    ],
                    recordingNames: [],
                    recordingURLs: [],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: [],
                    linksURLs: []
                },
                {
                    name: 'Justifying Program Runtimes',
                    date: '02/01',
                    noteNames: [],
                    noteURLs: [

                    ],
                    recordingNames: [],
                    recordingURLs: [],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: [],
                    linksURLs: []
                },
                {
                    name: 'From here, attend regular CS18 lectures',
                    date: '02/03',
                    noteNames: [],
                    noteURLs: [

                    ],
                    recordingNames: [],
                    recordingURLs: [],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: [],
                    linksURLs: []
                },

            ],
            now: moment(),
            tableheads: [
                'lecture #',
                'date',
                'notes',
                'recording',
                'practice',
                'links'
            ],
        };
    },
    created: function () {
        setInterval(() => (this.now = moment()), 1000);
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
            <section class="container-fluid d-flex flex-wrap flex-column my-5 px-0 px-sm-5">
                <page-section-title
                  :icon-classes="curPageIconClasses"
                  text="CS15 -> CS18 Migration Module"
                  :style-object="{'color': curPageThemeColor}"
                  :text-style-object="{'border-bottom': 'solid thick'}"
                ></page-section-title>
                <div
                  class="mx-4 mx-sm-5 mb-4 mb-sm-5"
                  :style="{ color: curPageThemeColor}">
                    <p>This page is for students coming into CS18 from CS15. CS18 spends much of the first two weeks introducing Java. During this
                    time, students from CS15 will work on different content that covers material from 111/112/17/19 that CS18 assumes.</p>
                    
                    <p>Broadly speaking, CS15 students will be practicing using recursion to traverse recursively-defined datatypes, programming with
                    higher-order functions (e.g., maps and filters), programming without assignment statements, and testing code without print statements.
                    You will complete this module in Python (it's easier for us to show you some of this content, like higher-order functions, in Python than
                    in Java, even if you don't already know Python). If you haven't used Python, we recommend using <a href="https://repl.it"><b>repl.it</b></a> as a 
                    no-frills online programming environment (you can use whatever tool you wish, though, as long as you work in Python version 3).</p>
                    
                    <p>The essence of the module lies in the required problem sets [LINK]. Your goal is to complete (and submit your solutions to) those problems
                    by the time the second homework comes in for the mainstream CS18 track (February 3rd). Starting with homework 3, everyone will complete the
                    same assignments for the rest of the course.</p>
                    
                    <p>During the first week of class, we will identify a time slot for overview lectures on this content (at a different time than
                    the normal 18 lectures). You are welcome to attend these lectures, or to just work through the material on your own (though if you
                    come to the lectures, you'll give Kathi a chance to get to know you in a smaller setting). The resources below will guide you
                    through the core content.</p>
                    
                    <p>The following table recommends a pacing guide for learning content towards your assignments.</p>
              </div>
                <div
                  class="mx-4 mx-sm-5 px-0 px-lg-5"
                  :style="{ color: curPageThemeColor}"
                >
                    <page-table
                      :tableheads="tableheads"
                      tableheadBackground="rgba(111, 82, 142, 0.2)"
                      :style="{ color: curPageThemeColor}"
                    >
                        <course-lecture
                          v-for="(lecture, index) of lectures"
                          :key="index"
                          v-bind="lecture"
                          :index="index + 1"
                          :now="now"
                        >
                        </course-lecture>
                    </page-table>
                </div>
            </section>
        </main>
    `,
});

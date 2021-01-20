import pageClickCopy from './page-click-copy.js';
import pageCountdownTime from './page-countdown-time.js';
import dateTimeNoCountdown from './date-no-countdown.js';
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
        'page-countdown-time': dateTimeNoCountdown,
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
                <page-countdown-time
                name="deliver"
                :time="outMoment"
                :now="now"
                >
                </page-countdown-time>
            </th>
            <td>
                <span>
                    {{index}}:
                </span>
                <page-click-copy
                  :text="name"
                >
                </page-click-copy>
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
                    noteNames: ["Animals (Java)", "Animals (Python)"],
                    noteURLs: ["../content/from15/IAnimal.java", "../content/from15/animals.py"],
                    recordingNames: [],
                    recordingURLs: [],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: ["Background Survey", "Hwk 0 (due 1/29)", "When2Meet"],
                    linksURLs: ["https://docs.google.com/forms/d/e/1FAIpQLSeeylnFpK4yO5uZq_itfvelDpvo0JaMZdKEv-AX4q2P8nAb3w/viewform?usp=sf_link", "https://hackmd.io/@cs18-spring-2021/SyyvWxBJu","https://www.when2meet.com/?10768976-5BcqS"]
                },
                {
                    name: 'Writing and Testing Recursive Functions',
                    date: '01/22',
                    noteNames: ["notes"],
                    noteURLs: ["../content/from15/recursive_lists.py"],
                    recordingNames: [],
                    recordingURLs: [],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: ["Hwk 1: Functional Programming (due 1/29)"],
                    linksURLs: ["https://hackmd.io/@cs18-spring-2021/SJ9sCt1yd"]
                },
                {
                    name: 'Working with Map and Filter',
                    date: '01/25',
                    noteNames: ["Using map and filter"],
                    noteURLs: ["https://towardsdatascience.com/using-map-and-filter-in-python-ffdfa8b97520"],
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
                    noteURLs: [],
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
                    noteURLs: [],
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
                    noteURLs: [],
                    recordingNames: [],
                    recordingURLs: [],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: [],
                    linksURLs: []
                },
                {
                    name: 'From here, rejoin regular CS18 lectures',
                    date: '02/03',
                    noteNames: [],
                    noteURLs: [],
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
                'date',
                'topic',
                'readings',
                'recording',
                'practice',
                'assignment'
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
                    time, students from CS15 will work on different content that covers material from 111/112/17/19 that CS18 assumes. (If you are not
comfortable using interfaces as types or with the difference between interfaces and abstract classes, however, you will probably want to check the notes from lecture 3 of the main track.)</p>
                    
                    <p>Broadly speaking, CS15 students will be practicing using recursion to traverse recursively-defined datatypes, programming with
                    higher-order functions (e.g., maps and filters), programming without assignment statements, and testing code without print statements.
                    You will complete this module in Python (it's easier for us to show you some of this content, like higher-order functions, in Python than
                    in Java, even if you don't already know Python). You may use any Python tool that you wish (as long as you are in Python version 3); the first homework assignment links to a simple/no-frills online environment that will suffice for this segment.</p>
                    
                    <p>The essence of the module lies in the required problem sets (in the "Assignment" column in the table below). There will be two homeworks, due on the same schedule as the main CS 18 track (but you do these assignments instead of those). Starting with homework 3, everyone will complete the
                    same assignments for the rest of the course.</p>
                    
                    <p>During the first week of class, we will identify a time slot for overview lectures on this content (at a different time than
                    the normal 18 lectures). If you want to participate, fill in the When2Meet linked to the first row of the table. You are welcome to attend these lectures, or to just work through the material on your own (though if you
                    come to the lectures, you'll give Kathi a chance to get to know you in a smaller setting). The contents of the readings column in the table will guide you
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

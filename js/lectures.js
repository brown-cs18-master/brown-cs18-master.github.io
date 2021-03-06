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
                timeObj.hour(11);
                timeObj.minute(0);
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
                    name: 'Course Overview; Classes and Objects',
                    date: '01/20',
                    noteNames: ['Starter (pyret)', 'Starter (ML)', 'notes'],
                    noteURLs: ['content/lectures/01intro/dillo.arr', 'content/lectures/01intro/dillo.ml', 'content/lectures/01intro/01intro.pdf'],
                    recordingNames: ['video'],
                    recordingURLs: ["https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b991d274-095d-4d97-bb93-acb6011a6642"],
                    practiceNames: ["Practice Probs"],
                    practiceURLs: ["content/practice/01classes.pdf"],
                    linksNames: ["Background Survey", "Hwk 0 (due 1/29)"],
                    linksURLs: ["https://docs.google.com/forms/d/e/1FAIpQLSeeylnFpK4yO5uZq_itfvelDpvo0JaMZdKEv-AX4q2P8nAb3w/viewform?usp=sf_link", "https://hackmd.io/@cs18-spring-2021/SyyvWxBJu"]
                },
                {
                    name: 'OOP: Methods and Testing',
                    date: '01/22',
                    noteNames: ['Setup/Prep', 'notes'],
                    noteURLs: ["https://hackmd.io/@cs18-spring-2021/lec02setup", "content/lectures/02methods/02methods.pdf"],
                    recordingNames: ['video'],
                    recordingURLs: ["https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=62fa1b56-4c9f-4890-8f52-acb8011aab6d"],
                    practiceNames: ["Practice Probs"],
                    practiceURLs: ["content/practice/02methods.pdf"],
                    linksNames: [],
                    linksURLs: []
                },
                {
                    name: 'OOP: Interfaces and Types',
                    date: '01/25',
                    noteNames: ['Setup/Prep', 'notes'],
                    noteURLs: ["https://hackmd.io/@cs18-spring-2021/lec03setup", "content/lectures/03interfaces/03interfaces.pdf"],
                    recordingNames: ['video'],
                    recordingURLs: ["https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=976d94a7-1d98-4fe3-ae58-acbb011a7369"],
                    practiceNames: ["Practice Probs"],
                    practiceURLs: ["content/practice/03interfaces.pdf"],
                    linksNames: [],
                    linksURLs: []
                },
                {
                    name: 'OOP: Abstract Classes and Interfaces',
                    date: '01/27',
                    noteNames: ['Setup/Prep', 'notes'],
                    noteURLs: ["https://hackmd.io/@cs18-spring-2021/lec04setup", "content/lectures/04absclasses/04absclasses.pdf"],
                    recordingNames: ['video'],
                    recordingURLs: ["https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=73b08402-0449-4830-94ad-acbd011b9da7"],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: ['Java Unit Recap'],
                    linksURLs: ["https://hackmd.io/@cs18-spring-2021/java-unit-recap"]
                },
                {
                    name: 'Implement Lists (Functionally)',
                    date: '01/29',
                    noteNames: ["Setup/Prep", 'notes'],
                    noteURLs: ["https://hackmd.io/@cs18-spring-2021/lec05setup", "content/lectures/05listsfunctional/05listsfunctional.pdf"],
                    recordingNames: ['video'],
                    recordingURLs: ["https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=af601081-1f33-4ff3-970c-acbf011a8aa5"],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: ['final code'],
                    linksURLs: ["content/lectures/05listsfunctional/lec05.zip"]
                },
                {
                    name: 'Field Mutation and Equality',
                    date: '02/01',
                    noteNames: ['Setup/Prep', 'notes'],
                    noteURLs: ["https://hackmd.io/@cs18-spring-2021/lec06setup", "content/lectures/06fieldmutation/06fieldmutation.pdf"],
                    recordingNames: ['video'],
                    recordingURLs: ["https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=73c401be-37ce-4813-b47b-acc2011af95c"],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: [],
                    linksURLs: []
                },
                {
                    name: 'Mutable Lists, Conceptually',
                    date: '02/03',
                    noteNames: ['Setup/Prep', 'notes'],
                    noteURLs: ["https://hackmd.io/@cs18-spring-2021/lec07setup", "content/lectures/07listsimperative/07listsimperative.pdf"],
                    recordingNames: ['video'],
                    recordingURLs: ["https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a4ba4119-9033-489a-b55c-acc4011d5ee6"],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: [],
                    linksURLs: []
                },
                {
                    name: 'Implementing Mutable Lists',
                    date: '02/05',
                    noteNames: ["Setup/Prep", 'notes'],
                    noteURLs: ["https://hackmd.io/@cs18-spring-2021/lec08setup", "content/lectures/08listsimplementation/08listsimplementation.pdf"],
                    recordingNames: ['video'],
                    recordingURLs: ["https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=bf4c93ba-2620-4f5d-a99d-acc6011ee829"],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: ['code after lecture'],
                    linksURLs: ['content/lectures/08listsimplementation/lec08.zip']
                },
                {
                    name: 'Optimizing List Implementations',
                    date: '02/08',
                    noteNames: ['Setup/Prep','notes'],
                    noteURLs: ["https://hackmd.io/@cs18-spring-2021/lec09setup", "content/lectures/09listsoptimize/09listsoptimize.pdf"],
                    recordingNames: ['video'],
                    recordingURLs: ["https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4c628aab-06a0-455f-985c-acc9011d180c"],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: ['lec09.zip (code)'],
                    linksURLs: ['content/lectures/09listsoptimize/lec09.zip']
                },
                {
                    name: 'Arrays: More-Efficient Lists?',
                    date: '02/10',
                    noteNames: ['Setup/Prep', 'notes'],
                    noteURLs: ["https://hackmd.io/@cs18-spring-2021/lec10setup",
			      "content/lectures/10arrays/10arrays.pdf"],
                    recordingNames: ['video'],
                    recordingURLs: ["https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2cb33f00-1602-449b-ba05-accb011bb34f"],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: [],
                    linksURLs: []
                },
                {
                    name: 'Dynamic Arrays',
                    date: '02/12',
                    noteNames: ['Setup/Prep', 'notes'],
                    noteURLs: ["https://hackmd.io/@cs18-spring-2021/lec11setup",
			      "content/lectures/11dynarrays/11dynarrays.pdf"],
                    recordingNames: ['video'],
                    recordingURLs: ['https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3e6c6ee8-5a08-45c6-9ac1-accd011dc7dd'],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: ['final code', 'lists recap'],
                    linksURLs: [ "content/lectures/11dynarrays/lec11.zip",
			       "https://hackmd.io/@cs18-spring-2021/lists-unit-recap"]
                },
                //{
                //    name: 'NO CLASS (long weekend)',
                //    date: '02/15',
                //    noteNames: [],
                //    noteURLs: [],
                //    recordingNames: [],
                //    recordingURLs: [],
                //    practiceNames: [],
                //    practiceURLs: [],
                //    linksNames: [],
                //    linksURLs: []
                // },
                {
                    name: 'Iterators: enabling for-loops',
                    date: '02/17',
                    noteNames: ['Setup/Prep','notes'],
                    noteURLs: ['https://hackmd.io/@cs18-spring-2021/lec12setup','content/lectures/12iterators/12iterators.pdf'],
                    recordingNames: ['video'],
                    recordingURLs: ['https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3f5dacf0-6d11-4e54-9aa6-acd2011b1ea4'],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: ['final code'],
                    linksURLs: ['content/lectures/12iterators/lec12.zip']
                },
                {
                    name: 'System Design: Access Modifiers and Encapsulation',
                    date: '02/19',
                    noteNames: ['Setup/prep','notes'],
                    noteURLs: ['https://hackmd.io/@cs18-spring-2021/lec13setup',
			      'content/lectures/13accessEncap/13accessEncap.pdf'],
                    recordingNames: ['video'],
                    recordingURLs: ['https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7054b4d8-d25c-4dc8-9b29-acd4011c6275'],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: ['Midterm Prep Guide'],
                    linksURLs: ["https://hackmd.io/@cs18-spring-2021/midterm-prep-guide"]
                },
                {
                    name: 'OOP: Model-View-Controller',
                    date: '02/22',
                    noteNames: ['Setup/Prep', 'notes'],
                    noteURLs: ["https://hackmd.io/@cs18-spring-2021/lec14setup",
			      "content/lectures/14mvc/14mvc.pdf"],
                    recordingNames: ['video'],
                    recordingURLs: ["https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=27f09fa4-001f-42af-98b1-acd7011bc2d6"],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: ['final code'],
                    linksURLs: ["content/lectures/14mvc/lec14mvc.zip"]
                },
                {
                    name: 'Hashtables',
                    date: '02/24',
                    noteNames: ['Setup/prep','notes'],
                    noteURLs: ["https://hackmd.io/@cs18-spring-2021/lec15setup",
			       "content/lectures/15hashtables/15hashtables.pdf"],
                    recordingNames: ['video'],
                    recordingURLs: ["https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8712b2a0-cbc7-40f5-946f-acd9011e096a"],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: [],
                    linksURLs: []
                },
                {
                    name: 'Hashtables Implementation',
                    date: '02/26',
                    noteNames: ['Setup/prep','slides','notes'],
                    noteURLs: ["https://hackmd.io/@cs18-spring-2021/lec16setup",
			       "content/lectures/16hashtableimpl/slidedeck.pptx",
			       "content/lectures/16hashtableimpl/16hashtableimpl.pdf"],
                    recordingNames: ['video'],
                    recordingURLs: ["https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=26d8a986-ff1e-4c5d-a0b7-acdb01209f11"],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: [],
                    linksURLs: []
                },
                {
                    name: 'Exceptions',
                    date: '03/01',
                    noteNames: ['Setup/Prep', 'notes','exceptions demo'],
                    noteURLs: ["https://hackmd.io/@cs18-spring-2021/lec17setup",
			       "content/lectures/17exceptions/17exceptions.pdf",
			       "content/lectures/17exceptions/ExceptionControlFlow.pptx"],
                    recordingNames: ['video'],
                    recordingURLs: ["https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e9090d9f-0b45-4742-9689-acdf001c508c"],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: ['final code'],
                    linksURLs: ["content/lectures/17exceptions/lec17.zip"]
                },
                {
                    name: 'Social Threat Modeling',
                    date: '03/03',
                    noteNames: ['Setup/prep'],
                    noteURLs: ["https://hackmd.io/@cs18-spring-2021/lec18setup"],
                    recordingNames: ['video'],
                    recordingURLs: ["https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7b78bedc-053e-4764-b651-ace0011d7507"],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: [],
                    linksURLs: []
                },
                {
                    name: 'Scala: Introduction/Functional Programming',
                    date: '03/05',
                    noteNames: ['Setup/prep', 'notes'],
                    noteURLs: ["https://hackmd.io/@cs18-spring-2021/lec19setup",
			      "content/lectures/19scala/19scala.pdf"],
                    recordingNames: ['video'],
                    recordingURLs: ["https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=41011c68-69ae-430a-970e-ace2011e3470"],
                    practiceNames: [],
                    practiceURLs: [],
                    linksNames: ['final code'],
                    linksURLs: ["content/lectures/19scala/Intro.scala"]
                },
                // {
                //     name: 'Scala: Traits',
                //     date: '03/08',
                //     noteNames: [],
                //     noteURLs: [

                //     ],
                //     recordingNames: [],
                //     recordingURLs: [],
                //     practiceNames: [],
                //     practiceURLs: [],
                //     linksNames: [],
                //     linksURLs: []
                // },
                // {
                //     name: 'Scala: var, val, Loops, Exceptions',
                //     date: '03/10',
                //     noteNames: [],
                //     noteURLs: [

                //     ],
                //     recordingNames: [],
                //     recordingURLs: [],
                //     practiceNames: [],
                //     practiceURLs: [],
                //     linksNames: [],
                //     linksURLs: []
                // },
                // {
                //     name: 'Heaps and Priority Queues (Conceptual)',
                //     date: '03/12',
                //     noteNames: [],
                //     noteURLs: [

                //     ],
                //     recordingNames: [],
                //     recordingURLs: [],
                //     practiceNames: [],
                //     practiceURLs: [],
                //     linksNames: [],
                //     linksURLs: []
                // },
                // {
                //     name: 'Heaps (Implementation)',
                //     date: '03/15',
                //     noteNames: [],
                //     noteURLs: [

                //     ],
                //     recordingNames: [],
                //     recordingURLs: [],
                //     practiceNames: [],
                //     practiceURLs: [],
                //     linksNames: [],
                //     linksURLs: []
                // },
                // {
                //     name: 'Heapsort; sub n-log-n sorting',
                //     date: '03/17',
                //     noteNames: [],
                //     noteURLs: [

                //     ],
                //     recordingNames: [],
                //     recordingURLs: [],
                //     practiceNames: [],
                //     practiceURLs: [],
                //     linksNames: [],
                //     linksURLs: []
                // },
                // {
                //     name: 'Socially-Responsible Computing (SRC) Case Study',
                //     date: '03/12',
                //     noteNames: [],
                //     noteURLs: [

                //     ],
                //     recordingNames: [],
                //     recordingURLs: [],
                //     practiceNames: [],
                //     practiceURLs: [],
                //     linksNames: [],
                //     linksURLs: []
                // },
                // {
                //     name: 'Dynamic Programming 1',
                //     date: '03/22',
                //     noteNames: [],
                //     noteURLs: [

                //     ],
                //     recordingNames: [],
                //     recordingURLs: [],
                //     practiceNames: [],
                //     practiceURLs: [],
                //     linksNames: [],
                //     linksURLs: []
                // },
                // {
                //     name: 'Dynamic Programming 2',
                //     date: '03/24',
                //     noteNames: [],
                //     noteURLs: [

                //     ],
                //     recordingNames: [],
                //     recordingURLs: [],
                //     practiceNames: [],
                //     practiceURLs: [],
                //     linksNames: [],
                //     linksURLs: []
                // },
                // {
                //     name: 'Graphs Intro',
                //     date: '03/26',
                //     noteNames: [],
                //     noteURLs: [

                //     ],
                //     recordingNames: [],
                //     recordingURLs: [],
                //     practiceNames: [],
                //     practiceURLs: [],
                //     linksNames: [],
                //     linksURLs: []
                // },
                // {
                //     name: 'Breadth-First Search; Depth-First Search',
                //     date: '03/29',
                //     noteNames: [],
                //     noteURLs: [

                //     ],
                //     recordingNames: [],
                //     recordingURLs: [],
                //     practiceNames: [],
                //     practiceURLs: [],
                //     linksNames: [],
                //     linksURLs: []
                // },
                // {
                //     name: 'Graphs: Dijkstra\'s Algorithm',
                //     date: '03/31',
                //     noteNames: [],
                //     noteURLs: [

                //     ],
                //     recordingNames: [],
                //     recordingURLs: [],
                //     practiceNames: [],
                //     practiceURLs: [],
                //     linksNames: [],
                //     linksURLs: []
                // },
                // {
                //     name: 'Minimum Spanning Trees',
                //     date: '04/02',
                //     noteNames: [],
                //     noteURLs: [

                //     ],
                //     recordingNames: [],
                //     recordingURLs: [],
                //     practiceNames: [],
                //     practiceURLs: [],
                //     linksNames: [],
                //     linksURLs: []
                // },
                // {
                //     name: 'Union-Find and Disjoint Sets',
                //     date: '04/05',
                //     noteNames: [],
                //     noteURLs: [

                //     ],
                //     recordingNames: [],
                //     recordingURLs: [],
                //     practiceNames: [],
                //     practiceURLs: [],
                //     linksNames: [],
                //     linksURLs: []
                // },
                // {
                //     name: 'Balanced Binary Search Trees',
                //     date: '04/07',
                //     noteNames: [],
                //     noteURLs: [

                //     ],
                //     recordingNames: [],
                //     recordingURLs: [],
                //     practiceNames: [],
                //     practiceURLs: [],
                //     linksNames: [],
                //     linksURLs: []
                // },
                // {
                //     name: 'NO CLASS',
                //     date: '04/09',
                //     noteNames: [],
                //     noteURLs: [

                //     ],
                //     recordingNames: [],
                //     recordingURLs: [],
                //     practiceNames: [],
                //     practiceURLs: [],
                //     linksNames: [],
                //     linksURLs: []
                // },
                // {
                //     name: 'Data Scenario 1',
                //     date: '04/12',
                //     noteNames: [],
                //     noteURLs: [

                //     ],
                //     recordingNames: [],
                //     recordingURLs: [],
                //     practiceNames: [],
                //     practiceURLs: [],
                //     linksNames: [],
                //     linksURLs: []
                // },
                // {
                //     name: 'Data Scenario 2',
                //     date: '04/14',
                //     noteNames: [],
                //     noteURLs: [

                //     ],
                //     recordingNames: [],
                //     recordingURLs: [],
                //     practiceNames: [],
                //     practiceURLs: [],
                //     linksNames: [],
                //     linksURLs: []
                // },
                // {
                //     name: 'BDDs',
                //     date: '04/16',
                //     noteNames: [],
                //     noteURLs: [

                //     ],
                //     recordingNames: [],
                //     recordingURLs: [],
                //     practiceNames: [],
                //     practiceURLs: [],
                //     linksNames: [],
                //     linksURLs: []
                // },
            ],
            now: moment(),
            tableheads: [
                'date',
                'lecture #',
                'notes/starters',
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
                  text="course lectures"
                  :style-object="{'color': curPageThemeColor}"
                  :text-style-object="{'border-bottom': 'solid thick'}"
                ></page-section-title>
                <div
                  class="mx-4 mx-sm-5 mb-4 mb-sm-5"
                  :style="{ color: curPageThemeColor}">
                    <p>Lectures are on Monday, Wednesday, and Friday from 11:00 to 11:50AM EST. The Zoom link for lectures can be found on the <a href="https://canvas.brown.edu/courses/1083823"><b>course Canvas<b/></a>.</p>
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

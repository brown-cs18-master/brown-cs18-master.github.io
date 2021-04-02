import pageCountdownTime from './page-countdown-time.js';
import pageLink from './page-link.js';
import pageSectionTitle from './page-section.js';
import pageTable from './page-table.js';

const hiddenLink = {
    props: {
        now: Object,
        hide: {
            type: Boolean,
            default: null,
        },
        hideUntil: {
            type: Object,
            default: null,
        },
        hidePlaceholder: {
            type: Boolean,
            default: false,
        },
        name: String,
        href: String,
    },
    components: {
        'page-link': pageLink,
    },
    computed: {
        willHide: function () {
            if (this.hide === null) {
                return this.hide || this.hideUntil === null || this.hideUntil.isAfter(this.now);
            } else {
                return this.hide;
            }
        },
        content: function () {
            return this.hidePlaceholder ? '' : this.name;
        },
    },
    template: `
        <span v-if="willHide">{{content}}</span>
        <page-link
          v-else
          :href="href"
          :text="name">
        </page-link>
    `,
};

const homeworkAssignment = {
    props: {
        name: String,
        handoutURL: String,
        out: String,
        due: String,
        now: Object,
    },
    components: {
        'hidden-link': hiddenLink,
        'page-countdown-time': pageCountdownTime,
        'page-link': pageLink,
    },
    data: function () {
        if (this.due == '') {
            return {
                outMoment: this.parseTime(this.out),
                dueMoment: this.due,
            };
        } else {
            return {
                outMoment: this.parseTime(this.out),
                dueMoment: this.parseTime(this.due),
            };
        }
    },
    methods: {
        parseTime: function (timeStr) {
            let timeObj = moment(timeStr, ['MM/DD', 'YYYY/MM/DD'], true);
            if (timeObj.isValid()) {
                timeObj.hour(12);
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
                <hidden-link
                  :name="name"
                  :href="handoutURL"
                  :hide-until="outMoment"
                  :now="now"
                >
                </hidden-link>
            </th>
            <td>
                <page-countdown-time
                  name="out"
                  :time="outMoment"
                  :now="now"
                >
                </page-countdown-time>
            </td>
            <td>
                <page-countdown-time
                  name="due"
                  :time="dueMoment"
                  :now="now"
                >
                </page-countdown-time>
            </td>
        </tr>
    `,
};

const labAssignment = {
    props: {
        name: String,
        slidesName: String,
        handoutURL: String,
        slidesURL: String,
        out: String,
        due: String,
        now: Object,
    },
    components: {
        'hidden-link': hiddenLink,
        'page-countdown-time': pageCountdownTime,
        'page-link': pageLink,
    },
    data: function () {
        if (this.due == '') {
            return {
                outMoment: this.parseTime(this.out),
                dueMoment: this.due,
            };
        } else {
            return {
                outMoment: this.parseTime(this.out),
                dueMoment: this.parseTime(this.due),
            };
        }
    },
    methods: {
        parseTime: function (timeStr) {
            let timeObj = moment(timeStr, ['MM/DD', 'YYYY/MM/DD'], true);
            if (timeObj.isValid()) {
                timeObj.hour(9);
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
                <hidden-link
                  :name="name"
                  :href="handoutURL"
                  :hide-until="outMoment"
                  :now="now"
                >
                </hidden-link>
            </th>
            <td>
                <page-countdown-time
                  name="out"
                  :time="outMoment"
                  :now="now"
                >
                </page-countdown-time>
            </td>
            <th scope="row">
                <hidden-link
                  :name="slidesName"
                  :href="slidesURL"
                  :hide-until="outMoment"
                  :now="now"
                >
                </hidden-link>
            </th>
        </tr>
    `,
};

const projectAssignment = {
    props: {
        name: String,
        handoutURL: String,
        out: String,
        due: String,
        now: Object,
    },
    components: {
        'hidden-link': hiddenLink,
        'page-countdown-time': pageCountdownTime,
        'page-link': pageLink,
    },
    data: function () {
        if (this.due == '') {
            return {
                outMoment: this.parseTime(this.out),
                dueMoment: this.due,
            };
        } else {
            return {
                outMoment: this.parseTime(this.out),
                dueMoment: this.parseTime(this.due),
            };
        }
    },
    methods: {
        parseTime: function (timeStr) {
            let timeObj = moment(timeStr, ['MM/DD', 'YYYY/MM/DD'], true);
            if (timeObj.isValid()) {
                timeObj.hour(12);
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
                <hidden-link
                  :name="name"
                  :href="handoutURL"
                  :hide-until="outMoment"
                  :now="now"
                >
                </hidden-link>
            </th>
            <td>
                <page-countdown-time
                  name="out"
                  :time="outMoment"
                  :now="now"
                >
                </page-countdown-time>
            </td>
            <td>
                <page-countdown-time
                  name="due"
                  :time="dueMoment"
                  :now="now"
                >
                </page-countdown-time>
            </td>
        </tr>
    `,
};

const examAssignment = {
    props: {
        name: String,
        handoutURL: String,
        out: String,
        due: String,
        now: Object,
    },
    components: {
        'hidden-link': hiddenLink,
        'page-countdown-time': pageCountdownTime,
        'page-link': pageLink,
    },
    data: function () {
        if (this.due == '') {
            return {
                outMoment: this.parseTime(this.out),
                dueMoment: this.due,
            };
        } else {
            return {
                outMoment: this.parseTime(this.out),
                dueMoment: this.parseTime(this.due),
            };
        }
    },
    methods: {
        parseTime: function (timeStr) {
            let timeObj = moment(timeStr, ['MM/DD', 'YYYY/MM/DD'], true);
            if (timeObj.isValid()) {
                timeObj.hour(12);
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
                <hidden-link
                  :name="name"
                  :href="handoutURL"
                  :hide-until="outMoment"
                  :now="now"
                >
                </hidden-link>
            </th>
            <td>
                <page-countdown-time
                  name="out"
                  :time="outMoment"
                  :now="now"
                >
                </page-countdown-time>
            </td>
            <td>
                <page-countdown-time
                  name="due"
                  :time="dueMoment"
                  :now="now"
                >
                </page-countdown-time>
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
        'homework-assignment': homeworkAssignment,
        'lab-assignment': labAssignment,
        'project-assignment': projectAssignment,
        'exam-assignment': examAssignment,
        'page-table': pageTable,
        'page-section-title': pageSectionTitle,
    },
    data: function () {
        return {
            homeworkAssignments: [
                {
                    name: 'Homework 0 (SRC)',
                    handoutURL: 'https://hackmd.io/@cs18-spring-2021/SyyvWxBJu',
                    out: '01/20',
                    due: '01/29 11:59PM',
                },
                {
                    name: 'Classes and Methods',
                    handoutURL: 'https://hackmd.io/NCtA4l7WTN6b4vGMsU0djA?view',
                    out: '01/22',
                    due: '01/29 11:59PM',
                },
                {
                    name: 'Interfaces, Lists, and Testing for Mutation',
                    handoutURL: 'https://hackmd.io/MwiXi0dpRVqJ5wscNd2jTQ?view',
                    out: '01/29 5:00PM',
                    due: '02/05 11:59PM',
                },
                {
                    name: 'Doubly-Linked Lists',
                    handoutURL: 'https://hackmd.io/@cs18-spring-2021/hwk3?view',
                    out: '02/05 02:45PM',
                    due: '02/12 11:59PM',
                },
                {
                    name: 'Hashtables; Iterator',
                    handoutURL: 'https://hackmd.io/Icu1ICIURf-nOSZvkLboYg?view',
                    out: '02/26',
                    due: '03/08 11:59PM',
                },
                {
                    name: 'Scala',
                    handoutURL: 'https://hackmd.io/gMYIJ2snSyuhtRYMzYC5tQ?view',
                    out: '03/08',
                    due: '03/15 11:59PM',
                },
                {
                    name: 'Dynamic Programming; SRC',
                    handoutURL: 'https://hackmd.io/8W_zNgz1RUaTHSHfThObew?view',
                    out: '03/26',
                    due: '04/04 11:59PM',
                },
            ],
            labAssignments: [
                {
                    name: 'Intellij/Scala Tester Setup Help',
                    handoutURL: 'https://hackmd.io/6K9NmQ0fSjOxH7AYeIYGnw?view',
                    out: '01/20',
                    slidesName: '',
                    slidesURL: '',
                },
                {
                    name: 'Object-Oriented Design',
                    handoutURL: 'https://drive.google.com/file/d/10nRM7kAx3DgT5Xme2EbxnzGRWfAeLEA_/view?usp=sharing',
                    out: '01/27',
                    slidesName: 'Slides',
                    slidesURL:
                        'https://docs.google.com/presentation/d/1qS3hi2e0VtVlmBx1V_eQD19vRdqZF_UC7RP1acvi8V0/edit?usp=sharing',
                },
                {
                    name: 'For-While Loops (Lab 2 version A)',
                    handoutURL: 'https://drive.google.com/file/d/1gp6eizw5rmt_ffWt9dKuHziZO4wzMcnt/view?usp=sharing',
                    out: '02/03',
                    slidesName: 'Slides',
                    slidesURL:
                        'https://docs.google.com/presentation/d/17pX5pz42gI7lvWbjG3F6k29I3SV0fDnQOWtOV1eu3UU/edit?usp=sharing',
                },
                {
                    name: 'Oracle (Lab 2 version B)',
                    handoutURL: 'https://drive.google.com/file/d/1PRkBgKPt1BYIQY4qXAups4YlM_J14Vh5/view?usp=sharing',
                    out: '02/03',
                    slidesName: 'Slides',
                    slidesURL:
                        'https://docs.google.com/presentation/d/17pX5pz42gI7lvWbjG3F6k29I3SV0fDnQOWtOV1eu3UU/edit?usp=sharing',
                },
                {
                    name: 'Debugging',
                    handoutURL: 'https://drive.google.com/file/d/15Q9OGpc-wm8rxNl2dO_PXJmX2p_2xYhw/view?usp=sharing',
                    out: '02/10',
                    slidesName: 'Slides',
                    slidesURL:
                        'https://docs.google.com/presentation/d/1IICIulMGBtEUfzY_p9whrkmzA3yanZDpU0JBc6dk0TU/edit?usp=sharing',
                },
                {
                    name: 'File I/O',
                    handoutURL: 'https://drive.google.com/file/d/1eOUwJIpRB-Gc3X41l0VuT0OXvg15OtWl/view?usp=sharing',
                    out: '02/17',
                    slidesName: 'Slides',
                    slidesURL:
                        'https://docs.google.com/presentation/d/1XokMXiMb2g0-kBYDOn1Xi5KHDSXeMPA_9BHetE1z7pw/edit?usp=sharing',
                },
                {
                    name: 'Regular Expressions',
                    handoutURL: 'https://drive.google.com/file/d/1BvoB7TwvjerSDVjwbneMyAyp9-t-2Dn7/view?usp=sharing',
                    out: '02/24',
                    slidesName: 'Slides',
                    slidesURL:
                        'https://docs.google.com/presentation/d/1P3yG33wQM8IQmM0dkPN2SwYIvQcuStSjuIzPr_1TmaI/edit?usp=sharing',
                },
                {
                    name: 'Optimization',
                    handoutURL: 'https://drive.google.com/file/d/10VSfH30Q7tpDqtHXDSvz4MxbETokGCFi/view?usp=sharing',
                    out: '03/03',
                    slidesName: 'Slides',
                    slidesURL:
                        'https://docs.google.com/presentation/d/1HDZG6yjJDN6QlrEVl8s3x_rVe8nAX-15rUZx34qmSt4/edit?usp=sharing',
                },
                {
                    name: 'Introduction to Scala',
                    handoutURL: 'https://drive.google.com/file/d/10Nwxkv8ybFkDcbXWsjp5pkEgRLGAt-uF/view?usp=sharing',
                    out: '03/10',
                    slidesName: 'Slides',
                    slidesURL:
                        'https://docs.google.com/presentation/d/12lvSMcL_S6A4tW5Vgjy4hLJhRDp-NPyhUhQvFtJMbr8/edit?usp=sharing',
                },
                {
                    name: 'Understanding PageRank',
                    handoutURL: 'https://drive.google.com/file/d/1Bp5CEwLykALZhZTEZb1qnwgIo5hcqGEa/view?usp=sharing',
                    out: '03/17',
                    slidesName: 'Slides',
                    slidesURL:
                        'https://docs.google.com/presentation/d/1UHYFykzWkRCli5NGHalANMjTzSHlT_XZd4nPd85rbMk/edit?usp=sharing',
                },
                {
                    name: 'Dynamic Programming',
                    handoutURL: 'https://drive.google.com/file/d/1nvxQ7KJfVIMxgTL9xH-GKvJdeNOQpnUx/view?usp=sharing',
                    out: '03/24',
                    slidesName: 'Slides',
                    slidesURL:
                        'https://docs.google.com/presentation/d/1YhCrNyYYf03w00Cwf9rbkLJXSX8g-Br4jD_ESRc7mrs/edit?usp=sharing',
                },
                {
                    name: "Understanding Dijkstra's Algorithm",
                    handoutURL: 'https://drive.google.com/file/d/16_ex42B1v9VloYnZMkpYe4HjlSrPnCYe/view?usp=sharing',
                    out: '03/31',
                    slidesName: 'Slides',
                    slidesURL:
                        'https://docs.google.com/presentation/d/15EwjEL_QTJbaGLWo8z1wdrV9TB3mqqrCXZmq7Q43_tM/edit?usp=sharing',
                },
                {
                    name: 'Garbage Collection',
                    handoutURL: '',
                    out: '04/07',
                    slidesName: 'Slides',
                    slidesURL: '',
                },
            ],
            projectAssignments: [
                {
                    name: 'Recommender',
                    handoutURL: 'https://hackmd.io/@cs18-spring-2021/SkTnQBsRv',
                    out: '02/12',
                    due: '02/26 11:59PM',
                },
                {
                    name: 'Search',
                    handoutURL: 'https://hackmd.io/@cs18-spring-2021/ByeYGEiCD',
                    out: '03/12',
                    due: '03/26 11:59PM',
                },
                {
                    name: 'Model Checking',
                    handoutURL: 'https://hackmd.io/@cs18-spring-2021/ByKuDrj0w',
                    out: '04/02',
                    due: '04/16 11:59PM',
                },
            ],
            examAssignments: [
                {
                    name: 'Midterm (On Gradescope)',
                    handoutURL: 'https://piazza.com/class/kjqgmueegkh6j2?cid=955',
                    out: '03/01',
                    due: '03/05 11:59PM',
                },
                {
                    name: 'Final',
                    handoutURL: '',
                    out: '04/23',
                    due: '',
                },
            ],
            now: moment(),
            tableheads: ['assignment', 'out', 'due'],
            labsTableheads: ['assignment', 'out', 'slides'],
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
                  text="Homeworks"
                  :style-object="{'color': curPageThemeColor}"
                  :text-style-object="{'border-bottom': 'solid thick'}"
                ></page-section-title>
                <div
                  class="mx-4 mx-sm-5 px-0 px-lg-5"
                  :style="{ color: curPageThemeColor}"
                >
                    <p>
                        Homeworks are due on the Due Date at Anywhere-On-Earth time. They can be submitted through <a href="https://www.gradescope.com/courses/224988"><b>Gradescope</b></a>.
                        See our <a href="https://hackmd.io/jC-SEMn_RpiGqMH_EhsDMw?view"><b>Gradescope Guide</b></a> for more info.
                    </p>
                    <page-table
                      :tableheads="tableheads"
                      tableheadBackground="rgba(111, 82, 142, 0.2)"
                      :style="{ color: curPageThemeColor}"
                    >
                        <homework-assignment
                          v-for="(assignment, index) of homeworkAssignments"
                          :key="index"
                          v-bind="assignment"
                          :now="now"
                        >
                        </homework-assignment>
                    </page-table>
                </div>
            </section>
            <section class="container-fluid d-flex flex-wrap flex-column my-5 px-0 px-sm-5">
                <page-section-title
                  :icon-classes="curPageIconClasses"
                  text="Labs"
                  :style-object="{'color': curPageThemeColor}"
                  :text-style-object="{'border-bottom': 'solid thick'}"
                ></page-section-title>
                <div
                  class="mx-4 mx-sm-5 px-0 px-lg-5"
                  :style="{ color: curPageThemeColor}"
                >
                    <p>
                        There are 11 labs. Labs are synchronized and held virtually. See <a href="https://brown-cs18-master.github.io/hours.html"><b>the calendar</b></a> for a list of lab times. If you need to reschedule your lab time, please see the <a href="https://hackmd.io/@cs18-spring-2021/r1GSAemJd"><b>course syllabus</b></a>.
                    </p>
                    <page-table
                      :tableheads="labsTableheads"
                      tableheadBackground="rgba(111, 82, 142, 0.2)"
                      :style="{ color: curPageThemeColor}"
                    >
                        <lab-assignment
                          v-for="(assignment, index) of labAssignments"
                          :key="index"
                          v-bind="assignment"
                          :now="now"
                        >
                        </lab-assignment>
                    </page-table>
                </div>
            </section>
            <section class="container-fluid d-flex flex-wrap flex-column my-5 px-0 px-sm-5">
                <page-section-title
                  :icon-classes="curPageIconClasses"
                  text="Projects"
                  :style-object="{'color': curPageThemeColor}"
                  :text-style-object="{'border-bottom': 'solid thick'}"
                ></page-section-title>
                <div
                  class="mx-4 mx-sm-5 px-0 px-lg-5"
                  :style="{ color: curPageThemeColor}"
                >
                    <p>There will be two projects (and one mini-project) this semester. Projects are due on the due date at Anywhere-On-Earth time, and are submitted through <a href="https://www.gradescope.com/courses/224988"><b>Gradescope</b></a>.</p>
                    <page-table
                      :tableheads="tableheads"
                      tableheadBackground="rgba(111, 82, 142, 0.2)"
                      :style="{ color: curPageThemeColor}"
                    >
                        <project-assignment
                          v-for="(assignment, index) of projectAssignments"
                          :key="index"
                          v-bind="assignment"
                          :now="now"
                        >
                        </project-assignment>
                    </page-table>
                </div>
            </section>
            <section class="container-fluid d-flex flex-wrap flex-column my-5 px-0 px-sm-5">
                <page-section-title
                  :icon-classes="curPageIconClasses"
                  text="Exams"
                  :style-object="{'color': curPageThemeColor}"
                  :text-style-object="{'border-bottom': 'solid thick'}"
                ></page-section-title>
                <div
                  class="mx-4 mx-sm-5 px-0 px-lg-5"
                  :style="{ color: curPageThemeColor}"
                >
                    <p>Please see the <a href="https://hackmd.io/@cs18-spring-2021/r1GSAemJd"><b>course syllabus</b></a> regarding exam policies.</p>
                    <page-table
                      :tableheads="tableheads"
                      tableheadBackground="rgba(111, 82, 142, 0.2)"
                      :style="{ color: curPageThemeColor}"
                    >
                        <exam-assignment
                          v-for="(assignment, index) of examAssignments"
                          :key="index"
                          v-bind="assignment"
                          :now="now"
                        >
                        </exam-assignment>
                    </page-table>
                </div>
            </section>
        </main>
    `,
});

import pageClickCopy from './page-click-copy.js';
import pageSectionTitle from './page-section.js';

const csPrereq = {
    props: {
        courseNum: String,
        backgroundColor: String,
        moreText: String
    },
    computed: {
        id: function () {
            return `prereq-csci${this.courseNum}`;
        },
        href: function () {
            return `https://cs.brown.edu/courses/csci${this.courseNum}`;
        },
    },
    template: `
        <a
          :id="id"
          class="px-4 mx-2 second-prereq badge text-white"
          rel="noreferrer"
          target="_blank"
          :href="href"
          :style="{'background-color': backgroundColor}"
        >
              CSCI {{courseNum}} {{moreText}}
        </a>
    `,
};

const courseInfoSection = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'cs-prereq': csPrereq,
        'page-section-title': pageSectionTitle,
    },
    template: `
        <section class="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="course info"
              :style-object="{'color': curPageThemeColor, 'text-decoration-line': 'underline', 'text-decoration-style': 'wavy'}"
            ></page-section-title>
            <div
              class="flex-fill d-flex flex-column ml-4 ml-sm-5"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <div id="anonymous-feedback-container" class="mb-4">
                    <span class="mr-4">
                        <i class="far fa-comment fa-lg" title="feedback form"></i>
                    </span>
                    <span id="anoynmous-feedback-form-info">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4SvLLwSVodGaGQgpRDbAiet80FkzM--ErKwwuTKoILaROHA/viewform?usp=sf_link" target="_blank">Anonymous Feedback Form</a>
                    </span>
                </div>
                <div id="piazza-container" class="mb-4">
                    <span class="mr-4">
                        <i class="far fa-question fa-lg" title="piazza form"></i>
                    </span>
                    <span id="piazza-info">
                        <a href="" target="_blank">Piazza [TODO: Creat Class and Add Link]</a>
                    </span>
                </div>
                <div id="time-container" class="d-flex flex-row mb-4">
                      <span class="mr-4">
                          <i class="far fa-calendar-alt fa-lg" title="class time"></i>
                      </span>
                      <div>
                          <p id="class-time" class="d-flex flex-row justify-content-between mb-1">
                              <span id="time-start">11:00AM</span>
                              <span class="d-sm-inline-block d-sm-none mx-2">-</span>
                              <span id="time-end">11:50AM</span>
                              <span id="time-duration" class="d-none d-sm-inline-block font-weight-light text-muted mx-1 px-4 border-bottom">50Mins</span>
                          </p>
                          <p id="day-of-week-badges" class="d-flex flex-column flex-sm-row ">
                              <span id="time-tuesday" class="mx-2 mb-2 mb-sm-0 px-4 day-of-week badge badge-pill text-white" :style="{'background-color': curPageThemeColor}">M</span>
                              <span id="time-thursday" class="mx-2 mb-2 mb-sm-0 px-4 day-of-week badge badge-pill text-white" :style="{'background-color': curPageThemeColor}">W</span>
                              <span id="time-thursday" class="mx-2 mb-2 mb-sm-0 px-4 day-of-week badge badge-pill text-white" :style="{'background-color': curPageThemeColor}">F</span>

                          </p>
                      </div>
                  </div>
                  <div id="location-container" class="mb-4">
                      <span class="mr-4">
                          <i class="far fa-building fa-lg" title="location"></i>
                      </span>
                      <span id="class-location">
                          <a href="https://canvas.brown.edu" target="_blank">Zoom</a>
                      </span>
                  </div>
                  <div id="prereqs-container" class="d-flex flex-row">
                      <span class="mr-4">
                          <i class="fas fa-clipboard-list fa-lg" title="prerequisites"></i>
                      </span>
                      <div class="d-flex flex-column">
                            <div class="d-flex flex-row">
                                <span class="text-nowrap">
                                    One of
                                </span>
                                <div>
                                    <cs-prereq course-num="0112" moreText="" :background-color="curPageThemeColor"></cs-prereq>
                                    <cs-prereq course-num="0170" moreText="" :background-color="curPageThemeColor"></cs-prereq>
                                    <cs-prereq course-num="0190" moreText="" :background-color="curPageThemeColor"></cs-prereq>
                                    <cs-prereq course-num="0111" moreText=" + Bridge Material" :background-color="curPageThemeColor"></cs-prereq>                                    
                                </div>
                            </div>
                        </div>
                  </div>
            </div>
        </section>
    `,
};

const courseTopic = {
    props: {
        week: String,
        name: String,
        curPageThemeColor: String,
    },
    components: {
        'page-click-copy': pageClickCopy,
    },
    template: `
        <li
          class="list-group-item list-group-item-action border-0 border-left"
          :style="{color: curPageThemeColor}"
        >
            <span class="topic-week font-weight-light">{{week}}: </span>
            <page-click-copy :text="name"></page-click-copy>
        </li>
    `,
};

const courseTopics = {
    props: {
        curPageThemeColor: String,
    },
    components: {
        'course-topic': courseTopic,
    },
    data: function () {
        return {
            topics: [
                ['1', 'Object-Oriented, Imperative, and Functional Programming'],
                ['2', 'Runtime'],
                ['3', 'Mutation and List Implementation'],
                ['4', 'Arrays'],
                ['5', 'System Design'],
                ['6', 'Hashtables and Space'],
                ['7', 'Scala'],
                ['8', 'Heaps'],
                ['9', 'Dynamic Programming'],
                ['10', 'Graphs'],
            ],
        };
    },
    template: `
        <div id="topics-container">
            <p class="badge text-white text-uppercase px-4" :style="{'background-color': curPageThemeColor}">
                topics
            </p>
            <ul
              id="topics-list"
              class="list-group list-group-flush ml-4 ml-sm-5"
              style="border-left: solid 0.2rem"
            >
                <course-topic
                  v-for="(topic, index) of topics"
                  :week="topic[0]"
                  :name="topic[1]"
                  :key="index"
                  :cur-page-theme-color="curPageThemeColor"
                >
                </course-topic>
            </ul>
        </div>
    `,
};

const learningObjectives = {
    props: {
        curPageThemeColor: String,
    },
    components: {
        'course-topic': courseTopic,
    },
    data: function () {
        return {
            topics: [
                ['1', 'Data Structures and Algorithms'],
                ['2', 'Object-Oriented Programming and Design'],
                ['3', 'Testing and Validation'],
                ['4', 'Technical and Social Impact Analysis'],
            ],
        };
    },
    template: `
        <div id="topics-container">
            <p class="badge text-white text-uppercase px-4" :style="{'background-color': curPageThemeColor}">
                objectives
            </p>
            <ul
              id="topics-list"
              class="list-group list-group-flush ml-4 ml-sm-5"
              style="border-left: solid 0.2rem"
            >
                <course-topic
                  v-for="(topic, index) of topics"
                  :week="topic[0]"
                  :name="topic[1]"
                  :key="index"
                  :cur-page-theme-color="curPageThemeColor"
                >
                </course-topic>
            </ul>
        </div>
    `,
};

const courseMaterialSection = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'course-topics': courseTopics,
        'page-section-title': pageSectionTitle,
    },
    template: `
        <section class="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="course topics"
              :style-object="{'color': curPageThemeColor, 'text-decoration-line': 'underline', 'text-decoration-style': 'wavy'}"
            ></page-section-title>
            <div
              class="flex-fill d-flex flex-column ml-4 ml-sm-5"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <course-topics
                  :cur-page-theme-color="curPageThemeColor"
                >
                </course-topics>
            </div>
        </section>
    `,
};

const learningObjectivesSection = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'course-topics': learningObjectives,
        'page-section-title': pageSectionTitle,
    },
    template: `
        <section class="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="learning objectives"
              :style-object="{'color': curPageThemeColor, 'text-decoration-line': 'underline', 'text-decoration-style': 'wavy'}"
            ></page-section-title>
            <div
              class="flex-fill d-flex flex-column ml-4 ml-sm-5"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <course-topics
                  :cur-page-theme-color="curPageThemeColor"
                >
                </course-topics>
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
        'course-info-section': courseInfoSection,
        'course-material-section': courseMaterialSection,
        'learning-objectives-section': learningObjectivesSection,
    },
    template: `
        <main>
            <course-info-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </course-info-section>
            <course-material-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </course-material-section>
            <learning-objectives-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </learning-objectives-section> 
        </main>
    `,
});

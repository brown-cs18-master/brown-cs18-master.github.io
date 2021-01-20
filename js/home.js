import pageClickCopy from "./page-click-copy.js";
import pageSectionTitle from "./page-section.js";
import pageLink from './page-link.js';

const csPrereq = {
  props: {
    courseNum: String,
    backgroundColor: String,
    moreText: String,
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
    "cs-prereq": csPrereq,
    "page-section-title": pageSectionTitle,
    "page-link": pageLink
  },
  template: `
    <section class="container-fluid d-flex flex-sm-wrap flex-md-nowrap flex-lg-nowrap flex-row my-5 px-0 px-sm-5">
      <div class="d-flex flex-lg-nowrap">
        <page-section-title
              :icon-classes="curPageIconClasses"
              text=""
              :style-object="{'color': curPageThemeColor, 'text-decoration-line': 'underline',
              'text-decoration-style': 'wavy', 'width': 'fit-content!important', 'margin-right': '0!important' }"
            >
        </page-section-title>
        <div
          class="flex-fill d-flex flex-column ml-4 ml-sm-5"
          :style="{ color: curPageThemeColor, 'font-size': '1rem' }"
        >
          <div id="course-description-container" class="mb-4" style="font-size: 1.1rem; margin-left: 0">
            <span class="mr-4" :style="{ color: curPageThemeColor }">
              CS18 is a second-semester course on computing and programming.
              We explore the use and design of several core data structures
              and algorithms, assess the impacts of data structures and algorithms
              on time and space resources as well as users and society, learn
              object oriented programming and design, and develop essential
              software skills around testing, debugging, and version control.
              While most students taking CS18 are considering concentrations
              in or that use CS, all students who have completed a prerequisite
              course (0111, 0112, 0150, 0170, 0190) are welcome (and have
              succeeded in the past!).
              <br/>
              <br style="font-size: 0.75rem"/>
                If you are coming from CS15, <page-link href="coming-from-15.html" text="see this page for your alternative materials"></page-link> for the first week and a half of the course.
            </span>
          </div>
        </div>
      </div>
    </section>
    `,
};

const essentialLinksSection = {
  props: {
    curPageThemeColor: String,
    curPageIconClasses: Array,
  },
  components: {
    'page-link': pageLink,
    'page-section-title': pageSectionTitle,
  },
  template: `
        <section class="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="essential links"
              :style-object="{'color': curPageThemeColor, 'text-decoration-line': 'underline', 'text-decoration-style': 'wavy'}"
            ></page-section-title>            <div
              class="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <ul>
                  <li><page-link title="piazza" href="https://piazza.com/brown/spring2021/spring2021csci0180/home" text="Ask questions on Piazza"></page-link></li>
                  <li><page-link title="zoom link" href="https://canvas.brown.edu/courses/1083823" text="Zoom link"></page-link></li>
                  <li><page-link title="admin questions" href="mailto:cs0180headtas@lists.brown.edu" text="Raise administrative/HTA questions via email"></page-link></li>
                  <li><page-link title="ta hours" href="https://brown-cs18-master.github.io/hours.html" text="Find TA/Professor Hours on the Course Calendar"></page-link></li>
                  <li><page-link title="signmeup" href="https://signmeup.cs.brown.edu/" text="Enter the office hours line on SignMeUp"></page-link></li>
                  <li><page-link title="gradescope" href="https://www.gradescope.com/courses/224988" text="Submit Homework on Gradescope"></page-link></li>
                  <li><page-link title="lab switch" href="https://docs.google.com/forms/d/e/1FAIpQLSdIZ53brbaNhcA9EnhaX3_rM8rjAFwT7ae4AmzhInaLEJi-4w/viewform?usp=sf_link" text="Request a one-time lab switch by filling out the lab-switch form"></page-link></li>
                  <li><page-link title="lab switch" href="https://prismia.chat/projects/e4d25559-76da-4471-a576-88ca430da10a/join" text="Ask questions and participate in class discussions via Prismia chat"></page-link></li>
                  <li><page-link title="extension request" href="mailto:kathryn_fisler@brown.edu" text="Contact Professor Fisler/Kathi regarding emergencies, personal situations, or extensions"></page-link></li>
                  <li><page-link title="late day" href="https://hackmd.io/@cs18-spring-2021/r1GSAemJd" text="Refer to the course missive for the late day policy"></page-link></li>
                  <li><page-link title="feedback form" href="https://docs.google.com/forms/d/e/1FAIpQLSc4SvLLwSVodGaGQgpRDbAiet80FkzM--ErKwwuTKoILaROHA/viewform?usp=sf_link" text="Provide feedback with this anonymous feedback form"></page-link></li>
                </ul>
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
    "page-click-copy": pageClickCopy,
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
    "course-topic": courseTopic,
  },
  data: function () {
    return {
      topics: [
        ["1", "Object-Oriented, Imperative, and Functional Programming"],
        ["2", "Runtime"],
        ["3", "Mutation and List Implementation"],
        ["4", "Arrays"],
        ["5", "System Design"],
        ["6", "Hashtables and Space"],
        ["7", "Scala"],
        ["8", "Heaps"],
        ["9", "Dynamic Programming"],
        ["10", "Graphs"],
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
    "course-topic": courseTopic,
  },
  data: function () {
    return {
      topics: [
        ["1", "Data Structures and Algorithms"],
        ["2", "Object-Oriented Programming and Design"],
        ["3", "Testing and Validation"],
        ["4", "Technical and Social Impact Analysis"],
      ],
    };
  },
  template: `
        <div id="topics-container">
          <div id="course-description-container" class="mb-4" style="font-size: 1.1rem; margin-left: 0">
              <span class="mr-4" :style="{ color: curPageThemeColor }">
                  Our learning objectives page summarizes the core skills and knowledge that the course
                  is designed to help you master. As we grade your work, we will give you feedback on your
                  progress towards these objectives. Use this list as a guide to help you remember the big
                    picture of each assignment.
                  <br/>
              </span>
          </div>

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

const diversityAndInclusion = {
  props: {
    curPageThemeColor: String,
  },
  components: {
    "course-topic": courseTopic,
  },
  data: function () {
    return {
      topics: [
        ["1", "All students feel supported in learning CS, regardless of prior experience with object-oriented programming, culture, abilities, or learning situation under COVID."],
        ["2", "All students are treated with respect."],
        ["3", "Course materials reflect and are sensitive to the diversity within our student population."],
      ],
    };
  },
  template: `
        <div id="topics-container">
          <div id="course-description-container" class="mb-4" style="font-size: 1.1rem; margin-left: 0">
              <span class="mr-4" :style="{ color: curPageThemeColor }">
                  CS18 also has concrete goals regarding diversity and inclusion. If you feel like we aren't meeting these goals, or
                  have suggestions for us, please <a href="mailto:cs0180headtas@lists.brown.edu">let us know</a>.
                  <br/>
              </span>
          </div>

            <p class="badge text-white text-uppercase px-4" :style="{'background-color': curPageThemeColor}">
                goals
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
    "course-topics": courseTopics,
    "page-section-title": pageSectionTitle,
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
    "course-topics": learningObjectives,
    "page-section-title": pageSectionTitle,
  },
  template: `
        <section class="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="course objectives"
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

const diversityAndInclusionSection = {
  props: {
    curPageThemeColor: String,
    curPageIconClasses: Array,
  },
  components: {
    "course-topics": diversityAndInclusion,
    "page-section-title": pageSectionTitle,
  },
  template: `
        <section class="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="diversity and inclusion"
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

Vue.component("page-content", {
  props: {
    curPageThemeColor: String,
    curPageIconClasses: Array,
  },
  components: {
    "course-info-section": courseInfoSection,
    "essential-links-section": essentialLinksSection,
    "learning-objectives-section": learningObjectivesSection,
    "diversity-inclusion-section": diversityAndInclusionSection
  },
  template: `
        <main>
            <course-info-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </course-info-section>
            <essential-links-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </essential-links-section>
            <learning-objectives-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </learning-objectives-section>
            <diversity-inclusion-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </diversity-inclusion-section>

        </main>
    `,
});

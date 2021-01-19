import pageLink from './page-link.js';
import pageSectionTitle from './page-section.js';

const courseResource = {
    props: {
        title: String,
    },
    template: `
      <div class="d-flex flex-column mb-4" style="color: #266079">
          <h3 class="text-capitalize">{{title}}</h3>
          <slot></slot>
      </div>
    `,
};

const courseDocumentsSection = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'course-resource': courseResource,
        'page-link': pageLink,
        'page-section-title': pageSectionTitle,
    },
    template: `

        <section class="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="course syllabus"
              :style-object="{'color': curPageThemeColor}"
              :text-style-object="{'border-bottom': 'solid thick'}"
            ></page-section-title>
            <div
              class="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <p>Refer to the syllabus for information about course learning goals, late day policies, and more.</p>
                <ul>
                    <li><page-link title="course syllabus" href="https://hackmd.io/@cs18-spring-2021/r1GSAemJd" text="Course Syllabus"></page-link></li>
                </ul>
            </div>
        </section>
    `,
};

const softwareSetupSection = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'course-resource': courseResource,
        'page-link': pageLink,
        'page-section-title': pageSectionTitle,
    },
    template: `
        <section class="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="software installation and setup"
              :style-object="{'color': curPageThemeColor}"
              :text-style-object="{'border-bottom': 'solid thick'}"
            ></page-section-title>
            <div
              class="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <p>If you need help setting up your software and environment, please come to hours! But first, consult these guides:</p>
                <ul>
                    <li><page-link title="intellij setup guide" href="https://hackmd.io/@cs18-spring-2021/rkqhvPyy_" text="Intellij Setup Guide"></page-link></li>
                    <li><page-link title="di-resource-link" href="https://hackmd.io/@cs18-spring-2021/BkfI_Pky_" text="Github Guide"></page-link></li>
                </ul>
            </div>
        </section>
    `,
};

{
    /* <course-resource title="style guidelines">
                    <p>
                       In addition to being graded on correctness of your solutions, each problem you submit will also receive a style score. You can find rubric and example <page-link title="style guidelines" href="" text="here"></page-link>
                    </p>
                </course-resource> */
}
const externalResourcesSection = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'page-section-title': pageSectionTitle,
        'course-resource': courseResource,
        'page-link': pageLink,
    },
    template: `
        <section class="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="external resources"
              :style-object="{'color': curPageThemeColor}"
              :text-style-object="{'border-bottom': 'solid thick'}"
            >
            </page-section-title>
            <div
              class="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <course-resource title="Department Resources">
                    <ul>
                        <li><page-link title="ugrad missive" href="http://cs.brown.edu/courses/ta/pubs/ugrad_missive.pdf" text="Undergraduate Missive"></page-link></li>
                        <li><page-link title="di-resource-link" href="http://cs.brown.edu/about/diversity/resources/" text="Diversity and Inclusion"></page-link></li>
                        <li><page-link title="student-di-resource-link" href="https://cs.brown.edu/about/diversity/student-advocates-diversity-and-inclusion/" text="Student Advocates for Diversity and Inclusion"></page-link></li>
                        <li><page-link title="wics-resource-link" href="https://cs.brown.edu/people/orgs/wics/" text="Women in Computer Science"></page-link></li>
                        <li><page-link title="mosaic-resource-link" href="https://mosaic-plus-brown.github.io/mosaic/" text="MOSAIC+"></page-link></li>
                    </ul>
                </course-resource>
                <course-resource title="Brown CS Health and Wellness">
                    <p>If you need accommodation for your physical and mental health, please feel free to reach out to Professor Fisler - we want to support you as much as we can in the most comfortable way for you. It is important to note that TAs should not be handling health and accomodations information, so inquiries should be directed towards the professors only.</p>
                    <ul>
                        <li>Resources for Physical/Mental Health, Accessibility and Accommodations can be found <page-link title="hw-resource-link" href="https://cs.brown.edu/media/filer_public/03/0a/030a6a2e-7a61-4c30-98c1-dce87b9d9899/brown_cs_health_and_wellness_resources.pdf" text="here"></page-link>.</li>
                    </ul>
                </course-resource>
            </div>
        </section>
    `,
};

const codingResourcesSection = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'page-section-title': pageSectionTitle,
        'course-resource': courseResource,
        'page-link': pageLink,
    },
    template: `
<section class="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="coding resources"
              :style-object="{'color': curPageThemeColor}"
              :text-style-object="{'border-bottom': 'solid thick'}"
            >
            </page-section-title>
            <div
              class="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
            <p>
                Please come to TA hours for help with conceptual and technical questions regarding assignments (except for exams). When you come to hours,
                we expect that you have read the 
            </p>
                <course-resource title="Coding Help">
                    <ul>
                        <li><page-link title="ta hours guide" href="https://hackmd.io/@cs18-spring-2021/H1-qgOkkO" text="TA Hours Guide"></page-link></li>
                        <li><page-link title="pair-programming" href="https://hackmd.io/@cs18-spring-2021/rk1u3BZk_" text="Pair Programming Guide"></page-link></li>
                        <li><page-link title="debugging guide" href="https://hackmd.io/@cs18-spring-2021/rkkNS5kkd" text="Debugging Guide"></page-link></li>
                        <li><page-link title="collaboration policy" href="https://hackmd.io/@cs18-spring-2021/H1bI7WX1d" text="Collaboration Policy"></page-link></li>
                    </ul>
                </course-resource>
                <course-resource title="Coding Guidelines">
                    <ul>
                        <li><page-link title="java style guide" href="https://cs.brown.edu/courses/csci0180/content/docs-spec/java-style.pdf" text="Java Style Guide"></page-link></li>
                        <li><page-link title="good coding practices" href="https://cs.brown.edu/courses/csci0180/content/docs-spec/java-gcp.pdf" text="Good Coding Practices"></page-link></li>
                        <li><page-link title="scala style guide" href="https://cs.brown.edu/courses/csci0180/content/docs-spec/scala-style.pdf" text="Scala Style Guide"></page-link></li>
                        <li><page-link title="additional scala good coding practices" href="https://cs.brown.edu/courses/csci0180/content/docs-spec/scala-gcp.pdf" text="Additional Scala Good Coding Practices"></page-link></li>
                        <li><page-link title="javadocs" href="http://docs.oracle.com/javase/8/docs/api/" text="Javadocs"></page-link></li>
                        <li><page-link title="scaladocs" href="http://www.scala-lang.org/api/current/index.html" text="Scaladocs"></page-link></li>
                        <li><page-link title="regex guide" href="https://cs.brown.edu/courses/csci0180/content/docs-gen/Regex.pdf" text="Regex Guide"></page-link></li>
                        <li><page-link title="tester documentation" href="http://www.ccs.neu.edu/javalib/Tester/index.html" text="Tester Documentation"></page-link></li>
                    </ul>
                </course-resource>
            </div>
        </section>
    `,
};

const otherSection = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'page-section-title': pageSectionTitle,
        'course-resource': courseResource,
        'page-link': pageLink,
    },
    template: `
        <section class="container-fluid flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="other"
              :style-object="{'color': curPageThemeColor}"
              :text-style-object="{'border-bottom': 'solid thick'}"
            >
            </page-section-title>
            <div
              class="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <course-resource title="Image Credits">
                <p>All images are from Pexels. Pexels' license can be found
                    <page-link title="mosaic-resource-link" href="https://www.pexels.com/license/" text="here"></page-link></p>
                </course-resource>
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
        'course-documents-section': courseDocumentsSection,
        'external-resources-section': externalResourcesSection,
        'coding-resources-section': codingResourcesSection,
        'software-setup-section': softwareSetupSection,
        'other-section': otherSection,
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
            <course-documents-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </course-documents-section>
            <software-setup-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </software-setup-section>      
            <coding-resources-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </coding-resources-section>
            <external-resources-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </external-resources-section>
            <other-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </other-section>
        </main>
    `,
});

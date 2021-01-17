import pageSectionTitle from './page-section.js';

Vue.component('page-content', {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'page-section-title': pageSectionTitle,
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
                  text="course calendar"
                  :style-object="{'color': curPageThemeColor}"
                  :text-style-object="{'border-bottom': 'solid thick'}"
                ></page-section-title>
                <div
                  class="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
                  :style="{ color: curPageThemeColor }"
                >
                    <h3>Notes For TA Hours:</h3>
                    <ul>
                        <li>TA hours are generally held on Zoom. To join, please sign up on <a href="signmeup.cs.brown.edu"><b>SignMeUp</b></a>. TAs' Zoom links can be found on SignMeUp.</li>
                        <li>Some TA hours are one-on-one, while some other are open to all students to join. The information of the format of each set of hours could be found on the course calendar.</li>
                        <li>Before signing up for TA hours, make sure to read the <a href="https://hackmd.io/@cs18-spring-2021/H1-qgOkkO"><b>TA Hours Guide</b></a>.</li>
                    </ul>
                    <p>Refer to the calendar below for the most up-to-date lecture and office hour schedule.</p>
                    <iframe title="course calendar" src="https://calendar.google.com/calendar/embed?src=c_4446ecafugiodg3or6d8f45g1o%40group.calendar.google.com&ctz=America%2FNew_York" class="d-none d-sm-block align-self-center" style="border: 0" width="100%" height="650" frameborder="0" scrolling="no"></iframe>
            </section>
        </main>
    `,
});

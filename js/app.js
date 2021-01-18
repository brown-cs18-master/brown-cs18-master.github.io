import pageBackground from './page-background.js';
import pageFooter from './page-footer.js';
import pageNavbar from './page-navbar.js';

new Vue({
    el: '#app',
    data: {
        pageThemeColors: [
            '#266079' /* しるべのクジラ */,
            '#266079' /*  */,
            '#266079' /* 始発とカフカ */,
            '#266079' /* palette */,
            '#266079' /* DAYBREAK FRONTLINE */,
            '#266079' /* サンセットバスストップ */,
            '#266079' /* 渚 */,
        ],
        navbarBackgroundColor: 'white',
        // navbarBackgroundColor: 'white',
        tabTexts: ['Home', 'Lectures', 'Assignments', 'Hours', 'Staff', 'Resources', 'Coming from CS15'],
        pageFilepaths: [
            'index.html',
            'lectures.html',
            'assignments.html',
            'hours.html',
            'staff.html',
            'resources.html',
            'coming-from-15.html',
        ],
        // busClasses: ['fas', 'fa-lg', 'fa-bus'],
        // planeClasses: ['fas', 'fa-lg', 'fa-plane'],
        // trainClasses: ['fas', 'fa-lg', 'fa-train'],
        // subwayClasses: ['fas', 'fa-lg', 'fa-subway'],
        // tramClasses: ['fas', 'fa-lg', 'fa-tram'],
        // bicycleClasses: ['fas', 'fa-lg', 'fa-bicycle'],
        // shuttleVanClasses: ['fas', 'fa-lg', 'fa-shuttle-van'],
        // shipClasses: ['fas', 'fa-lg', 'fa-ship'],
        busClasses: ['fas', 'fa-lg', 'fa-gem'],
        planeClasses: ['fas', 'fa-lg', 'fa-gem'],
        trainClasses: ['fas', 'fa-lg', 'fa-gem'],
        subwayClasses: ['fas', 'fa-lg', 'fa-gem'],
        tramClasses: ['fas', 'fa-lg', 'fa-gem'],
        bicycleClasses: ['fas', 'fa-lg', 'fa-gem'],
        shuttleVanClasses: ['fas', 'fa-lg', 'fa-gem'],
        shipClasses: ['fas', 'fa-lg', 'fa-gem'],
    },
    components: {
        'page-background': pageBackground,
        'page-footer': pageFooter,
        'page-navbar': pageNavbar,
    },
    computed: {
        currentTabText: function () {
            return document.title.substring(7);
        },
        tabnum: function () {
            console.log(this.currentTabText + ' ' + this.tabTexts.indexOf(this.currentTabText));
            return this.tabTexts.indexOf(this.currentTabText);
        },
        curPageThemeColor: function () {
            return this.pageThemeColors[this.tabnum];
        },
        curPageIconClasses: function () {
            return this.iconClasses[this.tabnum];
        },
        iconClasses: function () {
            return [
                this.shipClasses,
                this.busClasses,
                this.trainClasses,
                this.planeClasses,
                this.shuttleVanClasses,
                this.tramClasses,
                this.bicycleClasses,
            ];
        },
    },
});

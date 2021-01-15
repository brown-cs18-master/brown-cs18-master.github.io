const largeNavbarStopIcon = {
    props: {
        iconClasses: Array,
        color: String,
        isCurrentStop: Boolean,
    },
    data: function () {
        return {
            styleObject: {
                color: this.color,
            },
            classArray: [this.isCurrentStop ? 'visible' : 'invisible', ...this.iconClasses]
        };
    },
    template: `
        <i
          :style="styleObject"
          class="mb-2"
          :class="classArray"
          >
        </i>
    `
};

const largeNavbarStopCircle = {
    props: {
        radius: {
            type: Number,
            default: 0.7,
        },
        backgroundColor: String,
        borderColor: String,
        stopThemeColor: String,
        isCurrentStop: Boolean,
        hovering: Boolean,
    },
    data: function () {
        const diameter = 2 * this.radius;
        return {
            styleObject: {
                width: `${diameter}rem`,
                height: `${diameter}rem`,
                'border': `solid thin ${this.borderColor}`,
                'background-color': this.backgroundColor,
            }
        };
    },
    template: `
        <div
          class="navbar-stop-circle d-flex flex-row justify-content-center align-items-center rounded-circle"
          :style="styleObject">
              <i
                v-if="!isCurrentStop"
                v-show="hovering"
                :style="{ color: stopThemeColor }"
                class="fas fa-search fa-xs"></i>
          </div>
    `
};

const largeNavbarStopLabel = {
    props: {
        text: String,
        color: String,
    },
    template: `
        <a class="font-weight-bold text-capitalize" :style="{ color: color }">{{text}}</a>
    `
};

const largeNavbarStop = {
    props: {
        primaryColor: String,
        secondaryColor: String,
        stopThemeColor: String,
        iconClasses: Array,
        pageFilepath: String,
        labelText: String,
        isCurrentStop: Boolean,
    },
    components: {
        'large-navbar-stop-icon': largeNavbarStopIcon,
        'large-navbar-stop-circle': largeNavbarStopCircle,
        'large-navbar-stop-label': largeNavbarStopLabel
    },
    data: function () {
        return {
            hovering: false,
            styleObject: {
                cursor: 'pointer',
                'z-index': 1,
            },
        };
    },
    methods: {
        navigate: function () {
            window.location.href = this.pageFilepath;
        }
    },
    template: `
        <div
          class="d-flex flex-column justify-content-center align-items-center"
          :style="styleObject"
          @click.stop.prevent="navigate"
          @mouseenter.passive="hovering = true"
          @mouseleave.passive="hovering = false">
            <large-navbar-stop-icon
              :icon-classes="iconClasses"
              :color="primaryColor"
              :is-current-stop="isCurrentStop"
              >
              </large-navbar-stop-icon>
            <large-navbar-stop-circle
              :is-current-stop="isCurrentStop"
              :hovering="hovering"
              :border-color="primaryColor"
              :background-color="isCurrentStop ? primaryColor: secondaryColor"
              :stop-theme-color="stopThemeColor"
              >
              </large-navbar-stop-circle>
            <large-navbar-stop-label
              :text="labelText"
              :color="primaryColor"
              ></large-navbar-stop-label>
        </div>
    `
};

const collapsedNavbarIcon = {
    props: {
        iconClasses: Array,
        color: String,
        isExpanded: Boolean,
    },
    data: function () {
        return {
            styleObject: {
                color: this.color,
                cursor: 'pointer',
            },
        };
    },
    methods: {
        expandNavbar: function () {
            this.$emit('update:isExpanded', !this.isExpanded);
        },
    },
    template: `
        <div
            class="mr-2"
            @click="expandNavbar"
        >
            <i
              id="collapsed-navbar-icon"
              :style="styleObject"
              :class="iconClasses"
            >
            </i>
        </div>
    `,
};

const collapsedNavbarStop = {
    props: {
        text: String,
        color: String,
        backgroundColor: String,
        pageFilepath: String,
    },
    data: function () {
        return {
            onlyInitial: false,
            styleObject: {
                color: this.color,
                'background-color': this.backgroundColor,
                cursor: 'pointer',
                height: '20%',
                width: '90%',
                margin: '10px',
                fontSize: '20px',
                textAlign: 'center',
                verticalAlign: 'middle',
                lineHeight: '250%'
            },
        };
    },
    computed: {
        displayedText: function () {
            // return this.onlyInitial ? this.text.charAt(0) : this.text;
            return this.text;
        },
        classArray: function () {
            return ['badge-pill'];
        },
    },
    methods: {
        navigate: function () {
            window.location.href = this.pageFilepath;
        }
    },
    template: `
        <span
          class="collapsed-navbar-stop badge mr-2 text-capitalize"
          :class="classArray"
          :style="styleObject"
          @click.stop.prevent="navigate"
          @mouseenter.stop.passive="onlyInitial = false"
          @mouseleave.stop.passive="onlyInitial = false"
        >{{displayedText}}</span>
    `
};

const collapsedNavbar = {
    props: {
        iconClasses: Array,
        primaryColor: String,
        secondaryColor: String,
        stopThemeColors: "white",
        pageFilepaths: Array,
        labelTexts: Array,
    },
    data: function () {
        return {
            isExpanded: false,
        };
    },
    computed: {
        navbarStopsContainerClassArray: function () {
            return this.isExpanded ? ['d-flex', 'flex-column', 'justify-content-between', 'align-items-start'] : [];
        }
    },
    components: {
        'collapsed-navbar-icon': collapsedNavbarIcon,
        'collapsed-navbar-stop': collapsedNavbarStop,
    },
    template: `
      <div class="navbar-toggler">
          <div class="d-flex flex-row">
              <collapsed-navbar-icon
                :icon-classes="iconClasses"
                :color="primaryColor"
                :is-expanded="isExpanded"
                :is-expanded.sync="isExpanded"
              ></collapsed-navbar-icon>
              <div
                v-show="isExpanded"
                :class="navbarStopsContainerClassArray"
                :style="{
                    'background-color':'#027800',
                    padding: '10px',
                    height: '600px',
                    width: '300px',
                    'border': '5px solid black',
                    position: 'absolute',
                    top: '0px',
                    left: '75px'
                }"
                >
                  <collapsed-navbar-stop
                    v-for="(labelText, index) of labelTexts"
                    :key="index"
                    :text="labelText"
                    :color="secondaryColor"
                    :background-color="stopThemeColors"
                    :page-filepath="pageFilepaths[index]"
                  >
                  </collapsed-navbar-stop>
              </div>
          </div>
      </div>
    `,
};

const pageNavbar = {
    name: 'page-navbar',
    props: {
        stopThemeColors: Array,
        primaryColor: String,
        secondaryColor: String,
        navbarBackgroundColor: String,
        currentTabText: String,
        tabnum: Number,
        pageFilepaths: Array,
        labelTexts: Array,
        iconClasses: Array,
    },
    components: {
        'large-navbar-stop': largeNavbarStop,
        'collapsed-navbar': collapsedNavbar
    },
    data: function () {
        const lastCommaIndex = this.navbarBackgroundColor.lastIndexOf(',');
        // const initialOpacity = parseFloat(this.navbarBackgroundColor.substring(lastCommaIndex + 1, this.navbarBackgroundColor.length - 1));
        const initialOpacity = 1;
        return {
            initialOpacity: initialOpacity,
            backgroundColor: this.navbarBackgroundColor
        };
    },
    mounted: function () {
        window.addEventListener('resize', this.repositionConnectingLine, { passive: true });
        window.addEventListener('scroll', this.checkScrollPosition, { passive: true });
        this.repositionConnectingLine();
    },
    methods: {
        checkScrollPosition: function () {
            const pageBackgroundElement = document.getElementById('page-background');
            if (pageBackgroundElement) {
                if (window.scrollY > (pageBackgroundElement.offsetTop + pageBackgroundElement.offsetHeight)) {
                    this.changeBackgroundOpacity(1);
                } else {
                    this.changeBackgroundOpacity(this.initialOpacity);
                }
            }
        },
        changeBackgroundOpacity: function (opacity) {
            const lastCommaIndex = this.backgroundColor.lastIndexOf(',');
            const colorStr = this.backgroundColor.substring(0, lastCommaIndex);
            this.backgroundColor = `${colorStr}, ${opacity})`;
        },
        repositionConnectingLine: function () {
            const stopCircles = this.$el.querySelectorAll('.navbar-stop-circle');
            let { left: fcLeft, width: circleWidth } = stopCircles[0].getBoundingClientRect();
            fcLeft += circleWidth / 2;
            let { left: lcLeft } = stopCircles[stopCircles.length - 1].getBoundingClientRect();
            lcLeft += circleWidth / 2;
            const lineElement = document.getElementById('navbar-stop-connecting-line');
            const lineHeight = 9;

            const lineLeft = fcLeft;
            lineElement.style.left = `${lineLeft}px`;
            const lineTop = 52.6640625 - lineHeight / 2;
            lineElement.style.top = `${lineTop}px`;
            const lineWidth = lcLeft - fcLeft;
            lineElement.style.width = `${lineWidth}px`;
        },
    },
    template: `
        <nav
          class="navbar navbar-expand-md fixed-top"
          :style="{'background-color': '#CAEFFF', 'height': '100px'}"
          @mouseenter.passive="changeBackgroundOpacity(1)"
          @mouseleave.passive="changeBackgroundOpacity(initialOpacity)"
        >
            <collapsed-navbar
              :icon-classes="iconClasses[tabnum]"
              :primary-color="primaryColor"
              :secondary-color="secondaryColor"
              :stop-theme-colors="stopThemeColors"
              :page-filepaths="pageFilepaths"
              :label-texts="labelTexts"
            ></collapsed-navbar>
            <div class="collapse navbar-collapse">
                <div class="container d-flex flex-row justify-content-between py-2">
                    <div
                      id="navbar-stop-connecting-line"
                      class="rounded-pill d-inline-block position-absolute"
                      style="height: 9px;"
                      :style="{'background-color': 'white'}"
                    >
                    </div>
                    <large-navbar-stop
                      v-for="(labelText, index) of labelTexts"
                      :key="index"
                      :primary-color="primaryColor"
                      :secondary-color="secondaryColor"
                      :stop-theme-color="stopThemeColors"
                      :page-filepath="pageFilepaths[index]"
                      :icon-classes="iconClasses[index]"
                      :label-text="labelText"
                      :is-current-stop="currentTabText === labelText"></large-navbar-stop>
                  </div>
            </div>
        </nav>
    `
};

export default pageNavbar;
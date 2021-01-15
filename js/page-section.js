const pageSectionTitle = {
    props: {
        text: String,
        iconClasses: Array,
        styleObject: Object,
        textStyleObject: Object,
    },
    template: `
        <h2
          class="text-capitalize text-nowrap font-weight-bold mx-4 mx-sm-5 mb-4 mb-sm-5 w-25"
          style="font-size: xx-large"
          :style="styleObject"
        >
            <i class="mr-2" :class="iconClasses"></i>
            <span
              class="d-block d-sm-inline-block"
              :style="textStyleObject"
            >
              {{text}}
            </span>
        </h2>
    `
};


export default pageSectionTitle;

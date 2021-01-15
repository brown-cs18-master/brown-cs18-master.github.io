const pageClickCopy = {
    props: {
        text: String,
    },
    methods: {
        selectAndCopy: function() {
            const topicNameElement = this.$el;
            document.execCommand('copy');
            if (document.selection) { // IE
                const range = document.body.createTextRange();
                range.moveToElementText(topicNameElement);
                range.select();
            } else if (window.getSelection) {
                const range = document.createRange();
                range.selectNode(topicNameElement);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
            }
        },
        copyText: function(event) {
            if (event.clipboardData) {
                event.clipboardData.setData('text/plain', this.name);
            }
        },
    },
    template: `
        <span
          style="cursor: pointer"
          @click.prevent="selectAndCopy"
          @copy.prevent="copyText"
        >
          {{text}}
        </span>
    `,
};

export default pageClickCopy;

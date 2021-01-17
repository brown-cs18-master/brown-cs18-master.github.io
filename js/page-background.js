const pageBackground = {
    name: 'page-background',
    props: {
        backgroundImageUrl: String,
        showTitle: {
            type: Boolean,
            default: true,
        },
    },
    data: function () {
        return {
            fallbackURL: `url(${this.backgroundImageUrl})`,
            webpURL: `url(${this.backgroundImageUrl.substring(
                0,
                this.backgroundImageUrl.lastIndexOf('.')
            )}.webp)`,
            useWebp: Boolean(Modernizr.webp),
        };
    },
    template: `
        <div
          id="page-background"
          class="container-fluid h-50"
          style="
            background-image: ;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover"
          :style="{'background-image': useWebp ? webpURL: fallbackURL}"
        >
            <picture>
                <source srcset="imgs/title.png" type="image/png">
                <img
                  src="imgs/title.png"
                  alt="course title"
                  class="img-fluid"
                  style="
                    position: absolute;
                    top: 32%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                  "
                >
            </picture>
        </div>
    `,
};

export default pageBackground;

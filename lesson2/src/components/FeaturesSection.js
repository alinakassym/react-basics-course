export const FeaturesSection = () => {
    return (
        <section class="features">
            <div class="wrapper">
                <div class="features-wrapper">
                    <h2 class="features-head">Уникальный заголовок для преимущества компании</h2>
                    <div class="features-subhead">О нас</div>
                    <div class="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                                                    сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему
                                                    оратору отточить.
                    </div>
                    <div class="features-slider">
                        <div class="features-slider_items">
                            <div class="features-slider_item">
                                <div class="features-img" style={{backgroundImage: `url(./images/1.svg)`}}></div>
                                <div class="features-feature">Первое целевое преимущество</div>
                            </div>
                            <div class="features-slider_item">
                                <div class="features-img" style={{backgroundImage: `url(./images/2.svg)`}}></div>
                                <div class="features-feature">Второе целевое преимущество</div>
                            </div>
                            <div class="features-slider_item">
                                <div class="features-img" style={{backgroundImage: `url(./images/3.svg)`}}></div>
                                <div class="features-feature">Третье целевое преимущество</div>
                            </div>
                            <div class="features-slider_item">
                                <div class="features-img" style={{backgroundImage: `url(./images/4.svg)`}}></div>
                                <div class="features-feature">Четвертое целевое преимущество</div>
                            </div>
                        </div>
                        <button class="features-slider-arrow features-slider-prev">
                            <svg width="9" height="16"
                                    xmlns="http://www.w3.org/2000/svg">
                                <path
                                        d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
                                </path>
                            </svg>
                        </button>
                        <button class="features-slider-arrow features-slider-next">
                            <svg width="9"
                                    height="16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                        d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
};
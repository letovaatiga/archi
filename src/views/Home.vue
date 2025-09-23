<script>
import IconInstagram from "../components/icons/InstagramIcon.vue";
import IconWP from "../components/icons/WPIcon.vue";

import { Pagination, A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
    name: "Home",

    components: {
        IconInstagram,
        IconWP,
        Swiper,
        SwiperSlide,
    },

    setup() {
        const onSwiper = (swiper) => {};
        const onSlideChange = () => {};
        return {
            onSwiper,
            onSlideChange,
            modules: [Pagination, A11y, Autoplay, Navigation],
        };
    },
}
</script>

<template>
    <div class="hero" id="hero">
        <swiper :modules="modules" :pagination="{ clickable: true }" :slides-per-view="1" @swiper="onSwiper" @slideChange="onSlideChange" autoplay class="hero-slider" >
            <swiper-slide>
                <div class="hero-slider-item">
                    <img src="../assets/img/coming-soon.png" alt="" />
                </div>
            </swiper-slide>
        </swiper>

        <div class="archi-instagram">
            <img src="../assets/img/avatar.png" class="archi-instagram-avatar" alt="" />
            <img src="../assets/img/archi-qr.png" class="archi-instagram-qr" alt="" />
            <div class="archi-instagram-phone">
                <IconWP />
                <a href="tel:+994 55 533-15-53">+994 55 533-15-53</a>
            </div>
        </div>

        <div class="hero-banner">
            <img src="../assets/img/banner.png" alt="" />
        </div>
    </div>

    <section class="interior-section" id="interior">
        <div class="section-title">
            <span>Интерьер</span>
        </div>

        <swiper :modules="modules" :slides-per-view="4" :space-between="24" navigation @swiper="onSwiper" @slideChange="onSlideChange" class="section-slider">
            <swiper-slide>
                <div class="section-slider-item">
                    <a href="">
                        <img src="../assets/img/image.png" alt="" />
                    </a>
                    <div class="section-slider-item-text">
                        <div>Aston Louis</div>
                        <ul>
                            <li>
                                <a href=""><IconInstagram /></a>
                            </li>
                            <li>
                                <a href=""><IconWP /></a>
                            </li>
                        </ul>
                    </div>
                </div>    
            </swiper-slide>
            <swiper-slide>
                <div class="section-slider-item">
                    <a href="">
                        <img src="../assets/img/image.png" alt="" />
                    </a>
                    <div class="section-slider-item-text">
                        <div>Aston Louis</div>
                        <ul>
                            <li>
                                <a href=""><IconInstagram /></a>
                            </li>
                            <li>
                                <a href=""><IconWP /></a>
                            </li>
                        </ul>
                    </div>
                </div>    
            </swiper-slide>
            <swiper-slide>
                <div class="section-slider-item">
                    <a href="">
                        <img src="../assets/img/image.png" alt="" />
                    </a>
                    <div class="section-slider-item-text">
                        <div>Aston Louis</div>
                        <ul>
                            <li>
                                <a href=""><IconInstagram /></a>
                            </li>
                            <li>
                                <a href=""><IconWP /></a>
                            </li>
                        </ul>
                    </div>
                </div>    
            </swiper-slide>
            <swiper-slide>
                <div class="section-slider-item">
                    <a href="">
                        <img src="../assets/img/image.png" alt="" />
                    </a>
                    <div class="section-slider-item-text">
                        <div>Aston Louis</div>
                        <ul>
                            <li>
                                <a href=""><IconInstagram /></a>
                            </li>
                            <li>
                                <a href=""><IconWP /></a>
                            </li>
                        </ul>
                    </div>
                </div>    
            </swiper-slide>
            <swiper-slide>
                <div class="section-slider-item">
                    <a href="">
                        <img src="../assets/img/image.png" alt="" />
                    </a>
                    <div class="section-slider-item-text">
                        <div>Aston Louis</div>
                        <ul>
                            <li>
                                <a href=""><IconInstagram /></a>
                            </li>
                            <li>
                                <a href=""><IconWP /></a>
                            </li>
                        </ul>
                    </div>
                </div>    
            </swiper-slide>
        </swiper>
    </section>
</template>  
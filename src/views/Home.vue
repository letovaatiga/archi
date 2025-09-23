<script>
import IconWP from "../components/icons/WPIcon.vue";

import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

export default {
    name: "Home",

    components: {
        IconWP,
        Swiper,
        SwiperSlide,
    },

    setup() {
        const onSwiper = (swiper) => {
        };
        const onSlideChange = () => {
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Pagination, A11y, Autoplay],
        };
    },
}

</script>

<template>
    <section class="hero" id="hero">
        <swiper :modules="modules" :pagination="{ clickable: true }"  @swiper="onSwiper" @slideChange="onSlideChange" autoplay class="hero-slider" >
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
    </section>
</template>  
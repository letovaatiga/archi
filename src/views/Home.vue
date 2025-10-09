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
    <div class="hero">
        <div class="anchor" id="hero"></div>
        
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
            <a href="tel:+994 55 533-15-53" class="archi-instagram-phone">
                <IconWP />
                <span>+994 55 533-15-53</span>
            </a>
        </div>

        <div class="hero-banner">
            <img src="../assets/img/banner.png" alt="" />
        </div>
    </div>

    <section class="interior-section">
        <div class="anchor" id="interior"></div>

        <div class="section-title">
            <h2>Интерьер</h2>
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
    
    <section class="furniture-section">
        <div class="anchor" id="furniture"></div>

        <div class="section-title">
            <h2>Мебель</h2>
        </div>

        <swiper :modules="modules" :slides-per-view="4" :space-between="24" navigation @swiper="onSwiper" @slideChange="onSlideChange" class="section-slider">
            <swiper-slide>
                <div class="section-slider-item">
                    <a href="">
                        <img src="../assets/img/image-1.png" alt="" />
                    </a>
                    <div class="section-slider-item-text">
                        <div>Lorem Ipsum Dolor</div>
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
                        <img src="../assets/img/image-1.png" alt="" />
                    </a>
                    <div class="section-slider-item-text">
                        <div>Lorem Ipsum Dolor</div>
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
                        <img src="../assets/img/image-1.png" alt="" />
                    </a>
                    <div class="section-slider-item-text">
                        <div>Lorem Ipsum Dolor</div>
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
                        <img src="../assets/img/image-1.png" alt="" />
                    </a>
                    <div class="section-slider-item-text">
                        <div>Lorem Ipsum Dolor</div>
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
                        <img src="../assets/img/image-1.png" alt="" />
                    </a>
                    <div class="section-slider-item-text">
                        <div>Lorem Ipsum Dolor</div>
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

    <section class="about-section">
        <div class="about-section-item">
            <div class="about-section-banner" style="background-color: white;">
                <a href="">
                    <img src="" alt="" />
                    <p style="color: black;"></p>
                </a>
            </div>

            <div class="partners-block">
                <h6>Наши партнеры</h6>

                <div class="placeholder"></div>
            </div>
        </div>

        <div class="about-section-item">
            <h6>Самое интересное в блоге</h6>

            <div class="blog-block"></div>
        </div>
    </section>

    <div class="contact-section">
        <div class="contact-section-block">
            <div class="contact-section-block--text">
                <p>Контакт для связи заказать проект.</p>
                <p>Никаких мейлов, форм - просто wp</p>
            </div>
            
            <a href="tel:+994 55 533-15-53" class="contact-section-block--phone">
                <IconWP />
                <span>+994 55 533-15-53</span>
            </a>
        </div>
        <div class="contact-section-block"></div>
    </div>
</template>  
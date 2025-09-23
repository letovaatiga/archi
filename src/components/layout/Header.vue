<script setup>
import IconInstagram from "../icons/InstagramIcon.vue";

import { ref, onMounted, onUnmounted } from "vue";

const hideLogo = ref(false);
const scrolled = ref(false);

function handleScroll() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    hideLogo.value = scrollY > viewportHeight * 0.4;
    scrolled.value = scrollY > 10;
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <div class="header" :class="{ scrolled: scrolled }">
        <div class="logo" :class="{ hidden: hideLogo }">
            <img src="../../assets/img/archi-logo.png" alt="">
        </div>

        <nav class="nav">
            <ul>
                <li>
                    <router-link to="/#hero">большая стройка</router-link>
                </li>
                <li>
                    <router-link to="/#interior">интерьер</router-link>
                </li>
                <li>
                    <router-link to="/#">ландшафт</router-link>
                </li>
                <li>
                    <router-link to="/#">мебель</router-link>
                </li>
                <li>
                    <router-link to="/#">декор</router-link>
                </li>
                <li>
                    <router-link to="/#">новинки</router-link>
                </li>
                <li>
                    <router-link to="/#">скидки</router-link>
                </li>
            </ul>
        </nav>

        <div class="menu">
            <div class="menu-left">
                <ul class="lang">
                    <li class="active">Русский</li>
                    <li>English</li>
                    <li>Azeri</li>
                </ul>

                <ul class="menu-list">
                    <li>
                        <router-link to="">главная</router-link>
                    </li>
                    <li>
                        <router-link to="">статьи</router-link>
                    </li>
                    <li>
                        <router-link to="">студия</router-link>
                    </li>
                    <li>
                        <router-link to="">магазины</router-link>
                    </li>
                </ul>
            </div>

            <div class="menu-right">
                <div class="login">
                    <span>логин</span>
                </div>

                <div class="registration">
                    <span>регистрация</span>
                </div>

                <div class="socials">
                    <a href="https://www.instagram.com/archi.baku/" target="_blank">
                        <IconInstagram />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
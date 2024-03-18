<template>

    <header>
        <nav>
            <div class="nav-logo-container">
                <router-link to="/">
                    <img class="nav-logo" src="../assets/images/logo/logo-hor.png" alt="logo">
                </router-link>
            </div>

            <div class="navDarkmodeBtn">
                <button @click="toggleDark()" class="darkmode">
                    <i class='fas fa-sun'></i>
                </button>
            </div>

            <div class="nav-menu">
                <ul class="nav-list">
                    <button @click="toggleDark()" class="darkmode">
                        <i class='fas fa-sun'></i>
                    </button>
                    <li class="nav-list-item">
                        <router-link class="nav-list-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-list-item">
                        <router-link class="nav-list-link" to="/News">News</router-link>
                    </li>
                    <li class="nav-list-item">
                        <router-link class="nav-list-link" to="/Über-uns">Über uns</router-link>
                    </li>
                    <li class="nav-list-item">
                        <router-link class="nav-list-link" to="/Kontakt">Kontakt</router-link>
                    </li>
                </ul>

                <div ref="navBtn" class="nav-dropdown-btn" @click="toggleDropdown">
                    <span ref="rect1" class="nav-button-rect1"></span>
                    <span ref="rect2" class="nav-button-rect2"></span>
                    <span ref="rect3" class="nav-button-rect3"></span>
                </div>

                <div class="nav-dropdown-menu" v-show="navDropdownMenu">
                    <ul class="nav-dropdown-list">
                        <li class="nav-dropdown-item">
                            <router-link @click="toggleDropdown" class="nav-dropdown-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-dropdown-item">
                            <router-link @click="toggleDropdown" class="nav-dropdown-link" to="/News">News</router-link>
                        </li>
                        <li class="nav-dropdown-item">
                            <router-link @click="toggleDropdown" class="nav-dropdown-link" to="/Über-uns">Über
                                uns</router-link>
                        </li>
                        <li class="nav-dropdown-item">
                            <router-link @click="toggleDropdown" class="nav-dropdown-link"
                                to="/Kontakt">Kontakt</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <main>
        <router-view></router-view>
    </main>
    <footer>
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-heading">
                    <h1>Get in touch</h1>
                    <div class="footer-email">
                        <h2>
                            Schreib uns eine Email: <a style="text-wrap: nowrap;"
                                href="mailto:#"><span>info@landjugend-primisweiler.de</span></a>
                        </h2>
                        <h2>
                            Komm bei uns vorbei, jeden Mittwoch ab <span
                                style="cursor: pointer; :hover {color: var(--accent)};">20Uhr</span> im
                            Landjugendkeller
                        </h2>
                    </div>
                </div>
            </div>
            <div class="footer-col-container">
                <div class="footer-col-1">
                    <ul class="footer-list">
                        <li class="footer-item">
                            <router-link class="footer-link" to="/Datenschutz">Datenschutzerklärung</router-link>
                        </li>
                        <li class="footer-item">
                            <router-link class="footer-link" to="/Impressum">Impressum</router-link>
                        </li>
                    </ul>
                </div>
                <div class="footer-col-2">
                    <div class="footer-socials">
                        <a href="https://www.instagram.com/lj_primisweiler/" target="_blank">
                            <img src="../assets/images/Instagram.svg" alt="instagram-logo" />
                        </a>
                        <a href="https://www.facebook.com/LJPrimisweiler/?locale=de_DE" target="_blank">
                            <img src="../assets/images/facebook.svg" alt="facebook-logo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark(false, {
    selector: "body",
    attribute: "color-scheme",
    valueDark: "dark",
    valueLight: "light",
});

const toggleDark = useToggle(isDark);

const navDropdownMenu = ref(false);

const toggleDropdown = () => {
    navDropdownMenu.value = !navDropdownMenu.value;
    if (navDropdownMenu.value) {
        console.log("Nav Menu an")
    }
    else {
        console.log("Nav Menu aus")
    };
};
</script>
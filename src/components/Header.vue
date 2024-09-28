<template>
    <!-- Header v1 -->
    <header id="js-header" class="u-header u-header--sticky-top u-header--change-appearance u-header--change-logo"
              data-header-fix-moment="0">
        <div class="u-header__section g-bg-black-opacity-0_2 g-transition-0_3 g-py-7 g-py-23--md"
             data-header-fix-moment-exclude="g-bg-black-opacity-0_5 g-py-23--md"
             data-header-fix-moment-classes="u-shadow-v19 g-bg-white g-py-15--md" >
          <nav class="navbar navbar-expand-lg g-py-0 " >
            <div class="container g-pos-rel">
                    <!-- Logo -->
                    <a href="#!" class="js-go-to navbar-brand u-header__logo" data-type="static">
                        <img class="u-header__logo-img u-header__logo-img--main g-width-50" src="assets/img/logo.png"
                    alt="Image description">
                    </a>
                    <!-- End Logo -->

                    <!-- Navigation -->
                    <div class="collapse navbar-collapse align-items-center flex-sm-row" id="navBar">
                        <ul id="js-scroll-nav" class="navbar-nav text-uppercase g-letter-spacing-1 g-font-size-16 g-pt-20 g-pt-0--lg ml-auto ">
                            <li class="nav-item g-mr-30--lg g-mb-7 g-mb-0--lg" v-for="(item, index) in navs" :key="index"
                            :class="{active: $route.path == item.path}"> 
                            <router-link :to=item.path class="nav-link">{{ $t(item.name) }} <span
                                class="sr-only">(current)</span></router-link>
                            </li>

                            <li class="nav-item g-ml-10--lg">

                                <button @click="changeLocale('en')" id="changeLocale"> <img :src="imgs[currentImage]"
                                        id="img" alt="" height="20px" /> </button>

                            </li>
                        </ul>
                    </div>
                    <!-- End Navigation -->

                    <!-- Responsive Toggle Button -->
              <button class="navbar-toggler btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-top-15 g-right-0" type="button"
                      aria-label="Toggle navigation"
                      aria-expanded="false"
                      aria-controls="navBar"
                      data-toggle="collapse"
                      data-target="#navBar">
                <span class="hamburger hamburger--slider">
                  <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                  </span>
                </span>
              </button>
              <!-- End Responsive Toggle Button -->
                </div>
            </nav>
        </div>
    </header>

</template>

<script>

import { mapState } from 'pinia';
import { useNavStore } from '@/store/liberary.js';
export default {
    data() {

        return {
            currentImage: 1,
            imgs: [
                "assets/img/flat/united-states.svg", "assets/img/flat/cambodia.svg"
            ],
            

        }
    },
    computed: {
                ...mapState(useNavStore, ['navs']),
            },
    methods: {
        changeLocale() {
            //alert(this.currentImage)
            if (this.$i18n.locale == "en") {
                this.$i18n.locale = "khm";
                this.currentImage = 0;
                // alert(this.currentImage);
            } else {
                this.$i18n.locale = "en";
                this.currentImage = 1;
                //alert(this.currentImage);
            }


        }
    }
}
</script>
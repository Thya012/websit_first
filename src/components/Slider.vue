<template>
    <div class="hero_area">
      <div class="hero_bg_box">
        <div class="bg_img_box">
          <img src="/assets/img/hero-bg.png" alt="" width="50%"/>
        </div>
      </div>
      <!-- slider section -->
      <section class="slider_section">
        <div id="customCarousel1" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item"
            v-for="(item, index) in heroes" :key="index"
            :class="{ active: index === 0 }">
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <div class="detail-box">
                      <h1>
                       {{ $t(item.title_hero) }}
                      
                      </h1>
                      <p>
                        {{ $t(item.description) }}
                      </p>
                      <div class="btn-box">
                        <RouterLink to="/register"  class="btn1"> {{$t('register')}} </RouterLink>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="img-box">
                      <img :src="item.image" alt="" height="400px"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          <ol class="carousel-indicators">
            <li
              data-target="#customCarousel1"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#customCarousel1" data-slide-to="1"></li>
            <li data-target="#customCarousel1" data-slide-to="2"></li>
          </ol>
        </div>
      </section>
    <!-- end slider section -->
    </div>
  </template>
<script>
import Header from "@/components/Header.vue";
import { mapState } from 'pinia';
import {useHeroStore} from '@/store/liberary';
export default {
  components: {
    Header,
  },
  computed: {
    ...mapState(useHeroStore, ['heroes']),
  },
};
</script>
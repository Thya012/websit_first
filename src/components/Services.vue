<template>
     <!-- Section Content -->
     <section id="services-section" class="g-bg-secondary g-py-100">
        <div class="container g-max-width-780 text-center g-mb-60">
          <div class="text-center text-uppercase u-heading-v5-3 u-heading-v5-color-primary u-heading-v5-rounded-50x g-mb-20">
            <h1 class="g-font-weight-700 g-color-primary g-mb-15">Services</h1>
            <h2 class="u-heading-v5__title g-line-height-1_2 g-font-weight-700 g-font-size-32 g-font-size-40--md g-bg-primary--before g-pb-40">What do we propose</h2>
          </div>

          <p class="mb-0">The restaurants make you love. Find the right food and groceries to suit your mood</p>
        </div>

        <div class="container text-center">
          <!-- Row -->
          <div class="row">
            <div class="col-md-6 col-lg-3 g-mb-40 g-mb-0--lg" v-for="(item, index) in services" :key="index">
              <span class="u-icon-v1 u-icon-size--3xl g-color-primary g-mb-15">
               <img :src="item.image" alt="" width="60px">
              </span>
              <h3 class="h6 text-uppercase g-font-weight-600 g-mb-25">
                <a class="g-color-black g-color-primary--hover g-text-underline--none--hover" href="#!">{{ $t(item.title) }}</a>
              </h3>
              <p class="g-font-size-default mb-0 " style="text-align: justify;">{{ $t(item.description) }}</p>
            </div>

           
          </div>
          <!-- End Row -->
        </div>
      </section>
      <!-- End Section Content -->
</template>

<script>
import { useServicesStore } from '@/store/liberary';
import { mapState } from 'pinia';
export default {
    data() {

        return {
        }
    },
    computed: {
                ...mapState(useServicesStore, ['services']),
              
            },
    
}
</script>

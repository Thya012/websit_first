<template>
  <!-- Section Content -->
  <section id="specialOffers" class="g-py-120 " >
    <div class="container ">
      <div class=" g-brd-primary ">
        <h2 class="text-uppercase u-heading-v2__title g-line-height-1_3 g-font-weight-700 g-font-size-26 g-mb-60">
          Special offer</h2>
      </div>

      <div class="js-carousel" data-infinite="true"
        data-arrows-classes="u-arrow-v1 g-pos-abs g-right-0 g-bottom-100x g-width-35 g-width-45--md g-height-35 g-height-45--md g-font-size-18 g-color-gray-light-v1 g-color-white--hover g-bg-primary--hover g-brd-around g-brd-gray-light-v1 g-brd-primary--hover g-rounded-50x g-mb-65 g-transition-0_2 g-transition--ease-in"
        data-arrow-left-classes="fa fa-angle-left g-mr-40 g-mr-60--md" data-arrow-right-classes="fa fa-angle-right">
        <div class="js-slide" v-for="(item, index) in specials" :key="index">
          <!-- Article -->
          <article class="row g-bg-secondary mx-0">
            <div class="col-md-6 col-lg-7 g-bg-size-cover g-min-height-250"
              :data-bg-img-src="item.image"></div>

            <div class="col-md-6 col-lg-5 g-pa-30">
              <!-- Article Header -->
             

              <!-- Article Title -->
              <h3 class="text-uppercase g-font-weight-700 g-font-size-16 g-mb-20">
                {{ item.title }}
              </h3>
              <!-- End Article Title -->
              <p class=" g-mb-25">{{ item.description }}</p>



              <!-- Article Footer -->
              <footer class="d-flex justify-content">
                <div class="align-self-center">
                  <div class="g-font-weight-700 g-font-size-16">
                    <s>{{ item.price }}</s>
                    <span class="g-color-primary g-px-50">{{ item.s_price }}</span>
                  </div>
                </div>
              </footer>
                <div class="align-self-center g-py-20">
                  <router-link to="/special" class="btn btn-lg text-uppercase u-btn-primary g-font-weight-700 g-font-size-12 g-color-white-opacity-0_7 g-py-12 g-py-15--md g-px-20 g-px-40--md"
                    >Learn More</router-link>
                </div>
              
              <!-- End Article Footer -->
            </div>
          </article>
          <!-- End Article -->

        </div>
       
      </div>
    </div>
  </section>
 
  <!-- End Section Content -->
</template>
<script>
import { useSpecialStore } from '@/store/liberary';
import { mapState } from 'pinia';
export default {
  components:{
   // Myscript,
  },

  computed: {
                ...mapState(useSpecialStore, ['specials']),
              
            },
   


  mounted(){
    //doScript
    //const doScript = document.HSCore.components.HSCarousel.init('.js-carousel');
    const plugin = document.createElement('script');
    document.querySelector('.js-carousel');
   //doScript()
    plugin.setAttribute(
'src',
'assets/js/components/hs.carousel.js'
    );
    plugin.async =true;
    document.head.append(plugin);
   
   
  }
}


</script>
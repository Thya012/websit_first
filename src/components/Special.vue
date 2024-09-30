<template>
  <!-- Section Content -->
  <section id="specialOffers" >
    <div class="container ">
      <div class=" g-brd-primary ">
        <h2 class="text-uppercase u-heading-v2__title g-line-height-1_3 g-font-weight-700 g-font-size-26 g-mb-60">
          Special offer</h2>
      </div>

      <div class="js-carousel" data-infinite="false"
        data-arrows-classes="u-arrow-v1 g-pos-abs g-right-0 g-bottom-100x g-width-35 g-width-45--md g-height-35 g-height-45--md g-font-size-18 g-color-gray-light-v1 g-color-white--hover g-bg-primary--hover g-brd-around g-brd-gray-light-v1 g-brd-primary--hover g-rounded-50x g-mb-65 g-transition-0_2 g-transition--ease-in"
        data-arrow-left-classes="fa fa-angle-left g-mr-40 g-mr-60--md" data-arrow-right-classes="fa fa-angle-right">
        <div class="js-slide">
          <!-- Article -->
          <article class="row g-bg-secondary mx-0">
            <div class="col-md-6 col-lg-7 g-bg-size-cover g-min-height-250"
              data-bg-img-src="assets/img/food/img-10.jpg"></div>

            <div class="col-md-6 col-lg-5 g-pa-30">
              <!-- Article Header -->
              <header>
                <h4 class="text-uppercase g-font-size-12 g-color-white-opacity-0_3 g-mb-20">
                  <i class="icon-hotel-restaurant-235 align-middle g-font-size-18 g-mr-7"></i> Muffinski's, 5 King St,
                  London WC2E 8HN
                </h4>
              </header>
              <!-- End Article Header -->

              <!-- Article Title -->
              <h3 class="text-uppercase g-font-weight-700 g-font-size-16 g-mb-20">
                Ut pulvinar tellus sed elit luctus
              </h3>
              <!-- End Article Title -->
              <p class=" g-mb-25">Fusce dolor libero, efficitur et lobortis at, faucibus nec nunc. Proin fermentum
                turpis eget nisi lobortis.</p>



              <!-- Article Footer -->
              <footer class="d-flex justify-content">
                <div class="align-self-center">
                  <div class="g-font-weight-700 g-font-size-16">
                    <s>$1.750.000</s>
                    <span class="g-color-primary">$1.500.000</span>
                  </div>
                </div>

                <div class="align-self-center">
                  <a class="btn btn-lg text-uppercase u-btn-primary g-font-weight-700 g-font-size-12 g-color-white-opacity-0_7 g-py-12 g-py-15--md g-px-20 g-px-40--md"
                    href="#!">Learn More</a>
                </div>
              </footer>
              <!-- End Article Footer -->
            </div>
          </article>
          <!-- End Article -->

        </div>
        <div class="js-slide">
          <!-- Article -->
          <article class="row g-bg-secondary mx-0">
            <div class="col-md-6 col-lg-7 g-bg-size-cover g-min-height-250" data-bg-img-src="assets/img/food/img-8.jpg">
            </div>

            <div class="col-md-6 col-lg-5 g-pa-30">
              <!-- Article Header -->
              <header>
                <h4 class="text-uppercase g-font-size-12 g-color-white-opacity-0_3 g-mb-20">
                  <i class="icon-hotel-restaurant-235 align-middle g-font-size-18 g-mr-7"></i> Muffinski's, 5 King St,
                  London WC2E 8HN
                </h4>
              </header>
              <!-- End Article Header -->

              <!-- Article Title -->
              <h3 class="text-uppercase g-font-weight-700 g-font-size-16 g-mb-20">
                Ut pulvinar tellus sed elit luctus
              </h3>
              <!-- End Article Title -->
              <p class=" g-mb-25">Fusce dolor libero, efficitur et lobortis at, faucibus nec nunc. Proin fermentum
                turpis eget nisi lobortis.</p>



              <!-- Article Footer -->
              <footer class="d-flex justify-content">
                <div class="align-self-center">
                  <div class="g-font-weight-700 g-font-size-16">
                    <s>$1.750.000</s>
                    <span class="g-color-primary">$1.500.000</span>
                  </div>
                </div>

                <div class="align-self-right">
                  <a class="btn btn-lg text-uppercase u-btn-primary  " href="#!">Read More</a>
                </div>
              </footer>
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
//import Test from '@/components/Test.vue'
//import * as Myscript from '/assets/js/components/hs.go-to.js';
export default {
  
  created(){
    const plugin = document.createElement('script');
   
    plugin.setAttribute(
'src',
'assets/js/components/hs.carousel.js'
    );
    plugin.async =true;
    document.head.append(plugin);
    //alert('dddd');
   //document.HSCore.components.HSGoTo.init('.js-go-to');
  }
}

</script>
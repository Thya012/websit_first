<template>
  <!-- Section Content -->
  <section id="specialOffers" class="g-py-120 ">
    <div class="container ">
      <div class=" g-brd-primary ">
        <h2 class="text-uppercase u-heading-v2__title g-line-height-1_3 g-font-weight-700 g-font-size-26 g-mb-60">
          {{ $t('s_offer') }}</h2>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-4 g-mb-20 g-mb-100--md" v-for="(item, index) in specials" :key="index">
          <article class="g-bg-white">
            <!-- Figure Image -->
            <figure>
              <img class="w-100 g-grayscale-100x g-grayscale-0--hover g-transition-0_3 g-transition--ease-in"
                :src="item.image" alt="Image Description">
            </figure>
            <!-- End Figure Image -->

            <!-- Article Content -->
            <footer class="g-bg-white g-pa-20 g-pb-20">
              <h3 class="h6 text-uppercase g-letter-spacing-3 g-font-weight-700">{{ item.title }}</h3>

              <div class="d-flex justify-content-between">
                <em class="align-self-center g-font-style-normal g-font-size-default g-theme-color-gray-light-v2">{{
                  $t(item.description) }}</em>
              </div>
              <div class="align-self-center">
                <div class="g-font-weight-700 g-font-size-16">
                  <s>{{ item.price }}</s>
                  <span class="g-color-primary g-px-50">{{ item.s_price }}</span>
                </div>
              </div>
            </footer>
            <div class="align-self-center g-py-20">
              <router-link to="/special"
                class="btn btn-lg text-uppercase u-btn-primary g-font-weight-700 g-font-size-12 g-color-white-opacity-0_7 g-py-12 g-py-15--md g-px-20 g-px-40--md">{{$t('read')}}</router-link>
            </div>
            <!-- End Article Content -->
          </article>
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
  components: {
    // Myscript,
  },
  data() {
    return {

    };
  },


  computed: {
    ...mapState(useSpecialStore, ['specials']),

  },
  mounted() {
    const currentRoute = this.$route.name;
    this.$router.push({ name: currentRoute })
    //console.log(currentRoute)
    //alert('ddd')
  },


}


</script>
<template>
    <!-- Section Content -->
    <section id="menu" class="g-py-80 ">
        <div class="container g-max-width-780 text-center g-mb-20 g-mb-60--md">
            <div
                class="text-center text-uppercase u-heading-v5-3 u-heading-v5-color-primary u-heading-v5-rounded-50x g-mb-20 g-pt-50" >
                <h1 class="g-font-weight-700  g-color-primary g-mb-15">Our menu</h1>
                <h2 
                    class="u-heading-v5__title g-line-height-1_2 g-font-weight-700 g-font-size-32 g-font-size-40--md g-bg-primary--before g-pb-40">
                    Taste this</h2>
            </div>
        </div>

        <div class="container g-width-560">
            <!-- Nav tabs -->
            <ul class="nav justify-content-center text-uppercase u-nav-v5-3 u-nav-primary g-line-height-1_4 g-font-weight-700 g-font-size-default g-brd-bottom--md g-brd-gray-light-v4 g-mb-80--md"
                role="tablist" data-target="days" data-tabs-mobile-type="slide-up-down"
                data-btn-classes="btn btn-md btn-block text-uppercase g-font-weight-700 u-btn-outline-primary">
                <li class="nav-item g-mx-10--md">
                    <a class="nav-link g-theme-color-gray-dark-v1 g-color-primary--hover g-pb-25--md active"
                        data-toggle="tab" href="#breakfast" role="tab">Breakfast</a>
                </li>
                <li class="nav-item g-mx-10--md">
                    <a class="nav-link g-theme-color-gray-dark-v1 g-color-primary--hover g-pb-25--md" data-toggle="tab"
                        href="#lunch" role="tab">Lunch</a>
                </li>
                <li class="nav-item g-mx-10--md">
                    <a class="nav-link g-theme-color-gray-dark-v1 g-color-primary--hover g-pb-25--md" data-toggle="tab"
                        href="#dinner" role="tab">Dinner</a>
                </li>
            </ul>
            <!-- End Nav tabs -->
        </div>

        <div class="container">
            <div id="days" class="tab-content g-pt-20">
                <div class="tab-pane fade show active" id="breakfast" role="tabpanel">
                    <!-- Products Block -->
                    <div class="row">
                        <div class="col-md-6 g-mb-50" v-for="(item, index) in breakfasts" :key="index">
                            <!-- Article -->
                            <article class="media">
                                <!-- Article Image -->
                                <a class="g-width-100" href="#!">
                                    <img class="img-fluid g-rounded-50x" :src="item.image"
                                        alt="Image description">
                                </a>
                                <!-- End Article Image -->

                                <!-- Article Content -->
                                <div class="media-body align-self-center g-pl-10">
                                    <div
                                        class="d-flex justify-content-between u-heading-v1-4 g-bg-main g-theme-brd-gray-light-v1 g-mb-8">
                                        <h3
                                            class="align-self-center u-heading-v1__title g-color-black g-font-weight-700 g-font-size-13 text-uppercase mb-0">
                                            {{ item.title }}</h3>

                                        <div class="align-self-center g-pos-rel g-bg-main g-pl-15">
                                            <strong
                                                class="g-font-weight-700 g-font-size-13 g-color-white g-bg-primary g-rounded-3 g-py-4 g-px-12">{{ item.price }}</strong>
                                        </div>
                                    </div>

                                    <p class="mb-0">{{ item.description }}</p>
                                </div>
                                <!-- End Article Content -->
                            </article>
                            <!-- End Article -->
                        </div>

                       
                    </div>
                    <!-- End Products Block -->

                   
                </div>
 <!-- Lunch Block -->
                <div class="tab-pane fade" id="lunch" role="tabpanel">
                    <!-- Products Block -->
                    <div class="row">
                        <div class="col-md-6 g-mb-50" v-for="(item, index) in lunches" :key="index">
                            <!-- Article -->
                            <article class="media">
                                <!-- Article Image -->
                                <a class="g-width-100" href="#!">
                                    <img class="img-fluid g-rounded-50x" :src="item.image"
                                        alt="Image description">
                                </a>
                                <!-- End Article Image -->

                                <!-- Article Content -->
                                <div class="media-body align-self-center g-pl-10">
                                    <div
                                        class="d-flex justify-content-between u-heading-v1-4 g-bg-main g-theme-brd-gray-light-v1 g-mb-8">
                                        <h3
                                            class="align-self-center u-heading-v1__title g-color-black g-font-weight-700 g-font-size-13 text-uppercase mb-0">
                                            {{ item.title }}</h3>

                                        <div class="align-self-center g-pos-rel g-bg-main g-pl-15">
                                            <strong
                                                class="g-font-weight-700 g-font-size-13 g-color-white g-bg-primary g-rounded-3 g-py-4 g-px-12">{{ item.price }}</strong>
                                        </div>
                                    </div>

                                    <p class="mb-0">{{ item.description }}</p>
                                </div>
                                <!-- End Article Content -->
                            </article>
                            <!-- End Article -->
                        </div>
\
                    </div>
                    <!-- End Products Block -->

                 
                </div>

                <div class="tab-pane fade" id="dinner" role="tabpanel">
                    <!-- Products Block -->
                    <div class="row">
                        <div class="col-md-6 g-mb-50" v-for="(item, index) in dinners"  :key="index">
                            <!-- Article -->
                            <article class="media">
                                <!-- Article Image -->
                                <a class="g-width-100" href="#!">
                                    <img class="img-fluid g-rounded-50x" :src="item.image"
                                        alt="Image description">
                                </a>
                                <!-- End Article Image -->

                                <!-- Article Content -->
                                <div class="media-body align-self-center g-pl-10">
                                    <div
                                        class="d-flex justify-content-between u-heading-v1-4 g-bg-main g-theme-brd-gray-light-v1 g-mb-8">
                                        <h3
                                            class="align-self-center u-heading-v1__title g-color-black g-font-weight-700 g-font-size-13 text-uppercase mb-0">
                                            {{ item.title }}</h3>

                                        <div class="align-self-center g-pos-rel g-bg-main g-pl-15">
                                            <strong
                                                class="g-font-weight-700 g-font-size-13 g-color-white g-bg-primary g-rounded-3 g-py-4 g-px-12">{{ item.price }}</strong>
                                        </div>
                                    </div>

                                    <p class="mb-0">{{ item.description }}</p>
                                </div>
                                <!-- End Article Content -->
                            </article>
                            <!-- End Article -->
                        </div>

                        
                    </div>
                    <!-- End Products Block -->

                 
                </div>
            </div>
        </div>
    </section>
    <!-- End Section Content -->
</template>

<script>
import { useBreafastStore, useLunchStore, useDinnerStore } from '@/store/liberary';
import { mapState } from 'pinia';
export default {
    data() {

        return {
        }
    },
    computed: {
                ...mapState(useBreafastStore, ['breakfasts']),
                ...mapState(useLunchStore, ['lunches']),
                ...mapState(useDinnerStore, ['dinners']),
            },
    
}

</script>
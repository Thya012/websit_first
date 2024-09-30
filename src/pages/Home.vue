<template>

    <Slider></Slider>
    <About />

    <Menu></Menu>
    <Special></Special>
    <GetApi></GetApi>
   
    <Services></Services>



</template>
<script>

import Slider from '@/components/Slider.vue';
import About from '@/components/About.vue';
import Menu from '@/components/Menu.vue';
import Special from '@/components/Special.vue';
//import GetApi from '@/components/api/GetApi.vue';
//import OurFood from '@/components/OurFood.vue';
import Services from './Services.vue';
import GetApi from '@/components/api/GetApi.vue';





export default {
    components: {

        Slider,
        Services,
        Menu,
        Special,
        GetApi,
        About,
    },
    
};

</script>
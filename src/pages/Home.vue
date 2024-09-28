<template>

    <Slider></Slider>
    <About />

    <Menu></Menu>
    <Special></Special>
    
    <OurFood></OurFood>
    <Services></Services>



</template>
<script>

import Slider from '@/components/Slider.vue';
import About from '@/components/About.vue';
import Menu from '@/components/Menu.vue';
import Special from '@/components/Special.vue';
import OurFood from '@/components/OurFood.vue';
import Services from './Services.vue';



export default {
    components: {

        Slider,
        Services,
        Menu,
        Special,
        OurFood,
        About,




    },
};

</script>
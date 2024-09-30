<template>
  <!-- Team -->
  <div class="container g-py-120">
    <!-- Heading -->
    <div class="g-max-width-550 text-center mx-auto g-mb-100">
      <h2 class="text-uppercase g-color-main-light-v1 g-font-weight-600 g-font-size-13 g-letter-spacing-2 mb-4">We have more difference kind of foods</h2>
      <h2 class="h3">Please read more information.</h2>
    </div>
    <!-- End Heading -->

    <div class="row g-mx-minus-25 g-mb-40">
      <Card class="col-6 col-lg-3 g-px-25 g-mb-50" v-for="(course, index) in courses" :key="index" :title="course.title"
        :price="course.price" :short-description="course.shortDescription" :url="course.titleURL">
      </Card>
    </div>
    <div class="text-center">
    <a class="btn u-btn-primary g-bg-secondary g-color-primary g-color-white--hover g-bg-primary--hover g-font-weight-600 g-font-size-12 g-rounded-30 g-py-15 g-px-35"
      href="#!">Read More</a>
  </div>
  </div>
  
</template>
<script>
import Card from "@/components/api/Card.vue";


import axios from "axios";
export default {
  components: {
    Card,
  },
  data() {
    return {
      courses: [],
    };
  },
  async created() {
    try {
     
      const response = await axios.get("/v1/courses");
      console.log(response);
      const courses = response.data;
      this.courses = courses;
    } catch (error) {
      console.log(error)
    }

  },
};
</script>
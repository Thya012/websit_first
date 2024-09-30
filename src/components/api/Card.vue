<template>
            <!-- Team -->
            <div class="text-center">
              <img class="u-shadow-v29 g-width-110 g-height-110 rounded-circle mb-5" src="assets/img/food/img-1.jpg" alt="Image Description">
              <h4 class="h5 g-font-weight-600 mb-1">{{ title }}</h4>
              <span class="d-block g-color-primary">$ {{ price  }}</span>
              <hr class="g-brd-gray-light-v4 g-my-15">
              <a class="u-link-v5 g-color-text g-color-main--hover g-font-size-13" href="#!"></a>
            </div>
            <!-- End Team -->

</template>

<script>
export default{
        props: ["price", "title", "image", "description"
        ],
    };
</script>
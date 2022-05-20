<template>
  <div
    class="expertise row flex-row flex-nowrap justify-content-center align-items-center"
  >
    <div class="col" :class="item_id % 2 !== 0 ? 'order-first' : 'order-last'">
      <div
        class="expertise-image w-50 my-0 mx-auto rounded-pill bg-subtitle"
        :style="{
          'background-image': 'url(' + item.image_url + ');',
        }"
      ></div>
    </div>
    <div class="col" :class="item_id % 2 === 0 ? 'order-first' : 'order-last'">
      <h1 class="text-secondary text-center text-md-start fw-bold">
        {{ item.title }}
      </h1>
      <p class="text-wrap" style="text-align: justify">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpertiseList",
  props: {
    item: Object,
    item_id: Number,
  },
};
</script>

<style scoped>
.expertise-image {
  min-width: 200px !important;
  min-height: 200px !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.expertise-image:after {
  content: "";
  padding-bottom: 100%;
  display: block;
}
</style>

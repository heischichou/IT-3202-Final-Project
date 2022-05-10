<template>
  <div class="row justify-content-center align-items-center flex-nowrap">
    <div
      class="col"
      :class="item.expertise_id % 2 !== 0 ? 'order-first' : 'order-last'"
    >
      <div
        class="expertise-image bg-subtitle"
        :style="{
          'background-image': 'url(' + item.image_url + ');',
        }"
      ></div>
    </div>
    <div
      class="col"
      :class="item.expertise_id % 2 === 0 ? 'order-first' : 'order-last'"
    >
      <h1 class="text-secondary fw-bold">{{ item.title }}</h1>
      <p class="text-wrap">{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpertiseList",
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.expertise-image {
  width: 55%;
  min-width: 225px !important;
  min-height: 225px !important;
  margin: 0 auto !important;
  padding-bottom: 55%;
  border-radius: 50% !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>

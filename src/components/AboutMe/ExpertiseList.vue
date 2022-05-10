<template>
  <div
    class="expertise row flex-row flex-nowrap justify-content-center align-items-center"
  >
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
  width: 50%;
  min-width: 200px !important;
  min-height: 200px !important;
  margin: 0 auto !important;
  border-radius: 50% !important;
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

<template>
  <div
    class="technology row justify-content-between align-items-center my-3 my-md-4 my-lg-3 mx-3 mx-md-5"
  >
    <div class="col-6 col-md-12 col-lg order-first">
      <h3>{{ item.name }}</h3>
    </div>
    <div
      class="col col-md-12 col-lg order-last d-flex justify-content-between align-items-center"
    >
      <div
        class="bg-darkblue rounded-pill"
        style="width: 27.5px; height: 27.5px"
        v-for="i in item.scale"
        :key="i"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechnologyList",
  props: {
    item: Object,
  },
};
</script>

<style scoped></style>

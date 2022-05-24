<template>
  <div
    class="technology row justify-content-between align-items-center my-3 my-md-4 my-lg-3 mx-3 mx-md-5"
  >
    <div class="col-6 col-md-12 col-lg order-first">
      <h4>{{ item.name }}</h4>
    </div>
    <div
      class="col col-md-12 col-lg order-last d-flex justify-content-between align-items-center"
    >
      <div
        class="bg-darkblue rounded-pill"
        style="width: 25px; height: 25px"
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

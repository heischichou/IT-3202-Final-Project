<template>
  <section>
    <div
      class="technology reveal row justify-content-between align-items-center my-3 my-md-4 my-lg-3 mx-3 mx-md-5"
    >
      <div class="col-6 col-md-12 col-lg order-first">
        <h4 class="tech-title">{{ item.name }}</h4>
      </div>
      <div
        class="tech-scale col col-md-12 col-lg order-last d-flex justify-content-between align-items-center"
      >
        <div
          class="tech-scales bg-darkblue rounded-pill"
          style="width: 25px; height: 25px"
          v-for="i in item.scale"
          :key="i"
        ></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "TechnologyList",
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.reveal {
  transform: translateY(50px);
  opacity: 0;
  transition: 1s transform, 1s opacity ease;
}
.reveal.active {
  transform: translateY(0);
  opacity: 1;
}
</style>

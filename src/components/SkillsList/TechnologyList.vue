<template>
  <div class="technology row justify-content-center align-items-center">
    <div class="col">
      <h2>{{ item.name }}</h2>
    </div>
    <div class="col d-flex justify-content-between align-items-center">
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

<style scoped>
/*div {*/
/*  border: 1px solid black;*/
/*}*/
</style>

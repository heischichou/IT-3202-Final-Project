<template>
  <div class="d-flex flex-column flex-md-row flex-nowrap">
    <div class="col-md-5">
      <h5 class="fw-bold text-center text-md-start mb-3 mb-md-2">
        {{ item.title }}
      </h5>
      <p class="text-subtitle text-center text-md-start">
        {{ item.organization + " • " + item.year }}
      </p>
    </div>
    <div class="col-md-7">
      <p class="text-center text-md-start mb-4 mb-md-3">
        {{ item.description }}
      </p>
      <div
        :id="'roles' + item.experience_id"
        class="text-nowrap overflow-hidden py-1"
      >
        <div
          class="d-inline bg-backdrop rounded-pill me-2 px-2 py-1"
          style="cursor: default"
          v-for="(role, index) in item.roles"
          :key="index"
        >
          {{ role }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceList",
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

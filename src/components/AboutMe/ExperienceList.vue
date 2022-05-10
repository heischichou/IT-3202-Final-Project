<template>
  <div class="row flex-nowrap">
    <div class="col-5">
      <h5 class="fw-bold">{{ item.title }}</h5>
      <p class="text-subtitle">{{ item.organization }}</p>
    </div>
    <div class="col-7">
      <p>{{ item.description }}</p>
      <div
        :id="'roles' + item.experience_id"
        class="text-nowrap overflow-hidden"
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

<template>
  <div class="experience d-flex flex-column flex-md-row flex-nowrap">
    <div class="col-md-5">
      <h5 class="fw-bold text-center text-md-start mb-3 mb-md-2">
        {{ item.title }}
      </h5>
      <p class="text-subtitle text-center text-md-start">
        {{ item.organization + " • " + item.year }}
      </p>
    </div>
    <div class="col-md-7">
      <p class="text-center text-md-start mb-3">
        {{ item.description }}
      </p>
      <div
        :id="'roles' + item.experienceId"
        class="roles text-center text-md-start overflow-hidden py-1"
      >
        <div
          class="d-inline-block d-lg-inline user-select-none bg-backdrop rounded-pill my-1 my-md-0 mx-1 mx-md-0 me-md-2 px-2 py-1"
          style="cursor: default"
          v-for="(role, index) in experienceRoles"
          :key="index"
        >
          {{ role }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ExperienceList",
  props: {
    item: Object,
  },
  computed: {
    experienceRoles: function () {
      return screen.width < 768 ? this.item.roles.slice(0, 6) : this.item.roles;
    },
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .roles {
    /*white-space: normal;*/
  }
}
@media (min-width: 768px) {
  .roles {
    white-space: nowrap;
  }
}
</style>

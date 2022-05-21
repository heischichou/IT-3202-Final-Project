<template>
  <div class="mt-md-6 pt-md-5 container">
    <h1 class="text-secondary fw-bold text-center mb-4 mb-md-6">
      {{ item.skill_name }}
    </h1>
    <div
      class="d-flex flex-column justify-content-center p-0"
      :class="index % 2 === 0 ? 'flex-md-row' : 'flex-md-row-reverse'"
    >
      <div
        class="d-flex flex-row align-items-center justify-content-center justify-content-md-start"
        :class="index % 2 === 0 ? 'col-auto col-md-5' : 'col-auto'"
      >
        <img
          class="rounded-2"
          style="height: 420px"
          src="../../../src/assets/logo.png"
          alt="Skill Image"
        />
      </div>
      <div
        class="d-flex flex-row align-items-center justify-content-center justify-content-md-start mt-3 mt-md-0"
        :class="index % 2 === 0 ? 'col-auto' : 'col-auto col-md-5'"
      >
        <ul class="m-0">
          <li
            class="py-2"
            v-for="(skill, index) in item.skill_list"
            :key="index"
          >
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsComponent",
  props: {
    item: Object,
    index: Number,
  },
};
</script>

<style scoped>
/*div {*/
/*  border: 1px solid black;*/
/*}*/
</style>

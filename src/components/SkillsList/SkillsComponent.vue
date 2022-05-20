<template>
  <div class="mt-5 pt-5 container">
    <h1 class="text-secondary fw-bold text-center mb-5">
      {{ item.skill_name }}
    </h1>
    <div
      class="d-flex justify-content-center p-0"
      :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'"
    >
      <div
        class="d-flex flex-row align-items-center"
        :class="index % 2 === 0 ? 'col-6' : 'col-auto'"
      >
        <img
          class="rounded-2"
          style="height: 360px"
          src="../../../src/assets/logo.png"
          alt="Skill Image"
        />
      </div>
      <div
        class="d-flex flex-row align-items-center"
        :class="index % 2 === 0 ? 'col-auto' : 'col-6'"
      >
        <ul class="m-0">
          <li
            class="py-1"
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

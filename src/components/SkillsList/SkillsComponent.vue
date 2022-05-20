<template>
  <div
    class="mt-5 container d-flex justify-content-center p-0"
    :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'"
  >
    <div
      class="col-5 d-flex flex-row align-items-center"
      :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'"
    >
      <img
        class="rounded-2"
        style="height: 360px"
        src="../../../src/assets/logo.png"
        alt="Skill Image"
      />
    </div>
    <div class="col-5 d-flex flex-row align-items-center">
      <ul class="m-0">
        <li class="py-1" v-for="(skill, index) in item.skill_list" :key="index">
          {{ skill }}
        </li>
      </ul>
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

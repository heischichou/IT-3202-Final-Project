<template>
  <div class="mt-5 container">{{ item.skill_id }}</div>
</template>

<script>
export default {
  name: "SkillsComponent",
  props: {
    item: Object,
  },
};
</script>

<style scoped>
div {
  border: 1px solid black;
}
</style>

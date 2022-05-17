<template>
  <button class="btn btn-sm p-tag bg-light">{{ text }}</button>
</template>

<script>
export default {
  name: "ProjectTag",
  props: {
    text: String,
  },
};
</script>

<style scoped>
.p-tag {
  position: static;
  border-radius: 16px;
  font-size: smaller;
}
</style>

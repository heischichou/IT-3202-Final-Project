<template>
  <div class="btn btn-sm p-tag" :style="{ background: tagColor }">
    {{ text }}
  </div>
</template>

<script lang="ts">
export default {
  name: "ProjectTag",
  props: {
    text: String,
    tagColor: String,
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

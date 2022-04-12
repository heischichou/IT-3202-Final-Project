<template>
  <div>
    <div class="message">{{ message }}</div>
    <input v-model="username" />
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UnitTest",
  data() {
    return {
      message: "Unit Test with Jest",
      username: "",
    };
  },
  computed: {
    error(): string {
      return this.username.trim().length < 7
        ? "Please enter a longer username"
        : "";
    },
  },
});
</script>

<template>
  <div class="mt-md-6 pt-md-5 container">
    <h1 class="text-secondary fw-bold text-center mb-4 mb-md-6">
      {{ item.skillName }}
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
          class="rounded-2 skill-image"
          :src="`${item.imageUrl}`"
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
            v-for="(skill, index) in item.skillList"
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
.skill-image {
  object-fit: cover;
}
@media (max-width: 768px) {
  .skill-image {
    width: 100%;
    height: 240px;
  }
}
@media (min-width: 768px) {
  .skill-image {
    width: 260px;
    height: 260px;
  }
}
@media (min-width: 1200px) {
  .skill-image {
    width: 420px;
    height: 420px;
  }
}
</style>

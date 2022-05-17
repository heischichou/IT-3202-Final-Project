<template>
  <div class="card project-card" :style="{ background: projectColor }">
    <div class="container no-bgColor">
      <img
        class="card-img project-image mt-4 mb-4 bg-light"
        :src="projectItem.project_img"
        :alt="projectItem.project_name"
      />
      <div class="row justify-content-start no-bgColor pb-3">
        <div
          class="col-sm-auto no-bgColor px-1 pb-2"
          v-for="(tag, index) in projectItem.project_tags"
          :key="index"
        >
          <ProjectTag :text="tag" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectTag from "./ProjectTag";
export default {
  name: "ProjectComponent",
  components: {
    ProjectTag,
  },
  props: {
    projectColor: String,
    projectItem: Object,
  },
};
</script>

<style scoped>
/*div {*/
/*  outline: red solid;*/
/*}*/

.project-card {
  width: 264px;
  height: 100%;
  mix-blend-mode: normal;
  border-radius: 24px;
}

.project-image {
  width: 100%;
  height: 284px;

  align-self: center;
  object-fit: cover;
}

.no-bgColor {
  background: none;
}
</style>

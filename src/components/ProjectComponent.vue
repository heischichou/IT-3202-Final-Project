<template>
  <div class="card project-card" :class="projectColor">
    <!--  There's currently no image yet  -->
    <img
      class="card-img project-image mt-4 mb-4 bg-light"
      src=""
      alt="No Image"
    />
    <div
      class="row justify-content-start align-self-center no-bgColor pb-3"
      style="width: 315px"
    >
      <!-- The tags are also static/temporary for now -->
      <div class="col-sm-auto no-bgColor px-1 pb-2">
        <ProjectTag text="HTML" />
      </div>
      <div class="col-sm-auto no-bgColor px-1 pb-2">
        <ProjectTag text="Javascript" />
      </div>
      <div class="col-sm-auto no-bgColor px-1 pb-2">
        <ProjectTag text="CSS" />
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
  },
};
</script>

<style scoped>
/*div {*/
/*  outline: red solid;*/
/*}*/

.project-card {
  width: 364px;
  height: 480px;
  left: 220px;
  top: 0;
  mix-blend-mode: normal;
  border-radius: 24px;
}

.project-image {
  width: 315px;
  height: 364px;
  align-self: center;
  object-fit: cover;
}

.no-bgColor {
  background: none;
}
</style>

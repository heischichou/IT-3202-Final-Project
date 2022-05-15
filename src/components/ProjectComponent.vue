<template>
  <div class="card project-card" :class="projectColor">
    <div class="container no-bgColor">
      <!--  There's currently no image yet  -->
      <img
        class="card-img project-image mt-4 mb-4 bg-light"
        src="../assets/logo.png"
        alt="No Image"
      />
      <div class="row justify-content-start no-bgColor pb-3">
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
  width: 464px;
  height: 100%;
  mix-blend-mode: normal;
  border-radius: 24px;
}

.project-image {
  width: 100%;
  height: 484px;

  align-self: center;
  object-fit: cover;
}

.no-bgColor {
  background: none;
}
</style>

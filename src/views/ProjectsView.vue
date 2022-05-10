<template>
  <div
    class="container-lg bg-dark me-0 mt-3 rounded-start"
    style="height: 150px; margin-bottom: -100px"
  ></div>
  <div class="container text-end bg-transparent">
    <h1 class="text-primary font-weight-bolder" style="font-size: 4.5rem">
      My<br />Projects
    </h1>
  </div>
  <div
    class="container-lg bg-dark me-0 mb-3 rounded-start"
    style="height: 150px; margin-top: -100px"
  ></div>
  <div class="container mb-5">
    <div class="d-flex flex-column">
      <div>
        <p class="text-center">
          I'd be delighted to answer any questions,<br />
          plan collaborations, or collaborate on new projects with you.
        </p>
      </div>
      <div class="d-flex justify-content-center mb-5">
        <button
          class="bg-secondary border-secondary mt-3 me-3 mb-5 p-3"
          type="button"
        >
          <router-link to="/contact" class="nav-link text-body"
            >CONTACT ME</router-link
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// Commented out the components for now since they'll be used in developing the project pages
// import ProjectComponent from "../components/ProjectComponent";
// import ProjectTag from "../components/ProjectTag";
export default {
  name: "ProjectsView",
  components: {
    // ProjectComponent,
    // ProjectTag,
  },
};
</script>

<style scoped>
/*div {*/
/*  border: 1px;*/
/*  outline: solid black;*/
/*}*/
</style>

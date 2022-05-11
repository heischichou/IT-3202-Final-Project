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

  <div class="container my-5">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-md navbar-dark bg-transparent">
      <div class="container d-flex flex-row flex-row-reverse bg-transparent">
        <button
          class="navbar-toggler border-primary mt-3 me-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <em class="bi bi-list text-primary d-flex fs-3"></em>
        </button>
        <div
          class="d-flex justify-content-center collapse navbar-collapse text-center bg-transparent m-3"
          id="navbarNav"
        >
          <ul class="row navbar-nav mx-n4">
            <li class="col-auto nav-item px-4">
              <button
                @click="showProjectDiv(true, false, false)"
                class="btn btn-link text-decoration-none text-black"
                :class="[major === true ? showLine : noLine]"
              >
                MAJOR PROJECTS
              </button>
            </li>
            <li class="col-auto nav-item px-4">
              <button
                @click="showProjectDiv(false, true, false)"
                class="btn btn-link text-decoration-none text-black"
                :class="[minor === true ? showLine : noLine]"
              >
                MINOR PROJECTS
              </button>
            </li>
            <li class="col-auto nav-item px-4">
              <button
                @click="showProjectDiv(false, false, true)"
                class="btn btn-link text-decoration-none text-black"
                :class="[personal === true ? showLine : noLine]"
              >
                PERSONAL PROJECTS
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!--  MAJOR PROJECTS DIV  -->
    <div v-show="major">show major projects</div>
    <!--  MINOR PROJECTS DIV  -->
    <div v-show="minor">show minor projects</div>
    <!--  PERSONAL PROJECTS DIV  -->
    <div v-show="personal">show personal projects</div>
  </div>

  <!-- Contacts Section -->
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
  data: function () {
    return {
      major: true,
      minor: false,
      personal: false,
      showLine: "text-decoration-underline",
      noLine: "text-decoration-none",
    };
  },
  methods: {
    showProjectDiv(majorVal, minorVal, personalVal) {
      this.major = majorVal;
      this.minor = minorVal;
      this.personal = personalVal;
    },
  },
};
</script>

<style scoped>
/*div {*/
/*  border: 1px;*/
/*  outline: solid black;*/
/*}*/

.btn:focus {
  outline: none;
  box-shadow: none;
}
</style>

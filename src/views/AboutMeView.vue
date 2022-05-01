<template>
  <!-- Header -->
  <div class="container-fluid d-flex flex-row p-0">
    <div class="col-md-3"></div>
    <div
      class="col bg-dark me-0"
      style="height: 520px; margin-top: -100px; margin-bottom: -410px"
    ></div>
  </div>
  <div class="container bg-transparent mb-5">
    <div class="row align-items-end bg-transparent mb-4">
      <div class="col-md-auto container-fluid bg-transparent">
        <div class="row bg-transparent">
          <h1 class="text-primary fw-bolder fs-xxl">
            Hello, <br />
            I'm Rodney <br />
            Pantonial.
          </h1>
        </div>
      </div>
      <div class="col-md container-fluid bg-transparent ms-md-6">
        <div class="row bg-transparent my-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequa.
          </p>
        </div>
        <div class="row gap-4 fw-bold bg-transparent mt-2 my-md-4">
          <a class="col-1 text-decoration-none text-body social-link" href="#"
            >TW.</a
          >
          <a class="col-1 text-decoration-none text-body social-link" href="#"
            >IN.</a
          >
          <a class="col-1 text-decoration-none text-body social-link" href="#"
            >FB.</a
          >
        </div>
      </div>
    </div>
    <div class="row bg-transparent">
      <div class="col-md-1 bg-transparent"></div>
      <div class="col-auto bg-transparent">
        <button class="btn btn-secondary px-4 py-3">DOWNLOAD CV</button>
      </div>
    </div>
  </div>
  <!-- Experience Component -->
  <div class="container my-6">
    <ExperienceList />
  </div>
</template>

<script>
import ExperienceList from "../components/AboutMe/ExperienceList";
export default {
  name: "AboutMeView",
  components: {
    ExperienceList,
  },
};
</script>

<style scoped>
/*div {*/
/*  border: 1px solid black;*/
/*}*/
.social-link:hover {
  text-decoration: underline !important;
}
</style>

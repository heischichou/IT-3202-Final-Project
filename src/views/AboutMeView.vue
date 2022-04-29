<template>
  <div
    class="container-fluid w-75 bg-dark me-0"
    style="height: 400px; margin-top: -100px; margin-bottom: -290px"
  ></div>
  <div class="container bg-transparent mb-5">
    <div class="row align-items-end bg-transparent mb-4">
      <div class="col-md-auto container-fluid bg-transparent">
        <div class="row bg-transparent">
          <h1
            class="text-primary fw-bolder"
            style="font-size: 4rem; line-height: 1.2"
          >
            Hello,<br />
            I'm Rodney<br />
            Pantonial.
          </h1>
        </div>
      </div>
      <!-- column -->
      <div class="col-md container-fluid bg-transparent ms-md-5">
        <div class="row bg-transparent">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequa.
          </p>
        </div>
        <div class="row gap-4 fw-bold bg-transparent">
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
      <div class="col-1 me-md-6 bg-transparent"></div>
      <div class="col bg-transparent">
        <button class="btn btn-secondary px-4 py-3">DOWNLOAD CV</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMeView",
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

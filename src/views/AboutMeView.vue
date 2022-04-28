<template>
  <div class="container">
    <div class="row">
      <div class="col container-fluid">
        <div class="row">
          <h1 class="text-primary fw-bolder">
            Hello,<br />
            I'm Rodney<br />
            Pantonial.
          </h1>
        </div>
        <div class="row-cols-auto">
          <button class="btn btn-secondary px-4 py-3">DOWNLOAD CV</button>
        </div>
      </div>
      <!---------->
      <div class="col container-fluid">
        <div class="row">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequa.
          </p>
        </div>
        <div class="row gap-4 fw-bold">
          <a class="col-1 text-decoration-none text-body" href="#">TW.</a>
          <a class="col-1 text-decoration-none text-body" href="#">IN.</a>
          <a class="col-1 text-decoration-none text-body" href="#">FB.</a>
        </div>
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
div {
  border: 1px solid black;
}
</style>

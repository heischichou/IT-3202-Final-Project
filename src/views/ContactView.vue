<template>
  <div
    class="container-fluid d-flex flex-row bg-dark p-0"
    style="height: 500px; margin-top: -100px"
  >
    <div class="container d-flex bg-dark justify-content-center">
      <div class="row bg-transparent">
        <div class="row bg-transparent align-items-end">
          <div class="bg-transparent text-center" style="margin-top: 200px">
            <h1
              class="font-weight-bolder text-primary fw-bold"
              style="font-size: 4.5rem"
            >
              Get in touch
            </h1>
          </div>
        </div>
        <div class="row bg-transparent align-items-start">
          <div class="col bg-transparent p-0 text-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempory
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-5 pt-5">
    <div class="row justify-content-center">
      <div class="col-4">
        <div class="container d-flex justify-content-end">
          <div class="card bg-dark rounded-2" style="width: 18rem">
            <div class="card-body rounded-2 bg-lightblue-1">
              <div
                class="container d-flex justify-content-center bg-transparent"
              >
                <h1>
                  <em class="bi bi-telephone"></em>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card bg-dark rounded-2" style="width: 18rem">
          <div class="card-body rounded-2 bg-lightblue-1">
            <div class="container d-flex justify-content-center bg-transparent">
              <h1>
                <em class="bi bi-envelope"></em>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",
};
</script>

<style scoped>
/*div {*/
/*  border: 1px;*/
/*  outline: solid black;*/
/*}*/
</style>

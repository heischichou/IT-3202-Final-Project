<template>
  <div class="col-12 col-md-5 col-lg-4 my-3 mx-4">
    <div class="card bg-lightblue-1 bg-opacity-50 rounded-3 border-0">
      <div class="card-header bg-lightblue-1 bg-opacity-75 rounded-3 py-4">
        <div class="container d-flex justify-content-center bg-transparent">
          <em class="text-body fs-l" :class="info.icon"></em>
        </div>
      </div>
      <div class="card-body bg-transparent rounded-3 py-4">
        <p class="text-body text-center fw-light fs-5">{{ info.info }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactDetails",
  props: {
    info: Object,
  },
};
</script>

<style scoped></style>

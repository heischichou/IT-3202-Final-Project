<template>
  <div class="qna container-fluid mb-4">
    <div class="row align-items-center justify-content-center">
      <div class="col-3 col-md-2 col-xl-1">
        <p class="text-darkblue fs-4 fw-bold text-center">Q.</p>
      </div>
      <div class="col col-md-6 col-xl-4">
        <p class="question text-darkblue fs-5">{{ faq.question }}</p>
      </div>
    </div>
    <div class="row align-items-center justify-content-center">
      <div class="col-3 col-md-2 col-xl-1">
        <p class="text-secondary fs-4 fw-bold text-center">A.</p>
      </div>
      <div class="col col-md-6 col-xl-4">
        <p class="answer text-secondary fs-5">{{ faq.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQList",
  props: {
    faq: Object,
  },
};
</script>

<style scoped></style>

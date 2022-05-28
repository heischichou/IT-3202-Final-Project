<template>
  <div class="row g-2 mt-4 ms-4 align-items-center">
    <div class="col-2 col-md-4">
      <div class="text-end text-darkblue fs-4">Q.</div>
    </div>
    <div class="col-9 col-md-6">
      <div class="ps-5 text-darkblue">{{ faq.question }}</div>
    </div>
    <div class="col-2 col-md-4">
      <div class="text-end text-secondary fs-4 mt-0">A.</div>
    </div>
    <div class="col-9 col-md-6 mt-0">
      <div class="ps-5 text-secondary">{{ faq.answer }}</div>
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

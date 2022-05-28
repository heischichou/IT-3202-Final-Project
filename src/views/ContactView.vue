<template>
  <!-- Header -->
  <div id="main" class="container-fluid d-flex flex-row bg-dark p-0 mb-md-4">
    <div class="container d-flex flex-column bg-dark justify-content-center">
      <div class="row bg-transparent">
        <div
          id="heading"
          class="bg-transparent text-center"
          style="margin-top: 80px"
        >
          <h1 class="text-primary fw-bolder fs-xxl">Get in touch</h1>
        </div>
      </div>
      <div class="row bg-transparent align-items-start">
        <div class="col bg-transparent p-0 mt-3 text-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempory
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- Contact Details Component -->
  <div class="container pt-5 pb-3 py-md-5" id="contact-details-section">
    <div
      class="d-flex flex-md-wrap flex-column flex-md-row align-items-center justify-content-center"
    >
      <ContactDetails
        v-for="(info, index) in contactDetails"
        :key="index"
        :info="info"
      />
    </div>
  </div>
  <!-- Send A Message Component -->
  <div
    class="container d-flex flex-column justify-content-center pt-5 pb-3 py-md-5"
    id="send-a-message-section"
  >
    <h2 class="text-secondary text-center fw-bold mb-5">Send A Message</h2>
    <SendAMessage />
  </div>
  <!-- FAQ Section -->
  <div class="container pt-5 pb-3 py-md-5" id="faq-section">
    <h2 class="text-secondary text-center fw-bold mb-5">
      Frequently Asked Questions
    </h2>
    <FAQList v-for="(faq, index) in faqs" :key="index" :faq="faq" />
  </div>
</template>

<script>
import ContactDetails from "../components/Contact/ContactDetails";
import SendAMessage from "../components/Contact/SendAMessage";
import FAQList from "../components/Contact/FAQList";

export default {
  name: "ContactView",
  components: {
    ContactDetails,
    SendAMessage,
    FAQList,
  },
  data() {
    return {
      contactDetails: [
        {
          infoId: 1,
          icon: "bi bi-telephone",
          info: "09123456789",
        },
        {
          infoId: 2,
          icon: "bi bi-envelope",
          info: "rodney@pantonial.dev",
        },
      ],
      faqs: [
        {
          faqId: 1,
          question: "What are you best at?",
          answer: "Java",
        },
        {
          faqId: 2,
          question: "Are you for hire?",
          answer: "Not at the moment",
        },
        {
          faqId: 3,
          question: "Are you available for consultations?",
          answer: "Yes",
        },
        {
          faqId: 4,
          question: "What bleeding edge technologies you are familiar with? ",
          answer: "Federation GraphQL, Kotlin, AWS CDK",
        },
        {
          faqId: 5,
          question: "What do you do on your free time?",
          answer: "Sort",
        },
      ],
    };
  },
};
</script>

<style scoped>
/*div {*/
/*  border: 1px;*/
/*  outline: solid black;*/
/*}*/
@media (max-width: 992px) {
  #main {
    height: 350px;
    margin-top: -100px;
  }
}
@media (min-width: 992px) {
  #main {
    height: 600px;
    margin-top: -100px;
  }
}
</style>

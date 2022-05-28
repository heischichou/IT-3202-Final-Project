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
    <ContactDetails />
  </div>
  <!-- Send A Message Component -->
  <div
    class="container d-flex flex-column justify-content-center pt-5 pb-3 py-md-5"
    id="send-a-message-section"
  >
    <h3 class="text-secondary text-center fw-bold mb-5">Send A Message</h3>
    <SendAMessage />
  </div>
  <!-- FAQ Section -->
  <div class="container text-center mt-5 pt-5">
    <h2 class="text-secondary fw-bold">Frequently Asked Questions</h2>
  </div>
  <div class="container mb-5 p-5">
    <div
      class="row g-2 mt-4 ms-4 align-items-center"
      v-for="QnA in QnAData"
      :key="QnA.QnA_id"
    >
      <div class="col-2 col-md-4">
        <div class="text-end text-darkblue fs-4">Q</div>
      </div>
      <div class="col-9 col-md-6">
        <div class="ps-5 text-darkblue">{{ QnA.Question }}</div>
      </div>
      <div class="col-2 col-md-4">
        <div class="text-end text-secondary fs-4 mt-0">A</div>
      </div>
      <div class="col-9 col-md-6 mt-0">
        <div class="ps-5 text-secondary">{{ QnA.Answer }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactDetails from "../components/Contact/ContactDetails";
import SendAMessage from "../components/Contact/SendAMessage";

export default {
  name: "ContactView",
  components: {
    ContactDetails,
    SendAMessage,
  },
  data() {
    return {
      QnAData: [
        {
          QnA_id: 1,
          Question: "What are you best at?",
          Answer: "Java",
        },
        {
          QnA_id: 2,
          Question: "Are you for hire?",
          Answer: "Not at the moment",
        },
        {
          QnA_id: 3,
          Question: "Are you available for consultations?",
          Answer: "Yes",
        },
        {
          QnA_id: 4,
          Question:
            "What are the bleeding edge technologies you are familiar on? ",
          Answer: "Federation GraphQL, Kotlin, AWS CDK",
        },
        {
          QnA_id: 5,
          Question: "What do you do on your free time?",
          Answer: "Sort",
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

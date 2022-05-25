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
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-9 col-md-4 my-3">
        <div class="card bg-dark rounded-3">
          <div class="card-header rounded-3 bg-lightblue-1">
            <div class="container d-flex justify-content-center bg-transparent">
              <h1>
                <em class="bi bi-telephone"></em>
              </h1>
            </div>
          </div>
          <div class="card-body bg-lightblue-1 opacity-75 rounded-3">
            <p class="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </div>
      </div>
      <div class="col-9 col-md-4 my-3">
        <div class="card bg-dark rounded-3">
          <div class="card-header rounded-3 bg-lightblue-1">
            <div class="container d-flex justify-content-center bg-transparent">
              <h1>
                <em class="bi bi-envelope"></em>
              </h1>
            </div>
          </div>
          <div class="card-body bg-lightblue-1 opacity-75 rounded-3">
            <p class="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container d-flex justify-content-center mt-5 pt-5">
    <h3 class="text-secondary fw-bold mb-2">Send A Message</h3>
  </div>
  <div class="container d-flex justify-content-center mt-5">
    <div class="col-9 col-md-4">
      <div class="card bg-lightblue-1 opacity-75 rounded-2">
        <div class="card-body bg-transparent mt-3">
          <form
            action="mailto:help@pantonial.dev"
            method="GET"
            enctype="text/plain"
          >
            <div class="form-floating mb-2 rounded-2">
              <input
                type="text"
                name="subject"
                class="form-control"
                id="floatingInput"
                placeholder="subject"
              />
              <label for="floatingInput">Subject</label>
            </div>
            <div class="form-floating mb-2 rounded-2">
              <input
                type="email"
                name="email"
                class="form-control"
                id="floatingEmail"
                placeholder="Email"
              />
              <label for="floatingEmail">Email</label>
            </div>
            <div class="mb-4 rounded-2">
              <textarea
                name="body"
                class="form-control"
                id="floatingDetails"
                rows="8"
                placeholder="Details"
              ></textarea>
            </div>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  </div>
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
export default {
  name: "ContactView",
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
</style>

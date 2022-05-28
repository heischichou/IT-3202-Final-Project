<template>
  <div class="container col-md-8 col-lg-6">
    <div class="card bg-lightblue-1 opacity-75 rounded-3 border-0">
      <div class="card-body bg-transparent p-3 m-3 pb-2">
        <form
          action="mailto:help@pantonial.dev"
          method="GET"
          enctype="text/plain"
        >
          <div class="mb-2 rounded-2">
            <input
              type="text"
              name="subject"
              class="form-control py-2 border-0"
              id="floatingInput"
              placeholder="Subject"
            />
          </div>
          <div class="mb-2 rounded-2">
            <input
              type="email"
              name="email"
              class="form-control py-2 border-0"
              id="floatingEmail"
              placeholder="Your email"
            />
          </div>
          <div class="mb-4 rounded-2">
            <textarea
              name="body"
              class="form-control py-2 border-0"
              id="floatingDetails"
              rows="15"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <div class="d-flex justify-content-center bg-transparent">
            <input
              class="bg-secondary border-0 rounded-2 px-5 py-3"
              type="submit"
              value="SUBMIT"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SendAMessage",
};
</script>

<style scoped></style>

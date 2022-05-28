<template>
  <div class="container-sm" style="width: 35%; min-width: 22rem">
    <div class="card bg-lightblue-1 opacity-75 rounded-3 border-0">
      <div class="card-body bg-transparent m-3">
        <form
          action="mailto:help@pantonial.dev"
          method="GET"
          enctype="text/plain"
        >
          <div class="mb-2 rounded-2">
            <input
              type="text"
              name="subject"
              class="form-control"
              id="floatingInput"
              placeholder="Subject"
            />
          </div>
          <div class="mb-2 rounded-2">
            <input
              type="email"
              name="email"
              class="form-control"
              id="floatingEmail"
              placeholder="Email"
            />
          </div>
          <div class="mb-4 rounded-2">
            <textarea
              name="body"
              class="form-control"
              id="floatingDetails"
              rows="15"
              placeholder="Write your message here..."
              style="resize: none"
            ></textarea>
          </div>
          <div class="d-flex justify-content-center bg-transparent">
            <input
              class="bg-secondary border-0 rounded-2 px-5 py-2"
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

<template>
  <teleport to="body">
    <div
      ref="modal"
      class="modal fade bg-black bg-opacity-50"
      :class="{ show: active, 'd-block': active }"
      :id="projectDetails.project_id"
      tabindex="-1"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered bg-transparent">
        <div class="modal-content border-0">
          <div class="modal-body" :style="{ background: modalColor }">
            <div class="row justify-content-center no-bgColor">
              <div
                class="col-md-auto justify-content-center no-bgColor px-0 mx-3 my-2"
              >
                <img
                  class="modal-img bg-light"
                  :src="projectDetails.project_img"
                  :alt="projectDetails.project_name"
                />
              </div>
              <div
                class="col-md-auto justify-content-center no-bgColor px-0 mx-3 ms-2 my-2"
              >
                <div class="container info-section bg-light p-0">
                  <div class="d-flex flex-column p-4">
                    <div class="d-inline-flex justify-content-between">
                      <h5 class="text-uppercase fw-bold text-black m-0">
                        {{ projectDetails.project_name }}
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        aria-label="Close"
                        @click="$emit('closeModal')"
                      ></button>
                    </div>
                    <hr class="my-3" />
                    <div class="row justify-content-start no-bgColor pb-3">
                      <div
                        class="col-sm-auto no-bgColor px-1 pb-2"
                        v-for="(tag, index) in projectDetails.project_tags"
                        :key="index"
                      >
                        <ProjectTag :text="tag" tagColor="#CEE8FA" />
                      </div>
                    </div>
                    <p class="fw-light pt-4">
                      {{ projectDetails.description }}
                    </p>

                    <hr class="mb-auto" />
                    <button
                      class="btn btn-sm modal-btn bg-secondary border-secondary align-self-center p-2 px-3 my-3"
                      type="button"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import ProjectTag from "./ProjectTag";
export default {
  name: "ProjectModal",
  components: {
    ProjectTag,
  },
  emits: ["closeModal"],
  props: {
    isVisible: Boolean,
    projectDetails: Object,
    modalColor: String,
  },
  watch: {
    isVisible: {
      handler(newVal) {
        this.active = newVal;
        const body = document.querySelector("body");
        this.isVisible
          ? body.classList.add("modal-open")
          : body.classList.remove("modal-open");
      },
      immediate: true,
      deep: true,
    },
  },
  data() {
    return {
      active: this.isVisible,
    };
  },
};
</script>

<style scoped>
.modal-body {
  border-radius: 24px;
}

.modal-img {
  width: 314px;
  height: 390px;
  align-self: center;
  object-fit: cover;
}

.info-section {
  width: 396px;
  height: 390px;
}

.no-bgColor {
  background: none;
}

.modal-btn {
  border-radius: 8px;
}
</style>

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
          <div class="modal-body" :class="'bg-' + modalColor">
            <div class="container-fluid bg-transparent">
              <div class="row justify-content-center no-bgColor">
                <div
                  class="col-md-auto d-flex justify-content-center no-bgColor px-0 mx-3 my-2"
                >
                  <img
                    class="modal-img bg-light"
                    :src="projectDetails.project_img"
                    :alt="projectDetails.project_name"
                  />
                </div>
                <div
                  class="col-md-auto d-flex justify-content-center no-bgColor px-0 mx-3 ms-2 my-2"
                >
                  <div class="card info-section bg-light p-0">
                    <div class="container p-4">
                      <div class="d-flex justify-content-between">
                        <h6 class="text-uppercase fw-bold text-black m-0">
                          {{ projectDetails.project_name }}
                        </h6>
                        <button
                          type="button"
                          class="btn-close ps-2"
                          aria-label="Close"
                          @click="$emit('closeModal')"
                        ></button>
                      </div>
                      <hr class="my-3" />
                      <div
                        :id="'modalTags' + projectDetails.project_id"
                        class="text-nowrap overflow-hidden bg-transparent"
                        @mouseenter="
                          enableSideScroll(
                            '#modalTags' + projectDetails.project_id
                          )
                        "
                      >
                        <div
                          class="d-inline no-bgColor px-1"
                          v-for="(tag, index) in projectDetails.project_tags"
                          :key="index"
                        >
                          <ProjectTag :text="tag" tagColor="#CEE8FA" />
                        </div>
                      </div>
                      <p class="text-wrap text-justify fw-light pt-4">
                        <small>{{ projectDetails.description }}</small>
                      </p>

                      <hr class="mb-auto" />
                      <div class="d-flex justify-content-center">
                        <button
                          class="btn btn-sm modal-btn bg-secondary border-secondary p-2 px-3 my-3"
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
  methods: {
    enableSideScroll(list) {
      const slider = document.querySelector(list);
      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener("mouseleave", () => {
        isDown = false;
      });
      slider.addEventListener("mouseup", () => {
        isDown = false;
      });
      slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = x - startX;
        slider.scrollLeft = scrollLeft - walk;
      });
    },
  },
};
</script>

<style scoped>
.modal-body {
  border-radius: 24px;
}

.modal-img {
  width: 100%;
  max-width: 314px;
  min-height: 390px;
  height: 100%;
  border-radius: 8px;
  align-self: center;
  object-fit: cover;
}

.info-section {
  width: 396px;
  height: 100%;
  min-height: 390px;
}

.no-bgColor {
  background: none;
}

.modal-btn {
  border-radius: 8px;
}

.text-justify {
  margin: 0;
  text-align: justify;
}
</style>

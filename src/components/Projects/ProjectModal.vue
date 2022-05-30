<template>
  <teleport to="body">
    <div
      ref="modal"
      class="project-modal modal fade bg-black bg-opacity-50"
      :class="{ show: active, 'd-block': active }"
      :id="projectDetails.projectID"
      tabindex="-1"
    >
      <div class="modal-dialog modal-xl modal-dialog-centered bg-transparent">
        <div class="modal-content border-0">
          <div class="rounded-3 py-3" :class="'bg-' + modalColor">
            <div class="container-fluid bg-transparent">
              <div class="row justify-content-center bg-transparent px-3">
                <div
                  class="col-md-auto d-flex justify-content-center bg-transparent px-0 mx-3 my-2"
                >
                  <img
                    class="mx-auto d-block h-100 w-100 rounded-2"
                    style="
                      max-width: 520px;
                      min-height: 390px;
                      object-fit: cover;
                    "
                    :src="projectDetails.projectImage"
                    :alt="projectDetails.projectName"
                  />
                </div>
                <div
                  class="col-md-auto d-flex justify-content-center bg-transparent px-0 mx-3 my-2"
                >
                  <div
                    class="card h-100 bg-light border-0 p-0"
                    style="width: 520px; min-height: 390px"
                  >
                    <div class="container bg-transparent p-4">
                      <div class="d-flex justify-content-between">
                        <h6 class="text-uppercase fw-bold text-black m-0">
                          {{ projectDetails.projectName }}
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
                        :id="'modalTags' + projectDetails.projectID"
                        class="text-nowrap overflow-hidden bg-transparent"
                        @mouseenter="
                          enableSideScroll(
                            '#modalTags' + projectDetails.projectID
                          )
                        "
                      >
                        <div
                          class="project-tag d-inline bg-transparent px-1"
                          v-for="(tag, index) in projectDetails.projectTags"
                          :key="index"
                        >
                          <ProjectTag :text="tag" tagColor="#CEE8FA" />
                        </div>
                      </div>
                      <p
                        class="text-wrap m-0 fw-light pt-4"
                        style="text-align: justify"
                      >
                        <small>{{ projectDetails.projectDesc }}</small>
                      </p>

                      <hr class="mb-auto" />
                      <div class="d-flex justify-content-center">
                        <button
                          class="btn btn-sm bg-secondary border-secondary rounded-1 p-2 px-3 my-3"
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

<style scoped></style>

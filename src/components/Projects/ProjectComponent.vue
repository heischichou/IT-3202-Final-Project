<template>
  <div
    class="project-card card pull-up shadow h-100 border-0 rounded-3"
    :class="'bg-' + projectColor"
    style="width: 280px; mix-blend-mode: normal"
  >
    <div class="container bg-transparent">
      <a @click="toggleModal">
        <img
          class="card-img align-self-center mt-4 mb-4 bg-light"
          :src="projectItem.projectImage"
          :alt="projectItem.projectName"
          style="height: 284px; object-fit: cover"
        />
      </a>
      <div
        :id="'tags' + projectItem.projectID"
        class="text-nowrap overflow-hidden bg-transparent pb-4"
        @mouseenter="enableSideScroll('#tags' + projectItem.projectID)"
      >
        <div
          class="d-inline bg-transparent px-1 pb-2"
          v-for="(tag, index) in projectItem.projectTags"
          :key="index"
        >
          <ProjectTag :text="tag" tagColor="#F8F9FA" />
        </div>
      </div>
    </div>
  </div>
  <ProjectModal
    :isVisible="showModal"
    @closeModal="closeModal"
    :projectDetails="projectItem"
    :modalColor="projectColor"
  />
</template>

<script lang="ts">
import ProjectTag from "./ProjectTag.vue";
import ProjectModal from "./ProjectModal.vue";
export default {
  name: "ProjectComponent",
  components: {
    ProjectTag,
    ProjectModal,
  },
  props: {
    projectColor: String,
    projectItem: Object,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
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
.pull-up {
  transition: all 0.25s ease;
}

.pull-up:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 14px 24px rgba(62, 57, 107, 0.2);
  filter: brightness(105%);
  z-index: 999;
}
</style>

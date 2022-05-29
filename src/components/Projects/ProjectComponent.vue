<template>
  <div
    class="card project-card pull-up shadow border-0"
    :class="'bg-' + projectColor"
  >
    <div class="container no-bgColor">
      <a @click="toggleModal">
        <img
          class="card-img project-image mt-4 mb-4 bg-light"
          :src="projectItem.projectImage"
          :alt="projectItem.projectName"
        />
      </a>
      <div
        :id="'tags' + projectItem.projectID"
        class="text-nowrap overflow-hidden bg-transparent pb-4"
        @mouseenter="enableSideScroll('#tags' + projectItem.projectID)"
      >
        <div
          class="d-inline no-bgColor px-1 pb-2"
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

<script>
import ProjectTag from "./ProjectTag";
import ProjectModal from "./ProjectModal";
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
.project-card {
  width: 280px;
  height: 100%;
  mix-blend-mode: normal;
  border-radius: 24px;
}

.project-image {
  width: 100%;
  height: 284px;
  align-self: center;
  object-fit: cover;
}

.no-bgColor {
  background: none;
}

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

<template>
  <!-- Header -->
  <div class="container-fluid d-flex flex-row p-0">
    <div class="col-md-3"></div>
    <div
      class="col bg-dark rounded-1 me-0"
      id="main"
      style="height: 400px; margin-top: 80px; margin-bottom: -410px"
    ></div>
  </div>
  <div class="container bg-transparent mb-5">
    <div class="row align-items-end bg-transparent mb-4">
      <div class="col-md-auto container-fluid bg-transparent">
        <div class="row bg-transparent mt-5">
          <h1 class="text-primary text-center text-md-start fw-bolder fs-xxl">
            My <br />
            Technical <br />
            Skill Set
          </h1>
        </div>
      </div>
      <div
        class="col-md container-fluid bg-transparent ms-md-6 mt-3 mt-md-auto"
      >
        <div class="row bg-transparent my-2">
          <p class="text-center text-md-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div
          class="col-auto text-center text-md-start bg-transparent mt-4 mt-md-auto"
        >
          <button class="btn btn-secondary px-4 py-3">CONTACT ME</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Technology Stack Component -->
  <div class="my-0 py-0 my-md-3 py-md-3"></div>
  <div class="container py-5" id="tech-skill-section">
    <h1 class="text-primary text-center text-md-start fw-bolder fs-l mb-3">
      Technology Stack
    </h1>
    <div class="row">
      <div class="col-12 col-md">
        <h1
          class="d-block text-secondary text-center text-md-start fw-bolder my-4"
        >
          Languages
        </h1>
        <TechnologyList
          v-for="item in languages"
          :key="item.tech_skill_id"
          :item="item"
        />
      </div>
      <div class="col-12 col-md">
        <h1
          class="d-block text-secondary text-center text-md-start fw-bolder my-4"
        >
          Frameworks
        </h1>
        <TechnologyList
          v-for="item in frameworks"
          :key="item.tech_skill_id"
          :item="item"
        />
      </div>
    </div>
  </div>
  <!-- Skills Component -->
  <SkillsComponent
    class="mb-5 mb-md-4"
    v-for="(item, index) in skills"
    :key="item.skill_id"
    :item="item"
    :index="index"
  />
</template>

<script>
import TechnologyList from "@/components/SkillsList/TechnologyList";
import SkillsComponent from "@/components/SkillsList/SkillsComponent";

export default {
  name: "SkillsView",
  components: {
    TechnologyList,
    SkillsComponent,
  },
  data() {
    return {
      languages: [],
      frameworks: [],
      tech_skills: [
        {
          tech_skill_id: 1,
          name: "Java",
          scale: 5,
          type: "Language",
        },
        {
          tech_skill_id: 2,
          name: "Kotlin",
          scale: 4,
          type: "Language",
        },
        {
          tech_skill_id: 3,
          name: "PHP",
          scale: 3,
          type: "Language",
        },
        {
          tech_skill_id: 4,
          name: "SCSS",
          scale: 4,
          type: "Language",
        },
        {
          tech_skill_id: 5,
          name: "CSS",
          scale: 5,
          type: "Language",
        },
        {
          tech_skill_id: 6,
          name: "HTML",
          scale: 5,
          type: "Language",
        },
        {
          tech_skill_id: 7,
          name: "JavaScript",
          scale: 5,
          type: "Language",
        },
        {
          tech_skill_id: 8,
          name: "TypeScript",
          scale: 3,
          type: "Language",
        },
        {
          tech_skill_id: 9,
          name: "SQL",
          scale: 5,
          type: "Language",
        },
        {
          tech_skill_id: 10,
          name: "C",
          scale: 5,
          type: "Language",
        },
        {
          tech_skill_id: 11,
          name: "Python",
          scale: 5,
          type: "Language",
        },
        {
          tech_skill_id: 12,
          name: "GraphQL",
          scale: 3,
          type: "Language",
        },
        {
          tech_skill_id: 13,
          name: "Android",
          scale: 3,
          type: "Framework",
        },
        {
          tech_skill_id: 14,
          name: "Spring Boot",
          scale: 4,
          type: "Framework",
        },
        {
          tech_skill_id: 15,
          name: "Odoo",
          scale: 5,
          type: "Framework",
        },
        {
          tech_skill_id: 16,
          name: "Angular",
          scale: 5,
          type: "Framework",
        },
        {
          tech_skill_id: 17,
          name: "JQueryUI",
          scale: 5,
          type: "Framework",
        },
        {
          tech_skill_id: 18,
          name: "Laravel",
          scale: 1,
          type: "Framework",
        },
        {
          tech_skill_id: 19,
          name: "Algolia",
          scale: 1,
          type: "Framework",
        },
        {
          tech_skill_id: 20,
          name: "Heroku",
          scale: 3,
          type: "Framework",
        },
        {
          tech_skill_id: 21,
          name: "JHipster",
          scale: 5,
          type: "Framework",
        },
        {
          tech_skill_id: 22,
          name: "Kubernetes",
          scale: 3,
          type: "Framework",
        },
        {
          tech_skill_id: 23,
          name: "Docker",
          scale: 3,
          type: "Framework",
        },
        {
          tech_skill_id: 24,
          name: "Wordpress",
          scale: 3,
          type: "Framework",
        },
      ],
      skills: [
        {
          skill_id: 1,
          skill_name: "Personal Skills",
          skill_list: [
            "Understand the business requirements",
            "Communicate client's needs to the team",
            "Determine the needed tasks to be done",
            "Follow up on each member's progress",
            "Create a team from prospective candidates",
            "Collaborate with team on blocking issues",
            "Basic skills in project management",
          ],
          image_url: "null",
        },
        {
          skill_id: 2,
          skill_name: "Technical Skills",
          skill_list: [
            "Inter-branch VPN Configuration",
            "Linux Server Administration",
            "NAS Server Deployment",
            "Reactive Programming",
            "Rack Mounted Server Deployment",
            "Cisco Networking",
            "PFSense Network Configuration",
            "Functional Programming",
            "GitFlow and Semantic Versioning",
            "Subversion",
          ],
          image_url: "null",
        },
      ],
    };
  },
  beforeMount() {
    this.languages = this.tech_skills.filter(function (item) {
      return item.type.localeCompare("Language") === 0;
    });
    this.frameworks = this.tech_skills.filter(function (item) {
      return item.type.localeCompare("Framework") === 0;
    });
  },
  mounted() {
    let skills = document.getElementsByClassName("technology");
    for (let x = 0, count = skills.length; x < count; x++) {
      let scales = skills[x].lastChild;
      for (let y = scales.children.length; y < 5; y++) {
        const scale = document.createElement("div");
        scale.className = "bg-secondary rounded-pill";
        scale.style.width = "25px";
        scale.style.height = "25px";
        scales.appendChild(scale);
      }
    }
  },
};
</script>

<style scoped>
#tech-skill-section > .row > div {
  background: none;
}
</style>

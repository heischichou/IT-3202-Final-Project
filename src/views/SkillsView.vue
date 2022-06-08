<template>
  <!-- Header -->
  <div class="container-fluid d-flex flex-row p-0">
    <div class="col-md-3"></div>
    <div class="col bg-dark rounded-start me-0" id="main"></div>
  </div>
  <div class="container bg-transparent mb-5" id="header">
    <div class="row align-items-end bg-transparent mb-4">
      <div class="col-md-auto container-fluid bg-transparent">
        <div class="row bg-transparent mt-n5">
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
          <router-link to="/contact" class="btn btn-secondary px-4 py-3"
            >CONTACT</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <!-- Technology Stack Component -->
  <div class="my-0 py-0 py-lg-5"></div>
  <div class="container pt-5" id="tech-skill-section">
    <h1 class="text-primary text-center text-md-start fw-bolder fs-l mb-3">
      Technology Stack
    </h1>
    <div class="row">
      <div class="col-12 col-md">
        <h1
          class="d-block text-secondary text-center text-md-start fw-bold my-4"
        >
          Languages
        </h1>
        <TechnologyList
          v-for="item in languages"
          :key="item.techSkillId"
          :item="item"
        />
      </div>
      <div class="col-12 col-md">
        <h1
          class="d-block text-secondary text-center text-md-start fw-bold my-4"
        >
          Frameworks
        </h1>
        <TechnologyList
          v-for="item in frameworks"
          :key="item.techSkillId"
          :item="item"
        />
      </div>
    </div>
  </div>
  <div class="py-4 py-md-0"></div>
  <!-- Skills Component -->
  <SkillsComponent
    class="mb-5 mb-md-4"
    v-for="(item, index) in skills"
    :key="item.skillId"
    :item="item"
    :index="index"
  />
  <div class="my-0 py-0 py-md-5"></div>
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
          techSkillId: 1,
          name: "Java",
          scale: 5,
          type: "Language",
        },
        {
          techSkillId: 2,
          name: "Kotlin",
          scale: 4,
          type: "Language",
        },
        {
          techSkillId: 3,
          name: "PHP",
          scale: 3,
          type: "Language",
        },
        {
          techSkillId: 4,
          name: "SCSS",
          scale: 4,
          type: "Language",
        },
        {
          techSkillId: 5,
          name: "CSS",
          scale: 5,
          type: "Language",
        },
        {
          techSkillId: 6,
          name: "HTML",
          scale: 5,
          type: "Language",
        },
        {
          techSkillId: 7,
          name: "JavaScript",
          scale: 5,
          type: "Language",
        },
        {
          techSkillId: 8,
          name: "TypeScript",
          scale: 3,
          type: "Language",
        },
        {
          techSkillId: 9,
          name: "SQL",
          scale: 5,
          type: "Language",
        },
        {
          techSkillId: 10,
          name: "C",
          scale: 5,
          type: "Language",
        },
        {
          techSkillId: 11,
          name: "Python",
          scale: 5,
          type: "Language",
        },
        {
          techSkillId: 12,
          name: "GraphQL",
          scale: 3,
          type: "Language",
        },
        {
          techSkillId: 13,
          name: "Android",
          scale: 3,
          type: "Framework",
        },
        {
          techSkillId: 14,
          name: "Spring Boot",
          scale: 4,
          type: "Framework",
        },
        {
          techSkillId: 15,
          name: "Odoo",
          scale: 5,
          type: "Framework",
        },
        {
          techSkillId: 16,
          name: "Angular",
          scale: 5,
          type: "Framework",
        },
        {
          techSkillId: 17,
          name: "JQueryUI",
          scale: 5,
          type: "Framework",
        },
        {
          techSkillId: 18,
          name: "Laravel",
          scale: 1,
          type: "Framework",
        },
        {
          techSkillId: 19,
          name: "Algolia",
          scale: 1,
          type: "Framework",
        },
        {
          techSkillId: 20,
          name: "Heroku",
          scale: 3,
          type: "Framework",
        },
        {
          techSkillId: 21,
          name: "JHipster",
          scale: 5,
          type: "Framework",
        },
        {
          techSkillId: 22,
          name: "Kubernetes",
          scale: 3,
          type: "Framework",
        },
        {
          techSkillId: 23,
          name: "Docker",
          scale: 3,
          type: "Framework",
        },
        {
          techSkillId: 24,
          name: "Wordpress",
          scale: 3,
          type: "Framework",
        },
      ],
      skills: [
        {
          skillId: 1,
          skillName: "Personal Skills",
          skillList: [
            "Understand the business requirements",
            "Communicate client's needs to the team",
            "Determine the needed tasks to be done",
            "Follow up on each member's progress",
            "Create a team from prospective candidates",
            "Collaborate with team on blocking issues",
            "Basic skills in project management",
          ],
          imageUrl:
            "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
        },
        {
          skillId: 2,
          skillName: "Technical Skills",
          skillList: [
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
          imageUrl:
            "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964",
        },
      ],
    };
  },
  methods: {
    reveal() {
      const reveals = document.querySelectorAll(".reveal");

      for (const element of reveals) {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      }
    },
  },
  beforeMount() {
    this.languages = this.tech_skills.filter((item) => {
      return item.type.localeCompare("Language") === 0;
    });
    this.frameworks = this.tech_skills.filter((item) => {
      return item.type.localeCompare("Framework") === 0;
    });
  },
  mounted() {
    let skills = document.getElementsByClassName("technology");
    let toggler = document.getElementById("navbarNav");
    let main = document.getElementById("main");

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
    toggler.addEventListener("show.bs.collapse", () => {
      main.style.transition = "none";
      main.classList.add("mt-0");
    });
    toggler.addEventListener("hidden.bs.collapse", () => {
      main.style.transition = "all .5s";
      main.classList.remove("mt-0");
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        if (
          main.classList.contains("mt-0") &&
          toggler.classList.contains("show")
        ) {
          main.classList.remove("mt-0");
        }
      } else {
        if (
          !main.classList.contains("mt-0") &&
          toggler.classList.contains("show")
        ) {
          main.classList.add("mt-0");
        }
      }
    });
    window.dispatchEvent(new Event("resize"));
    window.addEventListener("scroll", this.reveal);
  },
  unmounted() {
    window.removeEventListener("scroll", this.reveal);
  },
};
</script>

<style scoped>
#tech-skill-section > .row > div {
  background: none;
}
@media (max-width: 768px) {
  #main {
    height: 500px;
    margin-top: -80px;
    margin-bottom: -360px;
    border-radius: 0 !important;
  }
}
@media (min-width: 768px) {
  #main {
    height: 300px;
    margin-top: 80px;
    margin-bottom: -280px;
  }
}
@media (min-width: 1200px) {
  #main {
    height: 400px;
    margin-top: 80px;
    margin-bottom: -410px;
  }
}
</style>

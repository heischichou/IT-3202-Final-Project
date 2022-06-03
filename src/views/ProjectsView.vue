<template>
  <!-- Header -->
  <div class="container-fluid d-flex flex-row p-0">
    <div class="col-md-3"></div>
    <div class="col bg-dark rounded-start me-0" id="main"></div>
  </div>
  <div class="container bg-transparent mb-5" id="header">
    <div class="row align-items-end bg-transparent mb-4">
      <div class="col-md-auto container-fluid bg-transparent"></div>
      <div
        class="col-md container-fluid bg-transparent ms-md-6 mt-3 mt-md-auto"
      >
        <div class="row bg-transparent mt-n5">
          <h1 class="text-primary text-center text-md-end fw-bolder fs-xxl">
            My <br />
            Projects
          </h1>
        </div>
      </div>
    </div>
  </div>

  <!-- Navbar -->
  <div class="container my-5 pt-3" style="max-width: 60rem">
    <nav class="navbar navbar-expand-md navbar-dark bg-transparent">
      <div
        class="container d-flex flex-row flex-row-reverse bg-transparent mt-5"
      >
        <div
          class="d-flex justify-content-center collapse navbar-collapse text-center bg-transparent m-3 mt-5"
        >
          <ul class="row navbar-nav mx-n4 mt-3">
            <li class="col-auto nav-item px-4">
              <button
                @click="showProjectDiv(true, false, false)"
                class="btn btn-link text-black"
                :class="[
                  major ? 'text-decoration-underline' : 'text-decoration-none',
                ]"
              >
                MAJOR PROJECTS
              </button>
            </li>
            <li class="col-auto nav-item px-4">
              <button
                @click="showProjectDiv(false, true, false)"
                class="btn btn-link text-black"
                :class="[
                  minor ? 'text-decoration-underline' : 'text-decoration-none',
                ]"
              >
                MINOR PROJECTS
              </button>
            </li>
            <li class="col-auto nav-item px-4">
              <button
                @click="showProjectDiv(false, false, true)"
                class="btn btn-link text-black"
                :class="[
                  personal
                    ? 'text-decoration-underline'
                    : 'text-decoration-none',
                ]"
              >
                PERSONAL PROJECTS
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!--  MAJOR PROJECTS DIV  -->
    <div v-show="major" class="row justify-content-center pt-2 pb-4" id="major">
      <div
        class="col-12 col-xl-4 col-md-6 d-flex justify-content-center py-4"
        v-for="(project, index) in majorProjects"
        :key="project.projectID"
      >
        <ProjectComponent
          :projectColor="selectColor(index)"
          :projectItem="project"
        />
      </div>
    </div>
    <!--  MINOR PROJECTS DIV  -->
    <div v-show="minor" class="row justify-content-center pt-2 pb-4" id="minor">
      <div
        class="col-xl-4 col-md-6 d-flex justify-content-center py-4"
        v-for="(project, index) in minorProjects"
        :key="project.projectID"
      >
        <ProjectComponent
          :projectColor="selectColor(index)"
          :projectItem="project"
        />
      </div>
    </div>
    <!--  PERSONAL PROJECTS DIV  -->
    <div
      v-show="personal"
      class="row justify-content-center pt-2 pb-4"
      id="personal"
    >
      <div
        class="col-xl-4 col-md-6 d-flex justify-content-center py-4"
        v-for="(project, index) in personalProjects"
        :key="project.projectID"
      >
        <ProjectComponent
          :projectColor="selectColor(index)"
          :projectItem="project"
        />
      </div>
    </div>
  </div>

  <!-- Contact Section -->
  <div class="container pt-3 pb-5 my-5" id="contact-section">
    <div class="d-flex flex-column align-items-center">
      <div class="col-md-6 col-lg-4">
        <p class="text-center">
          I'd love to answer any questions you have, plan collaborations, or
          work on new projects with you.
        </p>
      </div>
      <div class="d-flex justify-content-center">
        <router-link
          to="/contact"
          class="btn btn-secondary mt-3 py-3 px-4 text-body"
        >
          CONTACT ME
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectComponent from "../components/Projects/ProjectComponent";
export default {
  name: "ProjectsView",
  components: {
    ProjectComponent,
  },
  data() {
    return {
      major: true,
      minor: false,
      personal: false,
      projects: [],
      projectColors: [
        "periwinkle-1",
        "periwinkle-2",
        "lightblue-1",
        "lightblue-2",
      ],
    };
  },
  created() {
    this.projects = [
      {
        projectID: 1,
        projectName: "POSTNORD CENTRAL EVENT MANAGER",
        projectImage:
          "https://assets.asana.biz/m/5d7a4c4d0c33d68/original/article-project-management-how-project-status-reports-2x.png",
        projectDesc:
          "This system receives events from multiple external systems that is not handled by the company. Those events are then compiled and stored to output a cohesive history of the delivery of a parcel.",
        projectTags: [
          "Spring Boot",
          "Java",
          "DynamoDb",
          "Severless",
          "CloudFormation",
          "CloudWatch",
          "Kibana",
          "Kubernetes",
        ],
        projectType: "Major",
      },
      {
        projectID: 2,
        projectName: "FLAT X REALTY WEBSITE",
        projectImage:
          "https://images.ctfassets.net/gg4ddi543f5b/6KSggHBfL67iQEcIXYS1vO/ace931866fe1adea8f584e6cedec90c8/project-management-methodologies-lean-methodology.png",
        projectDesc:
          "This system aims to have a free listing site for real estate with premium features for property management. This is an ongoing project where new features are added monthly based on user reviews and new ideas by management.",
        projectTags: [
          "Spring",
          "Boot",
          "Kotlin",
          "GraphQl",
          "Microservices",
          "Angular",
          "GCP",
          "Kubernetes",
          "PostGIS",
          "Elasticsearch",
          "Algolia",
        ],
        projectType: "Major",
      },
      {
        projectID: 3,
        projectName: "Project 3",
        projectImage:
          "https://www.proofhub.com/wp-content/uploads/2017/10/Project-Manager-Roles-And-Responsibilities.jpg",
        projectDesc: "Project 3 sample description...",
        projectTags: ["HTML", "CSS", "PHP", "MySQL"],
        projectType: "Minor",
      },
      {
        projectID: 4,
        projectName: "Project 4",
        projectImage:
          "https://idapgroup.com/blog/blog/wp-content/uploads/2018/07/PM-01-1.jpg",
        projectDesc: "Project 1 sample description...",
        projectTags: ["HTML", "CSS", "Laravel", "Vue"],
        projectType: "Minor",
      },
      {
        projectID: 5,
        projectName: "Project 5",
        projectImage:
          "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvamVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
        projectDesc: "Project 2 sample description...",
        projectTags: ["HTML", "React", "Bootstrap"],
        projectType: "Personal",
      },
      {
        projectID: 6,
        projectName: "ODOO HELPMATE WATER SYSTEM",
        projectImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3p3yVs1M0pTseaNkTJxbfpgfiFDCgHO1ag&usqp=CAU",
        projectDesc:
          "This system replaces the desktop based water system with an online based water system that links to different ERP technologies for seamless processing of account management, billing, employee management, reporting,accounting, and most other concerns.",
        projectTags: [
          "Python",
          "XML RPC",
          "Odoo",
          "PostgreSQL",
          "Android",
          "Java",
        ],
        projectType: "Major",
      },
      {
        projectID: 7,
        projectName: "CEBU CCTV WEBSITE",
        projectImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3p3yVs1M0pTseaNkTJxbfpgfiFDCgHO1ag&usqp=CAU",
        projectDesc:
          "Update of Cebu CCTV Website to its initial wordpress version.",
        projectTags: ["WordPress", "MySQL", "LAMP"],
        projectType: "Major",
      },
    ];
  },
  methods: {
    showProjectDiv(majorVal, minorVal, personalVal) {
      this.major = majorVal;
      this.minor = minorVal;
      this.personal = personalVal;
    },
    selectColor(index) {
      while (index > 3) {
        index -= 4;
      }
      return this.projectColors[index];
    },
  },
  mounted() {
    let toggler = document.getElementById("navbarNav");
    let main = document.getElementById("main");

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
  },
  computed: {
    majorProjects: function () {
      return this.projects.filter((project) => {
        return project.projectType.localeCompare("Major") === 0;
      });
    },
    minorProjects: function () {
      return this.projects.filter((project) => {
        return project.projectType.localeCompare("Minor") === 0;
      });
    },
    personalProjects: function () {
      return this.projects.filter((project) => {
        return project.projectType.localeCompare("Personal") === 0;
      });
    },
  },
};
</script>

<style scoped>
.btn-link:hover {
  text-decoration: underline !important;
}
.btn:focus {
  outline: none;
  box-shadow: none;
}
@media (max-width: 768px) {
  #main {
    height: 320px;
    margin-top: -80px;
    margin-bottom: -180px;
    border-radius: 0 !important;
  }
}
@media (min-width: 768px) {
  #main {
    height: 320px;
    margin-top: 40px;
    margin-bottom: -210px;
  }
}
@media (min-width: 1200px) {
  #main {
    height: 400px;
    margin-top: 40px;
    margin-bottom: -280px;
  }
}
</style>

<template>
  <div class="container-fluid">
    <div class="row mt-5 pt-5">
      <div class="col-md-3"></div>
      <div
        class="col bg-dark me-0 mb-3 rounded-start"
        style="height: 300px; margin-top: -100px"
      ></div>
    </div>
  </div>
  <div class="container text-end bg-transparent">
    <h1
      class="text-primary font-weight-bolder"
      style="font-size: 4.5rem; margin-top: -250px"
    >
      My<br />Projects
    </h1>
  </div>
  <div class="container my-5" style="width: 1000px">
    <!-- Navbar -->
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
                class="btn btn-link text-decoration-none text-black"
                :class="[major === true ? showLine : noLine]"
              >
                MAJOR PROJECTS
              </button>
            </li>
            <li class="col-auto nav-item px-4">
              <button
                @click="showProjectDiv(false, true, false)"
                class="btn btn-link text-decoration-none text-black"
                :class="[minor === true ? showLine : noLine]"
              >
                MINOR PROJECTS
              </button>
            </li>
            <li class="col-auto nav-item px-4">
              <button
                @click="showProjectDiv(false, false, true)"
                class="btn btn-link text-decoration-none text-black"
                :class="[personal === true ? showLine : noLine]"
              >
                PERSONAL PROJECTS
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!--  MAJOR PROJECTS DIV  -->
    <div v-show="major" class="row justify-content-start pt-2 pb-4">
      <div
        class="col-xl-4 col-md-6 d-flex justify-content-center py-4"
        v-for="(project, index) in majorProjects"
        :key="project.project_id"
      >
        <ProjectComponent
          :projectColor="selectColor(index)"
          :projectItem="project"
        />
      </div>
    </div>
    <!--  MINOR PROJECTS DIV  -->
    <div v-show="minor" class="row justify-content-start pt-2 pb-4">
      <div
        class="col-xl-4 col-md-6 d-flex justify-content-center py-4"
        v-for="(project, index) in minorProjects"
        :key="project.project_id"
      >
        <ProjectComponent
          :projectColor="selectColor(index)"
          :projectItem="project"
        />
      </div>
    </div>
    <!--  PERSONAL PROJECTS DIV  -->
    <div v-show="personal">
      <div
        class="col-xl-4 col-md-6 d-flex justify-content-center py-4"
        v-for="(project, index) in personalProjects"
        :key="project.project_id"
      >
        <ProjectComponent
          :projectColor="selectColor(index)"
          :projectItem="project"
        />
      </div>
    </div>
  </div>

  <!-- Contacts Section -->
  <div class="container mb-5">
    <div class="d-flex flex-column">
      <div>
        <p class="text-center">
          I'd be delighted to answer any questions,<br />
          plan collaborations, or collaborate on new projects with you.
        </p>
      </div>
      <div class="d-flex justify-content-center mb-5">
        <button
          class="bg-secondary border-secondary mt-3 me-3 mb-5 p-3"
          type="button"
        >
          <router-link to="/contact" class="nav-link text-body"
            >CONTACT ME</router-link
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectComponent from "../components/ProjectComponent";
export default {
  name: "ProjectsView",
  components: {
    ProjectComponent,
  },
  data: function () {
    return {
      major: true,
      minor: false,
      personal: false,
      showLine: "text-decoration-underline",
      noLine: "text-decoration-none",
      projects: [],
      project_colors: ["#B8B9C8", "#B9BFE1", "#B9D0FC", "#B4C9E7"],
    };
  },
  created() {
    this.projects = [
      {
        project_id: 1,
        project_name: "Project 1",
        project_img:
          "https://assets.asana.biz/m/5d7a4c4d0c33d68/original/article-project-management-how-project-status-reports-2x.png",
        description: "Project 1 sample description...",
        project_tags: ["HTML", "CSS", "Javascript"],
        project_type: "Major",
      },
      {
        project_id: 2,
        project_name: "Project 2",
        project_img:
          "https://images.ctfassets.net/gg4ddi543f5b/6KSggHBfL67iQEcIXYS1vO/ace931866fe1adea8f584e6cedec90c8/project-management-methodologies-lean-methodology.png",
        description: "Project 2 sample description...",
        project_tags: ["HTML", "CSS", "Vue"],
        project_type: "Major",
      },
      {
        project_id: 3,
        project_name: "Project 3",
        project_img:
          "https://www.proofhub.com/wp-content/uploads/2017/10/Project-Manager-Roles-And-Responsibilities.jpg",
        description: "Project 3 sample description...",
        project_tags: ["HTML", "CSS", "PHP", "MySQL"],
        project_type: "Minor",
      },
      {
        project_id: 4,
        project_name: "Project 4",
        project_img:
          "https://idapgroup.com/blog/blog/wp-content/uploads/2018/07/PM-01-1.jpg",
        description: "Project 1 sample description...",
        project_tags: ["HTML", "CSS", "Laravel", "Vue"],
        project_type: "Minor",
      },
      {
        project_id: 5,
        project_name: "Project 5",
        project_img:
          "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvamVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
        description: "Project 2 sample description...",
        project_tags: ["HTML", "React", "Bootstrap"],
        project_type: "Personal",
      },
      {
        project_id: 6,
        project_name: "Project 6",
        project_img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3p3yVs1M0pTseaNkTJxbfpgfiFDCgHO1ag&usqp=CAU",
        description: "Project 3 sample description...",
        project_tags: ["HTML", "CSS", "Kotlin", "SQL"],
        project_type: "Major",
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
      return this.project_colors[index];
    },
  },
  computed: {
    majorProjects: function () {
      return this.projects.filter(function (project) {
        return project.project_type === "Major";
      });
    },
    minorProjects: function () {
      return this.projects.filter(function (project) {
        return project.project_type === "Minor";
      });
    },
    personalProjects: function () {
      return this.projects.filter(function (project) {
        return project.project_type === "Personal";
      });
    },
  },
};
</script>

<style scoped>
/*div {*/
/*  border: 1px;*/
/*  outline: solid black;*/
/*}*/

.btn:focus {
  outline: none;
  box-shadow: none;
}
</style>

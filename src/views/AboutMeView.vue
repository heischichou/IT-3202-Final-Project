<template>
  <!-- Header -->
  <div class="container-fluid d-flex flex-row p-0">
    <div class="col-lg-3"></div>
    <div class="col bg-dark me-0" id="main"></div>
  </div>
  <div class="container bg-transparent mb-5" id="header">
    <div class="row align-items-end bg-transparent mb-4">
      <div class="col-lg-auto container-fluid bg-transparent">
        <div class="row bg-transparent">
          <h1 class="text-primary fw-bolder fs-xxl">
            Hello, <br />
            I'm Rodney <br />
            Pantonial.
          </h1>
        </div>
      </div>
      <div class="col-lg container-fluid bg-transparent ms-lg-6">
        <div class="row bg-transparent my-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequa!
          </p>
        </div>
        <div class="row gap-4 fw-bold bg-transparent mt-2 my-lg-4">
          <a class="col-1 text-decoration-none text-body social-link" href="#"
            >TW.</a
          >
          <a class="col-1 text-decoration-none text-body social-link" href="#"
            >IN.</a
          >
          <a class="col-1 text-decoration-none text-body social-link" href="#"
            >FB.</a
          >
        </div>
      </div>
    </div>
    <div class="row bg-transparent">
      <div class="col-lg-1 bg-transparent"></div>
      <div class="col-auto bg-transparent">
        <a href="resume.pdf" download="Pantonial Resume.pdf">
          <button class="btn btn-secondary px-4 py-3">DOWNLOAD CV</button>
        </a>
      </div>
    </div>
  </div>
  <!-- Experience Component -->
  <div class="container pt-5 pb-3 py-md-5" id="experience-section">
    <h1 class="text-primary text-center text-md-start fw-bolder fs-l mb-5">
      Experience
    </h1>
    <ExperienceList
      class="mb-5 mb-md-4"
      v-for="item in experience"
      :key="item.experienceId"
      :item="item"
      @mouseenter="enableSideScroll('#roles' + item.experienceId)"
    />
  </div>
  <!-- Expertise Component -->
  <div class="container py-3 py-md-5" id="expertise-section">
    <h1 class="text-primary text-center fw-bolder text-md-start fs-l mb-5">
      Expertise
    </h1>
    <ExpertiseList
      class="mb-6"
      v-for="(item, index) in expertise"
      :key="index"
      :item="item"
      :itemId="index"
    />
  </div>
</template>

<script>
import ExperienceList from "../components/AboutMe/ExperienceList";
import ExpertiseList from "../components/AboutMe/ExpertiseList";
export default {
  name: "AboutMeView",
  components: {
    ExperienceList,
    ExpertiseList,
  },
  data() {
    return {
      experience: [
        {
          experienceId: 1,
          title: "Web Developer",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
          organization: "Xlr8 Ventures Inc",
          roles: [
            "AWS Infrastructure",
            "AWS Lambda System",
            "Central Event Manager for Postnord",
            "Create Unit Tests",
            "Retro Planning",
            "Systems Development",
          ],
          year: "PRESENT",
        },
        {
          experienceId: 2,
          title: "Team Leader",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
          organization: "Flat X Realty Services",
          roles: [
            "SEO",
            "Code Optimization",
            "Code Review",
            "GraphQL Implementation",
            "Microservices Deployment",
            "Research Technology",
            "Features Planning",
            "Design Planning",
            "Allocation of Tasks",
            "Project Planning",
            "Database Design",
            "Scrum Leader",
          ],
          year: "2018",
        },
        {
          experienceId: 3,
          title: "Senior Programmer",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
          organization: "Helpmate Incorporated",
          roles: [
            "Company Website",
            "IT Support",
            "DB Admin",
            "Network Security",
            "System Security",
            "Accounting System Maintenance",
            "Server Virtualization",
            "Rack Server Deployment",
            "Raid Z2 NAS Server Deployment",
            "Water System",
            "Network Wiring",
            "Android Meter Reader Maintenance",
            "Accounting System ERP Planning",
          ],
          year: "2015",
        },
        {
          experienceId: 4,
          title: "Junior Programmer",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
          organization: "Azeus",
          roles: [
            "Apply Software Engineering",
            "Resource Sharing System",
            "Oracle Database Management",
            "Create JSP Pages",
            "Study Proprietary Java Technology",
          ],
          year: "2014",
        },
      ],
      expertise: [
        {
          expertiseId: 1,
          title: "Networking Training",
          description:
            "Studied protocols like RIP and VOIP. Implemented Subnetworking and Fire wall Techniques. Deployed the technology learned to the company network. Studied VPN and applied to inter-branch communication.",
          imageUrl: {
            default: require("@/assets/images/AboutMe/photo-1612045194743-877419047a35.png"),
          },
        },
        {
          expertiseId: 2,
          title: "Advanced Project Management",
          description:
            "Applied soft tools to create the right mix of team members in a project. Learned how to use Project Libre advance techniques to track project costs. Used WBS to manage an ongoing project. Determined the effects of corporate decisions on a current project.",
          imageUrl: {
            default: require("@/assets/images/AboutMe/photo-1531403009284-440f080d1e12.png"),
          },
        },
        {
          expertiseId: 3,
          title: "Big Data Analytics Training 101",
          description:
            "Used PostgreSQL to analyze big data sets. Combined multiple data sources into one dashboard. Converted corporate data into readily readable KPIS.",
          imageUrl: {
            default: require("@/assets/images/AboutMe/photo-1599658880436-c61792e70672.png"),
          },
        },
        {
          expertiseId: 4,
          title: "Financial Statement Analysis",
          description:
            "Learned how to create a financial statement based on a transaction table. Optimize the cost of company taxes through correct labelling of transactions. Learned techniques to optimize the chart of accounts, Applied seminar to current project.",
          imageUrl: {
            default: require("@/assets/images/AboutMe/photo-1454165804606-c3d57bc86b40.png"),
          },
        },
      ],
    };
  },
  methods: {
    enableSideScroll(list) {
      const slider = document.querySelector(list);
      const isDown = false;
      const startX;
      const scrollLeft;

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
    onResize() {
      const rows = document.getElementsByClassName("expertise");
      if (window.innerWidth < 768) {
        for (const i = 0, count = rows.length; i < count; i++) {
          rows[i].classList.replace("flex-row", "flex-column");
          const cols = rows[i].children;
          cols[0].classList.replace("order-last", "order-first");
          cols[1].classList.replace("order-first", "order-last");
          cols[0].classList.add("mb-5");
          cols[1].classList.add("mx-1");
        }
      } else {
        for (const i = 0, count = rows.length; i < count; i++) {
          rows[i].classList.replace("flex-column", "flex-row");
          const cols = rows[i].children;
          i % 2 !== 0
            ? cols[0].classList.replace("order-first", "order-last")
            : cols[0].classList.replace("order-last", "order-first");
          i % 2 !== 0
            ? cols[1].classList.replace("order-last", "order-first")
            : cols[1].classList.replace("order-first", "order-last");
          cols[0].classList.remove("mb-5");
          cols[1].classList.remove("mx-1");
        }
      }
    },
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  mounted() {
    this.onResize();
    const toggler = document.getElementById("navbarNav");
    const main = document.getElementById("main");

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
};
</script>

<style scoped>
.social-link:hover {
  text-decoration: underline !important;
}
@media (max-width: 992px) {
  #main {
    height: 620px;
    margin-top: -100px;
    margin-bottom: -510px;
  }
}
@media (min-width: 992px) {
  #main {
    height: 520px;
    margin-top: -100px;
    margin-bottom: -410px;
  }
}
</style>

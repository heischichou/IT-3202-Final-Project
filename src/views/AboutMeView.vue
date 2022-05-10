<template>
  <!-- Header -->
  <div class="container-fluid d-flex flex-row p-0">
    <div class="col-md-3"></div>
    <div
      class="col bg-dark me-0"
      style="height: 520px; margin-top: -100px; margin-bottom: -410px"
    ></div>
  </div>
  <div class="container bg-transparent mb-5">
    <div class="row align-items-end bg-transparent mb-4">
      <div class="col-md-auto container-fluid bg-transparent">
        <div class="row bg-transparent">
          <h1 class="text-primary fw-bolder fs-xxl">
            Hello, <br />
            I'm Rodney <br />
            Pantonial.
          </h1>
        </div>
      </div>
      <div class="col-md container-fluid bg-transparent ms-md-6">
        <div class="row bg-transparent my-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequa.
          </p>
        </div>
        <div class="row gap-4 fw-bold bg-transparent mt-2 my-md-4">
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
      <div class="col-md-1 bg-transparent"></div>
      <div class="col-auto bg-transparent">
        <button class="btn btn-secondary px-4 py-3">DOWNLOAD CV</button>
      </div>
    </div>
  </div>
  <!-- Experience Component -->
  <div class="container my-6">
    <h1 class="text-primary fw-bolder fs-l mb-5">Experience</h1>
    <ExperienceList
      class="mb-4"
      v-for="item in experience"
      :key="item.experience_id"
      :item="item"
    />
  </div>
  <!-- Expertise Component -->
  <div class="container my-7">
    <h1 class="text-primary fw-bolder fs-l mb-5">Expertise</h1>
    <ExpertiseList
      class="mb-6"
      v-for="item in expertise"
      :key="item.expertise_id"
      :item="item"
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
          experience_id: 1,
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
          experience_id: 2,
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
          experience_id: 3,
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
          experience_id: 4,
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
          expertise_id: 1,
          title: "Networking Training",
          description:
            "Studied protocols like RIP and VOIP. Implemented Subnetworking and Fire wall Techniques. Deployed the technology learned to the company network. Studied VPN and applied to inter-branch communication.",
          image_url: "",
        },
        {
          expertise_id: 2,
          title: "Advanced Project Management",
          description:
            "Applied soft tools to create the right mix of team members in a project. Learned how to use Project Libre advance techniques to track project costs. Used WBS to manage an ongoing project. Determined the effects of corporate decisions on a current project.",
          image_url: "",
        },
        {
          expertise_id: 3,
          title: "Big Data Analytics Training 101",
          description:
            "Used PostgreSQL to analyze big data sets. Combined multiple data sources into one dashboard. Converted corporate data into readily readable KPIS.",
          image_url: "",
        },
        {
          expertise_id: 4,
          title: "Financial Statement Analysis",
          description:
            "Learned how to create a financial statement based on a transaction table. Optimize the cost of company taxes through correct labelling of transactions. Learned techniques to optimize the chart of accounts, Applied seminar to current project.",
          image_url: "",
        },
      ],
    };
  },
  methods: {
    onResize() {
      var rows = document.getElementsByClassName("expertise");
      if (window.innerWidth < 768) {
        for (let i = 0, count = rows.length; i < count; i++) {
          rows[i].classList.replace("flex-row", "flex-column");
          let cols = rows[i].children;
          cols[0].classList.replace("order-last", "order-first");
          cols[1].classList.replace("order-first", "order-last");
          cols[0].classList.add("mb-5");
          cols[1].classList.add("mx-1");
        }
      } else {
        for (let i = 0, count = rows.length; i < count; i++) {
          rows[i].classList.replace("flex-column", "flex-row");
          let cols = rows[i].children;
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
  },
};
</script>

<style scoped>
/*div {*/
/*  border: 1px solid black;*/
/*}*/
.social-link:hover {
  text-decoration: underline !important;
}
</style>

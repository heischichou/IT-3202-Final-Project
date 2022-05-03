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
</template>

<script>
import ExperienceList from "../components/AboutMe/ExperienceList";
export default {
  name: "AboutMeView",
  components: {
    ExperienceList,
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
    };
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

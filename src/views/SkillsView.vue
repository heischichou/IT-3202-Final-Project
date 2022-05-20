<template>
  <!-- Header -->
  <div class="container-fluid d-flex flex-row p-0">
    <div class="col-md-3"></div>
    <div
      class="col bg-dark rounded-1 me-0"
      style="height: 360px; margin-top: 80px; margin-bottom: -410px"
    ></div>
  </div>
  <div class="container bg-transparent mb-5 pb-5">
    <div class="row align-items-end bg-transparent mb-4">
      <div class="col-md-auto container-fluid bg-transparent mt-5 mt-lg-0">
        <div class="row bg-transparent mt-n4">
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
        <div class="row bg-transparent my-2 my-md-4">
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
import SkillsComponent from "../components/SkillsList/SkillsComponent";

export default {
  name: "SkillsView",
  components: {
    SkillsComponent,
  },
  data() {
    return {
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
};
</script>

<style scoped>
/*div {*/
/*  border: 1px solid black;*/
/*}*/
</style>

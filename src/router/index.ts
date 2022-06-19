import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import AboutMeView from "../views/AboutMeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import SkillsView from "../views/SkillsView.vue";
import ContactView from "../views/ContactView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "about",
    component: AboutMeView,
  },
  {
    path: "/skills",
    name: "skills",
    component: SkillsView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/projects/major",
    name: "major",
    component: ProjectsView,
  },
  {
    path: "/projects/minor",
    name: "minor",
    component: ProjectsView,
  },
  {
    path: "/projects/personal",
    name: "personal",
    component: ProjectsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

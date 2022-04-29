<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-transparent">
    <div class="container d-flex flex-row flex-row-reverse bg-transparent">
      <button
        class="navbar-toggler border-primary mt-3 me-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <em class="bi bi-list text-primary d-flex fs-3"></em>
      </button>
      <div
        class="flex-row-reverse collapse navbar-collapse text-center bg-transparent m-3"
        id="navbarNav"
      >
        <ul class="row navbar-nav mx-n4">
          <li
            class="col-auto text-decoration-underline nav-item px-4"
            v-if="$route.path === '/' || $route.path === '/about'"
          >
            <router-link to="/" class="nav-link text-black"
              >ABOUT ME</router-link
            >
          </li>
          <li class="col-auto nav-item px-4" v-else>
            <router-link to="/" class="nav-link text-black"
              >ABOUT ME</router-link
            >
          </li>
          <li
            class="col-auto text-decoration-underline nav-item px-4"
            v-if="$route.path === '/projects'"
          >
            <router-link to="/projects" class="nav-link text-black"
              >PROJECTS</router-link
            >
          </li>
          <li class="col-auto nav-item px-4" v-else>
            <router-link to="/projects" class="nav-link text-black"
              >PROJECTS</router-link
            >
          </li>
          <li
            class="col-auto text-decoration-underline nav-item px-4"
            v-if="$route.path === '/skills'"
          >
            <router-link to="/skills" class="nav-link text-black"
              >SKILLS</router-link
            >
          </li>
          <li class="col-auto nav-item px-4" v-else>
            <router-link to="/skills" class="nav-link text-black"
              >SKILLS</router-link
            >
          </li>
          <li
            class="col-auto text-decoration-underline nav-item px-4 pe-md-0"
            v-if="$route.path === '/contact'"
          >
            <router-link to="/contact" class="nav-link text-black"
              >CONTACT</router-link
            >
          </li>
          <li class="col-auto nav-item px-4 pe-md-0" v-else>
            <router-link to="/contact" class="nav-link text-black"
              >CONTACT</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
  <footer class="bg-dark text-center p-3">
    <h6 class="mt-3">Developed by <strong>Team Ednifran</strong></h6>
    <h6 class="my-3">&copy; 2022</h6>
  </footer>
</template>

<!-- Global styles -->
<style lang="scss"></style>

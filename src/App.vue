<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container d-flex flex-row flex-row-reverse bg-dark">
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
        class="flex-row-reverse collapse navbar-collapse text-center bg-dark m-3"
        id="navbarNav"
      >
        <ul class="row navbar-nav mx-n4">
          <li class="col-auto nav-item px-4">
            <router-link to="/" class="nav-link text-black"
              >ABOUT ME</router-link
            >
          </li>
          <li class="col-auto nav-item px-4">
            <router-link to="/projects" class="nav-link text-black"
              >PROJECTS</router-link
            >
          </li>
          <li class="col-auto nav-item px-4">
            <router-link to="/skills" class="nav-link text-black"
              >SKILLS</router-link
            >
          </li>
          <li class="col-auto nav-item px-4">
            <router-link to="/contact" class="nav-link text-black"
              >CONTACT</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<!-- Global styles -->
<style lang="scss"></style>

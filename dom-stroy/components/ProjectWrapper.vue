<template>
    <div class="project-area py-140">
        <div class="container">
            <div class="row mtn-30">
                <n-link :to="`/project-details/${project.id}`" class="col-lg-4 col-sm-6 mt-30" v-for="(project) in projects" :key="project.id">
                    <ProjectItem :project="project" />
                </n-link>
                <div class="button-wrap button-position-center mt-40">
                    <button class="btn btn-custom btn-primary btn-secondary-hover">Загрузить еще</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProjectService from "~/ProjectService";

    export default {
        components: {
            ProjectItem: () => import("@/components/ProjectItem"),
        },

        data() {
            return {
                projects: []
            }
        },
      async created() {
        try {
          this.projects = await ProjectService.getProjects();
          console.log(this.projects);
        } catch(err) {
          this.error = err.message;
        }
      }
    };
</script>

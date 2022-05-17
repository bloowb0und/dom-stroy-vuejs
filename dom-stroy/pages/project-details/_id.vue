<template>
    <div class="project-details-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb :title=project.title subTitle="DomStroy" :desc=project.desc />

        <ProjectDetailsWrapper :project="project" />

        <Footer />

        <ScrollTop />

        <ModalWindow :project = "project"/>

    </div>
</template>

<script>
    import ProjectService from "@/ProjectService";

    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            ProjectDetailsWrapper: () => import('@/components/ProjectDetailsWrapper'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
            ModalWindow: () => import('@/components/ModalWindow')
        },

        data() {
          return {
            project: {}
          }
        },
      async beforeCreate() {
        try {
          console.log(1);
          ProjectService.getProjectsId(this.$route.params.id).then((x) => this.project = x);
          console.log(this.project);
        } catch(err) {
          this.error = err.message;
        }
      }
    };
</script>



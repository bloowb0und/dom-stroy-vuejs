<template>
    <div class="project-area ">
        <div class="project-inner" :style="{ backgroundImage: `url('/images/project/bg/1-1.png')` }">
            <div class="button-wrap text-end">
                <n-link to="/project" class="btn btn-project"><span>Больше домов</span></n-link>
            </div>
            <div class="container-fluid p-0">
                <div class="project-with-title">
                    <div class="section-title-area text-white h-100">
                        <div class="title-with-arrow">
                            <div class="section-title-wrap style-02">
                                <div class="section-title">
                                    <span>КАТАЛОГ ДОМОВ</span>
                                    <h2 class="mb-0">Наши Последние<br> Работы</h2>
                                </div>
                            </div>
                            <!-- Add Arrows -->
                            <div class="project-button-wrap">
                                <div class="project-button-prev">
                                    <i class="ion-chevron-left"></i>
                                </div>
                                <div class="project-button-next">
                                    <i class="ion-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project-slider">
                        <swiper :options="projectSlider">
                            <div class="swiper-slide" v-for="project in projects" :key="project.id">
                                <ProjectItem :project="project" />
                            </div>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProjectService from "@/ProjectService";

    export default {
        components: {
            ProjectItem: () => import("@/components/ProjectItem"),
        },

        data() {
            return {
                projectSlider: {
                    loop: true,
                    slidesPerView: 4,
                    navigation: {
                        prevEl: '.project-button-prev',
                        nextEl: '.project-button-next',
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    },
                },

                projects: [],
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
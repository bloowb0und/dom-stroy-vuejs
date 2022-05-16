<template>
    <div class="project-area py-140">
        <div class="container">
            <div class="row mtn-30">
                <div class="col-lg-4 col-sm-6 mt-30" v-for="(project, index) in projects" :key="index">
                    <ProjectItem :project="project" />
                </div>
                <div class="button-wrap button-position-center mt-40">
                    <button class="btn btn-custom btn-primary btn-secondary-hover">Загрузить еще</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ProjectItem: () => import("@/components/ProjectItem"),
        },

        data() {
            return {
                projects: [
                    {
                        imgSrc: "/images/project/medium-size/2-1-370x540.jpg",
                        category: "Строительство",
                        title: "Проект 314A",
                        area: "150 м²"
                    },
                    {
                        imgSrc: "/images/project/medium-size/2-2-370x540.jpg",
                        category: "Строительство",
                        title: "Проект 756A",
                        area: "70 м²"
                    },
                    {
                        imgSrc: "/images/project/medium-size/2-3-370x540.jpg",
                        category: "Строительство",
                        title: "Проект V40-04",
                        area: "122 м²"
                    },
                    {
                        imgSrc: "/images/project/medium-size/2-4-370x540.jpg",
                        category: "Строительство",
                        title: "Проект P6-7P",
                        area: "133 м²"
                    },
                    {
                        imgSrc: "/images/project/medium-size/2-5-370x540.jpg",
                        category: "Строительство",
                        title: "Проект V54-32",
                        area: "190 м²"
                    },
                    {
                        imgSrc: "/images/project/medium-size/2-6-370x540.jpg",
                        category: "Строительство",
                        title: "Проект D77",
                        area: "320 м²"
                    },
                    {
                        imgSrc: "/images/project/medium-size/2-7-370x540.jpg",
                        category: "Строительство",
                        title: "Проект J23-55",
                        area: "157 м²"
                    },
                    {
                        imgSrc: "/images/project/medium-size/2-8-370x540.jpg",
                        category: "Строительство",
                        title: "Проект J23-55",
                        area: "157 м²"
                    },
                    {
                        imgSrc: "/images/project/medium-size/2-9-370x540.jpg",
                        category: "Строительство",
                        title: "Проект P6-7P",
                        area: "133 м²"
                    },
                ]
            }
        },
    };
</script>

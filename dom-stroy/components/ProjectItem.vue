<template>
    <div class="project-item">
        <n-link :to="`/project-details/${project.id}`" class="project-img">
            <img :src="`/images/${project.images_folder}/1-1-370x500.jpg`" :alt="project.title">
        </n-link>
        <div class="project-content with-boxshadow">
            <span class="sub-title">{{ project.category }}</span>
            <h3 class="title mb-0">
                <n-link :to="`/project-details/${project.id}`">{{ project.title }}</n-link>
            </h3>
            <span>Площадь: {{ project.area }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["project"]
    };
</script>
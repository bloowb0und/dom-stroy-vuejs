<template>
    <div class="project-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Проекты" subTitle="Каталог домов" desc="Строительство само по себе - сложное дело, но благодаря нашей команде экспертов" />

        <ProjectWrapper />

        <Footer />

        <ScrollTop />

    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            ProjectWrapper: () => import('@/components/ProjectWrapper'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Каталог домов'
            }
        },
    };
</script>



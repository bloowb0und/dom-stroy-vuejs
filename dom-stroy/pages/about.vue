<template>
    <div class="about-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="О нас" subTitle="Чем мы занимаемся" desc="Строительство само по себе - сложное дело, но проблемы сведены до минимума" />

        <AboutTwo />

        <TopFeaturesTwo />

        <CounterUp class="py-140" />

        <ProjectGallery />

        <TeamSectionOne />

        <TestimonialSection class="pb-140" />

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
            AboutTwo: () => import('@/components/AboutTwo'),
            TopFeaturesTwo: () => import('@/components/TopFeaturesTwo'),
            CounterUp: () => import('@/components/CounterUp'),
            ProjectGallery: () => import('@/components/ProjectGallery'),
            TeamSectionOne: () => import('@/components/TeamSectionOne'),
            TestimonialSection: () => import('@/components/TestimonialSection'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'О компании'
            }
        },
    };
</script>



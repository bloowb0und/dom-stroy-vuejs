<template>
    <div class="home-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <HeroSlider />

        <TopFeatures />

        <AboutOne />

        <ProjectGallery />

        <ServiceOne />

        <CounterUp />

        <TeamSectionOne />

        <TestimonialSection />

        <Footer />

        <ScrollTop />

    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroSlider: () => import('@/components/HeroSlider'),
            TopFeatures: () => import('@/components/TopFeatures'),
            AboutOne: () => import('@/components/AboutOne'),
            ProjectGallery: () => import('@/components/ProjectGallery'),
            ServiceOne: () => import('@/components/ServiceOne'),
            CounterUp: () => import('@/components/CounterUp'),
            TeamSectionOne: () => import('@/components/TeamSectionOne'),
            TestimonialSection: () => import('@/components/TestimonialSection'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Главная страница'
            }
        },
    };
</script>



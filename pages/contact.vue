<template>
    <div class="contact-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Связаться" subTitle="Связаться с нами" desc="Строительство само по себе - сложное дело, но благодаря нашей команде экспертов" />

        <ContactWrapper />

        <ContactForm />

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
            ContactWrapper: () => import('@/components/ContactWrapper'),
            ContactForm: () => import('@/components/ContactForm'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Контакты'
            }
        },
    };
</script>



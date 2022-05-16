<template>
    <div class="login-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Аккаунт" subTitle="Вход & Регистрация" desc="Строительство само по себе - сложное дело, но благодаря нашей команде экспертов" />

        <LoginRegisterWrapper />

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
            LoginRegisterWrapper: () => import('@/components/LoginRegisterWrapper'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Вход & Регистрация'
            }
        },
    };
</script>



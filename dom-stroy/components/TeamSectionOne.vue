<template>
    <div class="team-area py-140">
        <div class="container">
            <div class="section-title-area pb-70">
                <div class="section-title-wrap style-01">
                    <div class="section-title with-border text-start text-lg-end">
                        <span>Команда</span>
                        <h2 class="mb-0">Таланты нашей команды</h2>
                    </div>
                    <div class="section-desc">
                        <p class="font-size-20 mb-0">Строительство само по себе - сложное дело, но благодаря нашей команде экспертов количество проблем сведены до минимума.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="team-member-slider swiper-arrow with-bg_white">
                        <swiper :options="teamMemberCarousel">
                            <div class="swiper-slide" v-for="(member, index) in teamMemberData" :key="index">
                                <TeamMember :member="member" />
                            </div>
                        </swiper>
                        <div class="team-button-next swiper-button-next">
                            <i class="ion-ios-arrow-forward"></i>
                        </div>
                        <div class="team-button-prev swiper-button-prev">
                            <i class="ion-ios-arrow-back"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                teamMemberCarousel: {
                    speed: 1000,
                    loop: true,
                    slidesPerView: 4,
                    spaceBetween: 30,
                    navigation: {
                        nextEl: '.team-button-next',
                        prevEl: '.team-button-prev',
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                        },
                        480: {
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

                teamMemberData: [
                    {
                        imgSrc: "/images/team/medium-size/1-1-210x341.jpg",
                        name: "Мещеряков Григорий",
                        designation: "Главный инженер",
                        email: "info@example.com",
                        socialLink: [
                            {
                                url: "#",
                                icon: "ion-social-facebook"
                            },
                            {
                                url: "#",
                                icon: "ion-social-twitter"
                            },
                            {
                                url: "#",
                                icon: "ion-social-instagram"
                            },
                        ]
                    },
                    {
                        imgSrc: "/images/team/medium-size/1-2-210x341.jpg",
                        name: "Еремин Виктор",
                        designation: "Главный сантехник",
                        email: "info@example.com",
                        socialLink: [
                            {
                                url: "#",
                                icon: "ion-social-facebook"
                            },
                            {
                                url: "#",
                                icon: "ion-social-twitter"
                            },
                            {
                                url: "#",
                                icon: "ion-social-instagram"
                            },
                        ]
                    },
                    {
                        imgSrc: "/images/team/medium-size/1-3-210x341.jpg",
                        name: "Денисов Иван",
                        designation: "Главный архитектор",
                        email: "info@example.com",
                        socialLink: [
                            {
                                url: "#",
                                icon: "ion-social-facebook"
                            },
                            {
                                url: "#",
                                icon: "ion-social-twitter"
                            },
                            {
                                url: "#",
                                icon: "ion-social-instagram"
                            },
                        ]
                    },
                    {
                        imgSrc: "/images/team/medium-size/1-4-210x341.jpg",
                        name: "Некрасов Даниил",
                        designation: "Младший инженер",
                        email: "info@example.com",
                        socialLink: [
                            {
                                url: "#",
                                icon: "ion-social-facebook"
                            },
                            {
                                url: "#",
                                icon: "ion-social-twitter"
                            },
                            {
                                url: "#",
                                icon: "ion-social-instagram"
                            },
                        ]
                    },
                    {
                        imgSrc: "/images/team/medium-size/1-5-210x341.jpg",
                        name: "Еремин Виктор",
                        designation: "Главный архитектор",
                        email: "info@example.com",
                        socialLink: [
                            {
                                url: "#",
                                icon: "ion-social-facebook"
                            },
                            {
                                url: "#",
                                icon: "ion-social-twitter"
                            },
                            {
                                url: "#",
                                icon: "ion-social-instagram"
                            },
                        ]
                    },
                ]
            }
        },
    };
</script>
<template>
    <div class="testimonial-area pb-70">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-lg-6 mb-30 mb-lg-0">
                    <div class="section-title-wrap-2">
                        <div class="section-title border-0">
                            <span>ОТЗЫВЫ</span>
                            <h2 class="mb-2 mb-sm-4">Отзывы от счастливых клиентов</h2>
                        </div>
                        <div class="section-desc pb-3">
                            <p class="font-size-20 mb-0">Строительство само по себе - сложное дело, но благодаря нашей команде экспертов количество проблем сведены до минимума</p>
                        </div>
                        <div class="button-wrap pb-4 pb-md-0">
                            <a class="btn btn-link with-underline text-secondary font-size-25 p-0" href="#">Больше отзывов</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-7 col-lg-6">
                    <div class="testimonial-slider">
                        <swiper :options="testimonialCarousel">
                            <div class="swiper-slide">
                                <div class="testimonial-item">
                                    <div class="testimonial-content">
                                        <p class="short-desc mb-3">В частности, высококачественный прототип будущего проекта создаёт предпосылки для как самодостаточных, так и внешне зависимых концептуальных решений.</p>
                                        <div class="user-info">
                                            <div class="user-img">
                                                <img src="/images/testimonial/avatar/1-1-46x46.png" alt="Avatar">
                                            </div>
                                            <div class="user-content">
                                                <h5 class="user-name mb-0">Ефремов Сергей</h5>
                                                <span class="user-occupation">Тех. директор, Octafact Group</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="testimonial-item">
                                    <div class="testimonial-content">
                                        <p class="short-desc mb-3">В частности, высококачественный прототип будущего проекта создаёт предпосылки для как самодостаточных, так и внешне зависимых концептуальных решений.</p>
                                        <div class="user-info">
                                            <div class="user-img">
                                                <img src="/images/testimonial/avatar/1-2-46x46.png" alt="Avatar">
                                            </div>
                                            <div class="user-content">
                                                <h5 class="user-name mb-0">Симонова Камилла</h5>
                                                <span class="user-occupation">Ген. директор Xerox Ltd.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper>
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
                testimonialCarousel: {
                    speed: 1000,
                    loop: true,
                    spaceBetween: 40,
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 1,
                        },
                        1200: {
                            slidesPerView: 2,
                        },
                    },
                }
            }
        },
    };
</script>
<template>
    <footer class="footer-area">
        <div class="footer-top pt-100 pb-80" :style="{ backgroundImage: `url('/images/footer/bg/1-1-1920x454.png')` }">
            <div class="container">
                <div class="row mtn-40">
                    <div class="col-xl-3 col-lg-3 mt-40">
                        <div class="widget-item text-hawkes-blue">
                            <div class="footer-logo pb-4">
                                <n-link to="/">
                                    <img src="/images/logo/logo-light.png" alt="Logo">
                                </n-link>
                            </div>
                            <p class="short-desc font-size-16 mb-3">Строительство само по себе - сложное дело, но благодаря нашей команде экспертов количество проблем сведены до минимума.</p>
                            <div class="inquiry">
                                <h5 class="text-primary">Сотрудничество</h5>
                                <a href="tel://0123456789">+7 (812) 501-11-01</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-2 col-sm-6 pl-xl-80 mt-40">
                        <div class="widget-item">
                            <h3 class="heading text-white">Информация</h3>
                            <ul class="widget-list-item text-hawkes-blue">
                                <li>
                                    <n-link to="/about">О компании</n-link>
                                </li>
                                <li>
                                    <n-link to="/project">Недавние проекты</n-link>
                                </li>
                                <li>
                                    <n-link to="/">Наша команда</n-link>
                                </li>
                                <li>
                                    <n-link to="/contact">Свяжитесь с нами</n-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-sm-6 ps-lg-10 mt-40">
                        <div class="widget-item">
                            <h3 class="heading text-white">Ссылки</h3>
                            <ul class="widget-list-item text-hawkes-blue">
                                <li>
                                    <a href="#">Пользовательское соглашение</a>
                                </li>
                                <li>
                                    <a href="#">Клиенты и отзывы</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 mt-40">
                        <div class="widget-item">
                            <h3 class="heading text-white">Контактная информация</h3>
                            <div class="widget-list-item text-hawkes-blue">
                                <div class="widget-address pb-4">
                                    <p class="mb-1">ул. Типанова, 38<br>
                                        <span class="text-primary">Санкт-Петербург, Россия</span>
                                    </p>
                                    <span>+7 (812) 501-11-01</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {

    };
</script>
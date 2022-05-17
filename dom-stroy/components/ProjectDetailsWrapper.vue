<template>
    <div class="project-detail-area py-140">
        <div class="container">
            <div class="row">
                <div class="col-lg-9 pr-9">
                    <div class="project-detail-banner row g-0">
                        <div class="col-md-5 pb-4 pb-md-0">
                            <div class="single-img">
                                <img class="img-full" :src="`/images/${project.images_folder}/1-1-370x500.jpg`" alt="Project Image">
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="group-img row g-0 mb-4">
                                <div class="col-6">
                                    <div class="single-img">
                                        <img class="img-full" src="/images/project-detail/1-2-226x245.jpg" alt="Project Image">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="single-img">
                                        <img class="img-full" src="/images/project-detail/1-3-222x245.jpg" alt="Project Image">
                                    </div>
                                </div>
                            </div>
                            <div class="group-img row g-0">
                                <div class="col-7">
                                    <div class="single-img">
                                        <img class="img-full" src="/images/project-detail/1-4-264x245.jpg" alt="Project Image">
                                    </div>
                                </div>
                                <div class="col-5">
                                    <div class="single-img">
                                        <img class="img-full" src="/images/project-detail/1-5-183x245.jpg" alt="Project Image">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single-content pt-5 pb-4">
                        <h2 class="title font-size-60 mb-3">{{ project.title }}</h2>
                        <h3 class="sub-title text-primary mb-4">{{ project.desc }}</h3>
                        <h3 class="additional-title mb-4">Резюме проекта</h3>
                        <p class="short-desc mb-0">{{ project.text1 }}</p>
                    </div>
                    <div class="single-featured row pb-7">
                        <div class="col-lg-4">
                            <div class="featured-content pb-4 pb-lg-0">
                                <p class="featured-desc mb-4">{{ project.text3 }}</p>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="featured-group-img d-flex pb-4">
                                <div class="single-img pe-4">
                                    <img src="/images/single-service/2-1-265x185.jpg" alt="Service Image">
                                </div>
                                <div class="single-img">
                                    <img src="/images/single-service/2-2-265x185.jpg" alt="Service Image">
                                </div>
                            </div>
                            <div class="featured-group-img d-flex">
                                <div class="single-img pe-4">
                                    <img src="/images/single-service/2-3-265x185.jpg" alt="Service Image">
                                </div>
                                <div class="single-img">
                                    <img src="/images/single-service/2-4-265x185.jpg" alt="Service Image">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 mt-5 mt-lg-0">
                    <div class="sidebar-area">
                        <div class="sidebar-widget sidebar-categories text-white mb-6">
                            <h2 class="title mb-0">Параметры проекта</h2>
                            <ul>
                                <li>
                                    <a href="#">
                                      Технологии:
                                        <span>{{ project.technologies }}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Локация:
                                        <span>{{ project.location }}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Площадь:
                                        <span>{{ project.area }} м²</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Бюджет:
                                        <span>{{ project.budget }} ₽</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Архитектор:
                                        <span>{{ project.architect }}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Подрядчик:
                                        <span>{{ project.contractor }}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Начало:
                                        <span>{{ project.start_date }}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Конец:
                                        <span>{{ project.end_date }}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
<!--              <div>-->
<!--                <div class="top-bar-right-wrapper">-->
<!--                  <a @click = "openModalWindow" class="ht-btn ht-btn&#45;&#45;default d-inline-block">Забронировать</a>-->
<!--                </div>-->
<!--              </div>-->
            </div>
              <div class="sidebar-widget sidebar-download-brochure text-white mb-6">
                <ul>
                  <li>
                    <a style="cursor: pointer" @click = "openModalWindow">Забронировать</a>
                  </li>
                  <li>
                    <a href="#">Brochure.PDF</a>
                  </li>
                  <li>
                    <a href="#">Brochure.DOC</a>
                  </li>
                </ul>
              </div>
            </div>
        </div>
</template>

<script>
    export default {
      props: [
          "project",
      ],
      methods: {
        openModalWindow() {
          const el = document.querySelector('.modal-window-notshown');
          el.classList.add('modal-window')
          el.classList.remove('modal-window-notshown')
        },
        closeModalWindow()
        {
          const el = document.querySelector('.modal-window');
          el.classList.add('modal-window-notshown');
          el.classList.remove('modal-window');
        }
      },
    };
</script>
<template>
    <div class="project-details-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb :title=title subTitle="DomStroy" :desc=desc />

        <ProjectDetailsWrapper :project="project" />

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
            ProjectDetailsWrapper: () => import('@/components/ProjectDetailsWrapper'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        data() {
          return {
            title: 'Проект 756А',
            subTitle: '2 этажа',
            desc: 'Дом для семьи из 4 человек, с 3 спальнями и 2 санузлами.',
            project: {
              imgSrc: "/images/project/medium-size/2-1-370x540.jpg",
              category: "Строительство",
              title: "Проект P6-7P",
              subtitle: "Предоставлять лучшие строительные услуги для наших клиентов с их удовлетворением, у нас есть опытная команда, современное оборудование и качественные материалы.",
              area: "133 м²",
              primaryDesc: "Строительство само по себе, потому что это боль, но поскольку некоторые из них являются правильным дизайном стиля, происходят в тяжелом труде и боли, у нас есть команда экспертов, некоторые из основных функций удовольствия рационально сталкиваются с последствиями, которые чрезвычайно болезненны. Кроме того, нет никого, кто любит, преследует или желает получить боль саму по себе, потому что это боль, а потому, что иногда случаются обстоятельства, при которых труд и боль могут доставить ему большое удовольствие ...",
              feature1: "Обновление самого себя, потому что это боль, а потому, что некоторые из них имеют надлежащий стиль дизайна, происходят в тяжелом труде и боли в удовольствии.",
              feature2: "Большая часть себя, потому что это боль, но потому, что некоторые из них имеют надлежащий дизайн стиля, возникают в тяжелом труде, а удовольствие от боли разумно сталкивается с последствиями, которые чрезвычайно болезненны.",
              feature3: "Лучший сервис для ремонта, который делает клиентов действительно счастливыми.",
              startDate: "28 Авг, 2018",
              endDate: "25 Авг, 2020",
              architect: "DomStroy",
              contractor: "DomStroy",
              budget: "от 4 092 000 ₽",
              location: "Московская область",
              technologies: "Газобетон, Кирпич, Дюрисол, Велокс"
            }
          }
        },

        head() {
            return {
                title: this.title
            }
        },
    };
</script>



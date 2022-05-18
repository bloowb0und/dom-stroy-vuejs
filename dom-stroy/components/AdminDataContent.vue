<template>
  <div class="main-content">
    <header>
      <div class="header-title">
        <h1>
          Данные
        </h1>
      </div>
    </header>
    <main>
      <h1>Добавление дома</h1>
      <div class="form-wrapper">
        <form id="contact-form">
          <div class="row row-10">
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_title" type="text" placeholder="Название" required v-model="addPlaceDetails.title">
            </div>
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_technologies" type="text" placeholder="Технологии" required
                     v-model="addPlaceDetails.technologies">
            </div>
          </div>
          <div class="row row-10">
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_img" type="text" placeholder="Путь к картинке" required v-model="addPlaceDetails.images_folder">
            </div>
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_location" type="text" placeholder="Локация" required v-model="addPlaceDetails.location">
            </div>
          </div>
          <div class="row row-10">
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_area" type="number" placeholder="Площадь" required v-model="addPlaceDetails.area">
            </div>
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_budget" type="number" placeholder="Бюджет" required v-model="addPlaceDetails.budget">
            </div>
          </div>
          <div class="row row-10">
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_architect" type="text" placeholder="Архитектор" required v-model="addPlaceDetails.architect">
            </div>
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_contractor" type="text" placeholder="Подрядчик" required v-model="addPlaceDetails.contractor">
            </div>
          </div>
          <div class="row row-10">
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_startDate" type="text" placeholder="Дата начала (напр. 25 Авг, 2020)" required v-model="addPlaceDetails.start_date">
            </div>
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_endDate" type="text" placeholder="Дата конца (напр. 21 Сен, 2022)" required v-model="addPlaceDetails.end_date">
            </div>
          </div>
          <div class="row row-10">
            <div class="col-12 section-space--bottom--20">
              <input name="con_desc" type="text" placeholder="Короткое описание" required v-model="addPlaceDetails.desc">
            </div>
          </div>
          <div class="row row-10">
            <div class="col-12 section-space--bottom--20">
              <input name="con_text1" type="text" placeholder="Текст 1" required v-model="addPlaceDetails.text1">
            </div>
          </div>
          <div class="row row-10">
            <div class="col-12 section-space--bottom--20">
              <input name="con_text2" type="text" placeholder="Текст 2" required v-model="addPlaceDetails.text2">
            </div>
          </div>
          <div class="row row-10">
            <div class="col-12 section-space--bottom--20">
              <input name="con_text3" type="text" placeholder="Текст 3" required v-model="addPlaceDetails.text3">
            </div>
          </div>
            <div class="col-12">
              <button @click="add" type="button">Добавить</button>
            </div>
        </form>
      </div>
      <hr>
      <div v-if="admin.status === 1">
        <h1>Изменение дома</h1>
        <div class="form-wrapper">
          <form id="contact-form">
            <div class="row row-10">
              <div class="col-12 section-space--bottom--20">
                <select style="padding: 0 25px" v-model="selectedChangePlace">
                  <option disabled value="" selected="selected">Выберите дом</option>
                  <option v-for="place in places" :value="place">{{ place.title }}</option>
                </select>
              </div>
            </div>
            <div class="row row-10">
              <div class="col-md-6 col-12 section-space--bottom--20">
                <input name="con_title" type="text" placeholder="Название" required v-model="selectedChangePlace.title">
              </div>
              <div class="col-md-6 col-12 section-space--bottom--20">
                <input name="con_technologies" type="text" placeholder="Технологии" required
                       v-model="selectedChangePlace.technologies">
              </div>
            </div>
            <div class="row row-10">
              <div class="col-md-6 col-12 section-space--bottom--20">
                <input name="con_img" type="text" placeholder="Путь к картинке" required v-model="selectedChangePlace.images_folder">
              </div>
              <div class="col-md-6 col-12 section-space--bottom--20">
                <input name="con_location" type="text" placeholder="Локация" required v-model="selectedChangePlace.location">
              </div>
            </div>
            <div class="row row-10">
              <div class="col-md-6 col-12 section-space--bottom--20">
                <input name="con_area" type="number" placeholder="Площадь" required v-model="selectedChangePlace.area">
              </div>
              <div class="col-md-6 col-12 section-space--bottom--20">
                <input name="con_budget" type="number" placeholder="Бюджет" required v-model="selectedChangePlace.budget">
              </div>
            </div>
            <div class="row row-10">
              <div class="col-md-6 col-12 section-space--bottom--20">
                <input name="con_architect" type="text" placeholder="Архитектор" required v-model="selectedChangePlace.architect">
              </div>
              <div class="col-md-6 col-12 section-space--bottom--20">
                <input name="con_contractor" type="text" placeholder="Подрядчик" required v-model="selectedChangePlace.contractor">
              </div>
            </div>
            <div class="row row-10">
              <div class="col-md-6 col-12 section-space--bottom--20">
                <input name="con_startDate" type="text" placeholder="Дата начала" required v-model="selectedChangePlace.start_date">
              </div>
              <div class="col-md-6 col-12 section-space--bottom--20">
                <input name="con_endDate" type="text" placeholder="Дата конца" required v-model="selectedChangePlace.end_date">
              </div>
            </div>
            <div class="row row-10">
              <div class="col-12 section-space--bottom--20">
                <input name="con_desc" type="text" placeholder="Короткое описание" required v-model="selectedChangePlace.desc">
              </div>
            </div>
            <div class="row row-10">
              <div class="col-12 section-space--bottom--20">
                <input name="con_text1" type="text" placeholder="Текст 1" required v-model="selectedChangePlace.text1">
              </div>
            </div>
            <div class="row row-10">
              <div class="col-12 section-space--bottom--20">
                <input name="con_text2" type="text" placeholder="Текст 2" required v-model="selectedChangePlace.text2">
              </div>
            </div>
            <div class="row row-10">
              <div class="col-12 section-space--bottom--20">
                <input name="con_text3" type="text" placeholder="Текст 3" required v-model="selectedChangePlace.text3">
              </div>
            </div>
            <div class="col-12">
              <button @click="change" type="button" :disabled="!selectedChangePlace">Изменить</button>
            </div>
          </form>
        </div>
        <hr>
        <h1>Удаление дома</h1>
        <div class="form-wrapper pb-4">
          <form id="contact-form">
            <div class="row row-10">
              <div class="col-12 section-space--bottom--20">
                <select style="padding: 0 25px" v-model="selectedDelPlace">
                  <option disabled value="" selected="selected">Выберите дом</option>
                  <option v-for="place in places" :value="place">{{ place.title }}</option>
                </select>
              </div>
            </div>
            <div class="col-12">
              <button @click="del" :disabled="!selectedDelPlace" type="button">Удалить</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ProjectService from "@/ProjectService";
import LogsService from "@/LogsService";

export default {
  name: "AdminDataContent",
  data() {
    return {
      places: [],
      addPlaceDetails: {
        title: '',
        technologies: '',
        images_folder: '',
        location: '',
        area: '',
        budget: '',
        architect: '',
        contractor: '',
        start_date: '',
        end_date: '',
        desc: '',
        text1: '',
        text2: '',
        text3: '',
      },
      selectedChangePlace: '',
      selectedDelPlace: '',
    }
  },
  props: [
    'admin',
  ],
  methods: {
    async add() {
      let isEmpty = Object.values(this.addPlaceDetails).some(obj => obj === '');

      if(!isEmpty) {
        await ProjectService.postProject(this.addPlaceDetails.title, this.addPlaceDetails.desc, this.addPlaceDetails.location, this.addPlaceDetails.area, this.addPlaceDetails.budget, this.addPlaceDetails.architect, this.addPlaceDetails.contractor, this.addPlaceDetails.start_date, this.addPlaceDetails.end_date, this.addPlaceDetails.text1, this.addPlaceDetails.text2, this.addPlaceDetails.text3, this.addPlaceDetails.images_folder, this.addPlaceDetails.technologies);
        await LogsService.postLog(this.admin.id, `Added ${this.addPlaceDetails.title} building.`)
        this.$router.go();
      }
      else {
        alert('Все поля должны быть заполнены.');
      }
    },
    async change() {
      let isEmpty = Object.values(this.selectedChangePlace).some(obj => obj === '');

      if(!isEmpty) {
        await ProjectService.putProject(this.selectedChangePlace.title, this.selectedChangePlace.desc, this.selectedChangePlace.location, this.selectedChangePlace.area, this.selectedChangePlace.budget, this.selectedChangePlace.architect, this.selectedChangePlace.contractor, this.selectedChangePlace.start_date, this.selectedChangePlace.end_date, this.selectedChangePlace.text1, this.selectedChangePlace.text2, this.selectedChangePlace.text3, this.selectedChangePlace.images_folder, this.addPlaceDetails.technologies, this.selectedChangePlace.id);
        await LogsService.postLog(this.admin.id, `Changed ${this.selectedChangePlace.title} building.`);
        this.$router.go();
      }
    },
    async del() {
      console.log(this.selectedDelPlace);
      await ProjectService.deleteProject(this.selectedDelPlace.id);
      await LogsService.postLog(this.admin.id, `Deleted ${this.selectedDelPlace.title} building.`);
      this.$router.go();
    }
  },
  async mounted() {
    this.places = (await ProjectService.getProjects());
  }
}
</script>

<style scoped lang="scss">
@import url('../assets/scss/_variables.scss');
@import url('../assets/scss/components/_contact.scss');

.form-wrapper {
  margin: 0 50px;
}

button:disabled,
button[disabled]{
  cursor: not-allowed;
}

#contact-form {
  align-items:center;
& h3 {
    margin-bottom: 30px;
  }
& input {
    width: 100%;
    height: 50px;
    border: 1px solid #eeeeee;
    padding: 5px 20px;
    margin-bottom: 15px;
  }
& select {
  margin-bottom: 35px;
}
& textarea {
    width: 100%;
    height: 120px;
    border: 1px solid #eeeeee;
    padding: 10px 20px;
    resize: none;
  }
& input[type="submit"], & button, & .submit {
                                      width: auto;
                                      height: 50px;
                                      border: none;
                                      padding: 5px 30px;
                                      background-color: map-get($theme-colors, primary);
                                      color: $white;
                                      text-transform: uppercase;
                                      font-weight: 700;
                                      margin-top: 15px;
&:hover {
   background-color: $heading-color;
 }
}
}
.form-message{
  line-height: 2;
}

//---------------------

  .main-content {
    margin-left: 345px;
  }

header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 345px;
  width: calc(100% - 345px);
  top: 0;
  z-index: 100;
  background-color: #fff;
}

main {
  margin-top: 100px;
  text-align: center;
}

main > h1 {
  padding-top: 20px;
  margin-bottom: 55px;
}

main > h4 {
  text-decoration: underline;
}

.pages p:first-child {
  padding-top: 15px;
}

main p {
  margin-bottom: 0;
}
</style>
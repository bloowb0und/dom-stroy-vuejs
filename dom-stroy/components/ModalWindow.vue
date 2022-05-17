<template>
  <div class="modal-window-notshown">
    <div class="modal-content">
      <div class="modal-header">
        <h1 style = "margin-top: 8px">Напишите нам!</h1>
        <p @click = "closeModalWindow">X</p>
      </div>
      <div class="modal-main">
        <div class="form-wrapper">
          <form id="contact-form">
            <div class="row row-10">
              <div class="col-md-6 col-12 section-space--bottom--20">
                <input name="firstName" type="text" placeholder="Имя" v-model="firstName">
              </div>
              <div class="col-md-6 col-12 section-space--bottom--20">
                <input name="secondName" type="text" placeholder="Фамилия" v-model="secondName">
              </div>
            </div>
            <div class="row row-10">
              <div class="col-12 section-space--bottom--20">
                <input name="phone" type="tel" placeholder="Телефон" v-model="phone">
              </div>
            </div>
            <div class="col-12" style="display: flex; justify-content: center">
              <button @click="submit" type="button">Забронировать</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RequestService from "@/RequestService";
export default {
  props : ['project'],
  data() {
    return {
      firstName: "",
      secondName: "",
      phone: "",
      projectId : this.project.id
    }
  },
  methods : {
    closeModalWindow()
    {
      const el = document.querySelector('.modal-window');
      el.classList.add('modal-window-notshown');
      el.classList.remove('modal-window');
    },
    async submit() {
      this.closeModalWindow();
      console.log(this.project);
      await RequestService.addRent(this.firstName + ' ' + this.secondName, this.phone, this.project.id);
    }
  }
}
</script>
<style scoped lang="scss">
@import "../assets/scss/variables";
@import '../assets/scss/components/modal';

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
</style>
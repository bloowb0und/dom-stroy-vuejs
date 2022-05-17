<template>
    <div class="login-register-area py-140">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <form>
                        <div class="login-form">
                            <h4 class="login-title">Вход</h4>
                            <div class="row">
                                <div class="col-12">
                                    <label>Эл. почта*</label>
                                    <input type="email" placeholder="Эл. почта" v-model="loginData.email">
                                </div>
                                <div class="col-12">
                                    <label>Пароль</label>
                                    <input type="password" placeholder="Пароль" v-model="loginData.password">
                                </div>
                                <div class="col-12">
                                    <div class="login-action">
                                        <div class="check-box">
                                            <input class="checkbox me-2" type="checkbox" id="remember_me">
                                            <label for="remember_me">Запомнить меня</label>
                                        </div>
                                        <div class="forgotton-password_info">
                                            <a href="#"> Забыли пароль?</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 mt-2">
                                    <button class="btn btn-primary btn-secondary-hover" type="button" @click="login">Войти</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-6 mt-40 mt-lg-0">
                    <form>
                        <div class="register-form">
                            <h4 class="login-title">Регистрация</h4>
                            <div class="row">
                                <div class="col-md-6 col-12">
                                    <label>Имя</label>
                                    <input type="text" placeholder="Имя" v-model="registrationData.firstName">
                                </div>
                                <div class="col-md-6 col-12">
                                    <label>Фамилия</label>
                                    <input type="text" placeholder="Фамилия" v-model="registrationData.lastName">
                                </div>
                                <div class="col-md-12">
                                    <label>Эл. почта*</label>
                                    <input type="email" placeholder="Эл. почта" v-model="registrationData.email">
                                </div>
                                <div class="col-md-6">
                                    <label>Пароль</label>
                                    <input type="password" placeholder="Пароль" v-model="registrationData.password1">
                                </div>
                                <div class="col-md-6">
                                    <label>Подтвердите пароль</label>
                                    <input type="password" placeholder="Подтвердите пароль" v-model="registrationData.password2">
                                </div>
                                <div class="col-12 mt-3">
                                    <button class="btn btn-primary btn-secondary-hover" type="button" @click="register">Зарегистрироваться</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AdminService from "~/AdminService";

    export default {
      data() {
        return {
          loginData: {
            email: '',
            password: ''
          },
          registrationData: {
            firstName: '',
            lastName: '',
            email: '',
            password1: '',
            password2: ''
          }
        }
      },
      methods: {
        async login() {
          if(!this.loginData.email || !this.loginData.password) {
            alert('Почта или пароль невалидны!');
            return;
          }

          const res = await AdminService.checkAdminData(this.loginData.email, this.loginData.password);

          if(res)
          {
            await this.$router.push('/admin-panel');
          } else {
            alert('Введены неверные данные!');
          }

        },
        async register() {
          if(!this.registrationData.email
              || !this.registrationData.password1
              || !this.registrationData.password2
              || !this.registrationData.firstName
              || !this.registrationData.lastName) {
            alert('Введите валидные данные!');
            return;
          }

          if(this.registrationData.password1 !== this.registrationData.password2) {
            alert('Введенные пароли не одинаковые!');
          }

          const res = await AdminService.postAdmin(this.registrationData.email, this.registrationData.password1, this.registrationData.firstName, this.registrationData.lastName);
          console.log(res);

          if(res)
          {
            await this.$router.push('/admin-panel');
          } else {
            alert('Не удалось зарегистрироваться!');
          }
        }
      },
    };
</script>
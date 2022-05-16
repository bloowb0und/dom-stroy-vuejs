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
                                    <input type="email" placeholder="Эл. почта">
                                </div>
                                <div class="col-12">
                                    <label>Пароль</label>
                                    <input type="password" placeholder="Пароль">
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
                                    <button class="btn btn-primary btn-secondary-hover">Войти</button>
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
                                    <input type="text" placeholder="Имя">
                                </div>
                                <div class="col-md-6 col-12">
                                    <label>Фамилия</label>
                                    <input type="text" placeholder="Фамилия">
                                </div>
                                <div class="col-md-12">
                                    <label>Эл. почта*</label>
                                    <input type="email" placeholder="Эл. почта">
                                </div>
                                <div class="col-md-6">
                                    <label>Пароль</label>
                                    <input type="password" placeholder="Пароль">
                                </div>
                                <div class="col-md-6">
                                    <label>Подтвердите пароль</label>
                                    <input type="password" placeholder="Подтвердите пароль">
                                </div>
                                <div class="col-12 mt-3">
                                    <button class="btn btn-primary btn-secondary-hover">Зарегистрироваться</button>
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
    export default {

    };
</script>
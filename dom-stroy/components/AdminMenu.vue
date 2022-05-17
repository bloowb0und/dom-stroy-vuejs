<template>
  <div class="sidebar">
    <div class="sidebar-brand">
      <router-link to="/">
        <img src="/images/logo/logo-light.png" alt="logo" class="sidebar-logo" style="cursor: pointer;">
      </router-link>
    </div>
    <div class="sidebar-menu">
      <ul>
        <AdminSidebarElement title="Главная" href="/admin-panel" />
        <AdminSidebarElement title="Данные" href="/admin-panel/data-page" />
        <AdminSidebarElement title="Заявки" href="/admin-panel/requests-page" />
      </ul>
    </div>
  </div>
</template>

<script>
import AdminSidebarElement from "~/components/AdminSidebarElement";

export default {
  name: "AdminMenu",
  components: {
    AdminSidebarElement
  },
}
</script>

<style scoped>
.sidebar-logo {
  /*width: 160px;*/
}

.sidebar-brand {
  padding: 1rem 0rem 1rem 2rem;
}

.sidebar-menu {

}

.sidebar {
  width: 345px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background: #ff5e13;
  z-index: 100;
}
</style>
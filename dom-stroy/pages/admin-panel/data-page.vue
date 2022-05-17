<template>
  <div class="admin-panel">
    <AdminMenu />
    <AdminDataContent />
  </div>
</template>

<script>
import AdminMenu from "@/components/AdminMenu";
import AdminDataContent from "@/components/AdminDataContent";

export default {
  name: "data-page",
  components: {
    AdminMenu,
    AdminDataContent,
  },
  head() {
    return {
      title: 'Админ Панель - Данные'
    }
  },
}
</script>

<style scoped>

</style>
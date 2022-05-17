<template>
  <div class="admin-panel">
    <AdminMenu />
    <AdminMainContent />
  </div>
</template>

<script>
export default {

  components: {
    AdminMenu: () => import('@/components/AdminMenu'),
    AdminMainContent: () => import('@/components/AdminMainContent'),
  },
  head() {
    return {
      title: 'Админ Панель'
    }
  },
}
</script>

<style scoped>

</style>
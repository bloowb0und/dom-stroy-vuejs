<template>
  <div class="admin-panel">
    <AdminMenu :id="admin.id" />
    <AdminMainContent :name="admin.firstName" />
  </div>
</template>

<script>
import AdminService from "@/AdminService";

export default {
  components: {
    AdminMenu: () => import('@/components/AdminMenu'),
    AdminMainContent: () => import('@/components/AdminMainContent'),
  },
  data() {
    return {
      admin: {},
    }
  },
  head() {
    return {
      title: 'Админ Панель'
    }
  },
  async created() {
    this.admin = await AdminService.getAdminsId(this.$route.params.id);
  }
}
</script>

<style scoped>

</style>
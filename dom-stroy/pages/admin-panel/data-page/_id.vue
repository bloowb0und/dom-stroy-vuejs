<template>
  <div class="admin-panel">
    <AdminMenu :id="admin.id" />
    <AdminDataContent :admin="admin" />
  </div>
</template>

<script>
import AdminMenu from "@/components/AdminMenu";
import AdminDataContent from "@/components/AdminDataContent";
import AdminService from "@/AdminService";

export default {
  name: "data-page",
  components: {
    AdminMenu,
    AdminDataContent,
  },
  data() {
    return {
      admin: {},
    }
  },
  head() {
    return {
      title: 'Админ Панель - Данные'
    }
  },
  async created() {
    this.admin = await AdminService.getAdminsId(this.$route.params.id);
  }
}
</script>

<style scoped>

</style>
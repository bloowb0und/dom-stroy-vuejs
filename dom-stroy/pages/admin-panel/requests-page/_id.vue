<template>
  <div class="admin-panel">
    <AdminMenu :id="admin.id" />
    <AdminRequestsContent :admin="admin" />
  </div>
</template>

<script>
import AdminMenu from "@/components/AdminMenu";
import AdminRequestsContent from "~/components/AdminRequestsContent";
import AdminService from "@/AdminService";

export default {
  name: "requests-page",
  components: {
    AdminMenu,
    AdminRequestsContent,
  },
  data() {
    return {
      admin: {},
    }
  },
  async created() {
    this.admin = await AdminService.getAdminsId(this.$route.params.id);
  }
}
</script>

<style scoped>

</style>
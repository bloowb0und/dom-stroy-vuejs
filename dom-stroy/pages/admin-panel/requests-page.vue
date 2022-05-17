<template>
  <div class="admin-panel">
    <AdminMenu />
    <AdminRequestsContent />
  </div>
</template>

<script>
import AdminMenu from "@/components/AdminMenu";
import AdminRequestsContent from "~/components/AdminRequestsContent";

export default {
  name: "requests-page",
  components: {
    AdminMenu,
    AdminRequestsContent,
  },
}
</script>

<style scoped>

</style>
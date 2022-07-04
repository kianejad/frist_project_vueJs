<template>
  <!--  delete modal-->
  <div class="modal" v-if="deleteModale === true">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Delete Modal</h5>
        <button type="button" class="close" @click="closeModale">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Are you sure you want to delete this ticket?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeModale">Close</button>
        <button type="button" class="btn btn-primary" @click="deleteTicket">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteModal"
}
</script>

<style scoped>

</style>
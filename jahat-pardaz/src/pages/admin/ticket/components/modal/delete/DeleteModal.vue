<template>
<!--  delete Modal-->
<div class="modal" :class="{'is-active': isActive}">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Delete</p>
      <button class="delete" aria-label="close" @click="isActive = false"></button>
    </header>
    <section class="modal-card-body">
      <p>Are you sure you want to delete this ticket?</p>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click="isActive = false">Cancel</button>
      <button class="button is-danger" @click="isActive = false">Delete</button>
    </footer>
  </div>
</div>
</template>

<script setup>
import {mapState} from "vuex";
import {useStore} from "vuex";
import {computed} from "vue";


const deleteModal = reactive({
  isActive: false
});


</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
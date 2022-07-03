<template>
  <div class="container">
    <div class="card_box">
      <div class="header">
        <div class="column">
          <input type="checkbox" class="checkbox"/>
          <span>{{ data.title }}</span>
        </div>
        <div class="column_icon">
          <fa-icon icon="ellipsis-v" @click="changeTools"/>
          <div class="tools_box" v-if="toolsBtn === true">
            <div class="tools_item edit" @click="editModaleOpen">
              <fa-icon icon="edit"/>
              <p>ویرایش برچسب</p>
            </div>
            <div class="tools_item delete" @click="deleteModaleOpen">
              <fa-icon icon="trash-alt"/>
              <p>حذف</p>
            </div>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="row">
          <div class="column">
            <img
                :src=data.profile.Avatar
                alt="">
            <p>{{ data.profile.first_name }} {{ data.profile.last_name }}</p>
          </div>
          <div class="column">
            <p style="margin-left: 0.2rem">اولویت :</p>
            <button class="preference" :style="data.preference === 'زیاد' ?
             'color: var(--tertiary-color); border: 1px  solid var(--tertiary-color)':data.preference === 'کم' ?
              'color: var(--quaternary-color); border:1px solid var(--quaternary-color)':data.preference === 'متوسط' ?
               'color: var(--orgeen-color); border:1px solid var(--orgeen-color)':data.preference === 'فوری' ?
                'color: var(--danger-color); border:1px solid var(--danger-color)':null"> {{ data.preference }}
            </button>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <p>تاریخ ایجاد : </p>
          </div>
          <div class="column">
            <p>{{ data.createdAt }}</p>
          </div>
        </div>
        <div class="last_res">
          <div class="column">
            <p>آخرین پاسخ : </p>
          </div>
          <div class="column">
            <p v-if="showTextMore ===false">
              {{ data.Last_reply.text.slice(0, 20) }}
              <button class="show_more" @click="showMore">
                بیشتر
              </button>
            </p>
            <p v-if="showTextMore === true">
              {{ data.Last_reply.text }}
              <button class="show_more" @click="showMore">
                کوتاه
              </button>
            </p>
          </div>
        </div>
        <div class="main_res">
          <div class="column">
            <p>این پاسخ توسط : </p>
          </div>
          <div class="column">
            <img
                :src=data.Last_reply.profile.Avatar
                alt="">
            <p>{{ data.Last_reply.profile.first_name }} {{ data.Last_reply.profile.last_name }}</p>
          </div>
        </div>
        <div class="main_tag">
          <div class="column">
            <p>برچسب ها : </p>
          </div>
          <div class="column">
            <div v-if="moreLabel ===false" class="tag_box">
              <li v-for="(item,index) in data.label" class="label_item">
                <p v-if="index<4">#{{ item.tag }}</p>
              </li>
              <button @click="moreShowLabel" class="show_label">
                بیشتر
              </button>
            </div>
            <div v-if="moreLabel ===true" class="tag_box">
              <li v-for="(item,index) in data.label" class="label_item">
                <p>#{{ item.tag }}</p>
              </li>
              <button @click="moreShowLabel" class="show_label">
                کمتر
              </button>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="column">
            <button
                class="maturity_status"
                :style="data.Maturity_status ==='منقضی شده'?
                 'color: var(--tertiary-color); border: 1px solid var(--tertiary-color)':data.Maturity_status ==='نزدیک به انقضاء'?
                  'color: var(--orgeen-color); border: 1px solid var(--orgeen-color)':data.Maturity_status ==='حالت عادی'?
                 'color: var(--quaternary-color); border: 1px solid var(--quaternary-color)':null">
              {{ data.Maturity_status }}
            </button>
          </div>
          <div class="column">
            <button class="ticket_status" :style="data.Ticket_status ==='جدید'?
                 'color: var(--tertiary-color); border: 1px solid var(--tertiary-color)':data.Ticket_status ==='در حال رسیدگی'?
                  'color: var(--orgeen-color); border: 1px solid var(--orgeen-color)':data.Ticket_status ==='بسته شده'?
                 'color: var(--quaternary-color); border: 1px solid var(--quaternary-color)':null">
              {{ data.Ticket_status }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="delete_modale" v-if="deleteModale === true">
      <DeleteModal/>
    </div>
    <div class="edit_modale" v-if="editModale === true">
      <EditModal/>
    </div>
  </div>
</template>

<script setup>
import {ref, defineProps} from "vue";
import {EditModal, DeleteModal} from "@/pages/admin/ticket/components";

const toolsBtn = ref(false);
const deleteModale = ref(false);
const editModale = ref(false);
const showTextMore = ref(false);
const moreLabel = ref(false);
const propsItems = defineProps({
  ticket: {
    default: () => []
  }
});
const data = propsItems.ticket;

function deleteModaleOpen() {
  deleteModale.value = true;
  toolsBtn.value = false;
}

function editModaleOpen() {
  editModale.value = true;
}

function closeModale() {
  toolsBtn.value = false;
  deleteModale.value = false;
  editModale.value = false;
}

function changeTools() {
  toolsBtn.value = !toolsBtn.value;
  console.log(toolsBtn.value);
}

function showMore() {
  showTextMore.value = !showTextMore.value;
}

function moreShowLabel() {
  moreLabel.value = !moreLabel.value;
}

</script>

<style scoped>
.container {
  width: 460px;
  height: 500px;
  background-color: var(--primary-color);
  border-radius: 0.9rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  margin: 2rem 0;
}

.container:hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.card_box {
  width: 93%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem 0;
}

.row {
  width: 100%;
  height: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.header > .column {
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkbox {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-left: 1rem;
}

.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  padding: 0.5rem 0;
}

.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem 0;
  gap: 0.8rem;
}

.column > img {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-left: 0.5rem;
}

.main > .row > .column {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.last_res > .column {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.main_res {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 0;
  gap: 0.8rem;
}

.main_res > .column {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.main_res > .column > img {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-left: 0.5rem;
}

.main_tag > .column {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.4rem;
}

.main_tag {
  border-bottom: 1px solid #e0e0e0;
  width: 100%;
}

.footer {
  width: 100%;
  height: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.column_icon {
  position: relative;
}

.tools_box {
  position: absolute;
  background-color: var(--octonary-color);
  border-radius: 0.4rem;
  border: 1px solid #e0e0e0;
  opacity: 0.98;
  left: 10px;
  top: 5px;
  width: 10rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem 0.5rem;
  gap: 0.3rem;
}

.tools_item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;
}

.tools_item > p {
  font-size: 14px;
}

.edit {
  color: var(--senary-color);
  cursor: pointer;
}

.delete {
  color: var(--danger-color);
  cursor: pointer;
}

.delete_modale {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: rgba(63, 56, 57, 0.3);

}

.modale {
  position: absolute;
  background-color: var(--octonary-color);
  border-radius: 0.4rem;
  border: 1px solid #e0e0e0;
  left: 35%;
  top: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem 0.5rem;
  gap: 0.3rem;
}

.modale > p {
  font-size: 14px;
}

.modale_header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
}

.modale_header > p {
  font-size: 14px;
}

.modale_header > svg {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.5rem;
  color: var(--danger-color);
}

.modale_body {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;
}

.modale_footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
}

.modale_footer > button {
  width: 9rem;
  height: 2rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.4rem;
  font-size: 14px;
  cursor: pointer;
}

.cancelBtn {
  background-color: var(--quaternary-color);
  color: var(--octonary-color);
}

.deleteBtn {
  background-color: var(--danger-color);
  color: var(--octonary-color);
}

.edit_modale {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: rgba(63, 56, 57, 0.3);
}

.modale {
  position: absolute;
  background-color: var(--octonary-color);
  border-radius: 0.4rem;
  border: 1px solid #e0e0e0;
  left: 35%;
  top: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem 0.5rem;
  gap: 0.3rem;
}

.show_more {
  width: 3.8rem;
  height: 1.5rem;
  background-color: var(--quaternary-color);
  color: var(--octonary-color);
  border: none;
  outline: none;
  border-radius: 0.4rem;
  font-size: 12px;
}

.label_item {
  font-size: 14px;
  margin-left: 0.4rem;
}

.show_label {
  width: 3.8rem;
  height: 1.5rem;
  background-color: var(--quaternary-color);
  color: var(--octonary-color);
  border: none;
  outline: none;
  border-radius: 0.4rem;
  font-size: 12px;
}

.tag_box {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.ticket_status, .maturity_status, .preference {
  width: fit-content;
  height: 2rem;
  padding: 0.2rem 0.5rem;
  background-color: var(--octonary-color);
  border-radius: 1rem;
}
</style>
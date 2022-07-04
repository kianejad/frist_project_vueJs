<template>
  <div class="ticket_page">
    <div class="slider_layout">
      <SliderLayout/>
    </div>
    <div class="main_layout">
      <div class="ticket_box">
        <div class="header">
          <HeaderLayout/>
        </div>
        <div class="row">
          <div class="card_box">
            <InformationCard title="درخواست های با اولویت فوری" count="76" description="انجام شده است" color="#F29F05"
                             image="3"/>
            <InformationCard title="درخواست های با اولویت زیاد" count="36" description="انجام شده است" color="#5e45d6"
                             image="2"/>
            <InformationCard title="درخواست های با اولویت عادی" count="94" description="انجام شده است" color="#03ac5a"
                             image="1"/>
          </div>
        </div>
        <div class="row">
          <div class="filter_sort">
            <div class="column">
              <FilterComponent/>
            </div>
            <div class="column">
              <SortComponents/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="ticket_list">
            <div v-if="tickets===null" class="request_null">
              <p>درخواستی موجود نمیباشد</p>
            </div>
            <div v-else-if="tickets !== null">
              <ul class="list_items">
                <li v-for="item in tickets" :key="item.id">
                  <CardComponents :ticket="item"/>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="pagination">
            <a href="#">&laquo;</a>
            <a href="#" v-for="(item,index) in totalPage" @click.prevent="changePage" key="index">{{ index + 1 }}</a>
            <a href="#">&raquo;</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {SliderLayout, HeaderLayout} from "@/layout";
import {InformationCard, FilterComponent, SortComponents, CardComponents} from "./components";
import {useStore} from "vuex";
import {computed, watchEffect} from "vue";


const store = useStore();
store.dispatch("RequestListAction");

const tickets = computed(() => store.getters.pageTickets);
const totalPage = computed(() => store.getters.totalPages);

const changePage = (page) => {
  const pageNumber = page.target.innerText;
  store.state.page = pageNumber;
  store.dispatch("RequestListAction");
};


</script>

<style scoped>
.ticket_page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}

.slider_layout {
  width: 15rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main_layout {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.ticket_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.row, .header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.card_box {
  width: 100%;
  margin: 1.5rem 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  justify-items: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e0e0e0;
}

.filter_sort {
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  align-items: center;
  justify-items: center;
  margin: 0rem 1.5rem;
  border-bottom: 1px solid #e0e0e0;
}

.filter_sort > .column {
  width: 100%;
  height: 100%;
}

.ticket_list {
  width: 100%;
  height: 100%;
  margin: 0 1.5rem;
}

.ticket_list > div {
  width: 100%;
  height: 100%;
}

.list_items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  justify-items: center;
}

.list_items > li {
  list-style: none;
}

.pagination {
  display: inline-block;
  direction: ltr;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

.pagination a.active {
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
  border-radius: 5px;
}
</style>
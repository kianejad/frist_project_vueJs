<template>
  <div class="container">
    <h3 class="text_title">فیلتر بر اساس : </h3>
    <div class="row">
      <div class="ticket_status">
        <label>نوع تیکت : </label>
        <select v-model="ticketStatus">
          <option value="">همه</option>
          <option value="جدید">جدید</option>
          <option value="در حال رسیدگی">در حال رسیدگی</option>
          <option value="بسته شده">بسته شده</option>
        </select>
      </div>
      <div class="due_date">
        <label>وضعیت سر رسید : </label>
        <select v-model="dueDate">
          <option value="">همه</option>
          <option value="منقضی شده">منقضی شده</option>
          <option value="نزدیک به انقضاء">نزدیک به انقضاء</option>
          <option value="عادی">عادی</option>
        </select>
      </div>

      <div class="priority">
        <label>اولویت :</label>
        <select v-model="priority">
          <option value="">همه</option>
          <option value="زیاد">زیاد</option>
          <option value="متوسط">متوسط</option>
          <option value="کم">کم</option>
        </select>
      </div>
      <div class="category">
        <label>دسته بندی :</label>
        <input type="text" v-model="category">
      </div>
      <div class="tag">
        <label>موضوع :</label>
        <input type="text" v-model="tag">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterComponent",
  data() {
    return {
      ticketStatus: "",
      dueDate: "",
      priority: "",
      category: "",
    };
  },
  methods: {
    filter() {
      this.$store.state.filter = {
        status: this.ticketStatus,
        dueDate: this.dueDate,
        priority: this.priority,
        category: this.category,
        tag: this.tag
      };
      this.$store.dispatch("RequestListAction");
    }
  },
  mounted() {
    this.filter();
  },
  watch: {
    ticketStatus: function (value) {
      this.filter();
    },
    dueDate: function (value) {
      this.filter();
    },
    priority: function (value) {
      this.filter();
    },
    category: function (value) {
      this.filter();
    }
  }
};

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.row {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: flex-start;
  justify-items: flex-start;
}

.ticket_status {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.due_date {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.priority {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.category {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.tag {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.text_title {
  width: 190px;
}

label {
  margin-left: 10px;
  width: 85px;
}

input {
  width: 100px;
  height: 30px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 5px;

}

select {
  width: 105px;
  height: 35px;
  outline: none;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}

option {
  margin: 10px;
  padding: 10px;
}

select {
  background-color: var(--primary-color);
}

select:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}

select:focus {
  outline: none;
}

select:focus:after {
  border-color: var(--primary-color) transparent transparent transparent;
}

select:focus option {
  background-color: var(--primary-color);
}

select:focus option:hover {
  background-color: var(--primary-color);
}

select:focus option:active {
  background-color: var(--primary-color);
}

select:focus option:focus {
  background-color: var(--primary-color);
}

option:hover {
  background-color: var(--primary-color);
}

option:active {
  background-color: var(--primary-color);
}

option:focus {
  background-color: var(--primary-color);
}

</style>
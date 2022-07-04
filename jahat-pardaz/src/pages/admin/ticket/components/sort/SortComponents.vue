<template>
  <div class="container">
    <h3> مرتب سازی :</h3>
    <div class="row">
      <div class="create_at">
        <label> تاریخ ساخت :</label>
        <select v-model="createAt">
          <option value=""> همه</option>
          <option value="desc">جدیدترین</option>
          <option value="asc">قدیمیترین</option>
        </select>
      </div>
      <div class="responsive_at">
        <label> تاریخ پاسخ :</label>
        <select v-model="replyDate">
          <option value=""> همه</option>
          <option value="desc">جدیدترین</option>
          <option value="asc">قدیمیترین</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortComponents",
  data() {
    return {
      createAt: "",
      replyDate: "",
    };
  },
  methods: {
    sort() {
      this.$store.state.sort = {
        createAt: this.createAt,
        replyDate: this.replyDate,
      };
      this.$store.dispatch("RequestListAction");
    },
  },
  watch: {
    createAt: function (val) {
      this.sort();
    },
    replyDate: function (val) {
      this.sort();
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  gap: 4rem;
}

.container > h3 {
  width: 190px;
}

.row {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
}

.create_at {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.responsive_at {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

label {
  margin-left: 10px;
  width: 120px !important;
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
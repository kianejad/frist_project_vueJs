<template>
  <div class="container">
    <div class="columnOne">
      <div class="row">
        <div class="tilte">
          <span>{{ title }}</span>
        </div>
      </div>
      <div class="row">
        <div class="count">
          <span :style="{color: color}"
          >{{ count }}</span>
        </div>
      </div>
      <div class="row">
        <div class="description">
          <span>{{ description }}</span>
        </div>
      </div>
    </div>
    <div class="columnTwo">
      <div v-if="image == 1">
        <img src="@/assets/img/chart/chartOne.png" alt="">
      </div>
      <div v-if="image == 2">
        <img src="@/assets/img/chart/chartTwo.png" alt="">
      </div>
      <div v-if="image == 3">
        <img src="@/assets/img/chart/chartThree.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationCard",
  props: {
    color: {
      type: String,
      default: "#fff"
    },
    title: {
      type: String,
      default: "Title"
    },
    count: {
      type: String,
      default: "0"
    },
    description: {
      type: String,
      default: "Description"
    },
    image: {
      type: String,
      default: ""
    }
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
}

.row > div > span {
  font-size: 0.9rem;
}

.tilte > span {
  font-size: 1rem;
  color: var(--nonary-color);
}

.count > span {
  font-size: 1.7rem !important;
}
.columnOne{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.8rem;
}
.columnTwo > div > img {
  width: 10rem;
  height: 5rem;
}
</style>
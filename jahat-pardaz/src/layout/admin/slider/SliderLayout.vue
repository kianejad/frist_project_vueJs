<template>
  <!--slider components-->
  <div class="slider-container">
    <div class="slider-wrapper">
      <div class="slider">
        <div class="box_one">
          <div class="row">
            <div class="header_slider">
              <h2>جهت پرداز</h2>
              <fa-icon icon="refresh"/>
            </div>
          </div>
          <div class="row">
            <label>
              صفحات
            </label>
            <nav>
              <ul class="list_item_slider">
                <li>
                  <a href="#">
                    <fa-icon icon="house"/>
                    <span>صفحه اصلی</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <fa-icon icon="user"/>
                    <span>لیست کاربران</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <fa-icon icon="bell"/>
                    <span>اعلانات</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <fa-icon icon="envelope"/>
                    <span>درخواست ها</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <fa-icon icon="cog"/>
                    <span>تنظیمات</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <fa-icon icon=" fa-power-off"/>
                    <span>خروج</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="box_Two">
          <div class="row">
            <label class="display_input">
              نحوه نمایش
            </label>
            <nav>
              <ul class="display_items">
                <li>
                  <input type="radio" id="huey" name="drone" value="huey" checked>
                  <label for="huey">حالت روز</label>
                </li>
                <li>
                  <input type="radio" id="dewey" name="drone" value="dewey">
                  <label for="dewey">حالت شب</label>
                </li>
              </ul>
            </nav>
          </div>
          <div class="row">
            <div class="slider_footer">
              <select>
                <option>alireza</option>
              </select>
              <img src="../../../assets/img/4.webp" style="width: 4rem">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "SliderLayout",
}
</script>

<style scoped>
.slider-container {
  width: 100%;
  height: 100%;
}

.slider-wrapper {
  width: 100%;
  height: 100%;
}

.slider {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}

.row {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.row > label {
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: var(--quaternary-color);
}

.list_item_slider {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
}

.list_item_slider > li {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.list_item_slider > li > a {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: var(--text-secedary-color);
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  gap: 0.7rem;
}

.header_slider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
}

.header_slider > h2 {
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--text-color);
}

.header_slider > svg {
  font-size: 1.2rem;
  color: var(--quaternary-color);
}

.header_slider {
  margin-top: 1.5rem;
}

.box_one {
  width: 100%;
  margin-right: 2.5rem;
}

.box_Two {
  width: 100%;
  margin-right: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.display_input {
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  color: var(--quaternary-color);
}

.display_items {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 1rem;
}

.display_items > li {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
}
.display_items > li > input[type="radio"] {
  width: 1rem;
  height: 1rem;
  cursor: pointer;

}

.slider_footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: self-end;
  gap: 0.5rem;
  margin: 3rem 0;
}

.slider_footer > select {
  width: 100%;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  color: var(--quaternary-color);
  transition: all 0.3s ease-in-out;
}

.slider_footer > select:focus {
  outline: none;
}
.slider_footer > select:hover {
  cursor: pointer;
}
.slider_footer > select:active {
  outline: none;
}
.slider_footer > select > option {
  font-size: 1rem;
  font-weight: bold;
  color: var(--quaternary-color);
  background-color: var(--octonary-color);
}

.slider_footer > img {
  width: 3.5rem;
  height: 2.3rem;
  border-radius: 0.6rem;
}
</style>
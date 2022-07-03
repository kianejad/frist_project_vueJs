<template>
  <div class="header_layout">
    <div class="column">
      <nav>
        <ul class="navigate_header">
          <li>
            <a href="#">
              <span>project</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>my task</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>inbox</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>kanban view</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="column">
      <fa-icon icon="message"/>
      <fa-icon icon="bell"/>
      <img src="./../../../assets/img/4.webp">
    </div>
  </div>
</template>

<script>
export default {
  name: "headerLayout"
}
</script>

<style scoped>
.header_layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 1.5rem 0.5rem 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

.column > img {
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
}

.navigate_header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.navigate_header li {
  margin-right: 1rem;
  list-style: none;
}

.navigate_header > li > a {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: var(--text-secedary-color);
}

.navigate_header > li > a > span {
  font-size: 1rem;
  font-weight: bold;
  margin-left: 1rem;
}

.navigate_header > li > a > span:hover {
  color: var(--quaternary-color);
  transition: 0.3s ease-in-out;
}

.column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.column > svg {
  width: 1.2rem;
  height: 1.1rem;
  margin-right: 1rem;
  color: var(--text-secedary-color);
}

.column > svg:hover {
  color: var(--quinary-color);
  transition: 0.3s ease-in-out;
}

.column > img {
  width: 3.5rem;
  height: 2.3rem;
  border-radius: 0.6rem;
}

.column > img:hover {
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 0.3s ease-in-out;
}
</style>

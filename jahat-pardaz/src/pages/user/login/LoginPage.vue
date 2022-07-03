<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="form_box">
          <div>
            <div class="btn_box">
              <button @click="registerBtn">ثبت نام</button>
              <button @click="loginBtn">ورود</button>
            </div>
            <div>
              <div class="form_components">
                <div v-if="login === true">
                  <login-form></login-form>
                </div>
                <div v-else>
                  <register-form></register-form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from "./components/LoginForm.vue";
import RegisterForm from "./components/RegisterForm.vue";


export default {
  name: 'LoginPage',
  data() {
    return {
      login: true,
    }
  },
  methods: {
    loginBtn() {
      this.login = true;
    },
    registerBtn() {
      this.login = false;
    }
  },
  components: {
    LoginForm, RegisterForm
  }
}
</script>

<style scoped>
.section{
  width: 100%;
  height: 100vh;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container{
  width: 100%;
  padding: 30px 40px;
  border-radius: 0.4rem;
  border: 1px solid #e6e6e6;
}
.row{
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
.btn_box{
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}
.btn_box > button{
  width: 100%;
  height: 40px;
  border-radius: 0.4rem;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  color: #000;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
}
.btn_box > button:hover{
  background-color: #e6e6e6;
  color: #000;
  transition: 0.4s;
}
.form_components{
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
}
.form_components > div{
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
</style>

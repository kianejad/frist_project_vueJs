<template>
  <div class="card-front">
    <div class="center-wrap">
      <Form
          @submit="login"
          class="section"
          :validation-schema="loginFormSchema"
      >
        <h4>ورود</h4>
        <div class="form-group">
          <Field
              type="text"
              class="form-style"
              placeholder="ایمیل خود را وارد کنید"
              autocomplete="off"
              name="email"
              :validateOnInput="true"
          />
        </div>
        <p class="text-danger">
          <ErrorMessage name="email"/>
        </p>
        <div class="form-group">
          <Field
              type="password"
              class="form-style"
              placeholder="پسورد را وارد کنید"
              autocomplete="off"
              name="password"
              :validateOnInput="true"
          />
        </div>
        <p class="text-danger">
          <ErrorMessage name="password"/>
        </p>
        <button class="btn">ورود به سایت</button>
        <p>
          <a href="#" class="link">آیا کلمه عبور خود را فراموش کرده اید ؟</a>
        </p>
      </Form>
    </div>
  </div>
</template>

<script>
import {Form, Field, ErrorMessage} from "vee-validate";
import {object, string} from "yup";
import {PATHS} from "@/configs/routes.config";


export default {
  name: "LoginForm",
  components: {Form, Field, ErrorMessage},
  data() {
    const loginFormSchema = object({
      email: string().required("ایمیل را وارد کنید").email("ایمیل نامعتبر است"),
      password: string()
          .required("کلمه عبور را وارد کنید")
          .min(6, "کلمه عبور باید بیشتر از 5 کاراکتر باشد"),
    });
    return {
      loginFormSchema,
    };
  },
  methods: {
    login(values) {
      console.log(values);
      this.$router.push(PATHS.TICKETS);
    },
  },
};
</script>

<style scoped>
.card-front {
  background: #fff;
  border-radius: 5px;
  margin-top: 20px;
}

.center-wrap {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.form-style {
  width: 300px;
  border: 1px solid #e6e6e6;
  border-radius: 0.4rem;
  padding: 10px;
  font-size: 14px;
  color: #333;
  outline: none;
}

.form-style:focus {
  border: 1px solid #00bcd4;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}

.form-style::placeholder {
  color: #b3b3b3;
}

.form-style::-webkit-input-placeholder {
  color: #b3b3b3;
}

.form-style::-moz-placeholder {
  color: #b3b3b3;
}

.section {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section > h4 {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--text-color);
}

.form-group {
  width: 100%;
}

.text-danger {
  width: 100%;
  color: var(--danger-color);
  text-align: right;
}

.text-danger > span {
  font-size: 12px;
}

.btn {
  width: 100%;
  color: var(--primary-color);
  background-color: var(--quaternary-color);
  border: none;
  border-radius: 0.4rem;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  outline: none;
}

.btn:hover {
  opacity: 0.8;
  transition: 0.5s ease-in-out;
}

.section > p > a {
  font-size: 12px;
  margin-top: 15px;
  color: var(--quaternary-color);
  text-decoration: none;
}
</style>

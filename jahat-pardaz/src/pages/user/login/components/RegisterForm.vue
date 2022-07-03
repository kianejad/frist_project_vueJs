<template>
  <div class="card-back">
    <div class="center-wrap">
      <Form
          @submit="register"
          :validation-schema="registerFormSchema"
          :initialValues="formData"
          class="section"
      >
        <h4>ثبت نام</h4>
        <div class="row">
          <div>
            <div class="form-group">
              <Field
                  type="text"
                  class="form-style"
                  placeholder="نام و نام خانوادگی"
                  autocomplete="off"
                  name="name"
              />
              <i class="input-icon"></i>
            </div>
            <p class="text-danger">
              <ErrorMessage name="name"/>
            </p>
          </div>
          <div>
            <div class="form-group">
              <Field
                  type="email"
                  class="form-style"
                  placeholder="ایمیل خود را وارد کنید"
                  autocomplete="off"
                  name="email"
              />
              <i class="input-icon"></i>
            </div>
            <p class="text-danger">
              <ErrorMessage name="email"/>
            </p>
          </div>

          <div>
            <div class="form-group">
              <Field
                  type="password"
                  class="form-style"
                  placeholder="کلمه عبور"
                  autocomplete="off"
                  name="password"
                  :validateOnInput="true"
              />
              <i class="input-icon"></i>
            </div>
            <p class="text-danger">
              <ErrorMessage name="password"/>
            </p>
          </div>
          <div>
            <div class="form-group">
              <Field
                  type="password"
                  class="form-style"
                  placeholder="تکرار کلمه عبور"
                  autocomplete="off"
                  name="confirmPassword"
                  :validateOnInput="true"
              />
              <i class="input-icon"></i>
            </div>
            <p class="text-danger">
              <ErrorMessage name="confirmPassword"/>
            </p>
          </div>
          <div>
            <div class="form-group">
              <Field
                  type="text"
                  class="form-style"
                  placeholder="شماره تلفن"
                  name="phoneNumber"
                  autocomplete="off"
                  :validateOnInput="true"
              />
              <i class="input-icon"></i>
            </div>
            <p class="text-danger">
              <ErrorMessage name="phoneNumber"/>
            </p>
          </div>
          <div class="">
            <div class="form-group">
              <Field as="select" name="role" class="form-style">
                <option value="">نقش خود را انتخاب کنید</option>
                <option value="user">کاربر</option>
                <option value="student">دانشجو</option>
                <option value="teacher">مدرس</option>
              </Field>
              <i class="input-icon"></i>
            </div>
            <p class="text-danger">
              <ErrorMessage name="role"/>
            </p>
          </div>
          <div class="">
            <div class="form-group" style="text-align: right">
              <label for="1">نامشخص</label>
              <Field
                  type="radio"
                  id="1"
                  class="m-2"
                  value="نامشخص"
                  name="gender"
              />

              <label for="2">خانم</label>
              <Field
                  type="radio"
                  id="2"
                  class="m-2"
                  value="خانم"
                  name="gender"
              />
              <label for="3">آقا</label>
              <Field
                  type="radio"
                  id="3"
                  class="m-2"
                  value="آقا"
                  name="gender"
              />
            </div>
          </div>
        </div>
        <button class="btn">ثبت نام</button>
      </Form>
    </div>
  </div>
</template>

<script>
import {Form, Field, ErrorMessage} from "vee-validate";
import {object, string, ref} from "yup";

export default {
  data() {
    const registerFormSchema = object({
      name: string().required("نام را وارد کنید"),
      email: string().required("ایمیل را وارد کنید").email("ایمیل نامعتبر است"),
      phoneNumber: string()
          .required("شماره تلفن را وارد کنید")
          .min(11, "شماره تلفن نامعتبر است")
          .max(11, "شماره تلفن نامعتبر است"),
      password: string()
          .required("کلمه عبور را وارد کنید")
          .min(6, "کلمه عبور باید بیشتر از 5 کاراکتر باشد"),
      confirmPassword: string()
          .required("تکرار کلمه عبور را وارد کنید")
          .oneOf([ref("password"), null], "کلمه های عبور یکسان نیستند"),
      role: string().required("نقش خود را انتخاب کنید"),
    });
    return {
      registerFormSchema,
      formData: {
        gender: "آقا",
        role: "user",
      },
    };
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
    register(values) {
      console.log(values);
    },
  },
};
</script>

<style>
.card-back {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
}

.card-back .form-group {
  margin-bottom: 20px;
}

.card-back .form-group .form-style {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
}

.card-back .form-group .input-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.card-back .form-group .input-icon i {
  font-size: 20px;
  color: #ccc;
}

.card-back .form-group .input-icon:hover i {
  color: #000;
}

.card-back .form-group .input-icon:hover i:hover {
  color: #000;
}

.card-back .form-group .input-icon i:hover {
  color: #000;
}

.card-back .form-group .input-icon i:hover:hover {
  color: #000;
}

.text-danger {
  width: 100%;
  text-align: right;
}

.text-danger > span {
  color: var(--danger-color);
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

</style>

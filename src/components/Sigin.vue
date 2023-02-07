<template>
  <b-container fluid class="card_top">
    <b-col md="6" offset-md="3">
      <b-card bg-variant="light" class="text-center">
        <template #header>
          <small>Register</small>
        </template>
        <b-card-body>
          <b-form @submit.prevent="validateForm">
            <b-form-group>
              <b-form-input
                type="name"
                placeholder=" Enter First Name"
                aria-describedby="input-live-help input-live-feedback"
                :state="nameState"
                trim
                v-model="fname"
              ></b-form-input>
              <b-form-invalid-feedback
                id="input-live-feedback"
                v-if="firstNameError"
                >{{ firstNameError }}</b-form-invalid-feedback
              >
            </b-form-group>
            <b-form-group>
              <b-form-input
                type="name"
                placeholder=" Enter Last Name"
                aria-describedby="input-live-help input-live-feedback"
                :state="lnameState"
                trim
                v-model="lname"
              ></b-form-input>
              <b-form-invalid-feedback
                id="input-live-feedback"
                v-if="lastNameError"
                >{{ lastNameError }}</b-form-invalid-feedback
              >
            </b-form-group>
            <b-form-group>
              <b-form-input
                type="email"
                placeholder=" Enter Email"
                :state="EmailState"
                aria-describedby="input-live-help input-live-feedback"
                trim
                v-model="email"
              ></b-form-input>
              <b-form-invalid-feedback
                id="input-live-feedback"
                v-if="lastNameError"
                >{{ lastNameError }}</b-form-invalid-feedback
              >
            </b-form-group>
            <b-form-group>
              <b-form-input
                type="password"
                placeholder=" Enter Password"
                v-model="password"
                :state="pasState"
                aria-describedby="input-live-help input-live-feedback"
                trim
              ></b-form-input>
              <b-form-invalid-feedback
                id="input-live-feedback"
                v-if="errorMessage"
              >
                <p>{{ errorMessage }}</p>
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group>
              <b-form-input
                :state="CpasState"
                type="password"
                placeholder=" Enter Confrim Password"
                aria-describedby="input-live-help input-live-feedback"
                trim
                v-model="confirm_password"
              ></b-form-input>
              <b-form-invalid-feedback id="input-live-feedback" v-if="Message">
                <p>{{ Message }}</p>
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group>
              <b-form-file id="file-default" v-mode="photo"></b-form-file>
            </b-form-group>
            <b-form-group>
              <b-button variant="primary" block type="submit">Sign Up</b-button>
            </b-form-group>
          </b-form>
        </b-card-body>
      </b-card>
    </b-col>
  </b-container>
</template>
<script>
export default {
  computed: {
    pasState() {
      return this.password.length > 9 ? true : false;
    },
    nameState() {
      return this.fname.length > 3 ? true : false;
    },
    lnameState() {
      return this.lname.length > 3 ? true : false;
    },
    EmailState() {
      return this.email ? true : false;
    },
    CpasState() {
      return this.confirm_password !== "" &&
        this.password === this.confirm_password
        ? true
        : false;
    }
  },
  data() {
    return {
      confirm_password: "",
      password: "",
      fname: "",
      email: "",
      lname: "",
      photo: "",
      errorEmail: "",
      errorMessage: "",
      Message: "",
      isemailValid: false,
      isPasswordValid: false,
      firstNameError: "",
      lastNameError: ""
    };
  },
  methods: {
    validateForm() {
      this.firstNameError = this.fname
        ? ""
        : "firstName must have at least 3 character";

      this.lastNameError = this.lastName
        ? ""
        : "lastName must have at least 3 character";

      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(this.email.trim())) {
        this.errorEmail = "Please Enter Email";
        this.isemailValid = false;
      } else {
        this.errorEmail = "";
        this.isemailValid = true;
      }
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

      if (!passwordRegex.test(this.password)) {
        this.errorMessage =
          "Password  at least 9 characters, including uppercase, lowercase and numbers.";
        this.isPasswordValid = false;
      } else {
        this.errorMessage = "";
        this.isPasswordValid = true;
      }
      if (this.confirm_password) {
        this.Message = "Password is not matching!! Try Again";
      } else {
        this.Message = "";
      }
      console.log(
        this.lname,
        this.fname,
        this.email,
        this.password,
        this.confirm_password
      );
      this.$router.push("./login");
    }
  }
};
</script>

<style>
.card_top {
  margin-top: 4rem;
}
</style>

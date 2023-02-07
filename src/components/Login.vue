<template>
  <b-container fluid class="card_top">
    <b-row>
      <b-col md="6" offset-md="3">
        <b-card
          class="text-center"
          bg-variant="light"
          header="Sign in to your account"
        >
          <b-card-body>
            <b-form @submit.prevent="validateForm">
              <b-form-group>
                <b-form-input
                  type="email"
                  placeholder="Please Enter Email"
                  :state="EmailState"
                  aria-describedby="input-live-help input-live-feedback"
                  trim
                  v-model="email"
                ></b-form-input>
                <b-form-invalid-feedback
                  id="input-live-feedback"
                  v-if="errorEmail"
                >
                  <p>{{ errorEmail }}</p>
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group>
                <b-form-input
                  type="password"
                  placeholder="Please Enter Password"
                  :state="nameState"
                  aria-describedby="input-live-help input-live-feedback"
                  trim
                  v-model="password"
                ></b-form-input>
                <b-form-invalid-feedback
                  id="input-live-feedback"
                  v-if="errorMessage"
                >
                  <p>{{ errorMessage }}</p>
                </b-form-invalid-feedback>
              </b-form-group>

              <b-form-group>
                <b-button variant="primary" block type="submit"
                  >Sign In</b-button
                >
              </b-form-group>
              <hr />
              <p>Or sign in with</p>
              <b-form-group>
                <b-button block
                  ><b-icon animation="fade" icon="google"></b-icon
                  >Google</b-button
                >
              </b-form-group>
              <b-form-group>
                <b-button block @click="onSigninFacebook"
                  ><b-icon animation="fade" icon="facebook"></b-icon>
                  Facebook</b-button
                >
              </b-form-group>
            </b-form>
            <div>
              <span>
                New User?
                <router-link to="/sigin" class="card-link"
                  >Register</router-link
                >
              </span>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  computed: {
    nameState() {
      return this.password.length > 9 ? true : false;
    },
    EmailState() {
      return this.email ? true : false;
    }
  },
  data() {
    return {
      user: "",

      email: "",

      password: "",
      errorEmail: "",
      errorMessage: "",
      isemailValid: false,
      isPasswordValid: false
    };
  },
  methods: {
    validateForm() {
      // Validate name

      
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

      console.log(this.email, this.password);
    },

    async onSigninFacebook() {}
  }
};
</script>
<style>
.card_top {
  margin-top: 5rem;
}

.btn {
  text-align: center;
}
</style>

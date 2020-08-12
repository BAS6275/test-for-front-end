<template>
  <div id="testFormAndValidation">
    <!-- form -->
    <div class="d-flex justify-center">
      <v-form class="setWidth ">
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="20"
          label="Name"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="lastName"
          :error-messages="lastNameErrors"
          :counter="20"
          label="Last Name"
          required
          @input="$v.lastName.$touch()"
          @blur="$v.lastName.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <!-- password  -->
        <v-text-field
          v-model="password"
          :type="'password'"
          :error-messages="passwordErrors"
          label="Password"
          required
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        ></v-text-field>

        <v-text-field
          v-model="repeatPassword"
          :type="'password'"
          :error-messages="repeatPasswordErrors"
          label="Comfirm Password"
          required
          @input="$v.repeatPassword.$touch()"
          @blur="$v.repeatPassword.$touch()"
        ></v-text-field>

        <v-select
          v-model="select"
          :items="items"
          :error-messages="selectErrors"
          label="Gender"
          required
          @change="$v.select.$touch()"
          @blur="$v.select.$touch()"
        ></v-select>

        <v-btn class="mr-4" @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
        <div class=" mt-8 mb-10" v-if="submitForm">
          <ul for="submit">
            <li><h2>Result</h2></li>
            <li><span>Name: </span>{{ name }}</li>
            <li><span>Lastname: </span>{{ lastName }}</li>
            <li><span>email: </span>{{ email }}</li>
            <li><span>Gender: </span>{{ select }}</li>
          </ul>
        </div>
      </v-form>
    </div>
  </div>
</template>
//
--------------------------------------------------------------------------------------------

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  minLength,
  sameAs,
  email,
} from "vuelidate/lib/validators";

export default {
  name: "testFormAndValidation",
  components: {},
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(20) },
    lastName: { required, maxLength: maxLength(20) },
    email: { required, email },
    password: { required, minLength: minLength(8) },
    repeatPassword: {
      sameAsPassword: sameAs("password"),
      required,
      minLength: minLength(8),
    },
    select: { required },
  },
  data: () => ({
    //
    name: "",
    lastName: "",
    email: "",
    select: null,
    items: ["Male", "Female"],
    password: "",
    repeatPassword: "",
    submitForm: false,
  }),

  computed: {
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 20 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.lastName.$dirty) return errors;
      !this.$v.lastName.maxLength &&
        errors.push("Last Name must be at most 20 characters long");
      !this.$v.lastName.required && errors.push("Last Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Password must be at less 8 characters long");
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
    repeatPasswordErrors() {
      const errors = [];
      if (!this.$v.repeatPassword.$dirty) return errors;
      !this.$v.repeatPassword.minLength &&
        errors.push("Password must be at less 8 characters long");
      !this.$v.repeatPassword.required &&
        errors.push("Confirm Password is required.");
      !this.$v.repeatPassword.sameAsPassword &&
        errors.push("Passwords must be identical.");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      this.checkForm();     
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.lastName = "";
      this.email = "";
      this.select = null;      
      this.password = "";
      this.repeatPassword = "";
      this.submitForm = false;
    },
    checkForm() {
      if (
        this.name &&
        this.lastName &&
        this.email &&
        this.select &&
        this.password &&
        this.repeatPassword         
      ) {
        return this.submitForm = true;
      }
    },
  },
};
</script>

<style>
ul {
  list-style-type: none;
}
.setWidth {
  width: 500px;
}
</style>

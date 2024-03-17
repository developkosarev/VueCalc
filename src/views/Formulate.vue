<template>
  <div class="container">
    <h1>Formulate</h1>

    <!--
    <FormulateForm
      :errors="{
        username: 'That username is already taken',
        password: [
          'You can’t re-use an old password',
          'That password was too weak'
        ]        
      }"
      :form-errors="[
        'Sorry, an unexpected error occurred. Please try again soon.'
      ]"      
    >
      <FormulateInput name="username" label="Select a username" type="text" />
      <FormulateInput
        name="password"
        label="Choose your password"
        type="password"
      />
      <FormulateErrors />
      <FormulateInput type="submit" label="Submit Order" />
    </FormulateForm>
    -->

    <FormulateForm
      name="login"
      v-model="formValues"
      :form-errors="formErrors"
      :errors="inputErrors"
      #default="{ isLoading, hasErrors }"
      @submit="loginPromise"
      v-on:failed-validation="failedValidation"
      v-on:submit-raw="submitRaw"
    >
      <FormulateInput type="text" name="email" validation="required" />
      <FormulateInput type="text" name="password" validation="required" />

      <FormulateInput name="address" autocomplete="shipping address-line1" />
      <FormulateInput name="apartment" autocomplete="shipping address-line2" />
      <FormulateInput name="city" autocomplete="shipping address-level2" />
      <FormulateInput name="state" autocomplete="shipping address-level1" />
      <FormulateInput name="country" autocomplete="shipping country" />

      <FormulateErrors />
      <FormulateInput type="submit" :disabled="hasErrors" />
      <FormulateInput type="button" label="Reset" data-ghost @click="reset" />
      <pre class="code" v-text="formValues" />
      <pre class="code" v-text="formErrors" />
      <pre class="code" v-text="inputErrors" />
      <div>
        hasErrors:
        <pre class="code" v-text="hasErrors" />
      </div>
      <div>
        isLoading:
        <pre class="code" v-text="isLoading" />
      </div>
    </FormulateForm>

    <button @click="click">Validate</button>
  </div>
</template>

<script>
export default {
  name: "Formulate",
  data() {
    return {
      formValues: {},
      formErrors: [],
      inputErrors: {}
    };
  },
  methods: {
    loginPromise() {
      console.log("4. Start submit promise");
      return new Promise(resolve => {
        setTimeout(() => resolve("Done"), 3000);
      });
    },
    async loginAsync() {
      console.log("4. Start submit async");
      try {
        let promise = new Promise(resolve => {
          setTimeout(() => resolve("Done"), 3000);
        });
        let result = await promise; // будет ждать, пока промис не выполнится (*)

        alert(result);

        //setTimeout(() => console.log(111111), 3000);

        //const res = await this.$axios.post('/login')
        //this.$cookie.setToken(res.data.token) // do some auth
      } catch (err) {
        // here's where things get nasty
        //if (err.response && err.response.status) {
        //  switch (err.response.status) {
        //    case 422:
        //      this.inputErrors = err.response.data.errors // assign field errors
        //      this.formErrors = err.response.data.message
        //      return
        //    case 401:
        //      this.$cookie.removeToken()
        //      return
        //    // ... add lots more cases of bad things that can happen here
        //  }
        //}
        //this.formErrors = ['Sorry, an unexpected error occurred. Please try again soon..']
      }
    },
    submitRaw() {
      console.log("2. Submit Raw");
    },
    failedValidation() {
      console.log("3. Error Validation");
    },
    reset() {
      this.$formulate.reset("login");
    },
    click() {
      console.log("1. Click");
      this.$formulate.submit("login");
    }
  }
};
</script>
